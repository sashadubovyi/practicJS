/*  класи  */
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// const parent = {
//   name: "Luce",
//   age: 35,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Bob";
// child.age = 7;

// // console.log(child.name); // ?
// // console.log(child.age); // ?
// // console.log(child.heritage); // ?
// // console.log(child);
// for (const key in child) {
//     if (child.hasOwnProperty(key)) {
//         const element = child[key];
//         console.log(element);
//     }
    
// }
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Напиши клас Client який створює об'єкт з властивостями login i email.Оголоси приватні властивості #login #email, доступ до яких зроби через геттер і сеттер login/email

// class Client {
//     #login;
//     #email;
//     static age = 30;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login
//     }

//     set email(newEmail) {
//         return this.#email = newEmail;
//     }

//     get email() {
//         return this.#email;
//     }

//     get age() {
//         return Client.age;
//     }
// }

// const newClient = new Client('abra', 'kadabra@o.o')
// newClient.email = `${newClient.login}-kadabra@o.o`;

// console.log(newClient.login);
// console.log(newClient.email);
// console.log(newClient);

// console.log(Client.age);
// console.log(newClient.age);
// console.log(this);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.
// Для цього потрібно реалізувати клас Order, який містить такі приватні властивості:
// tableNumber - номер столика, де зроблено замовлення
// items - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// isPaid - позначає, чи оплачене замовлення (default = false)
// Для класу Order потрібно реалізувати такі методи:
// calculateTotal() - повертає загальну суму замовлення і "чек".
// markAsPaid() - позначає замовлення як оплачене
// Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення
// Також потрібно створити клас MenuItem, який містить властивості name та price для предметів замовлення.

// class MenuItem {

//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }
// const pizza = new MenuItem("Pizza", 10);
// const salad = new MenuItem("Salad", 5);
// const burger = new MenuItem("Burger", 8);
// const fries = new MenuItem("Fries", 3);
// const soda = new MenuItem("Soda", 2);

// console.log(pizza);



// class Order {
//     #tableNumber;
//     #items;
//     #isPaid;

//     constructor({tableNumber, items}) {
//         this.#tableNumber = tableNumber;
//         this.#items = items;
//         this.#isPaid = false;
//     };

//     calculateTotal() { 
//     const totalPrice = this.#items.reduce((total, item) => (total += item.price), 0);
//     const items = this.#items.map((item) => `${item.name} - ${item.price}`).join('\n');
//     return `  Table ${this.#tableNumber}\n  Items:\n${items}\n  Total: ${totalPrice}\n  Status: ${this.#isPaid ? 'Paid' : 'Not paid'}`;
// };
//     markAsPaid() {
//         this.#isPaid = true;
//     };
    
//     get isPaid() {
//         return this.#isPaid;
//     }
// }
// const order1 = new Order({ tableNumber: 3, items: [pizza, salad] });
// const order2 = new Order({ tableNumber: 5, items: [burger, fries, soda] });

// // Order.Objectcreate(MenuItem);

// console.log(order1.calculateTotal());
// /*
// Table 3
// Items:
// Pizza - 10
// Salad - 5
// Total: 15
// Status: Not paid
// */

// // order2.markAsPaid();
// // console.log(order2.isPaid); // Output: true
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=



// // Створення книг
// class Book {
   
//     constructor({title, author}) {
//         this.title = title;
//         this.author = author;
//         this.available = true;
//     }

//     getDetails() {
//         return `Title: ${this.title}, Author: ${this.author};`
//     };
    
//     toggleAvailability() { 
//         this.available = !this.available
//     };
// }

// class User {
//     constructor(fullName) {
//         this.fullName = fullName;
//         this.books = [];
//     }

//     getDetails() {
//         return this;
//     }

//     borrowBook(book) {
//         // console.log(book);
//         if (book.available) {
//             console.log('успіх');
//         } else {
//             console.log('книги немає');
//         }
//     }
// }

// class Library {

//     constructor () {
//         this.books = [];
//         this.users = [];
//     }

//     addBook(book) {
//         this.books.push(book);
//     }

//     removeBook(bookName) {
//         const book = this.books.find(book => book.title === bookName);
//         if (book) {
//             const indexBook = this.books.indexOf(book);
//             this.books.splice(indexBook, 1);
//             console.log(this.books);
//         } else {
//             console.log(`такої книги немає`);
//         }
//     }

//     addUser(user) {
//         this.users.push(user);
//     }

//     removeUser(userName) {
//         // const user = this.users.find(user => user.name === userName);
//         // if (user) {
//         //     const indexUser = this.users.indexOf(user);
//         //     this.users.splice(indexUser, 1);
//         //     console.log(this.users);
//         // } else {
//         //     console.log(`такої користувача немає`);
//         // }
        
//         this.users = this.users.filter(user => user.fullName !== userName)
//     }

//     findAvailableBooks() {
//         return this.books.filter(book => book.available)
//     }

//     findUserBooks(userName) {
//         const user = this.users.find(user => user.fullName === userName);
//         if (user) {
//             return user.book
//         } return `такого юзера немає`
//     }
// }


// const book1 = new Book({
//   title: "Harry Potter and the Philosopher's Stone",
//   author: "Joanne Rowling",
// });

// const book2 = new Book({
//   title: "The Hobbit",
//   author: "John Ronald Reuel Tolkien",
// });

// const book3 = new Book({
//   title: "The Clean Coder",
//   author: "Robert C. Martin",
// });

// // Створення користувачів
// const user1 = new User("Ethan Anderson");
// const user2 = new User("Olivia Johnson");

// // Створення бібліотеки
// const library = new Library();

// // // Додавання книг до бібліотеки
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

// // // Додавання користувачів до бібліотеки
// library.addUser(user1);
// library.addUser(user2);

// // // Позичення книг
// console.log(user1.getDetails());

// user1.borrowBook({
//   title: "The Fault in Our Stars",
//   author: "John Green",
// });
// user1.borrowBook(book1);

// user1.getDetails();

// // // Пошук книг які позичив користувач
// library.findUserBooks("Sofia Protsiv");
// library.findUserBooks("Ethan Anderson");

// // // Пошук книг які ще доступні
// library.findAvailableBooks();

// library.removeBook("The Hobbit",)