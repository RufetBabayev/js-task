// let arr1 = [1];

// let arr2 = arr1;

// arr2.push(5);

// console.log(arr1);

// let a = 5;
// let b = a;

// console.log(b);

// a=7

// let name = "Eli";
// let name2 = "Pirveli";

// let people=[name,name2]

// let myArray = [1, 2, 3];

// console.log(myArray)

// let myArray2 = new Array("Eli", "Velu");

// console.log(myArray2);

// let myData = [1, "", null, {}, [5, 7]];

// console.log(myData);

// let people = ["Eli", "Veli", 1995, true, "28"];

// console.log(people[1]);
// people[0] = "Mahmud";
// people[5] = "Ehmed";

// console.log(people);

// let a=28

// a=20

//Array methods

//1.push()

// let data = people.push("Lorem Ipsum");

// console.log(data);

// console.log(people);

// let poppedValue = people.pop();

// console.log(poppedValue);

// console.log(people);

// let data = people.shift();

// // console.log(data);

// console.log(people);

// people.unshift("Baku 1990");

// console.log(people);

// console.log(people.indexOf(3));
// console.log(people.indexOf("asjsjsdk"));

// let newValue = people.slice(2, 4);

// console.log(newValue);

// console.log(people);

// let value = people.splice(2, 4);

// console.log(value);

// console.log(people);

// people.splice(2, 4, "Salam");

// console.log(people);

// people.fill("test");
// console.log(people);

// let test = people.reverse();

// console.log(test);

// let joinedArraY = ["S", "A", "L", "A", "M"];

// console.log(joinedArraY.join(""));

// let test = "salam".split("").reverse().join("");
// let toArrY = test.split("");
// let rev = toArrY.reverse();
// let join = rev.join("");

// console.log(test);

// console.log(joinedArraY.toString());

// let test = people.includes("28");
// console.log(test);

// console.log(people[0], people[1]);

// const [, , ikinci] = people;

// console.log(ikinci);

// const birinci=people[0]

// let myArray = ["lorem", "999", people];

// let [, , [, a]] = myArray;

// console.log(a);

//task

// const calc = (a, b) => {
//   let sum = a + b;
//   let minus = a - b;
//   let multiple = a * b;
//   let dvide = a / b;

//   return [sum, minus, multiple, dvide];
// };

// let result = calc(10, 2);

// let [, result] = calc(10, 2);

// // let [, second] = result;

// // console.log(second);

// console.log(result);

// let numbers = [6, 10, 15];

// function sum(a, b) {
//   console.log(a + b);
// }

// // sum(numbers[0], numbers[1], numbers[2]);

// // sum(...numbers);

// // console.log(...numbers);

// let [, a, ...qalanlar] = numbers;

// sum(a, qalanlar[0]);

// let [a = 5, b = 66, c = 99, d = "lorem"] = numbers;

// console.log(d);

//task
// const tempratures = [17, 21, 23];

// let results = [];

// for (let i = 0; i < tempratures.length; i++) {
//   results.push(`${i + 1}ci gun${tempratures[i]}oC`);
// }

// const [firstDay, secondDay, thirdDay] = results;

// console.log(firstDay + "," + secondDay, thirdDay);

//task
// let bills = [125, 555, 44];

// let fifteenPercentage = [];
// let twentyPercentage = [];

// function calcBills(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] > 50 && array[i] < 30
//       ? fifteenPercentage.unshift(array[i] * 0.15)
//       : twentyPercentage.unshift(array[i] * 0.2);
//   }
// }

// calcBills(bills);

// console.log(fifteenPercentage);

// console.log(twentyPercentage);

//----------------------------------------------------------------

//Objects

// let user = ["eli", "veliyev", 25];

// const userData = {
//   name: "eli",
//   surName: "Veliyev",
//   age: 23,
//   brithYear: (year) => {
//     const userAge = 2024 - year;

//     return userAge;
//   },

//   brithYear: function (value) {
//     const userAge = 2024 - value;

//     return userAge;
//   },

// const data = {
//   88: "Salam",
// };

// console.log(data["88"]);

// userData.name
// userData["nameS"]

// const userAnswer = prompt(
//   "asagidaki user datalardan birini secin , name,surName,age"
// );

// console.log(userData[userAnswer]);

// userData["driverLiscense"] = "yes";

// console.log(userData);

