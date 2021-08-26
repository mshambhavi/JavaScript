const arr = ["laptop", 5, "notebook", 7, "pen", "apple"];

//let a = arr.pop();
console.log(arr);

//arr.unshift(a);
//console.log(arr);

//arr.sort();
//console.log(arr);

//const find = arr.findIndex((item) => item === "notebook");
//console.log(find);

const b = arr.indexOf("pen");
if (b > -1) {
  arr.splice(b);
}
console.log(arr);
