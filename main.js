var buttons = document.getElementsByTagName('button');

var button = buttons[0];

var inputs = document.getElementsByTagName('input');

var input = inputs[0];

var innerAlerts = document.getElementsByTagName('h2');

var innerAlert = innerAlerts[0];

button.onclick = function(){
    innerAlert.innerHTML = 'Hello, ' + input.value + '!';
};

var emoji = document.getElementsByTagName('h1');
emoji.onclick = function(){
    window.open('https://en.wikipedia.org/wiki/Spain');
};