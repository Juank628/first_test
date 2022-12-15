const  stringLength = (string) => {
    if (string.length < 1 || string.length > 10) throw new Error('string length must be between 1 and 10')
    return string.length
}

const reverseString = (string) => {
    const arr = string.split('')
    return arr.reverse().join('')
}

const capitalize = (string) => {
    const arr = string.split('')
    arr[0] = arr[0].toUpperCase()
    return arr.join('')
}

console.log(capitalize('juan'))

module.exports = { stringLength, reverseString, capitalize}
