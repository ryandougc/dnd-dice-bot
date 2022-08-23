const numberOfDice = 10
const numberOfDiceSides = 20

const rolls = []

function rollDice(numOfDice, numOfSides) {
    for(let i = 0; i < numOfDice; i++) {
        const roll = Math.ceil(Math.random() * numOfSides)

        rolls.push(roll)
    }
}

rollDice(numberOfDice, numberOfDiceSides)

console.log(rolls)