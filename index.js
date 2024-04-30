// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Project Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Project description:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage information:",
        name: "usage",
    },
    {
        type: "list",
        message: "Select a license:",
        name: "license",
        choices: ["Apache", "Eclipse", "IBM", "MIT", "Mozilla", "Zlib", "None"]
    },
    {
        type: "input",
        message: "Contribution guidelines:",
        name: "contributing",
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "tests",
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "email",
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    // const content = JSON.stringify(data, null, '\t');
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, function(err) {
        console.log(err ? err : "README Written Successfully!");
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        const fileName = "dist/README.md";
        writeToFile(fileName, data);
    });
}




// Function call to initialize app
init();