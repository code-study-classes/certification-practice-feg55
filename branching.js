// 1
const incrementIfPositive = (x) => x > 0 ? x += 1 : x
console.log(incrementIfPositive(5))

// 2
const getIndexOfSmallerNumber = (x, y) => x > y ? 2 : 1
console.log(getIndexOfSmallerNumber(5, 8))

// 3
const findMiddleNumber = (x, y, z) => [x, y, z].sort()[1]
console.log(findMiddleNumber(5, 8, 3))

// 4
const findUniqueNumber = (a, b, c, d) => a === b ? (a === c ? 4 : 3) : (a === c ? 2 : 1)
console.log(findUniqueNumber(5, 8, 3))

// 5
const calculateF = (x) => x < 0 ? 0 : (Math.floor(x) % 2 === 0 ? 1 : -1)
console.log(calculateF(1.5))