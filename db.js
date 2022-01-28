const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: process.env.password,
    database: 'passport-psql'
});
module.exports = pool;