const client = require('../config/db');
const bcrypt = require('bcrypt');

const checkPass = async(pass1,pass2)=>{
    return await bcrypt.compare(pass1,pass2)
}

exports.register = async (req, res) => {
  const salt = 10;
  let username = req.body.username.toLowerCase();
  let password = req.body.password;

  let hashed = await bcrypt.hash(password, salt);

  // TODO HASH PASSWORD

  client.query(
    'SELECT username FROM users WHERE username=$1',
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
          'INSERT into users(username,password) VALUES($1,$2)',
          [username, hashed],
          (err, user) => {
            if (err) {
              throw err;
            } else {
              res.status(200).send({ message: 'Success,user registered' });
            }
          }
        );
      }
    }
  );
};

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

exports.getSingleUser = (req, res) => {
  let username = req.body.username.toLowerCase();
  let password = req.body.password;
  let queryStrin = 'SELECT * FROM users WHERE username=$1 ';
  let values = [username];
  console.log(username);

  try {
    client.query(queryStrin, values, async(err, user) => {
      if (err) {
        throw err;
      } else {
        let data = user.rows;
        data.forEach(async data=>{
            let pass = await checkPass(password,data.password)
            if(pass){
            res.status(200).send({ message: 'success', user: data });
        }
        else{
            res.status(400).send({message:"Invalid Credentials"})
        }
        })
        
        
        
      }
    });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
