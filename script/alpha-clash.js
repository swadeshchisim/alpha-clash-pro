function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log(playerPressed);
    //stop the game if pressed 'ESC'
    if(playerPressed === 'Escape') {
        gameOver();
    }

    //key player is expected to press
    const currentAlaphabetElement = document.getElementById('current-alphabet');
    const currentAlaphabet = currentAlaphabetElement.innerText;
    const expectedAlphabet = currentAlaphabet.toLowerCase();

    //check right or wrong answer
    if(playerPressed === expectedAlphabet) {
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        console.log(updatedScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    } else {
        console.log('Wrong key pressed');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    // step - 1: generate a random alphabet
    const alphabet = getRandomAlphabet();

    // set randomly alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}