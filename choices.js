const inquirer = require("inquirer");
const cTable = require("console.table");

module.exports = function runSearch() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add Department", "Add Role", "Add Employee", "View Departments", "View Roles", "View Employees", "Update Employee Role"]
    })
    .then(function(answer) {
        switch(answer.action){
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

            case "Update Employee Role":
                updateEmployeeRole();
                break;
        }
    })
}