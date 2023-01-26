var ai = document.getElementById('anni');
var onCenter = true;
var onOne = false;
var onTwo = false;
var onThree = false;
var onFour = false;
var onFive = false;
var onSix = false;
var onSeven = false;
var onEight = false;
var onNine = false;
var onTen = false;
var onEleven = false;
var onTwelve = false;
var onThirteen = false;
var onFourteen = false;
var onFifteen = false;
setInterval(function shouldMove() {
var willMove = Math.floor(Math.random() * 10);
  if (onCenter == true && willMove == 1) {
    onCenter = false;
    onOne = true;
    ai.style.top='-200px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onCenter == true && willMove == 2) {
    onCenter = false;
    onTwo = true;
    ai.style.top='0px';
    ai.style.left='-200px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onCenter == true && willMove == 3) {
    onCenter = false;
    onThree = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='0px';
  }
  if (onCenter == true && willMove == 4) {
    onFour = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='-200px';
    onCenter = false;
  }
  if (onOne == true && willMove == 2) {
    onOne = false;
    onCenter = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onTwo == true && willMove == 1) {
    onTwo = false;
    onCenter = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onThree == true && willMove == 4) {
    onThree = false;
    onCenter = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onFour == true && willMove == 3) {
    onFour = false;
    onCenter = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onThree == true && willMove == 5) {
    onThree = false;
    onNine = true;
    ai.style.top='-200px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='0px';
  }
  if (onThree == true && willMove == 6) {
    onThree = false;
    onSeven = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='-400px';
    ai.style.bottom='0px';
  }
  if (onSeven == true && willMove == 3) {
    onThree = true;
    onSeven = false;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='0px';
  }
  if (onSeven == true && willMove == 1) {
    onNine = true;
    onSeven = false;
    ai.style.top='-200px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='0px';
  }
  if (onNine == true && willMove == 6) {
    onNine = false;
    onOne = true;
    ai.style.top='-200px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onNine == true && willMove == 7) {
    onNine = false;
    onThree = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='0px';
  }
  if (onNine == true && willMove == 8) {
    onNine = false;
    onSeven = true;
    ai.style.top='0px';
    ai.style.left='0px';
    ai.style.right='-400px';
    ai.style.bottom='0px';
  }
  if (onOne == true && willMove == 9) {
    onOne= false;
    onNine = true;
    ai.style.top='-200px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='0px';
  }
  if (onOne == true && willMove == 7) {
    onOne= false;
    onFive = true;
    ai.style.top='-400px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onFive == true && willMove == 1) {
    onFive= false;
    onOne= true;
    ai.style.top='-200px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onFive == true && willMove == 2) {
    onFive= false;
    onNine= true;
    ai.style.top='-200px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='0px';
  }
  if (onFive == true && willMove == 3) {
    onFive= false;
    onThirteen= true;
    ai.style.top='-400px';
    ai.style.left='-200px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onThirteen == true && willMove == 1) {
    onFive= true;
    onThirteen= false;
    ai.style.top='-400px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onThirteen == true && willMove == 2) {
    onFourteen= true;
    onThirteen= false;
    ai.style.top='-400px';
    ai.style.left='-400px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onFourteen == true && willMove == 3) {
    onFourteen= false;
    onThirteen= true;
    ai.style.top='-400px';
    ai.style.left='-200px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onFourteen == true && willMove == 4) {
    onFourteen= false;
    onFifteen= true;
    ai.style.top='-200px';
    ai.style.left='-400px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onFifteen == true && willMove == 1) {
    onFourteen= true;
    onFifteen= false;
    ai.style.top='-400px';
    ai.style.left='-400px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onFifteen == true && willMove == 2) {
    onSix= true;
    onFifteen= false;
    ai.style.top='0px';
    ai.style.left='-400px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onSix == true && willMove == 3) {
    onFifteen= true;
    onSix= false;
    ai.style.top='-200px';
    ai.style.left='-400px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onSix == true && willMove == 6) {
    onTwo= true;
    onSix= false;
    ai.style.top='0px';
    ai.style.left='-200px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onTwo == true && willMove == 7) {
    onSix= true;
    onTwo= false;
    ai.style.top='-0px';
    ai.style.left='-400px';
    ai.style.right='0px';
    ai.style.bottom='0px';
  }
  if (onFour == true && willMove == 7) {
    onEight= true;
    onFour= false;
    ai.style.top='-0px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='-400px';
  }
  if (onEight == true && willMove == 2) {
    onEight= false;
    onFour= true;
    ai.style.top='-0px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='-200px';
  }
  if (onEight == true && willMove == 6) {
    onEight= false;
    onTen= true;
    ai.style.top='-0px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='-400px';
  }
  if (onTen == true && willMove == 3) {
    onEight= true;
    onTen= false;
    ai.style.top='-0px';
    ai.style.left='0px';
    ai.style.right='0px';
    ai.style.bottom='-400px';
  }
  if (onTen == true && willMove == 7) {
    onEleven= true;
    onTen= false;
    ai.style.top='-0px';
    ai.style.left='0px';
    ai.style.right='-400px';
    ai.style.bottom='-400px';
  }
  if (onEleven == true && willMove == 3) {
    onEleven= false;
    onTen= true;
    ai.style.top='-0px';
    ai.style.left='0px';
    ai.style.right='-200px';
    ai.style.bottom='-400px';
  }
  if (onEleven == true && willMove == 1) {
    onEleven= false;
    onTwelve= true;
    ai.style.top='-0px';
    ai.style.left='0px';
    ai.style.right='-400px';
    ai.style.bottom='-600px';
  }
  if (onTwelve == true && willMove == 6) {
    onTwelve= false;
    onEleven= true;
    ai.style.top='-0px';
    ai.style.left='0px';
    ai.style.right='-400px';
    ai.style.bottom='-400px';
  }
  if (onCenter == true) {
    document.getElementById('center').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onOne == true) {
    document.getElementById('one').style.backgroundColor = '#ffffcc';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onTwo == true) {
    document.getElementById('two').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onThree == true) {
    document.getElementById('three').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onFour == true) {
    document.getElementById('four').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onFive == true) {
    document.getElementById('five').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onSix == true) {
    document.getElementById('six').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onSeven == true) {
    document.getElementById('seven').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onEight == true) {
    document.getElementById('eight').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onNine == true) {
    document.getElementById('nine').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onTen == true) {
    document.getElementById('ten').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onEleven == true) {
    document.getElementById('eleven').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onTwelve == true) {
    document.getElementById('twelve').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onThirteen == true) {
    document.getElementById('thirteen').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onFourteen == true) {
    document.getElementById('fourteen').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
    document.getElementById('fifteen').style.backgroundColor = 'black';
  }
  if (onFifteen == true) {
    document.getElementById('fifteen').style.backgroundColor = '#ffffcc';
    document.getElementById('one').style.backgroundColor = 'black';
    document.getElementById('center').style.backgroundColor = 'black';
    document.getElementById('three').style.backgroundColor = 'black';
    document.getElementById('four').style.backgroundColor = 'black';
    document.getElementById('five').style.backgroundColor = 'black';
    document.getElementById('six').style.backgroundColor = 'black';
    document.getElementById('seven').style.backgroundColor = 'black';
    document.getElementById('eight').style.backgroundColor = 'black';
    document.getElementById('nine').style.backgroundColor = 'black';
    document.getElementById('ten').style.backgroundColor = 'black';
    document.getElementById('eleven').style.backgroundColor = 'black';
    document.getElementById('twelve').style.backgroundColor = 'black';
    document.getElementById('thirteen').style.backgroundColor = 'black';
    document.getElementById('fourteen').style.backgroundColor = 'black';
    document.getElementById('two').style.backgroundColor = 'black';
  }
  if (onCenter == true) {
    ai.style.backgroundColor = 'white';
  }
  if (onOne == true) {
    ai.style.backgroundColor = 'red';
  }
  if (onTwo == true) {
    ai.style.backgroundColor = 'blue';
  }
  if (onThree == true) {
    ai.style.backgroundColor = 'yellow';
  }
  if (onFour == true) {
    ai.style.backgroundColor = 'green';
  }
  if (onFive == true) {
    ai.style.backgroundColor = 'purple';
  }
  if (onSix == true) {
    ai.style.backgroundColor = 'orange';
  }
  if (onSeven == true) {
    ai.style.backgroundColor = 'brown';
  }
  if (onEight == true) {
    ai.style.backgroundColor = 'pink';
  }
  if (onNine == true) {
    ai.style.backgroundColor = 'silver';
  }
  if (onTen == true) {
    ai.style.backgroundColor = 'lightblue';
  }
  if (onEleven == true) {
    ai.style.backgroundColor = '#ccff99';
  }
  if (onTwelve == true) {
    ai.style.backgroundColor = 'Maroon';
  }
  if (onThirteen == true) {
    ai.style.backgroundColor = '#ffff99';
  }
  if (onFourteen == true) {
    ai.style.backgroundColor = '#74254d';
  }
  if (onFifteen == true) {
    ai.style.backgroundColor = '#606237';
  }
            }, 300)