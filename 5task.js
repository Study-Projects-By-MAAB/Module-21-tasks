// Generate a random number between 10 to 20.


function ranNum(min, max) {
    const result = Math.floor(Math.random() * (max - min + 1) + min)
    return result
}

let min = 10
let max = 20
const generate = ranNum(min, max)
console.log(generate);
