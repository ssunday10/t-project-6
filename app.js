// variables 

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.getElementsByClassName('btn_reset');
const overlay = document.getElementById('overlay');
let missed = 0;


// phrases array



// arrow functions

// return a random phrase from an array
const getRandomPhraseArray = arr => {
    Math.floor( Math.random() * arr.length );
    const phrases = [
        'better late than never',
        'Slow Children at play',
        'Get out of my kitchen',
        'But Mommy said',
        'That is what makes you beautiful',
        'Beware of dog'
    ];
// output of words
    const words = phrases.split(' ');

// output of characters
    const characters = phrases.split('');

// output the entire phrases
    const phrasesCopy = phrases.split();

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

// listen for the start game button to be pressed (maybe startButton instead of resetButton)
// resetButton.addEventListener ( 'click', (e) => {

// });

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener ( 'click', (e) => {

});

// add event listener to reset button
// resetButton.addEventListener('click');