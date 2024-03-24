#! /usr/bin/env node


import inquirer from "inquirer";


// Computer will generate random number
// user will input the number
// compare user's inputted number and computer's generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1); 
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type:"number",
        message:"Please guess a number between 1 - 10: ",
    }

]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed right number. ")
} else {
    console.log("You guessed the wrong number")
}