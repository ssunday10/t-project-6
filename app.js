// variables 

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.getElementsByClassName('btn_reset');
const overlay = document.getElementById('overlay');
const lives = document.querySelectorAll('li.tries');
let missed = 0;
const attempts = 5;


// phrases array

const phrases = [
    'better late than never',
    'Slow Children at play',
    'Get out of my kitchen',
    'But Mommy said',
    'That is what makes you beautiful',
    'Beware of dog'
];


// arrow functions

// return a random phrase from an array
const getRandomPhraseArray = arr => {
    const randomNumber = Math.floor( Math.random() * arr.length );
    return arr[randomNumber].split('');
};

const randomPhrase = getRandomPhraseArray(phrases);

console.log(randomPhrase);

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {

    const list = document.querySelector('#phrase > ul');
    
    phrase.forEach(character => {
    const listItem = document.createElement('li');
    listItem.textContent = character;
    list.appendChild(listItem);
    character !== ' ' ? listItem.className = 'letter' : listItem.className = 'space';
});
}


// check if a letter is in the phrase
const checkLetter = button => {
    if(listItem.includes(letter)) {
        console.log("The letter is in the phrase.");
    } else {
        console.log("The letter is not in the phrase");
    }
}

// check if the game has been won or lost
const checkWin = () => {
    let correctGuess = false;
    const number = 5;
    const guess = prompt('Guess a letter');
    if ( +guess === listItem) {
        correctGuess = true;
    } 
    if (correctGuess === true) {
        console.log('You guessed a letter in the phrase!');
    } else {
        console.log('Sorry, The letter is not in the phrase');
    }
}

// listen for the start game button to be pressed (maybe startButton instead of resetButton)
function startGame () {
    const arr = getRandomPhraseArray(phrases);
    addPhraseToDisplay(arr)
}

overlay.addEventListener ( 'click', (e) => {
    if ( event.target.tagName === 'A'){
        startGame();
        overlay.style.display = 'none';
    }
 });

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener ( 'click', (e) => {

});

// add event listener to reset button
// resetButton.addEventListener('click');