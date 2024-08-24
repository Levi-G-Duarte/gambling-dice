//Gambling Dice Program
let cl = console.log;
function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const gameOutcome = document.getElementById('gameOutcome');
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        // cl(value);
        images.push(`<img src ="dice-images/${value}.jpg">`);
    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
    if (diceResult == "6, 6, 6") {
        cl(diceResult)
        gameOutcome.textContent = "You've Won"
    }
    if (diceResult == "5, 5, 5") {
        cl(diceResult)
        gameOutcome.textContent = "You've Won"
    }
    if (diceResult === "4") {
        cl(diceResult)
        gameOutcome.textContent = "You've Won"
    }
    if (diceResult == "6, 6, 6") {
        cl(diceResult)
        gameOutcome.textContent = "You've Won"
    }
    if (diceResult == "6, 6, 6") {
        cl(diceResult)
        gameOutcome.textContent = "You've Won"
    }
    else {
        gameOutcome.textContent = "You lost"
    }
}