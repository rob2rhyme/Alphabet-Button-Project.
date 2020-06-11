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
      var alphaA = new Audio("a.mp3");
      alphaA.play();
      break;

    case "b":
      var alphaB = new Audio("b.mp3");
      alphaB.play();
      break;

    case "c":
      var alphaC = new Audio('c.mp3');
      alphaC.play();
      break;

    case "d":
      var alphaD = new Audio('d.mp3');
      alphaD.play();
      break;

    case "e":
      var alphaE = new Audio('e.mp3');
      alphaE.play();
      break;

    case "f":
      var alphaF = new Audio('f.mp3');
      alphaF.play();
      break;

    case "g":
      var alphaG = new Audio('g.mp3');
      alphaG.play();
      break;

        case "h":
      var alphaH = new Audio('h.mp3');
      alphaH.play();
      break;

        case "i":
      var alphaI = new Audio('i.mp3');
      alphaI.play();
      break;

        case "j":
      var alphaJ = new Audio('j.mp3');
      alphaJ.play();
      break;

        case "k":
      var alphaK = new Audio('k.mp3');
      alphaK.play();
      break;

        case "l":
      var alphaL = new Audio('l.mp3');
      alphaL.play();
      break;

        case "m":
      var alphaM = new Audio('m.mp3');
      alphaM.play();
      break;

        case "n":
      var alphaN = new Audio('n.mp3');
      alphaN.play();
      break;

  case "o":
      var alphaO = new Audio('o.mp3');
      alphaO.play();
      break;


    case "p":
      var alphaP = new Audio('p.mp3');
      alphaP.play();
      break;

        case "q":
      var alphaQ = new Audio('q.mp3');
      alphaQ.play();
      break;

        case "r":
      var alphaR = new Audio('r.mp3');
      alphaR.play();
      break;

        case "s":
      var alphaS = new Audio('s.mp3');
      alphaS.play();
      break;

        case "t":
      var alphaT = new Audio('t.mp3');
      alphaT.play();
      break;

        case "u":
      var alphaU = new Audio('u.mp3');
      alphaU.play();
      break;

        case "v":
      var alphaV = new Audio('v.mp3');
      alphaV.play();
      break;

        case "w":
      var alphaW = new Audio('w.mp3');
      alphaW.play();
      break;

        case "x":
      var alphaX = new Audio('x.mp3');
      alphaX.play();
      break;

        case "y":
      var alphaY = new Audio('y.mp3');
      alphaY.play();
      break;

        case "z":
      var alphaZ = new Audio('z.mp3');
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
