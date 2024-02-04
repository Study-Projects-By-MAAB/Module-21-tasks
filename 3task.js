// Write a function to count the number of vowels in a string.

function vowelsCount(str) {
    let count = 0;
    for (alph of str) {
        if (alph === 'a' || alph === 'e' || alph === 'i' || alph === 'o' || alph === 'u') {
            count++
        }
    }
    return count
}

const string = 'Write a function to count the number of vowels in a string.'
const result = vowelsCount(string)
console.log(result);