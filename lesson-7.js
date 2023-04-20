// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Створіть клас "Калькулятор" у JavaScript, який містить методи для виконання простих математичних операцій (додавання, віднімання, множення, ділення) і зберігання поточного значення обчислень.

// Клас "Калькулятор" повинен містити такі методи:

// Метод "add", для виконання операції додавання двох чисел.
// Метод "subtract", для виконання операції віднімання двох чисел.
// Метод "multiply", для виконання операції множення двох чисел.
// Метод "divide", для виконання операції ділення двох чисел.
// Метод "getResult", для отримання поточного значення обчислень.
// Приклад використання класу:

// class Calculator {
//     num1;
//     num2;

//     constructor({num1, num2}) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }

//     add() {
//         return this.num1 + this.num2;
//     }

//     subtract() {
//         return this.num1 - this.num2;
//     }

//     multiply() {
//         return this.num1 * this.num2;
//     }

//     divide() {
//         return this.num1 / this.num2;
//     }

//     getResult() {
//         return {
//             add: this.add(),
//             substract: this.subtract(),
//             multiply: this.multiply(),
//             devide: this.divide()
//         }

//     }

// }

// let calc = new Calculator({ num1: 10, num2: 5 });

// calc.add(5, 10); // Результат: 15
// calc.subtract(10, 5); // Результат: 5
// calc.multiply(5, 10); // Результат: 50
// calc.divide(10, 5); // Результат: 2
// calc.getResult(); // Результат: 2
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Знайти всіх студентів, які вчаться на факультеті "IT" і вік яких старший за 21 рік.
// Знайти всіх студентів, які мають середній бал вище 4.5.
// Знайти найстаршого студента.
// Знайти середній бал для всіх студентів на факультеті "IT".
// Знайти кількість студентів на кожному з факультетів. {IT: 3, Management: 1, Marketing: 1}
// Знайти імена студентів, які вчаться на факультеті "Marketing"

// const students = [
//   { name: "Max", faculty: "IT", age: 20 },
//   { name: "Alex", faculty: "Management", age: 22 },
//   { name: "Olga", faculty: "IT", age: 24 },
//   { name: "John", faculty: "Marketing", age: 19 },
//   { name: "Kate", faculty: "IT", age: 23 },
// ];

// const findStudent = students.filter(student => student.faculty === "IT" && student.age > 21);
// // console.log(findStudent);

// const findStudentAge = [...students].sort((stud1, stud2) => stud2.age - stud1.age);
// // console.log(findStudentAge[0]);

// const findStudentsOnFaculty = students.reduce((previousValue, {faculty}) => {
//     // console.log(student);
//     if (previousValue[faculty]) {
//         previousValue[faculty] += 1;
//     } else {
//         previousValue[faculty] = 1;
//     }
//     return previousValue;
// }, {})

// // console.log(findStudentsOnFaculty);

// const findStudentFaculty = students.filter(student => student.faculty === 'Marketing')
// // console.log(findStudentFaculty);

// const findStudentNameIt = students.filter(student => student.faculty === 'IT').map(student => student.name).join(' - ')
// // console.log(findStudentNameIt);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(typeof 26735476235472n);
/* type: bigint */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Виведіть всі назви продуктів. +
// Виведіть всі продукти з категорії "Fruit". +
// Знайдіть кількість всіх продуктів у категорії "Dairy".+
// Виведіть всі продукти, які коштують менше, ніж 2.5.+
// Виведіть всі продукти, які є в наявності.+
// Виведіть всі продукти в алфавітному порядку.+
// Виведіть всі продукти в порядку зменшення ціни.+
// Виведіть назви всіх продуктів в верхньому регістрі.+
// Виведіть всі продукти в зворотньому порядку.+
// Знайдіть продукт з найвищою ціною.+
// Знайдіть загальну вартість всіх продуктів.+
// Перетворіть масив продуктів у масив об'єктів з полями name та price.
// Знайдіть індекс продукту з назвою "Milk".
// Перевірте, чи всі продукти з категорії "Fruit".
// Перевірте, чи є хоча б один продукт з категорії "Meat".
// Відсортувати продукти в порядку збільшення ціни.
// Знайти індекс продукту "Croissant".

// const products = [
//   { name: "Banana", category: "Fruit", price: 1.5, stock: 15 },
//   { name: "Apple", category: "Fruit", price: 2, stock: 8 },
//   { name: "Orange", category: "Fruit", price: 1, stock: 0 },
//   { name: "Milk", category: "Dairy", price: 3, stock: 20 },
//   { name: "Cheese", category: "Dairy", price: 5, stock: 5 },
//   { name: "Bread", category: "Bakery", price: 2.5, stock: 10 },
//   { name: "Croissant", category: "Bakery", price: 1.5, stock: 3 },
//   { name: "Eggs", category: "Dairy", price: 2.5, stock: 12 },
//   { name: "Carrot", category: "Vegetable", price: 1, stock: 7 },
//   { name: "Potato", category: "Vegetable", price: 0.5, stock: 0 },
// ];

