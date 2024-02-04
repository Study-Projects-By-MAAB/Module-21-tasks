// Write a function to convert temperature from Celsius to Fahrenheit.

function celsToFar(cels) {
    const far = (cels * 9 / 5) + 32
    return far
}

const cels = 30;
const result = celsToFar(cels)
console.log(result);