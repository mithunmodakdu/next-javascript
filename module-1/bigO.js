// const startTime = performance.now();
// console.time("taskTime")

// for(let i = 0; i <=500; i++){
//   console.log(i)
// }
// console.timeEnd("taskTime")

// const endTime = performance.now();
// console.log(`It takes ${endTime - startTime} ms`)



const firstArray = [];
const secondArray = [];

for(let i = 0; i < 600000; i++){
  if(i < 300000){
    firstArray.push(i);
  }

  secondArray.push(i);
}

console.log("first Array length:", firstArray.length)
console.log("second Array length:", secondArray.length)

console.time("map1")
const firstUserList = firstArray.map(number => ({userId: number}));
console.timeEnd("map1")

console.time("map2")
const secondUserList = secondArray.map(number => ({userId: number}))
console.timeEnd("map2")

console.time("find")
const user = secondUserList.find(user => user.userId === 20000);
console.timeEnd("find")

console.time("findWithIndex")
const userWithIndex = secondUserList[500000];
console.timeEnd("findWithIndex")