// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter ther title of your project"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a brief description for your project"
        },
        {
            type: "input",
            name: "functionality",
            message: "Enter the details describing what your project is used for"
        },
        {
            type: "input",
            name: "installation",
            message: "describe the installation process of your application"
        },
        {
            type: "input",
            name: "usage",
            message: "What is your application used for?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for your application",
            choices: [
                "apache",
                "GNU",
                "Mozilla",
                "mit",
                "no license"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed to this application?"
        },
        {
            type: "input",
            name: "tests",
            message: "Enter any instructions for testing this application"
        },
        {
            type: "input",
            name: "gitHub",
            message: "Enter your GitHib username"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address for people to contact you"
        },
        {
            type: "input",
            name: "url",
            message: "Enter the URL for the live site",
          },

    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return questions();
}

// Function call to initialize app
init()
.then(answers =>{
    return generateMarkdown(answers);
})
.then(readmeData => {
    return writeToFile(readmeData);
})
.catch(err =>{
    console.log(err);
})
