const client = require('../config/db');
const bcrypt = require("bcrypt")

exports.register = async(req, res) => {
    const salt =10;
  let username = req.body.username;
  let password =await bcrypt.hash(req.body.password,salt);

// TODO HASH PASSWORD

  client.query(
    'SELECT username FROM users WHERE username=$1',
    [username],
    (err, user) => {
      if (err) {
        throw err;
      }
      if (!user.rows.length<=0) {
          console.log(user)
        res.send({user: user.rows,message:"user exists" });
        console.log(user.rows)
      } else {
        client.query(
          'INSERT into users(username,password) VALUES($1,$2)',
          [username,password],
          (err, user) => {
            if (err) {
              throw err;
            } else {
              res.send({ message: 'Success', user: user.rows });
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
