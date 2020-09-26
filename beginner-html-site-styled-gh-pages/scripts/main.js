let myImage = document.querySelector('img');
let name;

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');        
    }
}

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function defineUserName() {
    let myName = prompt('Pleas, type your name.');
    if (!myName || myName === null) {
        defineUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeader.textContent = 'Mozilla is cool, ' + myName;        
    }
}

if (!localStorage.getItem('name')) {
    defineUserName();
} else {
    let savedName = localStorage.getItem('name');
    myHeader.textContent = 'Mozilla is cool, ' + savedName;
}

myButton.onclick = function() {
    defineUserName();
    name = localStorage.getItem('name');
    createParagraph(name);
}

function createParagraph(name) {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button '+ name;
    document.body.appendChild(para);

}
