function one() {
    document.forms['form']['textfield'].value += '1';
    }
    function two() {
    document.forms['form']['textfield'].value += '2';
    }
    function three() {
    document.forms['form']['textfield'].value += '3';
    }
    function four() {
    document.forms['form']['textfield'].value += '4';
    }
    function five() {
    document.forms['form']['textfield'].value += '5';
    }
    function six() {
    document.forms['form']['textfield'].value += '6';
    }
    function seven() {
    document.forms['form']['textfield'].value += '7';
    }
    function eight() {
    document.forms['form']['textfield'].value += '8';
    }
    function nine() {
    document.forms['form']['textfield'].value += '9';
    }
    function reset() {
    document.getElementById('textfield').value = ' ';
    document.getElementById('textfield').style.backgroundColor="white";
    }
            codePosition = Math.floor(Math.random() * 4) + 1;
            console.log(codePosition);
    function enter() {
    let currentInputValue = document.getElementById('textfield').value;
        if (currentInputValue === ' 46363') {
        document.getElementById('textfield').style.backgroundColor="#ccffcc";
        document.getElementById('leftdoor').style.animationName="dooropenleft";
        document.getElementById('rightdoor').style.animationName="dooropenright";
        }
        else {
        document.getElementById('textfield').style.backgroundColor="#ffcccc";
        }
    }
    if (codePosition === 1) {
            document.getElementById('first').style.display="block";
    }
    if (codePosition === 2) {
            document.getElementById('second').style.display="block";
    }
    if (codePosition === 3) {
            document.getElementById('third').style.display="block";
    }
    if (codePosition === 4) {
            document.getElementById('fourth').style.display="block";
    }