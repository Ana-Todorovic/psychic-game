var validLetters =
["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];

var winCount= 0;
var lossCount= 0;
var guessesRemaining= 8;
var guessedLetters= [];
var userLetters = document.onkeyup;

var compLetters = validLetters[Math.floor(Math.random() * validLetters.length)];

document.onkeyup = function(event){ 
    var userLetters = event.key;


if (validLetters.indexOf(userLetters) > -1){
    if (userLetters === compLetters){
        winCount++;
        guessesRemaining = 8;
        guessedLetters = [];
    }
    if (userLetters != compLetters) {
        guessesRemaining --;
        guessedLetters.push(userLetters);
    }

    if (guessesRemaining === 0){
        lossCount++;
        guessesRemaining = 8;
        guessedLetters = [];
         }

var html = 
    '<p><h2>Psychic Game</h2></p>'+
    '<p>Wins: ' + winCount + '</p>'+
    '<p>Losses: ' + lossCount + '</p>'+
    '<p>Guesses Remaining: ' + guessesRemaining + '</p>'+
    '<p>Letters Guessed: ' + guessedLetters.join(', ') + '</p>';
document.querySelector("#game").innerHTML = html;
        }
};