// console.log(userData.brithYear(1995));

// const restourant = {
//   name: "PizzaMizza",
//   location: "Genclik",
//   menus: {
//     drinks: ["cola", "fanta"],
//     meals: ["papaMix", "Margaritta"],
//   },
// };

// console.log(restourant.menus.drinks);

// const user = {
//   name: "Ehmed",
//   surName: "Veliev",
//   brithYear: 1995,
//   calcAge: function (age) {
//     return this.brithYear - age;
//   },
// };

// console.log(user.calcAge(1990));

// const user = {
//   name: "Ehmed",
//   surName: "Veliev",
//   brithYear: 1995,
//   calcAge: (age) => {
//     return user.brithYear - age;
//   },

//   getSummry: function () {
//     return `${this.name} ${this.surName} ${this.calcAge(1990)} yasi var`;
//   },
// };

// let result = user.getSummry();

// console.log(result);

// let data = [{ name: "Test" }];

// console.log(data);

// -------------------------------------------------------------------------------

// task 1

// let user = {
//   name: "Ehmed",
//   surName: "Veliev",
//   profile: function () {
//     return `${this.name}  ${this.surName}`;
//   },
// };

// let result = user.profile();

// console.log(result);

// -----------------------------------------------------------------

// task 2

// let maaslar = {
//   Ahmet: 100,
//   Ali: 160,
//   Mazlum: 130,
//   sum: function () {
//     return this.Ahmet + this.Ali + this.Mazlum;
//   },
// };

// console.log(maaslar.sum());

// ------------------------------------------------------

// task 3

// let obj = [];

// let menu = {
//   en: 200,
//   boy: 300,
//   baslik: "Menu",

//   ikileCarp: function (obj) {
//     obj = [this.en * 2, this.boy * 2];
//     return obj;
//   },
// };

// let result = menu.ikileCarp(obj);

// console.log(result);

// ---------------------------------------------------------------

// task 4

// let cars = {
//   marka: "Honda",
//   model: "Civic",

//   carName: function () {
//     return `${this.marka} ${this.model} markali masin`;
//   },
// };

// let result = cars.carName();

// console.log(result);

// ---------------------------------------------------------------------------------------

// task 5

// let kitab = {
//   name: "Viktor Huqo",
//   bookName: "Sefirler",
// };

// kitab.value = 125;
// console.log(kitab);

// ------------------------------------------------------------------------------------------

// task 6

// let biznes = {
//   model: "Samsung",
//   marka: "S23 Ultra",
//   value: 1800,
// };
// // delete biznes.value;
// biznes.value = 1600;

// console.log(biznes);

// ------------------------------------------------------------------------------------------------

// task 7

// let info = {
//   user: {
//     name: "Ali",
//     surName: "Veliev",
//     addres: {
//       city: "Gence",
//       street: "28 May",
//       house: "bine 4 menzil 28",
//     },
//   },
// };

// -------------------------------------------------------------------------------------------------

// task 8

// let arr = [];

// arr.push("salam", "sagol", "get");
// arr.pop();
// console.log(arr);

// ----------------------------------------------------------------------------------------------------

// task 9

// let arr = ["salam", "sagol", 1];

// arr.shift(1);

// arr.unshift("get");

// console.log(arr);

// --------------------------------------------------------------------------------------------------------------

// task 10

// let meyveler = ["Alma", "Banan", "Ciyelek", "Portagal"];
// let a = meyveler;

// function fruit(a) {
//   return meyveler.indexOf(a);
// }

// let result = fruit("Banan");
// console.log(result);

// ----------------------------------------------------------------------------------------------------------------

// task 11

// let arr = [];

// for (let i = 0; i < 5; i++) {
//   let info = prompt("nese yazin");

//   arr.push(info);
//   console.log(arr);
// }

// for (let a = 0; a < 3; a++) {
//   arr.pop();
//   console.log(arr);
// }

// -----------------------------------------------------------------------------------------------

// task 12

// let fruit = ["Alma", "Banan", "Ciyelek", "Portagal"];

// let oge = prompt(`Zehmet olmasa meyve yazin`);

// if (fruit.indexOf(oge) !== -1) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// ---------------------------------------------------------------------------------------------------

// task 13

// let arr = [];

// let num = prompt("nece eded deyer isdiysense qeyd ele");

