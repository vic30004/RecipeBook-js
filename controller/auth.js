const client = require('../config/db');

exports.register = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let date = Date.now();  
  client.query(
    'SELECT username FROM users WHERE username=$1',
    [username],
    (err, user) => {
      if (err) {
        throw err;
      }
      if (res) {
        res.send({user: user.rows });
        console.log(user.rows)
      } else {
        client.query(
          'INSERT into users(username,passowrd,date_jpoined) VALUES($1,$2,$3)',
          [username, password,date],
          (err, user) => {
            if (err) {
              throw err;
            } else {
              res.send({ message: 'Success', user: user });
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