// const productsName = products.map(product => product.name);
// // console.log(productsName);

// const productsCategoryFruit = products.filter(product => product.category === "Fruit");
// // console.log(productsCategoryFruit);

// const productsTotalDairy = products.filter(product => product.category === "Dairy").length
// // console.log(productsTotalDairy);

// const productsLessPrice = products.filter(product => product.price < 2.5);
// // console.log(productsLessPrice);

// const productsStock = products.filter(product => product.stock > 0);
// // console.log(productsStock);

// const productsSortAZ = [...products].sort((a, b) => a.name.localeCompare(b.name))
// // console.log(productsSortAZ);

// const productsSortPrice = [...products].sort((a, b) => b.price - a.price)
// // console.log(productsSortPrice);

// // products.forEach(product => { console.log(product.name.toLocaleUpperCase()) })

// const productsReverse = [...products].reverse();
// // console.log(productsReverse);

// const productsHighPrice = [...products].sort((a, b) => b.price - a.price)[0];
// // console.log(productsHighPrice);

// const productsTotalPrice = products.reduce((total, product) =>
//     total += product.price * product.stock
// , 0)
// // console.log(productsTotalPrice);

// const productsNamePrice = products.map(product => ({ name: product.name, price: product.price }));
// // console.log(productsNamePrice);

// const productsFindIndexMilk = products.findIndex(product => product.name === 'Milk');
// // console.log(productsFindIndexMilk);

// const productsIfAllProductFruit = products.every((product) => product.category === 'Fruit');
// // console.log(productsIfAllProductFruit);

// const productsIfSomeProductMeat = products.some((product) => product.category === 'Meat');
// // console.log(productsIfSomeProductMeat);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// function countVowel(strs) {
//     const vowels = ["a", "e", "i", "o", "u"];

//     const countNumber = [...strs].reduce((total, str) => {
//         // console.log(str);
//         if (vowels.includes(str.toLowerCase())) {
//             total += 1;
//         }
//         return total;
//     }, 0)
//     return countNumber;
// }

// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8
// console.log(countVowel("knowlage is a power")) // 7

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class User {
//     #name;
//     #password;

//     constructor(name, password, email) {
//         this.#name = name;
//         this.#password = password;
//         this.email = email;
//     }

//     login() {
//         console.log(`${this.email} login`);
//     }

//     logout() {
//         console.log(`${this.#name} logout`);
//     }
// }

// class Admin extends User {
//     #accessLevel = 'administrator';

//     constructor(name, password, email = 'exampl@mail' ) {
//         super(name, password, email)
//     }

//     deleteUser(name) {
//         console.log(`${name} already deleted`);
//     }
// }

// const user1 = new User('Bob', '1234', 'test@test.tt');
// const admin1 = new Admin('Admin', '4321');
// console.log(user1);
// console.log(admin1);

// const newUser = user1.login.bind({ email: 'Volodymyr' });
// admin1.logout();
// newUser();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Cтворіть клас Person, який містить наступні властивості:
//       name - ім'я людини;
//       age- вік людини;
//       gender - стать людини;
//       email- електронна пошта людини.
// Крім того, клас Person має мати метод getDetails(), який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
// Створіть клас Employee, який розширює клас Person і містить наступні властивості:
// salary - зарплата співробітника;
// department - відділ, в якому працює співробітник.
// Крім того, клас Employee має мати метод getEmployeeDetails(), який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

// class Person {
//     constructor({ name, age, gender, email }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {

//     constructor({ employeeId, salary, department, ...persondetail }) {
//         super(persondetail);
//         this.employeeId = employeeId;
//         this.salary = salary;
//         this.department = department;
//     }

//     getEmployeeDetails() {
//         return {
//             ...this.getDetails(),
//             employeeId: this.employeeId,
//             salary: this.salary,
//             department: this.department
//         }
//     }
// }


// const employee1 = new Employee({
//   name: "John Smith",
//   age: 30,
//   gender: "male",
//   email: "john.smith@example.com",
//   employeeId: "EMP123",
//   salary: 50000,
//   department: "IT",
// });

// const employee2 = new Employee({
//   name: "Sarah Johnson",
//   age: 25,
//   gender: "female",
//   email: "sarah.johnson@example.com",
//   employeeId: "EMP456",
//   salary: 60000,
//   department: "Marketing",
// });

// console.log(employee1.getEmployeeDetails());
// console.log(employee2.getDetails());

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

