const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "user1234",
  database: "movies",
});

module.exports = pool.promise();
