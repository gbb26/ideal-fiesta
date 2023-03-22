function displayText(txt)
{
    document.getElementById('display').innerHTML = txt;
}
// var x = document.getElementById("myAudio");

function playAudio(identity) {
     var x = document.getElementById(identity);
    x. play();
}

window.document.onkeyup = function(event) {
    let keystroke = event.key
    if (keystroke === "q" || keystroke === "Q") {
       playAudio("Q");
    } else if (keystroke === "w" || keystroke === "W") {
       playAudio("W");
    } else if (keystroke === "e" || keystroke === "E") {
       playAudio("E");
    } else if (keystroke === "a" || keystroke === "A") {
       playAudio("A");
    } else if (keystroke === "s" || keystroke === "S") {
       playAudio("S");
    } else if (keystroke === "d" || keystroke === "D") {
       playAudio("D");
    } else if (keystroke === "z" || keystroke === "Z") {
       playAudio("Z");
    } else if (keystroke === "x" || keystroke === "X") {
       playAudio("X");
    } else if (keystroke === "c" || keystroke === "C") {
       playAudio("C");
    }
  }