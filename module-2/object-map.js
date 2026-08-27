const course1 = {courseId: "Complete web development"};
const course2 = {courseId: "Next level"};

// const obj = {};
// obj[course1] = {courseId: "level1"}
// obj[course2] = {courseId: "level2"}

// console.log(obj)
// console.log(obj['[object Object]'])


const map = new Map();
// console.log(map)

map.set(1, {courseId: "Complete web development"})
map.set(true, {courseId: "Complete web development"})
map.set(course2, {courseId: "level2"})

// map.clear()
// map.delete(1)
// console.log(map.has(course2))
// console.log(map.size)

// map.forEach((value, key) => console.log("key:", key, "value:", value));
// map.forEach((value, key) => (key.courseId = "shohoj sorol " + key.courseId));

// console.log(map.keys())
// console.log([...map.keys()])

// console.log(map.values())
// console.log([...map.values()])

// for(let key of map.keys()){
//   console.log(key)
// }

// for(let key of map.keys()){
//   key.courseId = "shohoj sorol " + key.courseId
// }
// console.log(map)

// console.log(map.entries())


const courses = [
  ["Level1", "Complete Web Dev"],
  ["Level2", "Next Level"]
]
const coursesMap = new Map(courses);
console.log(coursesMap)



