var numberOfDrumButtons = document.querySelectorAll(".letter").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".letter")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var alphaA = new Audio("wince-a.m4a");
      alphaA.play();
      break;

    case "b":
      var alphaB = new Audio("wince-b.m4a");
      alphaB.play();
      break;

    case "c":
      var alphaC = new Audio('wince-c.m4a');
      alphaC.play();
      break;

    case "d":
      var alphaD = new Audio('wince-d.m4a');
      alphaD.play();
      break;

    case "e":
      var alphaE = new Audio('wince-e.m4a');
      alphaE.play();
      break;

    case "f":
      var alphaF = new Audio('wince-f.m4a');
      alphaF.play();
      break;

    case "g":
      var alphaG = new Audio('wince-g.m4a');
      alphaG.play();
      break;

        case "h":
      var alphaH = new Audio('wince-h.m4a');
      alphaH.play();
      break;

        case "i":
      var alphaI = new Audio('wince-i.m4a');
      alphaI.play();
      break;

        case "j":
      var alphaJ = new Audio('wince-j.m4a');
      alphaJ.play();
      break;

        case "k":
      var alphaK = new Audio('wince-k.m4a');
      alphaK.play();
      break;

        case "l":
      var alphaL = new Audio('wince-l.m4a');
      alphaL.play();
      break;

        case "m":
      var alphaM = new Audio('wince-m.m4a');
      alphaM.play();
      break;

        case "n":
      var alphaN = new Audio('wince-n.m4a');
      alphaN.play();
      break;

  case "o":
      var alphaO = new Audio('wince-o.m4a');
      alphaO.play();
      break;


    case "p":
      var alphaP = new Audio('wince-p.m4a');
      alphaP.play();
      break;

        case "q":
      var alphaQ = new Audio('wince-q.m4a');
      alphaQ.play();
      break;

        case "r":
      var alphaR = new Audio('wince-r.m4a');
      alphaR.play();
      break;

        case "s":
      var alphaS = new Audio('wince-s.m4a');
      alphaS.play();
      break;

        case "t":
      var alphaT = new Audio('wince-t.m4a');
      alphaT.play();
      break;

        case "u":
      var alphaU = new Audio('wince-u.m4a');
      alphaU.play();
      break;

        case "v":
      var alphaV = new Audio('wince-v.m4a');
      alphaV.play();
      break;

        case "w":
      var alphaW = new Audio('wince-w.m4a');
      alphaW.play();
      break;

        case "x":
      var alphaX = new Audio('wince-x.m4a');
      alphaX.play();
      break;

        case "y":
      var alphaY = new Audio('wince-y.m4a');
      alphaY.play();
      break;

        case "z":
      var alphaZ = new Audio('wince-z.m4a');
      alphaZ.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 200);

}


  // round clock script
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#7F8C8D';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#fff');
  grad.addColorStop(0.5, '#FFA500');
  grad.addColorStop(1, '#FFA500');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
