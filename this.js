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

//Pattern problem
// class Student {
//   static count = 0;
//   constructor(name, age, phoneNumber, boardMarks) {
//     this.name = name;
//     this.age = age;
//     this.phoneNumber = phoneNumber;
//     this.boardMarks = boardMarks;
//     Student.count++;
//   }
//   checkMark() {
//     if (this.boardMarks > 40) {
//       console.log(`${this.name} is eligible`);
//     } else {
//       console.log(`${this.name} is not eligible`);
//     }
//   }
//   static PrintCount() {
//     console.log(Student.count);
//   }
// }

// let s1 = new Student("a", 23, 123, 80);
// let s2 = new Student("b", 24, 1233, 30);
// let s3 = new Student("c", 25, 1234, 25);
// let s4 = new Student("d", 26, 1231, 91);
// let s5 = new Student("e", 27, 1235, 80);
// s1.checkMark();
// s2.checkMark();
// s3.checkMark();
// s4.checkMark();
// s5.checkMark();
// Student.PrintCount();
// console.log(Student.count);

//Arrow

// var get = function (a) {
//   return a;
// };

// let get = (a) => a;

// console.log(get(1));

//square
// const square = (a) => a * a;
// console.log(square(4));

// let square = (a) => {
//   return a * a;
// };
// console.log(square(4));

//without parameters
// var a = 4;
// let square = () => {
//   return a * a;
// };
// console.log(square());

//multiply
// let mul = (a, b) => {
//   return a * b;
// };
// console.log(mul(5, 4));

//Nan
// var x = function () {
//   this.val = 1;
//   setTimeout(function () {
//     this.val++;
//     console.log(this.val);
//   }, 1);
// };
// var xx = new x();

// var x = function () {
//   this.val = 1;
//   setTimeout(() => {
//     this.val++;
//     console.log(this.val);
//   }, 1);
// };
// var xx = new x();

//Pattern problem
class Student {
  static count = 0;
  constructor(name, age, phoneNumber, boardMarks) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.boardMarks = boardMarks;
    Student.count++;
  }
  checkMark() {
    if (this.boardMarks > 40) {
      console.log(`${this.name} is eligible`);
    } else {
      console.log(`${this.name} is not eligible`);
    }
  }
  static PrintCount() {
    console.log(Student.count);
  }
  eligibleStudent = (age) => {
    if (this.boardMarks > 40) {
      console.log(
        `${this.name} is eligible sit for company and above required age ${this.age}`
      );
    }
  };
}

//student problem with arrow function
let s1 = new Student("a", 23, 123, 80);
let s2 = new Student("b", 24, 1233, 30);
let s3 = new Student("c", 25, 1234, 25);
let s4 = new Student("d", 26, 1231, 91);
let s5 = new Student("e", 27, 1235, 80);
// s1.checkMark();
// s2.checkMark();
// s3.checkMark();
// s4.checkMark();
// s5.checkMark();
// Student.PrintCount();
// console.log(Student.count);
s1.eligibleStudent();
s2.eligibleStudent();
s3.eligibleStudent();
s4.eligibleStudent();
s5.eligibleStudent();
