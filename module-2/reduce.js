// const numbers = [1, 2, 3, 4];
// const sumOfNumbers = numbers.reduce((total, currentValue) => {
//   return total + currentValue;
// }, 0)

// console.log(sumOfNumbers)

const arr = [[0, 1], [2, 3], [4, 5]];
const flattenedArr = arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
console.log(flattenedArr)