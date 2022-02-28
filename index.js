const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
// const Engineer = require("./lib/Engineer.js");
// const Intern = require("./lib/Intern.js");

console.log("hello");

// const roles = ["Manager", "Engineer", "Intern", "Finish Building application"];

// if (answers.role === "manager") {
//   const manager = new Manager(answers.name, answers.id, inswers.officeNumber);
// }

// employees = [];

fs.writeFile("./dist/index.js", "hello", function (err, result) {
  if (err) {
    console.log("There was an error");
  }
});
