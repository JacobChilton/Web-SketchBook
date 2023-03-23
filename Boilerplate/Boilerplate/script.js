console.log("Hello from index again");

const message = "You clicked on button one!";

function one() {
    const messageTwo = "You clicked on button one! Displaying message two";
    alert(messageTwo);
}

let isClicked = false;
const element = document.getElementById("twoContent");
const button = document.getElementById("btnTwo");

element.innerHTML = "This text can change";

function alterText() {
    if (isClicked) {
        isClicked = false;
        element.innerHTML = "This text can change"
        button.innerHTML = "Change text";
    } else {
        isClicked = true;
        element.innerHTML = "This text has changed"
        button.innerHTML = "Change text back";
    }
}

const light = document.getElementById("bulb");
const element2 = document.getElementById("threeContent");
const button1 = document.getElementById("btnOn");
let isClicked2 = false;

function AlterBulb() {

    console.log("altering bulb");
    
    if (isClicked2 == true){
        isClicked2 = false;
        element2.innerHTML = "Light's On";
        button1.innerHTML = "Turn Light Off";
        light.src = "img/lightBulbOn.png";
    
    } else {
        isClicked2 = true;
        element2.innerHTML = "Light's Off";
        button1.innerHTML = "Turn light On";
        light.src = "img/lightBulbOff.png";


    }

}


/*let isClicked = false;
const element = document.getElementById("twoContent");
const button = document.getElementById("btnTwo");

function alterBulb() {
    if (isClicked) {
        isClicked = false;
        element2.innerHTML = "light is Off"
        light.src = "img/lightBulbOff.png";
        button2.innerHTML = "Light On";
    
    } else {
        isClicked = true;
        element.innerHTML = "Turn Light Off"
        light.src = "img/lightBulbOn.png";
        button.innerHTML = "Light Off";
    }
}
*/

