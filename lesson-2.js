//=============== task-1
// 1. Напишіть функцію bmi, яка обчислює індекс маси тіла (bmi = weight / height ^ 2)
// якщо менше аніж 18.5 => "Недостатня вага"
// якщо менше або дорівнює 25.0 => "Норма"
// якщо менше або дорівнює 30.0 return => "Надмірна вага"
// якщо більше 30 return => "Ожиріння"
// function calculateBMI({weight, height}){
//     ...
// }
// console.log(calculateBMI(75, 173))
// console.log(calculateBMI(40, 178))
// console.log(calculateBMI(120, 158))


// function calculateBMI(weight, height) {
//     const bmi = (weight / (height ** 2)).toFixed(2)
//     console.log(bmi);
//     if (bmi < 18.5) {
//         return `Недостатня вага`
//      }
//     else if (bmi >= 18.5 && bmi <= 25) { 
//         return `Норма`
//     }
//     else if (bmi > 25 && bmi <= 30 ) { 
//         return `Надмірна вага`
//     }
//     else { 
//         return `Ожиріння`
//     }
    
// }

// console.log(calculateBMI(75, 1.73))
// console.log(calculateBMI(40, 1.78))
// console.log(calculateBMI(120, 1.58))

//============= task-2
// Cтворити функцію, яка обчислюватиме потрібну кількість калорій на день, для тих, хто хоче набрати або скинути вагу.
// Формула для розрахунку денної норми калорій: Для жінок: (10 × вага в кілограмах) + (6,25 × зріст в сантиметрах) − (5 × вік у роках) − 161 - (10 × (вага - бажана вага)). Для чоловіків: (10 × вага у кілограмах) + (6,25 × зріст в сантиметрах) − (5 × вік у роках) + 5 - (10 × (вага - бажана вага)).

//=== ===
// function calculateDailyCalorieRate(weight, height, gender, age, desiredWeight){
// //     if (gender === 'female') { 
// //         return (10 + weight) + (6, 25 * height) - (5 * age) - 161 - (10 * (weight - desiredWeight))
// //     }
// //     return (10 + weight) + (6, 25 * height) - (5 * age) + 5 - (10 * (weight - desiredWeight))
//     //=== === ===
    
//     return gender === 'female' ? (10 * weight) + (6, 25 * height) - (5 * age) - 161 - (10 * (weight - desiredWeight)) : (10 * weight) + (6, 25 * height) - (5 * age) + 5 - (10 * (weight - desiredWeight))
    
// }

    
// console.log(calculateDailyCalorieRate(55, 167, "female", "25", 52))
// console.log(calculateDailyCalorieRate(93, 180, "male", "34", 87))


//==================== task-3
// Напиши скрипт, який виконує наступний функціонал:
// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни). Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку. Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

// При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість дроїдів, які користувач хоче купити і зберегти в змінну.

// Напиши скрипт який:

// Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.
// В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.
// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести повідомлення 'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'.

// const credits = 23580;
// const pricePerDroid = 3000;
// const numsOfDroids = prompt('Input nums of Droid do u want');

// if (numsOfDroids === null) {
//     console.log('Скасовано користувачем');
    
// }
// else { 
//     let totalPrice = numsOfDroids * pricePerDroid;
//     if (totalPrice > credits) {
//         console.log('Недостатньо коштів на рахунку!')
//     }   
// }
//     else { 
//         let creditsLast = credits - totalPrice;
//         console.log(`Ви купили ${numsOfDroids} дроїдів, на рахунку залишилося ${creditsLast} кредитів.`)
//     }
// }

//===========

// Порахуй скільки голосних букв у реченні.

// function countVowel(str) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let number = 0;
//     for (let i = 0; i < str.length; i += 1) { 
//         const letter = str[i].toLowerCase();
//         if (vowels.includes(letter)) {
//             number += 1;
//         }
//     }
//     return number;
// }
// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8
// console.log(countVowel("knowlage is a power")) // 7

//=================homework
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// function slugify(title) {

//     const slug = title.toLowerCase().replace(/\s+/g, '-');
//     const slug = title.toLowerCase().split(' ').join('-')
//     console.log(slug);
// }

// slugify("How to become a JUNIOR developer in TWO WEEKS")

//==============

// Виконай базові операції над масивом. Після кожної дії робити console.log щоб слідкувати як змінюється масив.
// Створіть масив products1 з елементами «apple», «orange» і «melon».
// Додайте «pear» до кінця.
// Виведіть у консоль довжина масиву
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Видаліть останній елемент та виведіть його в консоль.
// Вставте «cherry» та «lemon» на початок масиву.
// Замініть «lemon» на «grapes»
// Видаліть «orange» з масиву products1
// Об'єднайте масив products1 з масивом products2 = ["melon", "watermelon", "pineapple"];
// Видаліть дублікати з новоствореного масива (products3)
// Обріж новостворений масив без дублікатів (products3NoDubs) від першого до третього елемента
// Створіть новий масив products4 = ["grapes", "pineapple", "cherry"] і зробіть його копію у змінну products4Copy

// Чи рівні між собою products4 і products4Copy? Чому? Якщо додати новий елемент у products4 чи додасться він у products4Copy?

