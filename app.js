// creates a random addition equation with both addends and the evaulate to the power of 10
const createBasicAddEquation = () => {
    const evaluate = Math.floor(Math.random() * (100 - 20) + 20)
    const firstAddend = Math.floor(Math.random() * ((evaluate - 10) - 10) + 10)
    const equation = `${firstAddend}+${evaluate - firstAddend}=${evaluate}`
    return equation.split('')
}

const check = (answer, guess) => {
    const response = []
    guess.forEach((e, i) => {
        if (e === answer[i]) response.push(e)
        else response.push('x')
    });
    return response
}

const exAnswer = createBasicAddEquation()
const firstGuess = createBasicAddEquation()

console.log("Answer: ", exAnswer.join(''));
console.log("Guess: ", firstGuess.join(''));
console.log("Check: ", check(exAnswer, firstGuess).join(""));