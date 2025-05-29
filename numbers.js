// 1
export const calculateDistance = (x1, x2) => x1 >= x2 ? x1 - x2 : x2 - x1;

console.log(calculateDistance(5, 9))

// if (x1 > x2) {
//     return x1 - x2
// } else if (x1 < x2) {
//     return x2 - x1
// } else {return 0}

// 2
export const calculateSegmentProduct = (A, B, C) => {
    if (C < A || C < B) {
    let AC = calculateDistance(A, C)
    let BC = calculateDistance(C, B)
    return AC * BC
    } else {return "Incorrect"}
}
console.log(calculateSegmentProduct(5, 1, 4))
// 3
export const calculateKilobytes = (bytes) => {
return Math.floor(bytes/1024)
}
console.log(calculateKilobytes(4096))
// 4
export const calculateSegments = (first, second) => {
    return Math.floor(first/second)
}
console.log(calculateSegments(10, 3))
// 5
const calculateDigitSum = (num) => {
let res = num.toString().split('')
let sum = 0
sum = Number(res[0]) + Number(res[1])
return sum
}
console.log(calculateDigitSum(21))

// 6
const swapHundredsAndTens = (x) => {
    let string = x.toString()
    let res = string[1]+string[0]+string[2]
    return Number(res)
}
console.log(swapHundredsAndTens(123))

// 8
const getFullHours = (x) => Math.floor(x / 3600)
console.log(getFullHours(7200))

// 9
const getDayOfWeek = (x) => Math.floor(x % 7)
console.log(getDayOfWeek(365))