// :::::::: new Set(), add, size ::::::::
// Main feature of set is that it does not store duplicate values

// const set = new Set();
// console.log(set)

// set.add("Mango");
// set.add("Banana");
// set.add("Apple");
// set.add("Apple");
// set.add("Mango");
// console.log(set)
// console.log(set.size)


// ::::::::
// const mithun = {userName: "Mithun Modak"};
// const rakib = {userName: "Tanzim Ahmed Rakib"};
// const probash = {userName: "Probash Khan"};

// const set = new Set();

// set.add(mithun);
// set.add(rakib);
// set.add(probash);
// set.add(mithun);
// console.log(set)
// console.log(set.size)


// :::::::: set & array ::::::::::::
// const arr = ['Mango', 'Banana', 'Apple']
// const set = new Set(arr);

// set.push('Tomato') TypeError: set.push is not a function
// set.add('Tomato')

// only forEach works with set. other array methods like map, filter do not work with set
// set.forEach(value => console.log(value))
// forEach does not return anything.

// console.log(set)

// const arrayFromSet = Array.from(set);
// console.log((arrayFromSet));



// :::::::: has ::::::::::::
// has returns true or false

// const arr = ['Mango', 'Banana', 'Apple']
// const set = new Set(arr);
// console.log(set.has('Banana'));
// console.log(set.has('Ban'));



// :::::::: delete ::::::::::::
// if value exists, delete returns true and delete the value
// if value does not exist, delete returns false

// const arr = ['Mango', 'Banana', 'Apple']
// const set = new Set(arr);
// console.log(set.delete('Banana'));
// console.log(set.has('Ban'));
// console.log(set)



// :::::::: Array vs Set to remove duplicate elements ::::::::::::

const arr = ['Mango', 'Banana', 'Apple', 'Mango']

// :: Brute Force ::
// const removeDuplicateElement = (arr) =>{
//   const newArr = [];

//   arr.forEach(element => {
//     if(!newArr.includes(element)){
//       newArr.push(element)
//     }
//   })

//   return newArr;
  
// }

// console.log(arr)
// console.log(removeDuplicateElement(arr))

// :: Set Implementation ::
const removeDuplicateElementBySet = (arr) =>{
  const set = new Set(arr);
  return Array.from(set);
}

console.log(arr)
console.log(removeDuplicateElementBySet(arr))