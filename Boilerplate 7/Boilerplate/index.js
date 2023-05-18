const container = document.getElementById('data-container');

let apiData = {};

/// we need to get the element
const canvas = document.getElementById("canvas");
// then the Canvas Context - this lets us draw
const ctx = canvas.getContext("2d");


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

//canvas code
/*
//square/rectangle
// set a colour, think of it like a brush
ctx.fillStyle = "green";
// draws a rectangle at a coordinate, at a width and height
ctx.fillRect(10, 10, 100, 130);

//line
ctx.strokeStyle = "#0000FF";
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();

//circle
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.arc(100, 100,
   50, // Radius
   0, // Starting angle
   0.5 * Math.PI // end angle (360degrees)
   );
ctx.stroke();

*/

//animation code
/*
let x = 0
function init(){
   window.requestAnimationFrame(draw);
}

function draw(){
   ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
   x++;

   if(x > canvas.width){
       x = 0;
   }

   ctx.beginPath();
   ctx.arc(x, 50,
       40, // Radius
       0, // Starting angle
        2 * Math.PI // end angle (360degrees)
   );
   ctx.stroke();

   window.requestAnimationFrame(draw);
}
*/

//rotation
// Define the rectangle's initial position and size
let rectX = 50;
let rectY = 50;
let rectWidth = 10;
let rectHeight = 50;

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
  // Restore the previous context state
 ctx.restore();
  // Increase the angle by speed factor
  speed = apiData.generationmix[8].perc;
 angleInDegrees += speed;

}

function init(){
    fetchData().then( data => {
        window.requestAnimationFrame(draw);
    }
    )
}

function draw(){
   drawRotatedRect()
   window.requestAnimationFrame(draw);
}
