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
    let s1 = ''
    let s2 = ''
    let arr = []
    for (let i = 0; i < num1 && str1.length; i++) {
        s1 += str1[i]
    }
    for (let i = str2.length - num2; i < str2.length; i++) {
        s2 += str2[i]
    }
    return s1 + s2
}
console.log(combineStrings(1, 3, 'Apple', 'Banana'))