// for (i = 0; i < num; i++) {
//   let info = prompt("deyerleri qeyd edin");
//   arr.push(info);
// }
// console.log(arr);
// --------------------------------------------------------------------------------------------------------

// // task 14

// let arr = [1, 2, 3, 4, 5, 6];

// let oddNms = [];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     oddNms.push(arr[i]);
//   }
// }

// console.log(oddNms);

// ----------------------------------------------------------------------------------------------------------------

// task 1

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");

// let index = Math.floor(styles.length / 2);
// let newValue = "Classics";

// styles[index] = newValue;

// let firstElemets = styles.shift();

// console.log(firstElemets);

// styles.unshift("Rap", "Reggea");

// console.log(styles);

// ----------------------------------------------------------------------------------------------------------

// task 2

// const books = [
//   {
//     title: "Book1",
//     author: "Author1",
//   },
//   {
//     title: "Book2",
//     author: "Author2",
//   },
//   {
//     title: "Book3",
//     author: "Author1",
//   },
//   {
//     title: "Book4",
//     author: "Author3",
//   },
// ];

// let a = "Author1";

// let arr = [];
// function findBook(item) {
//   for (i = 0; i < books.length; i++) {
//     if (books[i].author == item) {
//       arr.push(books[i].title);
//     }
//   }
//   return arr;
// }

// let result = findBook(a);
// console.log(result);

// -------------------------------------------------------------------------------------------\

// task 3

const student = [
  {
    name: "Eli",
    grades: [80, 85, 90],
  },
  {
    name: "Aygun",
    grades: [70, 75, 80],
  },
  {
    name: "Mahmud",
    grades: [90, 195, 100],
  },
];

// // // let arr = [];
// // // for (i = 0; i < student.length; i++) {
// // //   let sum = 0;
// // //   for (a = 0; a < student[i].grades.length; a++) {
// // //     sum = sum + student[i].grades[a];
// // //   }
// // //   arr.push(sum / student[i].grades.length);
// // // }
// // // console.log(arr);

// let highestNum = 0;
// for (i = 0; i < student.length; i++) {
//   for (a = 0; a < student[i].grades.length; a++) {
//     if (highestNum < student[i].grades[a]) {
//       highestNum = student[i].grades[a];
//     }
//   }
// }
// console.log(highestNum);

// let arr = [];

// for (let i = 0; i < student.length; i++) {
//   arr.push(...student[i].grades);
// }
// let max = Math.max(...arr);

// console.log(max);
// ---------------------------------------------------------------------------

// task 5

// let result = {};

// // result["Alma"] = "15Azn";
// // result["Armud"] = "42azn";
// // result["nar"] = "90Azn";

// let products = [
//   {
//     name: "Alma",
//     price: 3,
//     quantity: 5,
//   },
//   {
//     name: "Armud",
//     price: 6,
//     quantity: 7,
//   },
//   {
//     name: "Nar",
//     price: 10,
//     quantity: 9,
//   },
// ];
// // for (i = 0; i < products.length; i++) {
// //   result[products[i].name] = products[i].price * products[i].quantity + ` Azn`;
// // }
// // console.log(result);

// function toBasket(item) {
//   let isBasket = false;
//   for (i = 0; i < products.length; i++) {
//     if (products[i].name == item) {
//       products[i].quantity += 1;
//       isBasket = true;
//     }
//   }
//   if (!isBasket) {
//     products.push({ name: item, quantity: 1, price: "teyin olmayib" });
//   }
// }
// toBasket("Heyva");

// console.log(products);

// ----------------------------------------------------------------

// task 1

// let colors = ["qirmizi", "Mavi", "Yaşil", "Qara"];

// let startNumber = prompt("Baslangic reqem yazin");

// let endNumber = prompt(
//   `son reqem yazin. ${colors.length - 1} reqeminnen boyuk olmasin `
// );

// colors.splice(startNumber, endNumber, "Sari");

// console.log(colors);

// -------------------------------------------------------------------------------------

// task 2

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let combine = [...array1, ...array2];

// console.log(combine);

// ----------------------------------------------------------------------------------------

// task 3

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let chunkedArr = [];

// function chunkSize(num) {
//   for (let i = 0; i < numbers.length; i = i + num) {
//     let sliced = numbers.slice(i, i + num);
//     chunkedArr.push(i, i + num);
//   }
// }

// chunkSize(1);

// console.log(chunkedArr);
