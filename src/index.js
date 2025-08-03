"use strict";
//Create Employee objects
let employee1 = { fullName: ["Siyanda", "Mhlongo"], age: 25, department: "Software development", skills: ["Web development", "Mobile development"], isActive: true };
let employee2 = { fullName: ["Nicole", "Jackson"], age: 28, department: "Telecommunications", skills: ["Satelite communication", "Data analytics"], isActive: true };
let employee3 = { fullName: ["Thabang", "Mokoena"], age: 26, department: "Hardware manufacturing", skills: ["Electronics", "Networking", "Hardware engineering"], isActive: false };
//Function that logs employee details to the console
function logEmployee(employee) {
    return `---Employee Details---\
     Name: ${employee.fullName}\
     Age: ${employee.age}\
     Department: ${employee.department}\
     Skills: ${employee.skills}\
     Active: ${employee.isActive}\
    ------------------------`;
}
//Call the display function for 1st employee
console.log(logEmployee(employee1));
//Call the display function for 2nd employee
console.log(logEmployee(employee1));
//Call the display function for 3rd employee
console.log(logEmployee(employee1));
