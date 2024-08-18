//---get date---
// const date = new Date();

// const year = date.getFullYear();

// const month = date.getMonth() + 1;

// const day = date.getDate();

// const week = date.getDay() - 1;

// const hour = date.getHours();

// const minutes = date.getMinutes();

// const seconds = date.getSeconds();

//--set date--

// const date = new Date();

// date.setFullYear(2020);

// date.setMonth(3);

// const c = date.getDate();
// date.setDate(c + 50);

// console.log(date);

// const arr = [2, 4, 6];

// const text = "salam";

// const obj = { name: "a", surname: "b" };

// console.log(...obj);

// const arr = ["name", 5, null];

// const [, seconds, ...others] = arr;

// console.log(seconds);

//--object destructing-----------------------------

// const user = {
//   name: "John",
//   surName: "Doe",
//   age: 18,
//   address: {
//     street: "H.aliyev",
//     post: {
//       no: 1111,
//       fax: 222,
//     },
//   },
// };

// const test=user.address.post.fax
// const {address: {post: { fax },},} = user;

// console.log(fax);

//random name of destructing
// const person = {
//   name: "Mikel",
// };

// const { name: personName } = person;
// const { name } = user;

// console.log(personName);

//default value

// const { surName = "User" } = user;

// console.log(surName);

// --change any value in object
// const obj = { ...user, name: "mikel" };
// console.log(obj);

// const obj = { ...user, tel: "888888" };

// console.log(obj);

//-------------------object methods----------

// const keys = Object.keys(user);

// const values = Object.values(user);

// const enteries = Object.entries(user);

// const assign = Object.assign(user);

// Object.freeze(user);

// user.name = "test";

// Object.seal(user);

// user.tel = "w22222";

// const has = user.hasOwnProperty("tel");

// console.log(has);

//---object loops for...of ,for...in

// for (const element of Object.entries(user)) {
//   console.log(element);
// }

// for (const key in Object.values(user)) {
//   console.log(key);
// }

// let hours = ["12:00", "13:00"];

// for (const element of hours) {
//   let text = "Cafe open hours is ";
//   text += element;
//   console.log(text);
// }

//----array high order methods

// let arr = [
//   { id: 1, name: "John", surName: "Obama" },
//   { id: 2, name: "Mikel", surName: "Trump" },
//   { id: 3, name: "Alex", surName: "Putin" },
// ];

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//forEach

// arr.forEach(function (obj, i) {
//   console.log(obj);
// });

// arr.forEach((obj, i) => console.log(obj));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let chunkedArr = [];

// function chunkSize(num2) {
//   numbers.forEach((num, i) => {
//     i = i + num2;
//     let sliced = numbers.slice(i, i + num);

//     chunkedArr.push(sliced);
//   });
// }

// chunkSize(3);

// console.log(chunkedArr);

//map------------------

// let newarr = numbers.forEach((num) =>  num * 2);

// console.log(newarr);
// console.log(numbers);
//find----------------
// let value = numbers.find((num) => num > 5);

// console.log(value);
//filter--------------------
// let value = numbers.filter((num) => num > 5);

// console.log(value);

// function deleteUser(id) {
//   const filteredItems = arr.filter((obj) => obj.id !== id);
// }

// deleteUser(2);

// console.log(arr);
//sort------------------
// let numbers = [4, 2, 3, 44, 5, 6, 16, 8];
// numbers.sort((a, b) => b - a);

// console.log(numbers[0]);
//some

// let numbers = [1, 1, 5, 9];

// const a = numbers.some((num) => num > 0);

// const b = numbers.every((num) => num > 0);

// console.log(b);

// const a = numbers.reduce((prev, next) => {
//   prev += next;

//   return prev;
// }, 0);

// console.log(a);

// let fruits = ["banan", "limon", "alma", "banan"];

// const a = fruits.reduce((result, fruit) => {
//   if (!result[fruit]) {
//     result[fruit] = 1;
//   } else {
//     result[fruit]++;
//   }
//   return result;
// }, {});

// console.log(a);
// {banan:2,
//     limon:1,
// }

// let posts = [
//   {
//     author: "saransh",
//     title: "Learning context API and the useContext React hook",
//   },
//   {
//     author: "pranshu",
//     title: "Machine Learning Misconceptions That Software Developers Have",
//   },
//   {
//     author: "saransh",
//     title: "Understanding the useReducer hook in React",
//   },
// ];

// const groupBy = (input, key) => {
//   return input.reduce((acc, currentValue) => {

//     let groupKey = currentValue[key];
//     if (!acc[groupKey]) {
//       acc[groupKey] = [];
//     }
//     acc[groupKey].push(currentValue);
//     return acc;
//   }, {});
// };

// const a = groupBy(posts, "author");

// console.log(a);

// -----------------------------------------------------------------------------------

// task 1

// let students = [
//   { id: 1, name: "ehmed", lastName: "eliev", age: 20 },
//   { id: 2, name: "aygun", lastName: "velieva", age: 22 },
//   { id: 3, name: "mahmud", lastName: "sadiqov", age: 21 },
// ];

