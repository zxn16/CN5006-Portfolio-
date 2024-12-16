// program that checks of the number is positive, negative or zero
// input from the user
const ps = require("prompt-sync");
const prompt = ps();

const number = parseInt(prompt("Enter a number"));

//check if the number is greater than 0
if (number > 0)
    {
        console.log("The number is positive");
    }


// check if number is 0
else if (number == 0)
{
    console.log("The number is zero");

}

//if the number is less than 0
else 
{
    console.log("The number is negative");
}
