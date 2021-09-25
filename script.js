const gameDevID = document.getElementById("game-dev-txt");
const upArrow = document.getElementById("return-top");
// const blinkingID = document.getElementById("blinking-effect");

let i = 0;
const gameDevText = "Game Developer ";
const gameDevTextSpeed = 100;


function blinkStop() {
  setTimeout(function() {
    gameDevID.innerHTML = "";
    typingText();
  }, 2000);
}

function typingText() {
  if (i < gameDevText.length) {
    gameDevID.innerHTML += gameDevText[i];
    i++;

    setTimeout(typingText, gameDevTextSpeed);

    if (i === gameDevText.length) {
      gameDevID.innerHTML += `<span id="blinking-effect" class="blinking-dash text-wow-color">_</span>`;
    }
  }
}

function scrollUpFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Event listeners
window.addEventListener("load", blinkStop);
window.addEventListener("scroll", scrollUpFunction);
upArrow.addEventListener("click", topFunction);
