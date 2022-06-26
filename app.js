'use strict';
let firstName = prompt('What is your first name!')
let time = prompt('What time is it (0-24?)');
let message = '';
if(time <= 11 && time != '' && time != 0){
    message = 'Good morning!'
    //console.log('Good morning!!!')
} else if(time <= 18){
    message = 'Good afternoon!'
    //console.log('Good afternoon!!!')
} else if(time <= 24){
    message = 'Good evening!'
    //console.log('Good evening!!!')
} else{
    message = 'Good day!'
    //console.log('Have a great day!')
}
// console.log('done with program');
// Uses not equal to !=, to set boundries. So if a user enters a string instead of integer, it will default to 'Good day!'


document.write('Hello ' + firstName + '! ' + message);

function getInput() {
    var x = document.getElementById('text').value;
    // console.log(x)
    if (x === 'red') {
        document.body.style.background = '#F50000';
    } else if (x === 'green') {
        document.body.style.background = '#73F53A';
    } else {
        window.alert("Please enter either green or red");
    }
}





