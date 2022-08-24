export function rollDice(numOfDice, numOfSides) {
    const rolls = []

    for(let i = 0; i < numOfDice; i++) {
        const roll = Math.ceil(Math.random() * numOfSides)

        rolls.push(roll)
    }

    return rolls
}