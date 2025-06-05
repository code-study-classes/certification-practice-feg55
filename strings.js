// const { slice } = require("prelude-ls")

// 1
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

// 2
const combineStrings = (num1, num2, str1, str2) => {
    let s1 = ''
    let s2 = ''
    for (let i = 0; i < num1 && str1.length; i++) {
        s1 += str1[i]
    }
    for (let i = str2.length - num2; i < str2.length; i++) {
        s2 += str2[i]
    }
    return s1 + s2
}
console.log(combineStrings(1, 3, 'Apple', 'Banana'))

// 3
const containsSubstring = (s, s0) => s.includes(s0)
console.log(containsSubstring('Programming is fun', 'gram'))

// 4
const replaceSubstring = (mainStr, clean, newStr) => mainStr.replace(clean, newStr)
console.log(replaceSubstring('OpenAI', 'AI', 'Artificial Intelligence'))

// 5
// const countWordsWithSameLetters = (str) => {
//     const arr = str.split(' ')
//     let sum = 0
//     for (let elem of arr) {
//         if(elem[0].toLowerCase() === elem[elem.length - 1]) {
//             sum++
//         }
//     }
//     return sum
// }

const countWordsWithSameLetters = (str) => str
    .toLowerCase()
    .split(' ')
    .reduce((acc, word) => acc += word[0] === word.at(-1) ? 1 : 0, 0);

console.log(countWordsWithSameLetters('Racecar radar level Civic'))

// 6
// const countWordsWithA = (str) => str
    // .toLowerCase()
    // .split(' ')
    // .reduce((acc, word) => acc += word.includes('a') ? 1 : 0, 0);
// 
const countWordsWithA = (str) => str
    .toLowerCase()
    .split(' ')
    .filter((word) => word.includes("a")).length;
console.log(countWordsWithA('Apple Banana Cherry'))

// 7
const normalizeSpaces = (str) => str
    .split(" ")
    .filter((word) => word !== '').join(' ')
console.log(normalizeSpaces("    kek    pek"))

// 8
const extractFileName = (path) => path
    .split("/")
    .at(-1)
    .split(".")[0];


// const extractFileName = (path) => {
//     let res = path.split("/").at(-1)
//     return res.slice(0, res.indexOf("."))
// };
console.log(extractFileName('C:/Users/username/Documents/example.txt'))

// 9
const encryptSentence = (str) => {
    let arr = str.split('')
    let evenArr = arr.filter((_,indx) => indx % 2 === 0).reverse().join('')
    let oddArr = arr.filter((_, indx) => indx % 2 !== 0).join('')
    // console.log(evenArr + oddArr)
    return oddArr + evenArr

}
console.log(encryptSentence('JavaScript'))

// 10
const checkBrackets = (str) => {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length === 0) {
                return i;
            }
            stack.pop();
        }
    }
    if (stack.length > 0) {
        return -1;
    }
    return 0;
}
console.log(checkBrackets('((a + b) * (c - d))'))