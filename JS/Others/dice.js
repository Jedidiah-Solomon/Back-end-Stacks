function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const congratsDiv = document.getElementById('congrats');

    const values = [];
    const images = [];
    let isAllSixes = true;

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice ${value}" >`);
        if (value !== 6) {
            isAllSixes = false;
        }
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');

    if (isAllSixes) {
        congratsDiv.textContent = 'Congratulations! You rolled all 6s!';
        congratsDiv.classList.remove('failure');
        congratsDiv.classList.add('success');
    } else {
        congratsDiv.textContent = 'Try again! You need all 6s!';
        congratsDiv.classList.remove('success');
        congratsDiv.classList.add('failure');
    }
}
