// click the firefox logo will change it to another firefox logo.
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    
    if (mySrc === 'images/firefox.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox.png');
    }
}

/*
  ask user to enter their name when first visiting the page then display a welcome message 
including their name and persist when next time visiting. Also add a button on the bottom 
to change their name.
*/

/* 
    1. lookup stored name
        if has one
            get it and display the message.
        if none
            exec function setName: (prompt to enter a name, store it, display the message.)
    2. click button to change a name.
        exec function setName
*/


var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

//click button to change username
myButton.onclick = function() {
    setUserName();
}