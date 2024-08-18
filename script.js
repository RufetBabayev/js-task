// task 2

// let a = prompt("reqem yazin");
// if (a >= 1) {
//   result = 1;
// } else if (a < 0) {
//   result = -1;
// } else {
//   result = 0;
// }
// alert(result);

// task 1

// let a = prompt('What`s the "offical" name of JavaScript');

// let result = a === "script" ? "right" : "you dont know script";

// alert(result);

// let userAnswer = prompt('What`s the "offical" name of JavaScript');

// let answer = "script";

// if (userAnswer === answer) {
//   alert("right");
// } else {
//   alert("you dont know script");
// }

// task 3

// let a = +prompt("reqem yazin");
// let b = +prompt("reqem yazin");

// let c = a + b < 4;
// let result = c ? "Below" : "Over";
// console.log(result);

// task 4

// let message;

// if (login === "employee") {
//   message = "hello";
// } else if (login === "Director") {
//   message = "Greeting";
// } else if (login === "") {
//   message = "no login";
// } else {
//   message = "";
// }

// let message =
//   login === "employee"
//     ? "hello"
//     : login === "Director"
//     ? "Greeteng"
//     : login === ""
//     ? "no login "
//     : "";

// let askQuestion = prompt("Who is there?");

// if (!askQuestion) {
//   alert("canceled");
// } else if (askQuestion !== "admin") {
//   alert("I dont know you");
// } else {
//   let password = prompt("Password");
//   if (!password) {
//     alert("canceled");
//   } else if (password !== "TheMaster") {
//     alert("wrong password");
//   } else {
//     alert("welcome!");
//   }
// }

// let markKq = 78;
// let johnKq = 92;
// let markTall = 1.69;
// let johnTall = 1.95;

// // BMI=mass/heigt**2

// let markBMI = markKq / markTall ** 2;
// let johnBMI = johnKq / johnTall ** 2;

// console.log(markBMI);
// console.log(johnBMI);

// // let markHigherBMI;

// if (markBMI > johnBMI) {
//   console.log(`Marks BMI ${markBMI} is higher John ${johnBMI}`);
// } else {
//   console.log(`John BMI ${johnBMI} is higher Mark ${markBMI}`);
// }
// // console.log(markHigherBMI);

// task

// let dolphinsAvarage = (97 + 112 + 101) / 3;
// let koalasAvarage = (109 + 95 + 106) / 3;

// if (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) {
//   console.log("Dolphin winner");
// } else if (dolphinsAvarage < koalasAvarage && koalasAvarage >= 100) {
//   console.log("Koalas winner");
// } else if (koalasAvarage === 100 && dolphinsAvarage === 100) {
//   console.log("Draw");
// } else {
//   console.log("Everyone lose");
// }

// let tip1 = 0.15;
// let tip2 = 0.2;
// let Billvalue = 10;
// let Billvthtip1 = Billvalue * 0.15;
// let Billvthtip2 = Billvalue * 0.2;

// if (Billvalue >= 50 && Billvalue <= 300) {
//   let value1 = Billvalue + Billvalue * 0.15;
//   console.log(
//     `the bil; was ${Billvalue}, the tip ${Billvthtip1} and the total value ${value1} `
//   );
// } else {
//   let value2 = Billvalue + Billvalue * 0.2;
//   console.log(
//     `the bil; was ${Billvalue}, the tip ${Billvthtip2} and the total value ${value2} `
//   );
// }

// let login = prompt("Logini daxil edin");
// let usesLogin = "admin";
// let userPassword = 123;

// let errorMsg = "emeliyatdan imtina etdiniz";

// if (!login) {
//   alert(errorMsg);
// } else if (login === usesLogin) {
//   let password = +prompt("Parolu daxil edin");

//   // string>>>number>>>NaN>>>false

//   if (!password) {
//     alert(errorMsg);
//   } else if (password === userPassword) {
//     alert("Daxil oldunuz");
//   } else {
//     alert("parol sehv");
//   }
// } else {
//   alert("login sehv");
// }

// let question1 = +prompt("2+2 nece edir");
// let question2 = +prompt("3+2 nece edir");
// let question3 = +prompt("5+2 nece edir");

// let correctAnswer = 0;

// if (question1 === 4) {
//   correctAnswer++;
//   if (question2 === 5) {
//     correctAnswer++;
//     if (question3 === 7) {
//       correctAnswer++;
//     }
//   }
//   console.log(correctAnswer);
// }

let dizel = 5;
let benzin = 6;
let lpg = 4;

let balans = 21;

let yanacaq = +prompt("yanacaq novunu secin", `${dizel} ${benzin} ${lpg}`);

let litr = +prompt("nece litr isdeyirsiniz");

let tutar = litr * yanacaq;

if (tutar > balans) {
  alert("sizin kifayet qeder balansiniz yoxdur");
} else {
  alert(balans - tutar);
}

let msg = `Zehmet olmasa asagidaki yanacaq novlerinden birini secin
1-dizel
2-benzin
3-lpg
`;

let userSelect = prompt(msg);

let total;

if (userSelect === "2") {
  let userLitr = +prompt("nece litr olsun?");
  let userBalance = prompt("meblegi daxil edin");
  total = userLitr * 6;
  if (userBalance >= total) {
    alert(userBalance - total + " " + "qaliq mebleg");
  } else {
    alert(
      `sizin balansiniz ${userBalance} catmayan mebleg ${total - userBalance} `
    );
  }
} else if (userSelect === "3") {
  total = userLitr * 4;
  console.log(total);
  if (userBalance >= total) {
    alert(userBalance - total + " " + "qaliq mebleg");
  } else {
    alert(
      `sizin mebleginiz ${userBalance} catmayan mebleg ${total - userBalance}`
    );
  }
} else {
  alert("3 haldan birini secin");
}
