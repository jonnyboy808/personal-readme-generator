const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type:'input',
        name:'title',
        message:'What should be the title of your project?',
    },
   
    {
        type:'input',
        name:'description',
        message:'Please enter a description of your project',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the installation steps?',
    },
    {
        type:'input',
        name:'usage',
        message:'What are the uses for this app?'
    },
    {
        type:'input',
        name:'contributing',
        message:'If there were any collaborators or contributors please enter them here.'
    },
    {
        type:'input',
        name:'test',
        message:'What are the methods this can be tested?',
    },
    {
        type:'input',
        name:'github',
        message:'What is your github username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?',
    },
    {
        type:
        name:
        message:
    },
 
]