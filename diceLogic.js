export function rollDice(numOfDice, numOfSides) {
    const rolls = []

    for(let i = 0; i < numOfDice; i++) {
        const roll = Math.ceil(Math.random() * numOfSides)

        rolls.push(roll)
    }

    return rolls
}

export function sumDice(rolls) {
    let sum = 0

    rolls.forEach(roll => {
        sum += roll
    })

    return sum
}