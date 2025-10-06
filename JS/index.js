var body = document.body;

body.style.backgroundColor = 'gray';
body.style.height = '100vh';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.fontFamily = 'Arial, sans-serif';

var counter = document.createElement('div');
counter.id = 'counter';
counter.innerHTML = '00:00';
counter.style.fontSize = '100px';
counter.style.color = 'black';
counter.style.marginBottom = '50px';
body.appendChild(counter);

var buttonsDiv = document.createElement('div');
buttonsDiv.style.display = 'flex';
buttonsDiv.style.gap = '20px';
body.appendChild(buttonsDiv);

var btnMinus = document.createElement('button');
btnMinus.innerHTML = 'speed -';
btnMinus.style.fontSize = '20px';
btnMinus.style.padding = '10px 20px';
btnMinus.style.borderRadius = '10px';
btnMinus.style.border = 'none';
btnMinus.style.cursor = 'pointer';
buttonsDiv.appendChild(btnMinus);

var btnReset = document.createElement('button');
btnReset.innerHTML = 'reset';
btnReset.style.fontSize = '20px';
btnReset.style.padding = '10px 20px';
btnReset.style.borderRadius = '10px';
btnReset.style.border = 'none';
btnReset.style.cursor = 'pointer';
buttonsDiv.appendChild(btnReset);

var btnPlus = document.createElement('button');
btnPlus.innerHTML = 'speed +';
btnPlus.style.fontSize = '20px';
btnPlus.style.padding = '10px 20px';
btnPlus.style.borderRadius = '10px';
btnPlus.style.border = 'none';
btnPlus.style.cursor = 'pointer';
buttonsDiv.appendChild(btnPlus);

var seconds = 0;
var interval = null;
var speed = 1000;

function updateCounter() {
  var min = Math.floor(seconds / 60);
  var sec = seconds % 60;
  var displayMin = min;
  var displaySec = sec;
  if (min < 10) {
    displayMin = '0' + min;
  }
  if (sec < 10) {
    displaySec = '0' + sec;
  }
  counter.innerHTML = displayMin + ':' + displaySec;
}

function startCounting() {
  if (interval != null) {
    clearInterval(interval);
  }
  interval = setInterval(function() {
    seconds = seconds + 1;
    updateCounter();
  }, speed);
}

btnPlus.onclick = function() {
  speed = speed - 200;
  if (speed < 200) {
    speed = 200;
  }
  body.style.backgroundColor = 'lightgreen';
  counter.style.color = 'lightcoral';
  startCounting();
};

btnMinus.onclick = function() {
  speed = speed + 200;
  body.style.backgroundColor = 'lightcoral';
  counter.style.color = 'lightgreen';
  startCounting();
};

btnReset.onclick = function() {
  if (interval != null) {
    clearInterval(interval);
  }
  seconds = 0;
  updateCounter();
  body.style.backgroundColor = 'gray';
  counter.style.color = 'black';
};

updateCounter();
