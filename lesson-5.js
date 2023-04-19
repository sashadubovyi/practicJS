// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle);

// const bookAuthor = book.author;
// console.log(bookAuthor);

// const bookGenres = book.genres;
// console.log(bookGenres);

// book.title = 'The Last Kingdom Two';
// console.log(book.title);

// book.translation = ['ua', 'us'];
// console.log(book.translation);

// const name = 'Alex Bauer';
// const age = 30;

// const user = {
//     name,
//     age,
// };

// console.log(user.age);
// console.log(user.name);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     console.log(key);
//     console.log(book[key]);

// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// for (const key in book) {
//     if (book.hasOwnProperty(key)) {
//         console.log(key);
//         console.log(book[key]);

//     }
// }

// const keys = Object.keys(book);

// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// }

// ===
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);
// let total = 0;

// for (const value of values) {
//     total += value;
// }

// console.log(total);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// const entries = Object.entries(book);
// console.log(entries);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=====
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//     console.log(book);
//     console.log('title: ', book.title);
//     console.log('author: ', book.author);
//     console.log('rating: ', book.rating);

// }

// const bookNames = [];

// for (const book of books) {
//     bookNames.push(book.title)
// }

// console.log(bookNames);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   // Change code above this line
//   return propCount;
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

//     // Change code below this line

//     for (let product of products) {
//         console.log(product);
//         if (product.name === productName) {
//             return product.price

//         }
//         return null;
//     }

// console.log(getProductPrice(products, "Radar"));

