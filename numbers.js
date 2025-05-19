export const calculateDistance = (x1, x2) => x1 >= x2 ? x1 - x2 : x2 - x1;

console.log(calculateDistance(5, 9))

// if (x1 > x2) {
//     return x1 - x2
// } else if (x1 < x2) {
//     return x2 - x1
// } else {return 0}

export const calculateSegmentProduct = (A, B, C) => {
    if (C < A || C < B) {
    let AC = calculateDistance(A, C)
    let BC = calculateDistance(C, B)
    return AC * BC
    } else {return "Incorrect"}
}
console.log(calculateSegmentProduct(5, 1, 4))

export const calculateKilobytes = (bytes) => {
return Math.floor(bytes/1024)
}
console.log(calculateKilobytes(4096))

export const calculateSegments = (first, second) => {
    return Math.floor(first/second)
}
console.log(calculateSegments(10, 3))

// const calculateDigitSum = (num) => {
// let res = num.toString().split('')
// let sum = 0
// sum = res[0] + res[1]
// return sum
// }
console.log(calculateDigitSum(21))




