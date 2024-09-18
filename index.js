#!/usr/bin/env node
//readline and process additions
const readline = require('readline');

const process = require('node:process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const arguments= process.argv.slice(2);

//npx passgen is the base commend to run, btw

//Function for the password generator
function generatepassword(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}






//help command
if (arguments.includes("help") || arguments.includes("-help") || arguments.includes("--help")) {
    console.log(`
    Features:
    
    help, -help, --help: Show the commands and what they do.
    pass, -pass, --pass: Begin password generation.
    
    
    `) }

else if (arguments.includes("pass") || arguments.includes("-pass") || arguments.includes("--pass")) {
    rl.question('Enter the number of characters that you would like to generate: ', (input) => {
        const length = parseInt(input, 10);
        //not a number or negative checker
        if (isNaN(length) || length <= 0) {
            console.log('Invalid input. Please use a positive number.');
        
        } else {
            const password = generatepassword(length); 
            console.log(`${password}`);
        }
    })}



    
//For when the typing didn't work out
else {
    console.log("Invalid input. Use `--help` for a list of commands.");
}
