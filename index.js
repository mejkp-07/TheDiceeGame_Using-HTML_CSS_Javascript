var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if( randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").textContent = "Draw"
}
if(randomNumber1 === 1){
    document.getElementsByClassName("dice")[0].innerHTML = "<p>Player 1</p><img class='img1' src='images/dice1.png'>";
}
else if(randomNumber1 === 2){
    document.getElementsByClassName("dice")[0].innerHTML = "<p>Player 1</p><img class='img1' src='images/dice2.png'>";
}
else if(randomNumber1 === 3){
    document.getElementsByClassName("dice")[0].innerHTML = "<p>Player 1</p><img class='img1' src='images/dice3.png'>";
}
else if(randomNumber1 === 4){
    document.getElementsByClassName("dice")[0].innerHTML = "<p>Player 1</p><img class='img1' src='images/dice4.png'>";
}
else if(randomNumber1 === 5){
    document.getElementsByClassName("dice")[0].innerHTML = "<p>Player 1</p><img class='img1' src='images/dice5.png'>";
}
else if(randomNumber1 === 6){
    document.getElementsByClassName("dice")[0].innerHTML = "<p>Player 1</p><img class='img1' src='images/dice6.png'>";
}

if(randomNumber2 === 1){
    document.getElementsByClassName("dice")[1].innerHTML = "<p>Player 2</p><img class='img2' src='images/dice1.png'>";
}
else if(randomNumber2 === 2){
    document.getElementsByClassName("dice")[1].innerHTML = "<p>Player 2</p><img class='img2' src='images/dice2.png'>";
}
else if(randomNumber2 === 3){
    document.getElementsByClassName("dice")[1].innerHTML = "<p>Player 2</p><img class='img2' src='images/dice3.png'>";
}
else if(randomNumber2 === 4){
    document.getElementsByClassName("dice")[1].innerHTML = "<p>Player 2</p><img class='img2' src='images/dice4.png'>";
}
else if(randomNumber2 === 5){
    document.getElementsByClassName("dice")[1].innerHTML = "<p>Player 2</p><img class='img2' src='images/dice5.png'>";
}
else if(randomNumber2 === 6){
    document.getElementsByClassName("dice")[1].innerHTML = "<p>Player 2</p><img class='img2' src='images/dice6.png'>";
}

