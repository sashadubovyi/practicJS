// -- -- -- --task 1

// 1. Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24: 01

// function timeConvertor(min) { 
//     // console.log(min);
//     const hours = Math.floor(min / 60);
//     // console.log(hours);
//     // const minutes = min - (hours * 60);
//     // console.log(minutes);
//     const minutes = min % 60
//     // console.log(minutes);

//     const dobleDigitsHours = String(hours).padStart(2, "0");
//     // console.log(dobleDigitsHours);
//     const dobleDigitsMinutes = String(minutes).padStart(2, "0");
//     // console.log(dobleDigitsMinutes);

//     return `${dobleDigitsHours}:${dobleDigitsMinutes}`
// }

// console.log(timeConvertor("70"));
// console.log(timeConvertor("450"));
// console.log(timeConvertor("1441"));



// -- -- -- --task 2

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calculateBMI(weight, height){
//     ...
// }

// console.log(calculateBMI('88,3', '1.75')); // 28.7

// function calculateBMI(weight, height){
//     console.log(weight, height);
//     const BMI = Number.parseFloat(weight) / Number.parseFloat(height) ** 2;
//     return (BMI.toFixed(2));
// }

// console.log(calculateBMI('88,3', '1.75')); // 28.7

// let age = 100;
// let age2 = age;
// console.log(age, age2);

// age = 200;
// console.log(age, age2);
    
// let name = "Wes";
// let name2 = name1;
// console.log(name1, name2);
// name1 = "Wesley";
// console.log(name1, name2);



// -- -- -- -- task - 3

// Перше століття охоплює період з 1-го по 100-й рік включно, друге - з 101-го по 200-й рік включно і т.д. За заданим роком повернути століття, в якому він знаходиться.

// function centuryFromYear(year){
//     let centure = year / 100;
//     // console.log(centure);
//     if (year % 100 > 0) {
//         centure++;   
//     }
//     return Math.floor(centure)
// }
// console.log(centuryFromYear(1705))  // 18
// console.log(centuryFromYear(1900))  // 19
// console.log(centuryFromYear(1601))  // 17
// console.log(centuryFromYear(2000))  // 20


// -- -- -- -- task-4

// Перевірь чи param є рядком. Результатом виконання функції має бути true або false
// function isString(param) {
//     let isSTRING = typeof param;
//     if (isString ==='string') {
//         return true
//     }
//     else {
//         return false
//     }

//     isString = IsString === 'string' ? true : false;

//     return typeof param === 'string';
// }

// console.log(isString("hello world"));
// console.log(isString("undefined"));
// console.log(isString([1, 2, 4, 0]));
// console.log(isString({ course: "GoIT" }));
// console.log(isString(+"5"));



// -- -- -- -- task-5

// Напишіть функцію для перетворення імені в ініціали. Ви отримаєтеім'я з прізвищем розділені пробілом. В результаті це має виглядати так:
// `Sam Harris => S.H`
// `Patrick Feeney => P.F`

//  function abbrevName(name){
//      console.log(name.split(" "));
//      const fullName = name.split(" ");
//      const firstName = fullName[0][0];
//      const lastName = fullName[1][0];
//      console.log(firstName);
//      console.log(lastName);

//      return `${firstName}. ${lastName}`
//  }

//  console.log(abbrevName("Sam Harris"));
//  console.log(abbrevName("Patrick Feeney"));



// -- -- -- --task-6

// 3. Напиши функцію protectEmail, щоб захистити свій емейл від неавторизованого користувача. Половина емейла (до @) повинна замінитися на три крапки.
// Input: robin_singh@example.com Expected result: robin...@example.com

// function protectEmail(email){
//     const splitEmail = email.split('@');
//     const emailBeginning = splitEmail[0];
//     const visibleEmailLength = emailBeginning.length / 2;
//     const visibleEmail = emailBeginning.slice(0, visibleEmailLength)
        
//     console.log(visibleEmail);
//     return `${visibleEmail}...@${splitEmail[1]}`

// }

// console.log(protectEmail("robin_singh@gmail.com"))
// console.log(protectEmail("jimmyMc@gmail.com"))
// console.log(protectEmail("spr@yahoo.com"))



// -- -- -- --task-7
// Напиши функцію, яка просить користувача ввести 2 числа і додає їх, результат вивести в алертом.

// function calculateSum() {
//     const number1 = prompt('Enter first num');
//     const number2 = prompt('Enter second num');
//     alert(Number(number1) + Number(number2));
// }
// console.log(calculateSum());


// -- -- -- --task-8
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity
  
//   if (totalPrice <= customerCredits) {
//     message = `You ordered (orderedQuantity) droids, you have (customerCredits - totalPrice) credits left`
    
//   } else {
//     message = `Insufficient funds!`
//   }
//   // Change code above this line
//   return message;
// }

// makeTransaction(3000, 5, 23000)
// makeTransaction(1000, 3, 15000)
// makeTransaction(5000, 10, 8000)
// makeTransaction(2000, 8, 10000)
// makeTransaction(500, 10, 5000)