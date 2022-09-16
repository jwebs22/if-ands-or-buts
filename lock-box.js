const prompt = require('prompt-sync')({sigint: true});

let pinCode = 1234;

let pass = Number(prompt("Enter your passcode: "));

if(pass === pinCode)
{
    console.log("Success!");
} else 
{
    console.log("Passcode Incorrect.");
}
