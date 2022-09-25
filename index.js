// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "Description",
            message: "Write a brief description for your project:"
        },
        {
            type: "input",
            name: "Installation",
            message: "Describe the installation process if any:"
        },
        {
            type: "input",
            name: "Usage",
            message: "What is this project used for?"
        },
        {
            type: "list",
            name: "License",
            message: "Choose a license for your application",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "Mozilla",
                "MIT",
                "Open"
            ]
        },
        {
            type: "input",
            name: "Contributors",
            message: "Who contributed to this application?"
        },
        {
            type: "input",
            name: "Tests",
            message: "Enter any instructions for testing this application:"
        },
        {
            type: "input",
            name: "Questions",
            message: "What do I do if I have an issue?:"
        },
        {
            type: "input",
            name: "Username",
            message: "Please Enter your GitHib username:"
        },
        {
            type: "input",
            name: "Email",
            message: "Please enter your email:"
        },

    ]);
};

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) =>{
    fs.writeFile( 'README.md', data, err =>{
            if(err){
                reject (err);
                return;
            }
                resolve({
                ok: true,
                message: console.log("README successfully created!")
            });
        })

    })
};

// TODO: Create a function to initialize app
const init =() => {
    return questions();
};

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
});
