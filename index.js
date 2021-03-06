// Pulling in necessary Friday
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Declaring array that employee cards will be pushed to
const employeesCardsArr = [];

// Function that will take an employee object and render an html card for that employee, using their own renderCard function
createEmployeeCard = (role) => {
  employeeCard = role.renderCard();
  // Pushing the employee card to the employeesCardsArr
  employeesCardsArr.push(employeeCard);
};

// Declaring the prompt sequence for the engineer role
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
    ]) // Pass the answers in to create a new Engineer object based on the user input
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      // Calling the createEmployeeCard function and passing in the engineer object
      createEmployeeCard(engineer);
      // Calling the addAnotherEmployeePrompt which will allow the user to choose to add another employee, or to finish building their team
      addAnotherEmployeePrompt();
    });
};

// Intern prompt follows the same structure and functionality as the engineer prompt above
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

      createEmployeeCard(intern);
      addAnotherEmployeePrompt();
    });
};

// Declaring the addAnotherEmployeePrompt, which allows the user to choose to add another employee, or to finish building their team
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
      // Checking the answer to the add another employee prompt, then responding with the necessary prompt function
      if (answers.addAnotherEmployee == "Add an Engineer") {
        engineerPrompt();
      } else if (answers.addAnotherEmployee == "Add an Intern") {
        internPrompt();
      } else {
        console.log("You chose to finish building your team profile!");
        // If the user chose to finish building their team, the employee cards are joined with no separating character, so that they can then be placed into the html
        const stringCards = employeesCardsArr.join("");

        // Creating the index file using template literals
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
        </head>
        <body>
          <header class="text-center p-1">
            <img src="logo.png" class="logo" alt="Team Profile">
          </header>
          <main class="d-flex flex-wrap justify-content-center container w-100">
        ${stringCards}
        </main>
        </body>
        </html> `;
        // Writing the file with the html variable
        fs.writeFile("./dist/index.html", html, function (err, result) {
          if (err) {
            console.log("There was an error writing the file!");
          }
          // If no errors are returned, a message displays letting the user know the file has been generated
          console.log("Your profile has been generated!");
        });
      }
    });
};

// The initial prompt that runs when the user starts the script, asks for manager details
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
    // Creating a new Manager object based on the user input
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );

    createEmployeeCard(manager);
    // Calling the add another employee prompt to allow the user to continue building their team, or choose to finish
    addAnotherEmployeePrompt();
  });
