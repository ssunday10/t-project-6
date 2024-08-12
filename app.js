const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.getElementsByClassName('btn_reset');
const startButton = document.getElementsByClassName('start');
const overlay = document.querySelector('overlay');

let missed = 0;

const phrases = [

    'After Tuesday even the calendar says WTF',
    'Slow Children at play',
    'Get out of my kitchen',
    'But Mommy said',
    'That is what makes you beautiful',
    'Beware of dog'
];

resetButton.addEventListener('click', (e) => {
    startGame();
});

function startGame() {
   overlay.style.display = "none";
   addPhraseToDisplay(getRandomPhraseArray(phrases));

};

// 
function stub () {
let randomNumber = getRandomPhraseArray.length;
randomNumber[3];
};

// return a random phrase from an array
const getRandomPhraseArray = arr => {

};

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {

}

// check if a letter is in the phrase
const checkLetter = button => {


}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener ( 'click', (e) => {
    overlay.style.display = 'none';
});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener ( 'click', (e) => {

});