// function getProductPrice(productsArray, productName) {
//     for (const product of productsArray) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
//     return null;
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     for (const product of products) {
//         if (propName === product.quantity) {
//             return product.quantity
//         }
//         console.log(product);
//     }

//   // Change code above this line
// }

// getAllPropValues('quantity')
// getAllPropValues('price')

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let totalPrice = 0;

//     for (const product of products) {

//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity
//             break
//         }

//     }
//     return totalPrice;

//   // Change code above this line
// }

// calculateTotalPrice('Radar')
// calculateTotalPrice('Scanner')
// calculateTotalPrice('Droid')
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const firstName = prompt('Введіть Ваше імʼя');
// const lastName = prompt('Введіть Ваше прізвище');
// const user = {
//     firstName,
//     lastName,
//     showUser() {
//         console.log(this)
//     },
//     showFullName() {
//         console.log(user.firstName + ' ' + user.lastName);
//     },
// }
// user.firstName = 'Alex';
// user['lastName'] = 'Dubovyi';
// const password = 'test123';
// const login = 'test@test.com';
// user.auth = {
//     login,
//     password,
// }
// user.showUser();
// user.showFullName();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// };

// for (const key in salaries) {
//     if (Object.hasOwnProperty.call(salaries, key)) {
//         salaries[key] = `$${salaries[key]}`;

//     }
// }
// console.log(salaries);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function findBestEmployee(employees) {
//     const employeesValues = Object.values(employees);
//     let maxValue = Math.max(...employeesValues)
//     // console.log(maxValue);

//     for (const key in employees) {
//         if (employees[key] === maxValue) {
//             return `${key} ${employees[key]}`;
//         }
//     }
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const products = ['apple', 'apple', 'banana', 'banana', 'avocado', 'cherry'];

// function sumUpTheInstances(products) {
//     // const obj = Object.create({});
//     const result = {}
//     // console.dir(result);
//     for (const product of products) {
//         if (result[product]) {
//             result[product] += 1;
//         } else {
//             result[product] = 1;
//         }
//     }
//     return result;
// }

// console.log(sumUpTheInstances(products));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     data({
//         completed: false,
//         category: "General",
//         priority: "Normal",
// })
//   // Change code above this line
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName. Викоритовуй rest оператор.
// function transformUsername({ id, email, ...arg }) {
//     const { firstName, lastName } = arg;
//     return { id, email, fullName: firstName + ' ' + lastName };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//   })
// { id: 1, fullname: 'Jacob Mercer', email: 'j.mercer@mail.com'}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// У нас є об'єкт salaries із зарплатами. Створіть функцію topSalary (salaries), яка повертає ім'я найвищого працівника. Якщо об'єкт salaries порожній, потрібно повернути null. Якщо кілька високооплачуваних співробітників можна повернути будь-якого з них. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.

// function topSalary(salaries = {}) {
//     const namesArr = Object.entries(salaries)

//     let bestWorker = 0;
//     let topEmployee = '';

//     for (const [key, value] of namesArr) {

//         if (value > bestWorker) {
//             bestWorker = value;
//             topEmployee = key;
//         }
//     }
//     return topEmployee
// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(topSalary(salaries)); ;
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Напишіть функцію, яка називається calculateSalesTotals(), яка повертає масив із двома новими ключами (saole і ttal). Ключ «sale» дорівнює розрахованій ціні продажу на основі початкової ціни та знижки. Ключ «total» дорівнює обчисленій сумі на основі запасів(stock), початкової ціни та знижки. Ви повинні використовувати деструктуризацію об’єктів для об’єктів у масиві продажів і значення за замовчуванням об’єктів для ключа знижки. Стандартним значенням буде 0.0.
// EXPECTED OUTPUT: const updatedProducts = [
//     { item: "PS4 Pro", original: 399.99, sale: 399.99, 🆕 stock: 3, total: 1199.97 🆕 },
//     { discount: 0.1, item: "Xbox One X", original: 499.99, sale: 449.99, 🆕 stock: 1, total: 449.99 🆕 }, { item: "Nintendo Switch", original: 299.99, sale: 299.99, 🆕 stock: 4, total: 1199.96 🆕 },
//     { discount: 0.8, item: "PS2 Console", original: 299.99, sale: 59.99, 🆕 stock: 1, total: 59.99 🆕 }, { discount: 0.65, item: "Nintendo 64", original: 199.99, sale: 69.99, 🆕 stock: 2, total: 139.99 🆕 }]

// const products = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];

// function calculateSalesTotals(products) {

//     // const productsCopy = structuredClone(products)
//     const productsCopy = structuredClone(products)

//     for (const product of productsCopy) {
//         const { original, discount = 0, stock } = product;
//         product.sale = (original * discount).toFixed(2)
//         product.total = ((original * stock) - (product.sale * stock)).toFixed(2)

//     }
//     return productsCopy
//  }

// console.log(calculateSalesTotals(products));
// console.log(products);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Change code below this line
// function findMatches(args, ...argsOther) {
//     const matches = []; // Don't change this line

//     for (const argOther of argsOther) {

//         if (args.includes(argOther)) {

//             matches.push(argOther)

//         }
//     }

//   // Change code above this line
//     console.log(matches);
// //   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Напиши декілька функцій:
// Отримати список моделей задопомогою функції getModels:
// Замінити назву моделі задопомогою функції changeModel
// Отримати загальну ціну всіх машин за допомогою функції getTotalPrice

// const vehicles = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
// ];
// function getModels(vehicles) {
//     const allModels = [];

//     for (const { model } of vehicles) {
//         allModels.push(model);
//     }
//     return allModels;
// }

// function changeModel(vehicles, oldName, newName) {

//     for (const vehicle of vehicles) {
//         // if (vehicle.model === oldName) {
//         //     const vehicleIndex = vehicles.indexOf(vehicle);
//         //     vehicles.splice(vehicleIndex, 1, { ...vehicle, model: newName })
//         // }
//         if (vehicle.model === oldName) {
//             vehicle.model = newName;
//             console.log(vehicles);
//          }
//     }
//     return `не має`
// }
// function getTotalPrice(vehicles) {
//     let total = 0;

//     for (const vehicle of vehicles) {
//         total += vehicle.price;
//     }
//     console.log(`$${total}`);
//     return total;
// }

// getModels(vehicles);

// changeModel(vehicles, "Mazda 6", "Hello world");
// changeModel(vehicles, "Fusion", "AAAAAA");
// changeModel(vehicles, "F-150", "BBBBBB");

// getTotalPrice(vehicles);
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function checkLineForContentOfTwoIdenticalChars(...inputStrings) {
//   const resultArr = [];
//   for (const inputString of inputStrings) {
//     const latterCount = {};

//     for (const letter of inputString) {
//       if (latterCount[letter]) {
//         latterCount[letter] += 1;
//       } else {
//         latterCount[letter] = 1;
//       }
//     }
//     console.log(latterCount);

//     if (Object.values(latterCount).includes(2)) {
//       resultArr.push(inputString);
//     }
//   }
//   return resultArr;
// }

// console.log(
//   checkLineForContentOfTwoIdenticalChars(
//     "asdf",
//     "fdas",
//     "asds",
//     "d fm",
//     "dfaa",
//     "aaaa",
//     "aabb",
//     "aaabb"
//   )
// );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// // const add = function(x, y) {
// //     return x + y;
// // }

// const addTwo = function(x, y) {
//     return x - y;
// }

// doMath(5, 2, function(x, y) {
//     return x + y;
// });

// doMath(1110, 333, addTwo)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//     orderedItems.forEach(function (item) {
//         totalPrice += item
//   })

//   // Change code above this line
//     console.log(totalPrice);
//   return totalPrice;
// }

// calculateTotalPrice([412, 371, 94, 63, 176])
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function filterArray(numbers, value) {
//     const total = [];

//     numbers.forEach(function(x) {

//         if (x > value) {
//             total.push(x)
//         }
//     });

// }

// filterArray([1, 2, 3, 4, 5], 3)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// . Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// function createProduct(obj, callback) {
//     let id = new Date()
//     const newObj = { ...obj, id }
//     callback(newObj)
// }

// function logProduct(obj) {
//     console.log(obj);
// }

// function logTotalPrice(object) {
//     const { quantity, price } = object;
//     console.log(price * quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach(item => {
//         if (secondArray.includes(item)) {
//             commonElements.push(item)
//          }

//     });
//  }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }

//     calculateTotalPrice(5, 100)
// // 500

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
     // [2]
     // [2,10]

*/

// function onlyEvenValues(array) {
// const newNumb = [];

//     array.forEach(element => {
//         if (element % 2 === 0) {
//             newNumb.push(element);
//         }
//     });
//     return newNumb;
// }

// const onlyEvenValues = (array) => {
//   const newNumb = [];
//   array.forEach((element) =>
//     element % 2 === 0 ? newNumb.push(element) : null
//   );
//   return newNumb;
// };

// console.log(onlyEvenValues([5, 1, 2, 3, 10]));

// onlyEvenValues([5, 1, 2, 3, 10]);
// onlyEvenValues([1, 2, 3]);
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function changeEven(numbers, value) {
//   // Change code below this line
//     const newNumber = [...numbers]
//     newNumber.forEach((element, index) => {
//         if (element % 2 === 0) { 
//             newNumber.splice(index, 1, (element + value))
            
//         }
//     });
//     return newNumber;
    
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //       numbers[i] = numbers[i] + value;
// //     }
// //   }
//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10)
// //[1, 12, 3, 14, 5]
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const getNamesSortedByFriendCount = users => {
//     [...users].sort((a,b) => a.friends.length - b.friends.length)
    
// };

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const car = {
//   registrationNumber: 'GA12345',
//   brand: 'Toyota',
// };

// function displayDetails (ownerName) {
//   console.log(
//     `${ownerName}, this is your car: ${this.registrationNumber} ${this.brand}`
//   );
// }

// displayDetails.call(car, 'Sofia');
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const car = {
//   registrationNumber: 'GA12345',
//   brand: 'Toyota',
// };

// const displayDetails = ownerName =>{
//   console.log(
//     `${ownerName}, this is your car: ${this.registrationNumber} ${this.brand}`
//   );
// }

// const fn = displayDetails.bind(car, 'Sofia')
// fn()
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// const directRoute = function (to = 'Chop') {
//   console.log(`${this.from} => ${to}`);
// };

// const train1 = {
//   from: 'Kyiv',
//   directRoute,
// };
// const train2 = {
//   from: 'Lviv',
//   directRoute,
// };

// directRoute.apply(train1, ['Vinnytsia']);
// directRoute.call(train1);
// train2.directRoute();
// train1.directRoute.call(train2, 'Odessa');

// const yourDirectRoute = directRoute.bind(train1);
// yourDirectRoute();
// yourDirectRoute('Kharkiv');

// const theirDirectRoute = directRoute.bind(train2, 'Poltava');
// theirDirectRoute();
// theirDirectRoute('Cherkasy');
// theirDirectRoute.call(train1);

// const anotherDirectRoute = train1.directRoute;
// console.log(anotherDirectRoute());
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const cart = {
//   items: [],

//     getItems() {
//         return this.items;
//   },
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// const apple = { name: '🍎', price: 50 };
// const grape = { name: '🍇', price: 70 };
// const lemon = { name: '🍋', price: 60 };
// const strawberry = { name: '🍓', price: 110 };

// console.table(cart.getItems());

// cart.add(apple);
// cart.add(apple);
// cart.add(lemon);

// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.add(apple);
// cart.add(apple);
// cart.add(grape);
// cart.add(grape);
// cart.add(grape);
// cart.add(lemon);
// cart.add(strawberry);
// cart.add(strawberry);

// cart.increaseQuantity('🍎');

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   // Останній id транзакції
//   lastTransactionId: 0,

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму, id та тип транзакції.
//    */
//     createTransaction(amount, type, id) {
//         const transaction = { amount, type, id };
//         return transaction;
        
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */

//     addTransaction(amount, type, id) {
//         const newTransaction = this.createTransaction(amount, type, id);
//         this.transactions.push(newTransaction);
//     },
//     deposit(amount) {
//         this.balance += amount;
//         this.lastTransactionId += 1;
//         this.addTransaction(amount, 'deposit', this.lastTransactionId)
        
//     },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
//     withdraw(amount) {
//         if (this.balance < amount) {
//             console.log(`No money honney`);
//             return;
//         }
//         this.balance -= amount;
//         this.lastTransactionId += 1;
//         const newTransaction = this.createTransaction(amount, 'withdraw', this.lastTransactionId);
//         this.transactions.push(newTransaction);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//     getBalance() {
//         return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//     getTransactionDetails(id) {
//         return this.transactions.find((transaction) =>  transaction.id === id )
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//     getTransactionTotal(type) {
//         this.transactions.reduce((total, transaction) => {
//           transaction.type === type ? total + transaction.amount : total, 0
//       })
//   },
// };

// account.deposit(100);
// console.log(account.getBalance());
// account.deposit(10);
// console.log(account.getBalance());
// account.withdraw(20);
// console.log(account.getBalance());
// account.withdraw(40);
// console.log(account.getBalance());
// console.log(account.transactions);


// console.log('Transaction 1: ');
// console.log(account.getTransactionDetails(1));
// console.log('Transaction 2: ');
// console.log(account.getTransactionDetails(2));
// console.log('Transaction 3: ');
// console.log(account.getTransactionDetails(3));
// console.log('Transaction 4: ');
// console.log(account.getTransactionDetails(4));

// console.log(
//   'Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW)
// );
// console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));
