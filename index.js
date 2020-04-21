 document.querySelectorAll("button")[0].addEventListener("click", function () {
     var audio = new Audio("sounds/tom-1.mp3");
     audio.play();
     //w button action
 })
 // keyboard listner for w
 document.addEventListener("keypress", listner);
function listner(event){
    if (event.key == "w"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        animation(event.key);
    }
}
// a button press
 document.querySelectorAll("button")[1].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
     //a button action
 })
 // a keyboard press
 document.addEventListener("keypress", listner1);
 function listner1(event){
     if (event.key == "a"){
         var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         animation(event.key);
     }
 }
 // s button press
 document.querySelectorAll("button")[2].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    //s button action
 })
 // s keyboard press
 document.addEventListener("keypress", listner2);
 function listner2(event){
     if (event.key == "s"){
         var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
         animation(event.key);
     }
 }
 // d button press
 document.querySelectorAll("button")[3].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
     //d button action
 })
 // d keyboard press
 document.addEventListener("keypress", listner3);
 function listner3(event){
     if (event.key == "d"){
         var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         animation(event.key);
     }
 }
 // j button press
 document.querySelectorAll("button")[4].addEventListener("click", function () {
    var audio = new Audio("sounds/crash.mp3");
     audio.play();
    //j button action
})
// j keyboard press
document.addEventListener("keypress", listner4);
function listner4(event){
    if (event.key == "j"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        animation(event.key);
    }
}
// k button press
document.querySelectorAll("button")[5].addEventListener("click", function () {
    var audio = new Audio("sounds/kick-bass.mp3");
     audio.play();
   //k button action
})
// k keyboard press
document.addEventListener("keypress", listner5);
function listner5(event){
    if (event.key == "k"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        animation(event.key);
    }
}
// l button press
document.querySelectorAll("button")[6].addEventListener("click", function () {
    var audio = new Audio("sounds/snare.mp3");
     audio.play();
     animation(button);
    //l button action
}) 
// l keyboard press
document.addEventListener("keypress", listner6);
function listner6(event){
    if (event.key == "l"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        animation(event.key);
    }
}
// button animation after pressed
function animation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
