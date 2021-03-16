/* An alert() displays five randomly-generated numbers. Then a 30-second timer starts, after which the user must insert the previous numbers via prompt(). At the end, the computer displays how many and which numbers were guessed correctly  */

// Creating 5 different numbers to show the user and to then store inside an array
var computerNumbers = [];

while (computerNumbers.length < 5) {
    var number = randomNumber(1, 1000);

    if (!isNumberInArray(number, computerNumbers)) {
        computerNumbers.push(number);
    }
}

alert(`Hello! Here are five random numbers: ${computerNumbers.join(" - ")}. Try to memorize them and please DO NOT copy them down, otherwise you would be cheating...`);

// Asking user to insert the above five numbers - Timing function
var userNumbers = [];

setTimeout(function() {
    // Prompt

}, 30000);