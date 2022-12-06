//hoisting

// console.log(x);
// console.log(getName);

// var x = 7;

// var getName = () => {
//   console.log("Namaste JS");
// };
// getName();

// console.log(window);

// var a = 10;
// function b() {
//   var x = 10;
// }

//example of this
// var a = 2;
// var c = 2;
// function b() {
//   var x = 2;
//   var c = 4;
//   console.log(c);
// }
// console.log(a);
// console.log(this.a);
// console.log(this.c);
// console.log(this.x);
// console.log(window.a);
// console.log(window.x);
// console.log(b());

// function a() {
//   function c() {
//     console.log(b);
//   }
//   c();
// }
// var b = 10;
// a();

// function outerfunction() {
//   console.log(a);

//   var a = 10;

//   innerfunction();

//   function innerfunction() {
//     console.log(a);

//     console.log(window.a);

//     console.log(this.a);
//   }
// }

// var a = 7;

// var b = 3;

// outerfunction();

//let var const

// console.log(b);

// let a = 10;
// console.log(a);
// var b = 100;

//Reference error
// console.log(a);
// let a = 10;

//Syntax Error
// let a = 10;
// let a = 20;
// console.log(a);

//Type error
// const a = 10;
// a = 11;
// console.log(a);

//iterating object
// var obj = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
//   key4: "value4",
// };
//get array of keys and values in array
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// var array = Object.keys(obj);
// array.forEach((key) => {
//   console.log(key, obj[key]);
// });

// console.log("a");
// console.log("b");
// setTimeout(() => console.log("c"), 1000);
// console.log("d");

// console.log("a");
// console.log("b");
// setTimeout(() => console.log("c"), 1000);
// setTimeout(() => console.log("c"), 0);
// console.log("d");

//Array.map WithOut inbuilt functions
// var a = [1, 2, 3, 4, 5];
// var b = [];
// for (let i = 0; i < a.length; i++) {
//   b.push(a[i] * 2);
// }
// console.log(b);

//Array.map with map
// var a = [1, 2, 3, 4, 5];
// var b = a.map((n) => {
//   return n * 2;
// });
// console.log(b);

//block
// if (true) {
//   var a = 10;
//   console.log(a);
// }

//block scope--varibales access within block

//shadowing with var
// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//shadowing with let
// let b = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(b);

//closures
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);

// z();

//return
// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// console.log(z);

// z();

//gotchas
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// console.log(z);

// z();

//scope chain

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     a = 100;
//     y();
//   }
//   x();
// }

// z();

// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);

// function x() {
//   let a = 10;

//   function y() {
//     console.log(a);
//   }

//   return y;
// }
// const z = x();
// console.log(z());
// function x() {
//   let a = 10;

//   function y() {
//     console.log(a);
//   }

//   a = 50;

//   return y;
// }

// const z = x();

// console.log(z());

//advanced closure and setTimeout

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 2000);
//   console.log("namste");
// }
// x();

//1,2,3,4,5
// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

//6 6 6 6 6
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

//with var
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
// }
// x();

//done coding and not defined error
// function y() {
//   setTimeout(() => console.log(a), 1000);
//   console.log("Done Coding");
// }

// y();

// function y() {
//   for (var i = 1; i < 6; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }

//   console.log("Done Coding");
// }

// y();

// function y() {
//   for (let i = 1; i < 6; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
//   console.log("Done Coding");
// }
// y();

//problem
// const fun = (arr) => {
//   var count = 0;
//   return () => {
//     console.log("Hello" + " " + arr[count]);
//     count++;
//   };
// };
// let name = fun(["ram", "Shyam"]);
//name(); // Print Hello Ram
//name(); //print Hello Shyam

//function statement
// function a() {
//   console.log("Hello");
// }
// a();

//function expression
// let a = function () {
//   console.log("Hello");
// };
// a();

//Named function expression
// let a = function b() {
//   console.log("Hello");
// };
// a();

//First class functions

// a();
// b();
// function a() {
//   console.log("inside a");
// }
// var b = function () {
//   console.log("inside b");
// };

// function add(c) {
//   return (val) => {
//     return val + c;
//   };
// }

// let res = add(3)(2);
// console.log(res);

//currying add three variables
// let a = (x) => {
//   return (y) => {
//     return (z) => {
//       return x + y + z;
//     };
//   };
// };
// let res = a(1)(2)(3);
// console.log(res);

//this keyword
// this.table = "window table";
// const cleanTable = function () {
//   console.log(`cleaning ${this.table}`);
// };
// cleanTable();
// console.log(window.table);

// this.garage = {
//   table: "Garage",
//   cleanTable() {
//     console.log(`cleaning ${this.table}`);
//   },
// };
// this.garage.cleanTable();
// console.log(window.garage.table);

// let johnRoom = {
//   table: "john table",
//   cleanTable() {
//     console.log(`cleaning ${this.table}`);
//   },
// };
// johnRoom.cleanTable();
// console.log(johnRoom.table);

//callback
// setTimeout(() => {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

//javascript is synchronus and single threaded

//closure

// let count = 0;

// var btn = document.getElementById("clickMe");
// btn.addEventListener("click", () => {
//   console.log("Hello", ++count);
// });

//advance interview ques forms closures
// function attachevent() {
//   let count = 0;
//   var btn = document.getElementById("clickMe");
//   btn.addEventListener("click", () => {
//     console.log("Hello", ++count);
//   });
// }
// attachevent();

//garbage collection&7 remove event listeners

//spread operator
//obj
// const obj = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj1 = { ...obj, key1: "value100", key3: "value3" };
// obj1.key1 = "value100";
// console.log(obj);
// console.log(obj1);

//spread array
// const arr = [1, 2];
// const arr1 = [3, 4];
// const arr3 = [...arr, ...arr1];
// console.log(arr3);

// studentobj = {
//   yash: 26,
//   vaibhav: 24,
//   rajesh: 25,
// };

// let a = Object.values(studentobj);
//console.log(a);

// function findAverage(a) {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   console.log(sum / 3);
// }
// findAverage(a);
