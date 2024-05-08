// function play() {
//    //hide the home screen, to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//    //show the playground
//    const playGroundSection = document.getElementById("play-ground");
//    playGroundSection.classList.remove('hidden');
// }

function continueGame() {
    // step - 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly alphabet to the screen
    const alphabetArea = document.getElementById('alphabet-area');
    alphabetArea.innerText = alphabet;
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}