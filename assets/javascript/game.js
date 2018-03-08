


    // VARIABLES
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessesMade = [];
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var compChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(compChoice)
    
    // TAKE KEY INPUT TO DETERMINE THE USERS GUESS
        document.onkeyup = function (event) {
        var userGuess = event.key;
        guessesMade.push(userGuess);

        console.log(userGuess)
        
    // IF USER GUESSES CORRECTLY YOU WIN!!!
    if (userGuess == compChoice) {
        wins++;
        guessesLeft === 9;
        console.log("You got it!!!")
        reset();
    }

    // IF USER GUESSES INCORRECTLY YOU LOSE A GUESS
    // else (userGuess != compChoice); {
    else{
        guessesLeft--;
        console.log(guessesLeft)
        console.log("oh no")
    };

    // IF GUESSES LEFT = 0, YOU LOSE.
    if (guessesLeft == 0) {
        
        losses++;
        console.log("You Lost.")
        reset();
    }

    function reset() {
        computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        guessesLeft = 9;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        guessesMade = [];
        document.getElementById("guessesMade").innerHTML = guessesMade;

    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesMade").innerHTML = guessesMade;
};
    