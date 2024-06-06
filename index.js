var Rng1 = Math.floor(Math.random() * 6) + 1; //rng for 1-6


var randomDiceImage = "dice" + Rng1 + ".png"; //ties number to dice number .png

var randomImageSource = "images/" +randomDiceImage;

var image1 = document.querySelectorAll("img") [0]; //reminder to look up why we use that 0 in brackets

image1.setAttribute("src", randomImageSource);

var Rng2 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource2 = "images/dice" + Rng2 + ".png" ;

document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2);

if (Rng1 > Rng2) {

    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if(Rng2 > Rng1) {

    document.querySelector("h1").innerHTML = "Player 2 Wins!";

}

else {

    document.querySelector("h1").innerHTML = "Draw";
}