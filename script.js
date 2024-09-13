//Gambling Dice Program
let cl = console.log;
let money = 100;
// Bet Raises
let lowBet = 5;
let mediumBet = 10;
let highBet = 20;
let maxBet = 50;

function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const gameOutcome = document.getElementById('gameOutcome');
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        cl(diceResult)
        values.push(value);
        images.push(`<img src ="dice-images/${value}.jpg">`);
    }
    diceResult.textContent = `${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
    const valueNum = values.join(", ");
    ////////////////////////////////////////////////// SCORE CLASS LOGIC
    if (valueNum == 2) {
        gameOutcome.textContent = "You've Won";
        money += 10
        gameOutcome.style.color = "green";
        gameOutcome = true
    }
    else if(valueNum === "1, 1") {
        money += 10
        gameOutcome.textContent = "You've Won";
        gameOutcome = true
    }
    else if (valueNum === "1, 1, 1"|| valueNum === "2, 2, 2" || valueNum === "3, 3, 3" || valueNum === "4, 4, 4" || valueNum === "5, 5, 5," || valueNum === "6, 6, 6") {
        money += 10 
        gameOutcome.textContent = "You've Won";
        gameOutcome.style.color = "green";
        gameOutcome = true
    }
    else {
        gameOutcome.textContent = "You lost";
        gameOutcome.style.color = "red";
        gameOutcome = false
        money -= 10
    }


    //////////////////////////////////////////////////// NUMDICE BET LOGIC


    cl(money)
}