//Gambling Dice Program
let cl = console.log;
let  money = 100;

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

    if (valueNum == 2) {
        // cl(diceResult)
        gameOutcome.textContent = "You've Won";
        money += 10
        gameOutcome.style.color = "green";
    }
    else if(valueNum === "1, 1") {
        // cl(diceResult)
        money += 10
        gameOutcome.textContent = "You've Won";
    }
    else if (valueNum === "1, 1, 1"|| valueNum === "2, 2, 2" || valueNum === "3, 3, 3" || valueNum === "4, 4, 4" || valueNum === "5, 5, 5," || valueNum === "6, 6, 6") {
        // cl(diceResult)
        money += 10 
        gameOutcome.textContent = "You've Won";
        valueNum === "1, 1, 1"
    }
    else {
        gameOutcome.textContent = "You lost";
        gameOutcome.style.color = "red";
        money -= 10
    }
    cl(money)
}