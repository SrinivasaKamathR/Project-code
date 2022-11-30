//1.call- paas as it is

// var obj = {
//   num: 2,
// };

// var addtoThis = function (a) {
//   return this.num + a;
// };

// console.log(addtoThis.call(obj, 3));

// var obj = {
//   num: 2,
// };

// var addtoThis = function (a, b, c) {
//   return this.num + a + b + c;
// };

// console.log(addtoThis.call(obj, 3, 1, 2));

//2.Apply-- pass array of arguments
// var obj = {
//   num: 2,
// };

// var addtoThis = function (a, b, c) {
//   return this.num + a + b + c;
// };

// console.log(addtoThis.apply(obj, [1, 2, 3]));

//3.bind will return new function
// var obj = {
//   num: 2,
// };

// var addtoThis = function (a, b, c) {
//   return this.num + a + b + c;
// };

// let a = addtoThis.bind(obj);
// console.log(a(1, 2, 3));

//4.Create a new object called Student with age 20 ,
//write a function which prints the age of the student from the student object
// let Student = {
//   age: 18,
// };

// function printAge() {
//   console.log(this.age);
// }
// let s1 = printAge.bind(Student);
// s1();

//function Currying--using bind
// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this);
// multiplyByTwo(2, 3);

//currying using closure
function mult(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
let res = mult(1)(2)(3);
console.log(res);
