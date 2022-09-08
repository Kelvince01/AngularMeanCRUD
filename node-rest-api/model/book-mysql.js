var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
});
//database: "students_records",

// Connect to the server
connection.connect((err) => {
  if (err) {
    // Return error if present
    console.log("Error occurred", err);
  } else {
    // Create database
    console.log("Connected to MySQL Server");
    /*const query = "CREATE DATABASE students_records";
    connection.query(query, function (err, result) {
      if (err) {
        err;
      }
      console.log("New database created");
    });*/

    /*var sql =
      "CREATE TABLE students (id INT, name VARCHAR(255), course VARCHAR(255))";
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("New table created");
    });*/

    /*var sql =
      "INSERT INTO students (id, name, course) VALUES (1, 'John Doe', 'Computer Science')";

    // Just execute
    connection.query(sql);
    // Or execute with callback to handle results/errors
    connection.query(sql, function (err, result) {
      // ...
    });*/

    /*var sql = "SELECT * FROM students";
    connection.query(sql, function (err, result) {
      console.log(result);
    });*/

    /*var sql = "UPDATE students SET course = 'Art' WHERE id = 1";

    connection.query(sql, function (err, result) {
      console.log(result);
    });*/

    /*var sql = "DELETE FROM students WHERE id = 1";
    connection.query(sql, function (err, result) {
      console.log(result);
    });*/
  }
});
