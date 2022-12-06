// const arr = ["apple", "orange", "mango"];

// arr.unshift("grapes");
// console.log(arr);

// arr.push("banana");
// console.log(arr);

// arr.pop();
// console.log(arr);

// console.log(Array.isArray(arr));

// console.log(arr.indexOf("apple"));

//Max and min in array

// function MaxandMin(arr) {
//   console.log(Math.max(...arr));
//   console.log(Math.min(...arr));
// }

// const arr = [1, 2, 3, 4, 5];
// MaxandMin(arr);

//without inbuilt
// function MaxandMin(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   console.log(max);
//   console.log(min);
// }
// const arr = [1, 2, 3, 4, 5];
// MaxandMin(arr);

//objects
// const person = {
//   name: "Srinivas",
//   age: 25,
//   hobbies: ["playing cricket", "travelling", "watching movies"],
//   address: {
//     city: "banglore",
//     state: "karnataka",
//   },
// };

// console.log(person);
// console.log(person.hobbies[2]);
// console.log(person.address.state);

// const { age } = person;
// console.log(age);

// const {
//   address: { state },
// } = person;
// console.log(state);

// const { hobbies } = person;
// console.log(hobbies[0]);

// const todos = [
//   {
//     id: 1,
//     name: "Srinivas",
//     age: 25,
//     graduationCompleted: true,
//   },
//   {
//     id: 2,
//     name: "sanjay",
//     age: 21,
//     graduationCompleted: false,
//   },
//   {
//     id: 3,
//     name: "tanay",
//     age: 23,
//     graduationCompleted: true,
//   },
// ];

// console.log(todos);
//convert to json
// let jsond = JSON.stringify(todos);
// console.log(jsond);

// for (let i = 0; i < todos.length; i++) {
//   // console.log(todos[i]);
//   console.log(todos[i].id);
// }

// let i = 0;
// while (i < todos.length) {
//   console.log(todos[i].id);
//   i++;
// }
// for (let ids of todos) {
//   console.log(ids.id);
// }

//map
// let todo = todos.map((ids) => {
//   return ids.id;
// });
// console.log(todo);

// function convertTemp(degree, temp) {
//   let res =
//     temp == "K"
//       ? 273 + degree + temp
//       : temp == "C"
//       ? degree - 273 + temp
//       : "inavlid";
//   console.log(res);
// }
// convertTemp(35, "K");
// convertTemp(308, "C");

//Constructor
// function student(firstName, lastName, rollNumber, sex, age, birthYear) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.rollNumber = rollNumber;
//   this.sex = sex;
//   this.age = age;
//   this.birthYear = birthYear;
//   this.getFullName = function () {
//     if (age > 18) {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
//   this.getBirthYear = function () {
//     return `${this.birthYear} ${this.getFullName()}`;
//   };

//   this.eligible = function () {
//     if (age >= 18) {
//       return "eligible to vote";
//     } else {
//       return "not eligible";
//     }
//   };
// }

//outside define function
// student.prototype.vote = function vote() {
//   if (student1.age > 18) {
//     return `${this.firstName} eligible to vote`;
//   } else {
//     return `${this.firstName}  not eligible to vote`;
//   }
// };
// let student1 = new student("Srinivasa", "Kamath", 21, "Male", 25, 1997);
// let student2 = new student("Sanjay", "Kamath", 20, "Male", 24, 1998);
// console.log(student1.getFullName());
// console.log(student2.getBirthYear());
// console.log(student1.eligible());
// console.log(student1.vote());

//class
// class student {
//   constructor(firstName, lastName, rollNumber, sex, age, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.rollNumber = rollNumber;
//     this.sex = sex;
//     this.age = age;
//     this.birthYear = birthYear;
//   }
//   getFullName() {
//     if (this.age > 18) {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
//   getBirthYear() {
//     return `${this.birthYear} ${this.getFullName()}`;
//   }
// }
// student.prototype.vote = function vote() {
//   if (student1.age >= 18) {
//     return `${this.getFullName()} is eligible to vote`;
//   } else {
//     return `${this.getFullName()} is not eligible to vote`;
//   }
// };
// let student1 = new student("Srinivasa", "Kamath", 21, "Male", 25, 1997);
// let student2 = new student("Sanjay", "Kamath", 20, "Male", 24, 1998);
// console.log(student1.getFullName());
// console.log(student2.getBirthYear());
// console.log(student1.vote());

//inheritance
// class User {
//   static count = 0;
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     User.count = User.count + 1;
//   }
//   register() {
//     console.log(`${this.name} is registered AND Counter Value is${User.count}`);
//   }
// }

// class member extends User {
//   constructor(name, email, password, age) {
//     super(name, email, password);
//     this.age = age;
//   }
//   print() {
//     console.log(`${this.name} age is ${this.age}`);
//   }
// }
// let user1 = new User("Srinivas", "sr@gmail.com", "12345");
// let user2 = new member("Srinivas", "sr@gmail.com", "12345", 25);
// user1.register();
// user2.print();

//membership example
// class User {
//   static count = 0;
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     User.count = User.count + 1;
//   }
//   register() {
//     console.log(`${this.name} is registered AND Counter Value is${User.count}`);
//   }
// }

// class member extends User {
//   constructor(name, email, password, package1) {
//     super(name, email, password);
//     this.package1 = package1;
//     let todayDate = new Date();
//     const membershipactivetillYear = todayDate.getFullYear();
//     const membershipactivetillMonth = todayDate.getMonth();
//     const membershipactivetillday = todayDate.getDay();
//     this.membershipactivetillDate = new Date(
//       membershipactivetillYear,
//       membershipactivetillMonth,
//       membershipactivetillday
//     );
//   }
//   renewMembership() {
//     const membershipactivetillYear =
//       this.membershipactivetillDate.getFullYear();
//     const membershipactivetillMonth = this.membershipactivetillDate.getMonth();
//     const membershipactivetillday = this.membershipactivetillDate.getDay();

//     if (this.package1 == "standard") {
//       this.membershipactivetillDate = new Date(
//         membershipactivetillYear,
//         membershipactivetillMonth + 1,
//         membershipactivetillday
//       );
//     } else if (this.package1 == "yearly") {
//       this.membershipactivetillDate = new Date(
//         membershipactivetillYear + 1,
//         membershipactivetillMonth,
//         membershipactivetillday
//       );
//     }
//   }
//   subscriptionActiveTill() {
//     console.log(
//       this.name +
//         "is subscribed to " +
//         this.package1 +
//         " up till " +
//         this.membershipactivetillDate
//     );
//   }

//   getPacakge() {
//     console.log(this.name + "is subscribed to " + this.package1);
//   }
// }

// let user1 = new User("Srinivas", "sr@gmail.com", "12345");
// let user2 = new member("Srinivas", "sr@gmail.com", "12345", "yearly");
// user1.register();
// user2.renewMembership();
// user2.subscriptionActiveTill();
// user2.getPacakge();
