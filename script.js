//Gambling Dice Program
let cl = console.log;

function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const gameOutcome = document.getElementById('gameOutcome');
    const values = [];
    const images = [];
    const money = 100

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
        gameOutcome.style.color = "green";
    }
    else if(valueNum === "1, 1") {
        // cl(diceResult)
        gameOutcome.textContent = "You've Won";
    }
    else if(valueNum === "3, 3, 3") {
        // cl(diceResult)
        gameOutcome.textContent = "You've Won";
    }
    else {
        gameOutcome.textContent = "You lost";
        gameOutcome.style.color = "red";
        money += 10 
    }
}