//task 1
"use strict";
// for (let i = 1; i < 11; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// task 2

// let question1 = +prompt("zehmet olmasa 100 den boyuk reqem yazin");
// let num = 1;
// while (num > 0) {
//   if (num <= 100) {
//     let question2 = +prompt("zehmet olmasa");
//   } else {
//     alert("dogrudur");
//   }
//   num++;
// }

// task 3

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);

//   i++;
// }

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   // for each i...

//   for (let j = 2; j < i; j++) {
//     // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   console.log(i); // a prime
// }

// while (is100) {
//   let userNum = +prompt("100den boyuk reqem");

//   if (userNum > 100) {
//     is100 = false;
//   }
// }

// Nece eded musbet reqem daxil edeceksiniz? 3
// 1ci sayıyı girin: 5
// ...
// 3cu sayıyı girin: 20
// Ortalama: 12.5

// let n = 1;
// let i = 0;
// let question = +prompt("musbet eded girin");
// while (n <= question) {
//   let plus = +prompt(`${n}-ci ededi yazin`);
//   i = i + plus;
//   n++;
// }
// alert(i / question);

// let userNum = 7;

// let a = 0;
// let b = 1;

// for (let i = 0; i < userNum; i++) {
//   console.log(a);

//   let next = a + b;
//   a = b;
//   b = next;
// }

let num = Math.random() * 10;
let numFlot = Math.floor(num);

for (let i = 9; i > 0; i--) {
  let userNum = prompt("reqqemi texmin edin");
  if (userNum > numFlot) {
    alert("daha kicik reqem");
  } else if (userNum < numFlot) {
    alert("daha boyuk reqem");
  } else {
    alert(`tebrikler dogru texmin ${userNum}`);
    break;
  }
  alert(`qalan haqqiniz ${i}`);
}

// let num = Math.floor(Math.random() * 10); //5

// let chance = 9;

// while (chance > 0) {
//   let userNum = prompt("reqqemi texmin edin 10 sansiniz var"); //5

//   if (userNum > num) {
//     alert(`biraz asagi qalan sans${chance}`);
//   } else if (num > userNum) {
//     alert(`biraz yuxari qalan sans${chance}`);
//   } else {
//     alert("qazandiniz");
//     break;
//   }

//   chance--;
// }
