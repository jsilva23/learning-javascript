let leverPara = document.querySelector('.level');
let between = document.querySelector('.between');
let attemptsPara = document.querySelector('.attempts');

let hunches = document.querySelector('.hunches');
let lastResult = document.querySelector('.lastResult');
let lowOrHight = document.querySelector('.lowOrHight');

let sendHunch = document.querySelector('.sendHunch');
let hunchField = document.querySelector('.hunchField');


let level = 1;
let scoreHunches = 1;
let restartButton;
let nextLevelButton;
let randomNumber = Math.floor(Math.random() * 5) +1;
let attempts = 3;
hunchField.focus();

function nextLevel() {
    let restartParagraphs = document.querySelectorAll('.result p');
    for(let i = 0; i < restartParagraphs.length; i++) {
        restartParagraphs[i].textContent = '';
    }

    restartButton.parentNode.removeChild(restartButton);

    hunchField.disabled = false;
    sendHunch.disabled = false;
    hunchField.value = '';
    hunchField.focus();

    lastResult.style.backgroundColor = 'white';
    
    nextLevelButton.parentNode.removeChild(nextLevelButton);
    scoreHunches = 1;
    switch (level) {
        case 2:
            randomNumber = Math.floor(Math.random() * 20) +1;
            attempts = 5;
            leverPara.innerHTML = 'Level: 2';
            attemptsPara.innerHTML = 'Attemps: 5';
            between.innerHTML = 'Random Number between 1 and 20';
            break;
        case 3:
            randomNumber = Math.floor(Math.random() * 100) +1;
            attempts = 8;
            leverPara.innerHTML = 'Level: 3';
            attemptsPara.innerHTML = 'Attemps: 8';
            between.innerHTML = 'Random Number between 1 and 100';
            break;
        case 4:
            randomNumber = Math.floor(Math.random() * 200) +1;
            attempts = 10;
            leverPara.innerHTML = 'Level: 4';
            attemptsPara.innerHTML = 'Attemps: 10';
            between.innerHTML = 'Random Number between 1 and 200';
            break;
        case 5:
            randomNumber = Math.floor(Math.random() * 500) +1;
            attempts = 15;
            leverPara.innerHTML = 'Level: 5';
            attemptsPara.innerHTML = 'Attemps: 15';
            between.innerHTML = 'Random Number between 1 and 500';
            break;                
        default:
            lastResult.textContent = 'Congratulations! YOU WON!!!';
            lastResult.style.backgroundColor = 'green';
            lowOrHight.textContent = '';
            level = 1;
            configEndGame();
    } 
}

function checkHunch() {
    let userHunch = Number(hunchField.value);
    if(scoreHunches === 1) {
        hunches.textContent = 'Previous guesses: ';
}
    hunches.textContent += userHunch + ' ';

    if(userHunch === randomNumber) {
        lastResult.textContent = 'Congratulations! You\'re right';
        lastResult.style.backgroundColor = 'green';
        lowOrHight.textContent = '';
        level++;
        configEndGame()
        nextLevelButton = document.createElement('button');
        nextLevelButton.textContent = 'Next level';
        document.body.appendChild(nextLevelButton);
        nextLevelButton.addEventListener('click', nextLevel);
    } else if(scoreHunches === attempts) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHight.textContent = '';
        configEndGame();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        
        if(userHunch < randomNumber) {
            lowOrHight.textContent = 'Your hunch is too low!';
        } else {
            lowOrHight.textContent = 'Your hunch is too hight!';
        }
    } 
    scoreHunches++;
    hunchField.value = '';
    hunchField.focus();
}

sendHunch.addEventListener('click', checkHunch);

function configEndGame() {
    hunchField.disabled = true;
    sendHunch.disabled = true;
    restartButton = document.createElement('button');
    restartButton.textContent = 'New game';
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);  
}

function restartGame() {
    scoreHunches = 1;
    level = 1; 
    
    leverPara.innerHTML = 'Leve: 1';
    attemptsPara.innerHTML = 'Attemps: 3';
    between.innerHTML = 'Random Number between 1 and 5';

    let restartParagraphs = document.querySelectorAll('.result p');
    for(let i = 0; i < restartParagraphs.length; i++) {
        restartParagraphs[i].textContent = '';
    }

    restartButton.parentNode.removeChild(restartButton);
    nextLevelButton.parentNode.removeChild(nextLevelButton);

    hunchField.disabled = false;
    sendHunch.disabled = false;
    hunchField.value = '';
    hunchField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 5) + 1;
}
