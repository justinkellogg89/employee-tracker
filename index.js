const inquirer = require("inquirer");
const mysql = require("mysql");
const questions = require("./questions");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  runActions();
});

function runActions() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "QUIT",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "View Departments":
          viewDepartments();
          break;

        case "View Roles":
          viewRoles();
          break;

        case "View Employees":
          viewEmployees();
          break;

        case "QUIT":
          quitActions();
          break;
      }
    });
}

function addDepartment() {
  inquirer.prompt(questions.addDepartment).then(function (answer) {
    connection.query(
      "INSERT INTO department SET ?",
      {
        name: answer.department,
      },
      function (err) {
        if (err) throw err;
        console.log("Your department was added.");
        runActions();
      }
    );
  });
}

function addRole() {
  if (err) throw err;
  inquirer.prompt(questions.addRole).then(function (res) {
    connection.query(
      "INSERT INTO roles SET ?",
      {
        title: res.role,
        salary: res.salary,
        department_id: res.dep_id,
      },
      function (err) {
        if (err) throw err;
        console.log("Your role was added.");

        runActions();
      }
    );
  });
}

function addEmployee() {
  inquirer.prompt(questions.addEmployee).then(function (res) {
    connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: res.fname,
        last_name: res.lname,
        role_id: res.roleid,
      },
      function (err) {
        if (err) throw err;
        console.log("Your employee was added.");

        runActions();
      }
    );
  });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    runActions();
  });
}

function viewRoles() {
  connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.table(res);
    runActions();
  });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    runActions();
  });
}

function quitActions() {
  process.exit();
}
