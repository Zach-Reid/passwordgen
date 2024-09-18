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

function generatecustom(length, charscustom) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charscustom.length);
        password += charscustom[randomIndex];
    }
    return password;
}




//help command
if (arguments.includes("help") || arguments.includes("-help") || arguments.includes("--help")) {
    console.log(`
    Features:
    
    help, -help, --help: Show the commands and what they do.
    pass, -pass, --pass: Begin password generation.
    custom, -custom, --custom: Begin password generation with the option to include special characters.
    
    
    `) }
//The question, if you choose pass
else if (arguments.includes("pass") || arguments.includes("-pass") || arguments.includes("--pass")) {
    rl.question('Enter the number of characters that you would like to generate (or type "default" for 8): ', (input) => {
        let length;

        //If it's default, make it the default down here
        if (input.toLowerCase() === "default") {
            length = 8;
        } else {
        
        length = parseInt(input, 10);
        }


        
        //not a number or negative checker
        if (isNaN(length) || length <= 0) {
            console.log('Invalid input. Please use a positive number.');
        
        } else {
            const password = generatepassword(length); 
            console.log(`${password}`);
        }
    })}



//This is where the custom goes.

else if (arguments.includes("custom") || arguments.includes("-custom") || arguments.includes("--custom")) {

    let charscustom = 'abcdefghijklmnopqrstuvwxyz'

//First up...percase- Yeah this is where the uppercase letter question goes 

rl.question('Do you want to add uppercase letters to the generation? Type "yes" if so: ', (answer) => {
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
        charscustom += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    //Next, numbers. Type yes to get them
    rl.question('Do you want to add numbers to the generation? Type "yes" if so: ', (answer) => {
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            charscustom += '1234567890';
        }
        //Symbols are here, typing "yes" makes them add on
            rl.question('Do you want to add symbols to the generation? Type "yes" if so: ', (answer) => {
                if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
                    charscustom += '!@#$%^&*(){}[]|:;,.<>?+-_=';
                }

                rl.question('Enter the number of characters that you would like to generate (or type "default" for 8): ', (input) => {
                    let length;

                    //Once again, the default checker
                    if (input.toLowerCase() === "default") {
                        length = 8;
                    } else {
                    
                    length = parseInt(input, 10);
                    }


                    //not a number or negative checker, remastered
                    if (isNaN(length) || length <= 0) {
                        console.log('Invalid input. Please use a positive number.');
                    
                    } else {
                        const password = generatecustom(length, charscustom); 
                        console.log(`${password}`);
                    }
                });
            });
        });
    });
}






    
//For when the typing didn't work out
else {
    console.log("Invalid input. Use `--help` for a list of commands.");
}
