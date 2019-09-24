var drumbuttonlength = document.querySelectorAll(".drum").length;

for ( i = 0; i < drumbuttonlength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

})
}

document.addEventListener("keypress",function(event){

  makesound(event.key);
  buttonAnimation(event.key);

})

function makesound(key) {
  switch (key) {
    case "w":
var audio = new Audio('sounds/tom-1.mp3');
audio.play();
break;

case "a":
var audio = new Audio('sounds/tom-2.mp3');
audio.play();
break;

case "s":
var audio = new Audio('sounds/tom-3.mp3');
audio.play();
break;

  case "d":
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
break;

    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
break;

      case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
break;

        case "l":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
break;

    default:console.log(innerHTML);

  }

}
function buttonAnimation(activeKey){

  var currentKey = document.querySelector("."+activeKey);
  currentKey.classList.add("pressed");

   setTimeout(function(){
    currentKey.classList.remove("pressed");
    }, 100);

}
