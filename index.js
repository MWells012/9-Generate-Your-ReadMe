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
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "Description",
            message: "Write a brief description for your project"
        },
//        {
//            type: "input",
//            name: "contents",
//            message: "Enter a table of contents for your project"
//        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any:"
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
            message: "Enter any instructions for testing this application:"
        },
        {
            type: "input",
            name: "gitHub",
            message: "Please Enter your GitHib username:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email:"
        },
        {
            type: "input",
            name: "url",
            message: "Enter the URL for the live site",
          },

    ]);
}

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
});
