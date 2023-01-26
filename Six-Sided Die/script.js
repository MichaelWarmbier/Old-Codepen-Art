function rollDice() {
    x = Math.floor(Math.random() * 6) + 1;
   animateDice();
 }
 function animateDice() {
     console.log(x);
     document.getElementById('shadow').style.display='block';
     document.getElementById('reset').style.display='block';
     document.getElementById('start').style.display='none';
     document.getElementById('reset').style.animationName='buttonanimation';
     document.getElementById('start').style.animationName='buttonanimation';
        if (x === 1) {
     document.getElementById('dice').style.animationName = 'rollone';
     document.getElementById('shadow').style.animationName = 'rolloneshadow';
        }
     if (x === 2) {
     document.getElementById('dice').style.animationName = 'rolltwo';
     document.getElementById('shadow').style.animationName = 'rolltwoshadow';
     }
     if (x === 3) {
        document.getElementById('dice').style.animationName = 'rollthree';
     document.getElementById('shadow').style.animationName = 'rollthreeshadow';
     }
     if (x === 4) {
     document.getElementById('dice').style.animationName = 'rollfour';
     document.getElementById('shadow').style.animationName = 'rollfourshadow';
     }
     if (x === 5) {
     document.getElementById('dice').style.animationName = 'rollfive';
     document.getElementById('shadow').style.animationName = 'rollfiveshadow';
     }
     if (x === 6) {
     document.getElementById('dice').style.animationName = 'rollsix';
     document.getElementById('shadow').style.animationName = 'rollsixshadow';
     }
 }

 function resetDice() {
     document.getElementById('reset').style.display='none';
     document.getElementById('start').style.display='block';
     document.getElementById('shadow').style.display='none';
        if (x === 1) {
     document.getElementById('dice').style.animationName = 'resetone';
     }
     if (x === 2) {
     document.getElementById('dice').style.animationName = 'resettwo';
     }
     if (x === 3) {
     document.getElementById('dice').style.animationName = 'resetthree';
     }
     if (x === 4) {
     document.getElementById('dice').style.animationName = 'resetfour';
     }
     if (x === 5) {
     document.getElementById('dice').style.animationName = 'resetfive';
     }
     if (x === 6) {
     document.getElementById('dice').style.animationName = 'resetsix';
     }
 }