// function deleteUser(id) {
//   const result = students.filter((obj) => obj.id != id);
// }

// let newStudents = deleteUser(1);

// console.log(newStudents);

// console.log(result);

// -------------------------------------------------------------

// task 2

// let basket = [
//   { id: 1, name: "Alm", price: 3, quantity: 5 },
//   { id: 2, name: "Armud", price: 4, quantity: 2 },
//   { id: 3, name: "Banan", price: 2, quantity: 6 },
// ];

// let totalValue = basket.reduce((sum, obj) => {
//   sum = sum + obj.price * obj.quantity;

//   return sum;
// }, 0);

// console.log(totalValue);

// ------------------------------------------------------------------------

// task 3

// let students = [
//   { id: 1, name: "ehmed", lastName: "eliev", age: 20 },
//   { id: 2, name: "aygun", lastName: "velieva", age: 22 },
//   { id: 3, name: "mahmud", lastName: "sadiqov", age: 21 },
// ];

// let totalValue = students.map((st) => {
//   let a = { ...st, name: st.name + "C" };

//   return a;
// });

// console.log(totalValue);

// ---------------------------------------------------------------------------

// task 4

// let products = [
//   { id: 1, name: "Notebook", price: 1000 },
//   { id: 2, name: "Telefon", price: 500 },
//   { id: 3, name: "Tablet", price: 300 },
// ];

// let discount = products.every((product) => {
//   let a = product.price > 200;
//   return a;
// });

// if (discount) {
//   console.log("endirimli qimet yoxdur");
// }

// ----------------------------------------------------------------

// task 5

// let library = [
//   { id: 1, title: "1984", author: "George Orwell" },
//   { id: 2, title: "Brave New World", author: "Aldous Huxley" },
//   { id: 3, title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];

// function findBook(a) {
//   let book = library.find((lib) => {
//     if (lib.title === a) {
//       return lib;
//     }
//   });
//   return book;
// }

// console.log(findBook("1984"));

// --------------------------------------------------------------------

// task 6

// let students = [
//   { id: 1, name: "ehmed", lastName: "eliev", age: 20 },
//   { id: 2, name: "aygun", lastName: "velieva", age: 22 },
//   { id: 3, name: "mahmud", lastName: "sadiqov", age: 21 },
// ];

// let bigLetter = students.map((student) => {
//   let a = { ...student, name: student.name.toUpperCase() };
//   return a;
// });

// console.log(bigLetter);

// let result = students.map((student) => {
//   let a = {
//     ...student,
//     fulName:
//       `${student.name[0].toUpperCase()}` +
//       student.name.slice(1) +
//       " " +
//       `${student.lastName[0].toUpperCase()}` +
//       student.lastName.slice(1),
//   };
//   return a;
// });

// console.log(result);

// ------------------------------------------------------
// let userGroups = [
//   [
//     { id: 1, name: "Eli", age: 17 },
//     { id: 2, name: "Veli", age: 16 },
//   ],
//   [
//     { id: 3, name: "Ceyhun", age: 19 },
//     { id: 4, name: "Aynur", age: 20 },
//   ],
// ];

// let total = userGroups.map((user) => {
//   let a = user.reduce((sum, obj) => {
//     sum = sum + obj.age;
//     return sum;
//   }, 0);
//   return a;
// });

// let result = total.reduce((sum, t) => {
//   sum = sum + t;
//   return sum;
// }, 0);

// console.log(result);

// --------------------------------------------------------------
// let products = [
//   { id: 1, name: "Notebook", price: 100 },
//   { id: 2, name: "Telefon", price: 500 },
//   { id: 3, name: "Tablet", price: 800 },
// ];

// let result = products.map((product) => {
//   return product.price;
// });

// result.sort((a, b) => b - a);

// console.log(result[0]);

// console.log(Math.max(...result));

// let test = products.sort((a, b) => {
//   return b.price - a.price;
// });

// console.log(test[0].price);

// const test = products.reduce((a, obj) => {
//   return (a = a < obj.price ? obj.price : a);
// }, 0);

// console.log(test);

// ---------------------------------------------------
// let students = [
//   { id: 1, name: "ehmed", lastName: "eliev", age: 20 },
//   { id: 2, name: "aygun", lastName: "velieva", age: 22 },
//   { id: 3, name: "mahmud", lastName: "sadiqov", age: 21 },
// ];

// let result = students.every((student) => student.age > 18);

// // console.log(result ? "yaslar uygundur" : "");

// if (result) {
//   console.log("yaslar uygundur");
// }

// --------------------------------------------------------

// let students = [
//   { id: 1, name: "Ehmed", grade: 65 },
//   { id: 2, name: "Aysel", grade: 85 },
//   { id: 3, name: "Mahmud", grade: 45 },
//   { id: 4, name: "Leyla", grade: 75 },
// ];

