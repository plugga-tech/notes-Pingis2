const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "document_creator",
    password: "document_creator",
    database: "document_creator"
});

module.exports = connection;