const fs = require("fs");
const inquirer = require("inquirer");
// const prompt = require("prompt");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const managerCard = require("./lib/managerCard.js");

console.log("hello");

// const roles = ["Manager", "Engineer", "Intern", "Finish Building application"];

// if (answers.role === "manager") {
//   const manager = new Manager(answers.name, answers.id, inswers.officeNumber);
// }

const employeesArr = [];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

engineerPrompt = () => {
  inquirer
    .prompt([
      {
        name: "engineerName",
        message: "Please provide this employees name",
      },
      {
        name: "engineerId",
        message: "Please provide this employees ID",
      },
      {
        name: "engineerEmail",
        message: "Please provide this employees email address",
      },
      {
        name: "engineerGithub",
        message: "Please provide this employees Github username",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      employeesArr.push(engineer);
      console.log(employeesArr);
      addAnotherEmployeePrompt();
    });
};

internPrompt = () => {
  inquirer
    .prompt([
      {
        name: "internName",
        message: "Please provide this employees name",
      },
      {
        name: "internId",
        message: "Please provide this employees ID",
      },
      {
        name: "internEmail",
        message: "Please provide this employees email address",
      },
      {
        name: "internSchool",
        message: "Please provide this employees school",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      employeesArr.push(intern);
      console.log(employeesArr);
      addAnotherEmployeePrompt();
    });
};
addAnotherEmployeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addAnotherEmployee",
        message:
          "Please choose if you would like to add an Engineer or Intern, or if you have finished building your team profile",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish building my team profile",
        ],
      },
    ])
    .then((answers) => {
      if (answers.addAnotherEmployee == "Add an Engineer") {
        engineerPrompt();
      } else if (answers.addAnotherEmployee == "Add an Intern") {
        internPrompt();
      } else {
        console.log("You chose to finish building your team profile!");
      }
    });
};

inquirer
  .prompt([
    {
      name: "managerName",
      message: "Please provide the team managers name",
    },
    {
      name: "managerId",
      message: "Please provide the team managers employee id",
    },
    {
      name: "managerEmail",
      message: "Please provide the team managers email address",
    },
    {
      name: "managerOfficeNumber",
      message: "Please provide the team managers office number",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    employeesArr.push(manager);
    console.log(employeesArr);

    addAnotherEmployeePrompt();
  });
