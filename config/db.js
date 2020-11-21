const { Pool, Client } = require('pg');
const config = require('config');
const host = config.get('pghost');
const user = config.get('pguser');
const password = config.get('pgpassword');
const port = config.get('pgport');
const devHost = config.get('pghostDev');
const db = config.get('pgdb');

const pool = new Pool({
  host: devHost,
  user: user,
  password: password,
  port: port,
  database: db,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
