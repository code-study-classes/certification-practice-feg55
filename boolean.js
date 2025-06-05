// 1
const isPositive = (x) => x > 0 ? true : false
console.log(isPositive(0))

// 2
const isOdd = (x) => x % 2 !== 0 ? true : false
console.log(isOdd(5))

// 3
const checkInequality = (a, b) => a > 2 && b <= 3? true : false
console.log(checkInequality(4, 3))

// 4
const checkInequality2 = (a, b) => a >= 0 && b < -2? true : false
console.log(checkInequality2(-1, -2))

// 5
const checkBetweenNumbers = (a, b, c) => a < b && b < c ? true : false
console.log(checkBetweenNumbers(1, 5, 8))

// 6
const checkOddThreeDigitNumber = (x) => x % 2 !== 0 && Math.floor(x / 100) > 0 ? true : false
console.log(checkOddThreeDigitNumber(135))

// 7
const checkUniqueDigits = (x) => {
    let strNum = Math.abs(x).toString()
    if (strNum.length !== 3) {
        return false;
    }
    if (strNum[0] === strNum[1] || strNum[1] === strNum[2] || strNum[0] === strNum[2]) {
        return false
    }
    return true
}
console.log(checkUniqueDigits(122))

// 8
const isSecondQuadrant = (x, y) => x < 0 && y > 0 ? true : false
console.log(isSecondQuadrant(-2, 3))

// 9
const isIsoscelesTriangle = (a, b, c) => a === b || b === c || a === c ? true : false
console.log(isIsoscelesTriangle(3, 4, 3))