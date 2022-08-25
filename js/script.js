const change = document.getElementById("change-color");
const body = document.querySelector("body");

change.addEventListener("click", changeColor);

function changeColor(){
    const randomColor = `#${generateRandomHexColor().toUpperCase()}`;
    
    body.style.backgroundColor = randomColor;
    change.textContent = `Current Color: ${randomColor}`;
    navigator.clipboard.writeText(randomColor);

    change.style.boxShadow = `10px 10px 12px ${randomColor}`;
}

function generateRandomHexColor(){
   return Math.floor(Math.random()*16777215).toString(16);
}
