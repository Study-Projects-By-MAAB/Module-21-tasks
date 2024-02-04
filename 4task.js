// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWord(str) {
    let strArray = str.split(' ')
    let highest = ''
    for (i = 0; i < strArray.length; i++) {
        if (strArray[i].length > highest.length)
            highest = strArray[i]
    }
    return highest
}

const string = 'I am learning Programming to become a programmer'
const output = longestWord(string)
console.log(output);