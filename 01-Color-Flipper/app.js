const colors = ["green", "red", "rgb(133,122,200", "f1f5025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", ()=>{
    // console.log(document.body);
    // get random number between 0-3
    const randomNumber = getRandomNumer();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumer (){
    return Math.floor(Math.random() * colors.length);
}