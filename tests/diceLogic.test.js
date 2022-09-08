const { rollDice, sumDice }     = require('../src/diceLogic')

describe('dice logic', () => {
    describe('given number of dice (X) and number of faces (Y)', () => {
        it('should return an array, X number of dice long, of random integers from 0 to Y', async () => {
            const numOfDice     = 10
            const numOfFaces    = 10

            jest.spyOn(global.Math, 'random').mockReturnValue(numOfFaces / 10)

            const array = await rollDice(numOfDice, numOfFaces)

            expect(array).toEqual([10, 1, 10, 10, 10, 10, 10, 10, 10, 10])

            jest.spyOn(global.Math, 'random').mockRestore()
        })
    })

    describe('given an array of integers', () => {
        it('should return a sum of all integers', async () => {
            const array = [1, 1, 1, 1, 1]

            const sum = await sumDice(array)

            expect(sum).toBe(5)
        })
    })
})