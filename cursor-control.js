const ball = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.05;


const transitionDuration = 20000;
const seedRangeMax = 1.5;
const seedRangeMin = -1.5;
let currentSeed = 0.3507438910081245;




function setSeedBasedOnMousePosition(event) {
    const gradientElement = document.querySelector('monopo-gradient');

    if (gradientElement) {
        const xNormalized = event.clientX / (window.innerWidth);
        const yNormalized = event.clientY / (window.innerHeight);
        const newTargetSeed = (xNormalized * yNormalized * seedRangeMin * seedRangeMax);

        const startTime = Date.now();
        const animateSeed = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < transitionDuration) {
                const progress = elapsedTime / transitionDuration;
                currentSeed = currentSeed + (newTargetSeed - currentSeed) * progress;
                gradientElement.setAttribute('seed', currentSeed.toString());
                requestAnimationFrame(animateSeed);
            } else {
                currentSeed = newTargetSeed;
                gradientElement.setAttribute('seed', currentSeed.toString());
            }
        };

        animateSeed();
    } else {
        console.error("monopo-gradient element not found");
    }
}

function animate(){
  
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  
  
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
  
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
  setSeedBasedOnMousePosition(event)
})

