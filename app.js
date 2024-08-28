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
const addPhraseToDisplay = (arr) => {
    const list = document.querySelector('#phrase > ul');
    
    arr.forEach(character => {
    const listItem = document.createElement('li');
    listItem.textContent = character;
    list.appendChild(listItem);
    character !== ' ' ? listItem.className = 'letter' : listItem.className = 'space';
});
}


// check if a letter is in the phrase
const checkLetters = button => {
    let checkLetters = document.querySelectorAll('#phrase > ul > li.letter');
    let matchFound = null;

    checkLetters.forEach(letter => {
        if (letter.textContent.toLocaleLowerCase() === 'button') {
            letter.classList.add('show');
            matchFound = true;
        }
    })

    return matchFound;
}

// check if the game has been won or lost
const checkWin = () => {
    let letter = document.querySelectorAll('.letter');
    let showLetter = document.querySelectorAll('.show');

    const title = document.querySelector('#overlay h2.title');

    if ( letter.length === showLetter.length) {
        overlay.style.display = 'flex';
        title.textContent = 'You Won!';
        resetButton.textContent = 'Restart Game';
        overlay.className = 'Win';
        endGame();
    } else if ( missed >= attempts) {
        overlay.style.display = 'flex';
        title.textContent = 'You Lose';
        resetButton.textContent = 'Please Try Again';
        overlay.className = 'lose';
        endGame();
        }
    }

// listen for the start game button to be pressed (maybe startButton instead of resetButton)
function startGame () {
    const arr = getRandomPhraseArray(phrases);
    addPhraseToDisplay(arr)
}

// remove overlay and start the game
overlay.addEventListener ( 'click', (e) => {
    if ( e.target.tagName === 'A'){
        startGame();
        overlay.style.display = 'none';
    }
 });

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener ( 'click', (e) => {
    console.log(e.target);

    if (e.target.tagName === 'BUTTON' && !e.target.classList.contains('chosen')) {
        e.target.classList.add('chosen');
        e.target.disabled = 'true';

        const letterFound = checkLetters(e.target.textContent);
        if(!letterFound){
            lives[missed].firstElementChild.src = 'images/lostHeart.png';
            missed = missed + 1;
        }
    }
    checkWin();
    
});



function startGame() {
    const arr = getRandomPhraseArray(phrases);
    addPhraseToDisplay(arr);
};

function endGame () {
    missed = 0;
    count = 1;
    arr.length = 0;
    const listItem = document.querySelectorAll('#phrase > ul > li');

    listItem.forEach ( (e) => {
        e.remove();
    })

    const qwertyButton = qwerty.querySelectorAll('button');
    qwertyButton.forEach (button => {
        button.classList.remove('chosen');
        button.disabled = false;
    })

    lives.forEach(live => {
        lives.firstElementChild.src = 'images/liveHeart.png';
    })
}

