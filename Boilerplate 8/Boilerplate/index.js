const container = document.getElementById('data-container');

/// we need to get the element
const canvas = document.getElementById("canvas");
// then the Canvas Context - this lets us draw
const ctx = canvas.getContext("2d");


let apiData = {};

// Data API Code
async function fetchData() {
    return fetch('https://api.carbonintensity.org.uk/generation')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // data.data isn't normal, just annoying quirk of this AP
            apiData = data.data;

            container.innerHTML = ""; // reset the container

            apiData.generationmix.forEach(item => {
                const element = document.createElement('p');
                element.textContent =
                    `${item.fuel}:  ${item.perc}%`;
                container.appendChild(element);
                // change this to do something more interesting!

            });

            return data;
        })
        .catch(error => {
            console.error(error);
        });
}


// CANVAS Code

// Define the rectangle's initial position and size
let rectX = 100;
let rectY = 100;
let rectWidth = 10;
let rectHeight = 60;

// Define the rotation angle and center of the rectangle
let angleInDegrees = 0;
let speed = 0;
let centerX = rectX + rectWidth / 2;
let centerY = rectY + rectHeight / 2;

// Define a function to draw the rotated rectangle
function drawRotatedRect() {
 // Clear the canvas
 ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Save the current context state
 ctx.save();
  // Translate the context to the center of the rectangle
 ctx.translate(centerX, centerY);
  // Rotate the context by the angle
 ctx.rotate(angleInDegrees * Math.PI / 180);

 //set the color
 ctx.fillStyle = "black";
  // Draw the rectangle centered at the origin (0, 0)
 ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
 ctx.fillRect(-rectHeight / 2, -rectWidth / 2, rectHeight, rectWidth);
  // Restore the previous context state
 ctx.restore();
  // Increase the angle by speed factor
  speed = apiData.generationmix[6].perc;
 angleInDegrees += speed;

}
function init(){
    // use async code to wait for the data, then start the animation
    fetchData().then(data => {
        window.requestAnimationFrame(draw);

        
    })
}

function draw(){
   drawRotatedRect()
  

   window.requestAnimationFrame(draw);
}

function saySomething(){
    console.log("say something")
}



