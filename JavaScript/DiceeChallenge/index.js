var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var firstImg = document.querySelector(".img1");
var firstImgName = "dice" + randomNumber1 + ".png";
var img1Source = "images/" + firstImgName
firstImg.setAttribute("src", img1Source);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var secondImg = document.querySelector(".img2");
var secondImgName = "dice" + randomNumber2 + ".png";
var img2Source = "images/" + secondImgName
secondImg.setAttribute("src", img2Source);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
  