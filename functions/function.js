// function sum() {
//   let a = 5;
//   let b = 6;
//   console.log(a + b);
// }

// sum();

// sum();

// sum(7, 8);

// function sum(a, b, c, d, e) {
//   console.log(a + b + c + d + e);
// }

// sum(5, 6, 7, 8, 9);

// let userAge = +prompt("yasiniz?");

// function checkLisence(yas) {
//   if (yas >= 18) {
//     console.log("uygundur");
//   } else {
//     console.log("qadagan");
//   }
// }

// checkLisence(userAge);

// function pow(a, b = 2) {
//   console.log(a ** b);
// }

// pow(5, 3);

// function concat(firstWord, secondWord = "world") {
//   //   console.log(firstWord + " " + secondWord);
//   console.log(`${firstWord} ${secondWord}`);
// }

// concat("hello", "mars");

// function uppercase(text) {
//   return text.toUpperCase();
// }

// let newWord = uppercase("salam");

// console.log(newWord);

// function sum(a, b) {
//   let result = a + b;
//   let quvvet = pow(result, 2); //121
//   return quvvet;
// }

// function pow(c, d) {
//   let result2 = c ** d;

//   return result2;
// }

// let value = sum(5, 6);

// console.log(value);

// const sum = () => 9 + 8;

// let value = sum();

// console.log(value);

// const pow = (a) => a ** 2;

// let value = pow(7);

// console.log(value);

// const expression = function () {
//   console.log(6 + 7);
// };

// expression();

//--------------------------------------------

// Task find letter
// let userText = prompt("text?"); //o
// let userLetter = prompt("letter?"); //lorem ipsum dolorO

// let count = 0;

// function findeLetterCount(t, l) {
//   for (let i = 0; i < t.length; i++) {
//     if (t.charAt(i).toLowerCase() == l.toLowerCase()) {
//       count = count + 1;
//     }
//   }
//   console.log(count);
// }

// findeLetterCount(userText, userLetter);

// TASK 2
// let num = 12345;

// function findNumberSum(value) {
//   let count = 0;
//   let newValue = value.toString();

//   for (let i = 0; i < newValue.length; i++) {
//     count = count + Number(newValue[i]);
//   }

//   return count;
// }

// let findedValue = findNumberSum(num);

// console.log(findedValue);

//TASK 3

// const reverseText = (text) => {
//   let newText = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     newText = newText + text[i];
//   }

//   //   console.log(newText);
// };

// reverseText("rufet");

//TASK 4
//6 28  496

// let num = +prompt("reqem yazin");
// let count = 0;
// function perfectNumber(a) {
//   for (i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       count = count + i;
//     }
//   }
//   if (count === num * 2) {
//     alert("perfect");
//   } else {
//     alert("no perfect");
//   }
// }

// perfectNumber(num);

///Task 5

// function toBinary(num) {
//   let binary = "";

//   for (let i = num; i > 0; i--) {
//     if (num >= 1) {
//       binary = binary + (num % 2);
//       num = Math.floor(num / 2);
//     }
//   }
//   reverseText(binary);
// }

// toBinary(33);

//task 6.  Binary to decimal

// debugger;

// function toDecimal(num) {
//   let test = num.toString();
//   let decimal = 0;
//   let total = 0;

//   for (let i = test.length - 1; i >= 0; i--) {
//     decimal = decimal + Math.pow(2, total) * Number(test[i]);
//     total++;
//   }

//   console.log(decimal);
// }

// toDecimal(1000010);

// function toReverse(num) {
//   let text = "";
//   for (let i = num.length - 1; i >= 0; i--) {
//     text += num[i];
//   }

//   toBinary(text);
// }

// function toBinary(num2) {
//   let decimal = 0;

//   for (let i = num2.length - 1; i >= 0; i--) {
//     decimal += 2 ** i * num2[i];
//   }
//   console.log(decimal);
// }

// toReverse("1000010");

// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     return `True ${num}`;
//   } else {
//     return `False ${num}`;
//   }
// }

// let value = evenOrOdd(20);
// console.log(value);

// function toReverse(num) {
//   let a = num.toString();

//   let text = "";
//   for (let i = a.length - 1; i >= 0; i--) {
//     text = text + a[i];
//   }
//   if (text == num) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// let value = toReverse(33);
// console.log(value);

// let vowels = `aeiouAEIOU`;

// function vowelsCount(text) {
//   let count = 0;
//   for (i = 0; i < text.length; i++) {
//     let result = vowels.includes(text[i]);
//     if (result) {
//       count = count + 1;
//     }
//   }
//   console.log(count);
// }

// vowelsCount("Aerbaycan");

// function numPlus(text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     let a = Number(text[i]);

//     if (!isNaN(a)) {
//       count += a;
//     }
//   }
//   console.log(count);
// }
// numPlus("a1b2c3");

// function numPlus(text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] / 2 == NaN) {
//       count = count + Number(text[i]);
//     }
//   }
//   console.log(count);
// }
// numPlus("a1b2c3");

// function isPerfectSquare(num) {
//   let i = Math.sqrt(num);
//   if (Math.floor(i) ** 2 == num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let value = isPerfectSquare(63);
// console.log(value);

// function upLower(text) {
//   let count = "";
//   for (let i = 0; i < text.length; i++) {
//     let letter = text[i];
//     if (letter == text[i].toUpperCase()) {
//       count = count + text[i].toLowerCase();
//     } else {
//       count = count + text[i].toUpperCase();
//     }
//   }
//   return count;
// }

// console.log(upLower("Hello World"));

// task

// console.log( "(1, 9) (2, 8) (3, 7) (4, 6)")

// function num(a) {
//   let c = a - 1;
//   for (let b = 1; b < a; b++) {
//     if (c > b) {
//       b + c === a;
//       console.log(b, c);

//       c--;
//     }
//   }
// }

// num(10);

// const pairOfNum = (num) => {
//   let result = "";

//   for (let i = 1; i < num; i++) {
//     if (num > i) {
//       result += `(${i} ${num - 1})`;
//     }
//     num--;
//   }

//   console.log(result);
// };

// pairOfNum(10);
