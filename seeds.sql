use kibygg1pfej0wjii;

INSERT INTO department (name)
VALUES  ("Sales"),
        ("HR"),
        ("IT");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Help Desk Technician", 45000, 3),
        ("Senior Help Desk Technician", 70000, 3),
        ("HR Counselor", 70000, 2),
        ("HR Manager", 90000, 2),
        ("HR Director", 110000, 2),
        ("Sales Rep", 65000, 1),
        ("Sales Supervisor", 80000, 1),
        ("Sales Director", 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Jones", 1, 2),
        ("Michael", "Perez", 1, 2),
        ("John", "Doe", 2, NULL),
        ("Mike", "Smith", 3, 4),
        ("Jane", "Doe", 4, 5),
        ("Karen", "Johnson", 5, NULL),
        ("Drew", "Wilson", 6, 7),
        ("David", "Rodriguez", 7, 8),
        ("Edward", "Gomez", 8, NULL);
        