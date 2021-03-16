/* An alert() displays five randomly-generated numbers. Then a 30-second timer starts, after which the user must insert the previous numbers via prompt(). At the end, the computer displays how many and which numbers were guessed correctly  */

// Creating 5 different numbers to show the user and to then store inside an array
var computerNumbers = [];

while (computerNumbers.length < 5) {
    var number = randomNumber(1, 1000);

    if (!isNumberInArray(number, computerNumbers)) {
        computerNumbers.push(number);
    }
}

alert(computerNumbers);