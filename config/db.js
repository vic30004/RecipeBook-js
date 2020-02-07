const { Client } = require('pg');
const config = require('config');
const host = config.get('pghost');
const user = config.get('pguser');
const password = config.get('pgpassword');
const port = config.get('pgport');
const db = config.get('pgdb');

const client = new Client({
  host: host,
  user: user,
  password: password,
  port: port,
  database: db
});



module.exports = client;
