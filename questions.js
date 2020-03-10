var inquirer = require("inquirer");

module.exports = {
      addDepartment: [
        {
          type: "input",
          message: "What is the name of the department?",
          name: "department"
        }
      ],
      addRole: [
        {
          type: "input",
          message: "What is the name of the role?",
          name: "role"
        },
        {
            type:"input",
            message: "What is the salary for this role?",
            name: "salary"
        },
        {
            type:"input",
            message: "What is the department id?",
            name: "dep_id"
        }
      ],
      addEmployee: [
        {
          type: "input",
          message: "What is the employee's first name?",
          name: "fname"
        },
        {
          type: "input",
          message: "What is the employee's last name?",
          name: "lname"
        },
        {
          type: "input",
          message: "What is the employee's role id?",
          name: "roleid"
        },
        {
          type: "input",
          message: "What is the employee's manager id?",
          name: "managerid"
        }
      ]
    };