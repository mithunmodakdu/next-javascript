// const arr = Array.from({length: 5});
// console.log(arr)

// const arr = Array.from({length: 5}).fill("M");
// console.log(arr)

// const arr = Array.from({length: 5}, (_, index) => index);
// console.log(arr)

const arr = Array.from({length: 5}, (_, index) => index + 1);
console.log(arr)