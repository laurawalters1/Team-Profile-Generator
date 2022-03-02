const fs = require("fs");
const inquirer = require("inquirer");
// const prompt = require("prompt");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const managerCard = require("./lib/managerCard.js");

console.log("hello");

const employeesArr = [];
const employeesCardsArr = [];

function formatIndex() {
  return employeesCardsArr;
}

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
      //   employeesArr.push(engineer);
      const engineerCard = engineer.renderCard();
      employeesCardsArr.push(engineerCard);
      //   console.log(employeesArr);
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
      //   employeesArr.push(intern);
      const internCard = intern.renderCard();
      employeesCardsArr.push(internCard);
      //   console.log(employeesArr);
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
        const concatCards = employeesCardsArr.join("");
        const stringCards = concatCards.toString();

        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
        </head>
        <body>
          <header class="text-center p-5">
            <h1>Team Profile</h1>
          </header>
          <main class="d-flex justify-content-center w-100">
        ${stringCards}
        </main>
        </body>
        </html> `;

        fs.writeFile("./dist/index.html", html, function (err, result) {
          if (err) {
            console.log("There was an error writing the file!");
          }
          formatIndex();
        });
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
    const managerCard = manager.renderCard();
    employeesCardsArr.push(managerCard);
    // employeesArr.push(manager);
    // console.log(employeesArr);

    addAnotherEmployeePrompt();
  });
