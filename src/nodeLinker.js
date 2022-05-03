var mysql = require('mysql');
const fs = require("fs");

var employeeNames = Object();
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Electro'
});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM electroemployees", function (err, result, fields) {
    if (err) throw err;
    var i = 0;
    Object.keys(result).forEach(function(key) {
      var row = result[key];
      employeeNames[i] = row.EmployeeName;
      console.log(employeeNames[i]);
      i++;
    console.log(result)
    return result;

    });
    var json = JSON.stringify(result);
    fs.writeFile('./hierarchyData.json',json, err => {
      if(err) throw err;
    });
    console.log(employeeNames);
    console.log(typeof(json));
    console.log(json);
  });
});
//}
//var nodeLinkerApp = express();
// nodeLinkerApp.get('/getemployee', (req,res) => {
//   let sql = "SELECT * FROM ElectroEmployees";
//   con.query(sql, (err, result) => {
//     if(err) throw err;
//     var i = 0;
//     Object.keys(result).forEach(function(key) {
//       var row = result[key];
//       employeeNames[i] = row.EmployeeName;
//       console.log(employeeNames[i]);
//       i++;
//     return employeeNames;
//     });
//   });
// });
//module.exports = nodeLinkerApp;
//}
//module.exports = nodeLinker;
//nodeLinker = express();
//}
// var nodeLinkerApp = express();
// nodeLinkerApp.get('/createdb', (req, res) => {
//   let sql = 'CREATE DATABASE electro';
//   db.query(sql, err => {
//     if(err) throw err;
//     res.send('Database created');
//   });
// });
// app.listen('3000', () => {
//   console.log("Server started on port 3000");
// })

// nodeLinkerApp.get('/createemployee', (req, res) => {
//   let sql = 'CREATE TABLE ElectroEmployees (EmployeeID, EmployeeName, Position, YWC, Department)';
//   db.query(sql, err => {
//     if(err) throw err;
//     res.send('Database created');
//   });
// });
// nodeLinkerApp.get('/employee', (req, res) => {
//   var sql = "INSERT INTO ElectroEmployees (EmployeeID, EmployeeName, Position, YWC, Department) VALUES ?";
//   var values = [
//     [1,'Robert Electro','CEO', 21, 'Administration'],
//     [2,'Janet Electro','CFO', 19, 'Administration'],
//     [3,'Gilbert Electro','Company Supervisor', 13, 'Administration'],
//     [4,'Eric Electro','West Department Manager', 8, 'Marketing'],
//     [5,'Isabella Electro','East Department Manager', 8, 'Marketing'],
//     [6,'Shania Electro','Worker', 5, 'Production'],
//     [7,'Ally Electro','Worker', 7, 'Production'],
//     [8,'Olivia Electro','Chief Engineer', 9, 'Production'],
//     [9,'Polly Electro','Worker', 3, 'Production'],
//     [10,'Bob Electro','Worker', 2, 'Production']
//   ];
//   db.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     res.send("Number of records inserted:" + result.affectedRows);
//   });
// });
// nodeLinkerApp.get('/getemployee', (req,res) => {
//   let sql = "SELECT * FROM ElectroEmployees";
//   db.query(sql, (err, results) => {
//     if(err) throw err;
//     var i = 0;
//     Object.keys(result).forEach(function(key) {
//       var row = result[key];
//       employeeNames[i] = row.EmployeeName;
//       console.log(employeeNames[i]);
//       i++;
//     return employeeNames;
//     });
//   });
// });
// }
// var mysql = require('mysql');
// var employeeNames = Array(10);
// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'Electro'
// });
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM electroemployees", function (err, result, fields) {
//     if (err) throw err;
//     var i = 0;
//     Object.keys(result).forEach(function(key) {
//       var row = result[key];
//       employeeNames[i] = row.EmployeeName;
//       console.log(employeeNames[i]);
//       i++;
//     });
//   });
// });
// console.log(typeof(fields));
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO ElectroEmployees (EmployeeID, EmployeeName, Position, YWC, Department) VALUES ?";
//   var values = [
//     [1,'Robert Electro','CEO', 21, 'Administration'],
//     [2,'Janet Electro','CFO', 19, 'Administration'],
//     [3,'Gilbert Electro','Company Supervisor', 13, 'Administration'],
//     [4,'Eric Electro','West Department Manager', 8, 'Marketing'],
//     [5,'Isabella Electro','East Department Manager', 8, 'Marketing'],
//     [6,'Shania Electro','Worker', 5, 'Production'],
//     [7,'Ally Electro','Worker', 7, 'Production'],
//     [8,'Olivia Electro','Chief Engineer', 9, 'Production'],
//     [9,'Polly Electro','Worker', 3, 'Production'],
//     [10,'Bob Electro','Worker', 2, 'Production']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