// let bigNum = students.filter((student) => {
//   return student.grade > 50;
// });

// let result = bigNum.sort((a, b) => b.grade - a.grade);

// console.log(result);

// -------------------------------------------------------------------------

// let users = [
//   { id: 1, name: "Eli", tasksCompleted: ["task1", "task2"] },
//   { id: 2, name: "Veli", tasksCompleted: ["task1", "task3"] },
//   { id: 3, name: "Ceyhun", tasksCompleted: ["task1", "task2", "task3"] },
// ];

// function task(title) {
//   let result = users.every((user) => user.tasksCompleted.includes(title));
//   return result;
// }

// console.log(task("task3"));

// let products = [
//   { id: 1, name: "Notebook", price: 1000, category: "Elektronic" },
//   { id: 2, name: "Telefon", price: 1500, category: "Elektronic" },
//   { id: 3, name: "Divan", price: 3000, category: "Mebel" },
//   { id: 4, name: "Stol", price: 2000, category: "Mebel" },
//   { id: 5, name: "Soyuducu", price: 2500, category: "Metbex" },
// ];

// let result = products.reduce((obj, item) => {
//   if (!obj[item.category]) {
//     obj[item.category] = {
//       items: [item],
//       total: item.price,
//     };
//   } else {
//     obj[item.category].items.push(item);
//     obj[item.category].total += item.price;
//   }

//   return obj;
// }, {});

// let a = {
//   Electronic: {
//     items: [
//       { id: 1, name: "Notebook", price: 1000, category: "Elektronic" },
//       { id: 2, name: "Telefon", price: 1500, category: "Elektronic" },
//     ],
//     total: 2500,
//   },
// };

// console.log(result);

// let sales = [
//   { month: "Yanvar", amount: 5000 },
//   { month: "Yanvar", amount: 7000 },
//   { month: "Fevral", amount: 8000 },
//   { month: "Mart", amount: 12000 },
//   { month: "Fevral", amount: 6000 },
//   { month: "Mart", amount: 7000 },
// ];

// let result = sales.reduce((obj, item) => {
//   if (!obj[item.month]) {
//     obj[item.month] = item.amount;
//   } else {
//     obj[item.month] += item.amount;
//   }
//   return obj;
// }, {});

// console.log(result);

// --------------------------------------------------------------------------------------------------

// task 1

// let products = [
//   { id: 1, name: "Notebook", price: 1000, category: "Elektronik" },
//   { id: 2, name: "Telefon", price: 1500, category: "Elektronik" },
//   { id: 3, name: "Divan", price: 3000, category: "Mebel" },
//   { id: 4, name: "Stol", price: 2000, category: "Mebel" },
//   { id: 5, name: "Soyuducu", price: 2500, category: "Kuxna" },
// ];

// let result = products.map((productName) => {
//   return productName.name;
// });

// console.log(result);

// -------------------------------------------------------------

// task 2

// function repeat(a) {

// }

// repeat("salam");

// ---------------------------------------------------------------

// task 3

// -----------------------------------------------------------------

// task 4

// ------------------------------------------------------------

// task 5

// function prependChar(a, b) {

// }

// console.log(prependChar("hello world", "x"));

// ---------------------------------------------------------------------

// task 6

// let num1 = [1, 2, 3];
// let num2 = [2, 3, 4];

// let findMatchingPairs = [num1 + "," + num2];

// let result = findMatchingPairs.filter((a) => {
//   findMatchingPairs.a = findMatchingPairs.a;
// });

// console.log(result);

//-------------------------------------------------------------------

// task 7

// let num = [-1, -2, -3, -4];

// let convertNegativesToPositive = num.map((a) => {
//   if (a < 0) {
//     a = a * -1;
//   }
//   return a;
// });

// console.log(convertNegativesToPositive);

// ---------------------------------------------------------------------

// task 8

// let num = [123, 456, 789];

// let reverseNumbers = num.reduce((a, b) => {
//   a = b.toString().split();
//   return a;
// }, []);

// console.log(reverseNumbers);

// -----------------------------------------------------------------

// task 9

// let num = [1, 2, 3, 4];
// let makeNumbersEven = [];
// let result = num.map((a) => {
//   if (a % 2 === 0) {
//     a.push = makeNumbersEven;
//   } else {
//     a = a + 1;
//     a.push = makeNumbersEven;
//   }
//   return a;
// });

// console.log(result);

// ----------------------------------------------------------------------

// task 10

// let num = [1, 2, 3, 4, 5];

// let b = [];

// let result = num.map((a) => {
//   if (a % 2 === 0) {
//     a.push = b;
//   }
//   return a;
// });

// console.log(result);

// --------------------------------------------------------------------------

// task 11

// let num = [1, 2, 3, 4, 5];

// let differenceBetweenMaxAndMin = num.sort((a, b) => b - a);

// let result =
//   differenceBetweenMaxAndMin[0] -
//   differenceBetweenMaxAndMin[differenceBetweenMaxAndMin.length - 1];

// console.log(result);
