'use strict';
function getUserInput() {
    let firstName = prompt('What is your first name!');
    let time = prompt('What time is it (0-24?)');
    let message = '';
    if(time <= 11 && time != '' && time != 0) {
        message = 'Good morning!';
        //console.log('Good morning!!!');
    } else if(time <= 18){
        message = 'Good afternoon!';
        //console.log('Good afternoon!!!');
    } else if(time <= 24){
        message = 'Good evening!';
        //console.log('Good evening!!!');
    } else{
        message = 'Good day!';
        //console.log('Have a great day!');
    }
    // Uses not equal to !=, to set boundries. So if a user enters a string instead of integer, it will default to 'Good day!'
    document.write('Hello ' + firstName + '! ' + message);
    // console.log('done with getUserInput');
}

function getColor() {
    let userColor = document.getElementById('text').value;
    document.body.style.backgroundColor = userColor;
    // console.log(x)
    if (userColor != document.body.style.backgroundColor) {
        window.alert("Please enter a real color (don't put spaces)");
    }
}
function resetColor() {
    // Resets the default background color
    if (document.getElementById('reset').onclick) {
        let baseColor = document.body.style.background = '#8B8B8B';
        document.body.style.backgroundColor = baseColor;
    }
}
function ouch() {
    return window.confirm("Ouch that hurt :(")
}
function getUserNumber() {
    let userNumber = document.getElementById('userNumber').value;
    let output = '';
        for(let x = 0; x < userNumber; x++) { 
            output = output + '<img id="starimg" style="width: 50px;" src="https://i.imgur.com/7T97nJj.png">'
        }
    return document.getElementById('placehere').innerHTML += output
}