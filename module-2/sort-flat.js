// :::: sort :::::
// const numbers = [60, 11, 10, 35, 21, 15, 13, 24 ]
// const sortedNumbers = numbers.sort((a, b) => a - b);
// const sortedNumbers = numbers.sort((a, b) => b - a);
// console.log(numbers)
// console.log(sortedNumbers)

// const fruits = ["banana", "Apple", "orange", "Coconut"]
// const sortedFruits = fruits.sort()
// const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
// console.log(sortedFruits)



// :::: flat :::::
// const numbersArray = [1, 2, 3, [4, 5]];
// const flattedNumbersArray = numbersArray.flat();
// console.log(flattedNumbersArray)

// const numbersArray = [1, 2, 3, [4, 5, [6, 7, 8]]];
// const flattedNumbersArray = numbersArray.flat(2);
// console.log(flattedNumbersArray)

const numbersArray = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10, [11, 12, 13, [14, 15]]]]]];
const flattedNumbersArray = numbersArray.flat(Infinity);
console.log(flattedNumbersArray)