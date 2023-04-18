// модуль 3
// const findSmallesNumber = function smallNumbers(params) {
//     let small = params[0];

//     for (const number of params) {
//         if (number < small) {
//             small = number;
//         }
//     }
//     return small;  
// }


// const fn = function (...param) {
//     console.log(param);
// }

// fn(3, 5, 18, 1, 0, -2, 22, 2323);

// ======
// Порахуй суму чисел, які були передані аргументом у вигляді набору значень
// Виклич функції для перевірки працездатності твоєї реалізації.

// const countSum = function calculateTotal(...numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         total += number
//     }
//     return total
    
// }

// console.log(countSum(1, 2, 3, 4, 5, 6)); // 21
// console.log(countSum(32, 8, 5, 6, 9)); // 60



// ======
// Напиши функцію consoleMessage, яка виводитиме у консоль повідомлення, яке було передане при виклику функції ту кількість раз, яку також передали аргументом при виклику. Якщо ж щось не передано, то число по дефолту має дорівнювати 10, а повідомлення має бути "Default message".
// Виклич функції для перевірки працездатності твоєї реалізації.
//     const log = function consoleMessage (words) {
//         for (const word of words) {
//             if (word === 'consoleMessage') {
//                 return 'навіщо тут ця стрічка?'
//             }
            
//         }
//         return 'Default message'
//     }
    
// console.log("До виклика consoleMessage"); // навіщо тут ця стрічкв?
// console.log(consoleMessage("Hello world", 3));
// console.log(consoleMessage("Java Script"));
// console.log(consoleMessage(undefined, 5));
// console.log("Після виклика consoleMessage"); // навіщо тут ця стрічкв?


// ======

// Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив
// logins. Логін, який додається повинен:

// Проходити перевірку на довжину від 4 до 16-ти символів включно бути унікальним, тобто бути відсутнім в масиві logins Розбий завдання на підзадачі за допомогою функцій.

// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.

// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.

// Напиши функцію addLogin(allLogins, login) яка:

// Приймає новий логін і масив всіх логінів як параметри
// Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid:
// Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів.
// Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique:
// Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
// Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
// Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.

// Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

// isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
// isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
// addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій - isLoginUnique і isLoginValid.
// const addLogin = function (logins, newlogin) {
//     const array = [...logins];

//     if (!array.includes(newlogin)) {
//         if (newlogin.length >= 4 && newlogin.length <= 16) {
//             array.push(newlogin)
//             return 'Логін успішно доданий!';
//         }
//         return 'Помилка! Логін повинен бути від 4 до 16 символів'
        
//     }
//     return 'Такий логін вже використовується!'

// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


// // // Виклич функції для перевірки працездатності твоєї реалізації.
// console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'


