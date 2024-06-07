const { Pool } = require('pg')

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'loonaSt4n',
    port:'2345',
    database:'goodread_bookstore',

})

module.exports = {
    pool,
}