const client = require('../config/db');
const bcrypt = require('bcrypt');
const asyncHandler = require('../middleware/async')
const jwt = require('jsonwebtoken');

// check entered password vs hashed password
const checkPass = async (pass1, pass2) => {
  return await bcrypt.compare(pass1, pass2);
};

// Create JWT
const getSignedJwtToken = id => {
  return jwt.sign({ id: id }, 'dasdfc', {
    expiresIn: '1h'
  });
};

// Retrieve JWT using user ID
const sendTokenResponse = (statusCode, id, res) => {
  console.log(id,'From jwt')
  const token = getSignedJwtToken(id);
  const options = {
    expires: new Date(Date.now() + 3110400000),
    httpOnly: true
  };

  options.secure = true;
  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
};

// @route POST api/register
// @des   Register a user
// @acess Public

exports.register = async (req, res) => {
  const {firstName,lastName,email}=req.body
  const salt = 10;
  let first= upperFirstChar(firstName);
  let username = req.body.username.toLowerCase();
  let password = req.body.password;

  let hashed = await bcrypt.hash(password, salt);

  // TODO HASH PASSWORD

  client.query(
    'SELECT user_name FROM users WHERE user_name=$1',
    [username],
    (err, user) => {
      if (err) {
        throw err;
      }
      if (!user.rows.length <= 0) {
        res.send({ user: user.rows, message: 'user exists' });
      } else if (password.length < 6) {
        res
          .status(400)
          .send({ message: 'Password must contain more than 6 characters.' });
      } else {
   

        client.query(
          'INSERT into users(user_name,first_name,last_name,email,password) VALUES($1,$2,$3,$4,$5) RETURNING *' ,
          [username,first,lastName,email, hashed],
          (err, user) => {
           
            if (err) {
              throw err;
            } else {
                sendTokenResponse(200, user.rows[0].user_id, res);
              
            }
          }
        );
      }
    }
  );
};

// @Route   GET api/register
// @Des     Get all users
// @acess   public

exports.getUsers = (req, res) => {
  try {
    client.query('SELECT * FROM users').then(users => {
      if (users.rows.length > 0) {
        res.send({ users: users.rows });
      } else {
        res.send({ message: 'No users found!' });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

// @Route   GET api/register/user
// @Des     This will log in a user
// @acess   Private

exports.getSingleUser = (req, res) => {
  let username = req.body.username.toLowerCase();
  let password = req.body.password;
  let queryStrin = 'SELECT * FROM users WHERE user_name=$1 ';
  let values = [username];

  try {
    client.query(queryStrin, values, async (err, user) => {
      if (err) {
        throw err;
      } else {
        let data = user.rows;
        data.forEach(async data => {
          let pass = await checkPass(password, data.password);
          if (pass) {
            sendTokenResponse(200, data.user_id, res);
          } else {
            res.status(400).send({ message: 'Invalid Credentials' });
          }
        });
      }
    });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

exports.getUser = asyncHandler(async(req,res,next)=>{
  const id = jwt.verify(req.token, 'dasdfc', (err, authData) => {
    if (err) {
      res.sendStatus(403);
      console.log(err);
      return;
    } else {
      return authData.id;
    }
  });
  const query = 'SELECT user_id,user_name,first_name,last_name,email FROM Users where user_id =$1'
  const value = [id]
  try {
    client.query(query,value,async(err,user)=>{
      if(err){
       console.log(err.message)
      }else{
        res.status(200).json({sucess:true,data:user.rows})
      }
    })
  } catch (error) {
    res.status(403).send({message:error.message})
  }
})


function upperFirstChar(str){
  const upper = str.charAt(0).toUpperCase() + str.substring(1);
  return upper
  }