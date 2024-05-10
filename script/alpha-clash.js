function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

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
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    // step - 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly alphabet to the screen
    const alphabetArea = document.getElementById('current-alphabet');
    alphabetArea.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}