const countUppercaseLetters = (str) => {
    let mass = str.split('')
    let sum = 0
    for (let elem of mass) {
        if (elem === elem.toLowerCase()) {
            sum += 1
        }
    }
    return sum
}
console.log(countUppercaseLetters("DDDdd"))

const combineStrings = (num1, num2, str1, str2) => {
    // let arr1 = str1.split('')
    // let arr2 = str2.split('')
    let arr = []
    for (let i = 0; i < num1; i++) {
        arr.push(str1[i])
    }
    for (let i = str2.length - 1; str2.length - num2 >= 0; i--) {
        arr.push(str2[i])
    }
    return arr.join('')
}
console.log(combineStrings(3, 2, 'Hello', 'World'))