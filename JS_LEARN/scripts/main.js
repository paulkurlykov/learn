let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let justtext = document.querySelector('p');
justtext.textContent = 'Замененный текст';

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

  multiply(4,7);

  document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {

    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/real.png') {

        myImage.setAttribute ('src', 'images/barca.png');
    } else { 
        myImage.setAttribute ('src', 'images/real.png');
    }

}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }