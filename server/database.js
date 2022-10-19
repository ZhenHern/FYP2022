const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Weimin123!',
    database: 'bakeryshop',
})
