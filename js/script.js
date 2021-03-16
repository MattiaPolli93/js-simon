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

// Asking user to insert the above five numbers and storing them inside an array (30-second timing function)
var userNumbers = [];
var correctNumbers = [];

setTimeout(function() {
    // Asking user to insert the five numbers
    while (userNumbers.length < 5) {
        
        // Making sure user inserts numbers
        do {
            var userNumber = parseInt(prompt("Insert number (between 1 and 1000):"));
        } while (isNaN(userNumber) || (userNumber <= 0 || userNumber > 1000));

        // Making sure user does not insert the same numbers twice
        if (isNumberInArray(userNumber, userNumbers)) {
            alert("Invalid! You have already chosen this number...");
        } else {
            userNumbers.push(userNumber);
        }
    }

    // Making sure the guessed numbers are the correct ones
    for (var i = 0; i < computerNumbers.length; i++) {
        if (isNumberInArray(userNumbers[i], computerNumbers)) {
            correctNumbers.push(computerNumbers[i]);
        }
    }

    // Displaying guessed numbers
    if (correctNumbers.length == 5) {
        alert("Congrats, you got all the numbers!");

    } else if (correctNumbers.length != 5) {
        alert(`You guessed ${correctNumbers.length} number(s) correctly: ${correctNumbers.join(" - ")}`);
    } 
    
    // Displaying in console
    console.log(userNumbers);
    console.log(computerNumbers);

}, 30000);