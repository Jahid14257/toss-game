//---------------First Dice

var randomNumbere1 = Math.floor((Math.random()*6)+1);

var rendomDiceImage1 = "dice_"+ randomNumbere1 + ".png";

var randomImageSource1 = "Photo/" + rendomDiceImage1;

var image1 = document.querySelector("#i1");
image1.setAttribute("src", randomImageSource1);

//---------------Secand Dice

var randomNumbere2 = Math.floor((Math.random()*6)+1);

var rendomDiceImage2 = "dice_"+ randomNumbere2 + ".png";

var randomImageSource2 = "Photo/" + rendomDiceImage2;

var image2 = document.querySelector("#i2");
image2.setAttribute("src", randomImageSource2);

var winner = document.querySelector("h2");


if (randomNumbere1 > randomNumbere2) {
    winner.innerHTML = "🏆 Player 1 Win";
}
else if (randomNumbere1 < randomNumbere2) {
    winner.innerHTML = "Player 2 Win 🏆";
}
else {
    winner.innerHTML = "Drow";
}
