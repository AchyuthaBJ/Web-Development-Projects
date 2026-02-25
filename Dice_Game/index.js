var random_num1 = Math.random();
var random_num2 = Math.random();

var num1 = Math.floor(random_num1*6)+1
var num2 = Math.floor(random_num2*6)+1

const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
img1.setAttribute("src","./images/dice"+num1+".png")
img2.setAttribute("src","./images/dice"+num2+".png")
if (num2>num1){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else if (num1>num2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}