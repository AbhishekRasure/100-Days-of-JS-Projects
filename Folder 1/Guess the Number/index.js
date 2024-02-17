
let randomNumber = Math.floor(Math.random() * 100 + 1); 
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}
function validateGuess(guess){
     if(isNaN(guess)){
        alert('Please enter a valid Number');
     } else if(guess < 1){
        alert('Please enter number grater than 1')
     } else if(guess > 100){
        alert('Please enter number less than 100');
     }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame()
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
     }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guessted right")
    } else if(guess < randomNumber){
        displayMessage("Your guess was low")
    }else if(guess > randomNumber){
        displayMessage("Your guess was too high");
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `  ${guess}`;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
   userInput.value = "";
   userInput.setAttribute(`disabled`, '');
   p.classList.add('button');
   p.innerHTML = `<h2 id="newGame">New Game</h2>`;
   startOver.appendChild(p);
   playGame = false;
   newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
