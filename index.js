var inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

const questions = [
    {
        // Name
        type: 'input',
        name: 'name',
        message: 'What is the manager name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        // Employee ID
        type: 'input',
        name: 'id',
        message: 'What is the manager id?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        // Email Address
        type: 'input',
        name: 'email',
        message: 'What is the manager email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        // Office Number
        type: 'input',
        name: 'office',
        message: 'What is the manager office number?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("index.html", generateHTML(data));
    })
};

// Function call to initialize app
init();