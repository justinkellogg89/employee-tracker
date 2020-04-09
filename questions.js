module.exports = {
  addDepartment: [
    {
      type: "input",
      message: "What is the name of the department?",
      name: "department",
    },
  ],
  addRole: [
    {
      type: "input",
      message: "What is the name of the role?",
      name: "role",
    },
    {
      type: "input",
      message: "What is the salary for this role?",
      name: "salary",
    },
    {
      type: "input",
      message: "What is the department id? 1 for Sales, 2 for HR, or 3 for IT",
      name: "dep_id",
    },
  ],
  addEmployee: [
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "fname",
    },
    {
      type: "input",
      message: "What is the employee's last name?",
      name: "lname",
    },
    {
      type: "input",
      message:
        "What is the employee's role id (Number Only)? 1 (Help Desk Tech) 2 (Senior Help Desk Tech) 3 (HR Counselor) 4 (HR Manager) 5 (HR Director) 6 (Sales Rep) 7 (Sales Manager) 8 (Sales Director)",
      name: "roleid",
    },
  ],
};
