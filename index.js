//Detecting button press
const drumList = document.querySelectorAll("button.drum");

for (let i = 0; i < drumList.length; i++) {
  drumList[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//Function determing output sound
function makeSound(keyButton) {

    switch (keyButton) {
        case "w":
          const crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;
  
        case "a":
          const tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "s":
          const tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "d":
          const kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
          break;
      
        case "j":
          const tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;
  
        case "k":
          const tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;
          
        case "l":
          const snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;
  
        default:
          console.log(buttonInnerHTML);
      }
}

// Function determining animation
function buttonAnimation(currentKeyButton) {
    const activeButton = document.querySelector("." + currentKeyButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);
  }