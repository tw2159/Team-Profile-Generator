// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Team
const team = [];

// Template
const template = require("./src/template.js");

// Questions
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter the manager's name: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid name!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "managerID",
    message: "Enter the manager's ID: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid ID!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter the manager's e-mail: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid e-mail!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "Enter the manager's office number: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid office number!";
      }
      else {
        return true;
      }
    }
  }
];
const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter the engineer's name: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid name!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "engineerID",
    message: "Enter the engineer's ID: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid ID!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter the engineer's e-mail: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid e-mail!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Enter the engineer's GitHub username: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid GitHub username!";
      }
      else {
        return true;
      }
    }
  }
];
const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter the intern's name: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid name!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "internID",
    message: "Enter the intern's ID: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid ID!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter the intern's e-mail: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid e-mail!";
      }
      else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter the intern's school: ",
    validate: answer => {
      if(answer == "") {
        return "Please enter a valid school!";
      }
      else {
        return true;
      }
    }
  }
];
const teamQuestions = [
  {
    type: "list",
    name: "memberRole",
    message: "Select the role of the next team member: ",
    choices: [
      "Engineer",
      "Intern",
      "End (finished adding team members)"
    ]
  }
];

function init() {
  // Prompt the user to provide details about the manager
  function addManager() {
    inquirer
      .prompt(managerQuestions)
      .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        addTeam();
      });
  }

  // Prompt the user to provide details about the engineer
  function addEngineer() {
    inquirer
      .prompt(engineerQuestions)
      .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        addTeam();
      });
  }

  // Prompt the user to provide details about the intern
  function addIntern() {
    inquirer
      .prompt(internQuestions)
      .then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        team.push(intern);
        addTeam();
      });
  }

  // Prompt the user to select the next team member to add or quit the application
  function addTeam() {
    inquirer
      .prompt(teamQuestions)
      .then(answer => {
        switch(answer.memberRole) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            createPage();
        }
      });
  }

  function createPage() {
    // Create the dist directory if it doesn't exist
    if(!fs.existsSync("dist")) {
      fs.mkdirSync("dist");
    }

    // Create the index.html file in the dist directory
    fs.writeFileSync(path.join(__dirname, "dist", "index.html"), template(team));
  }

  addManager();
}

init();
