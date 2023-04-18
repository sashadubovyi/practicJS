//1
// const products1 = ['apple', 'orange', 'melon'];
// products1.push('pear')

// console.log(products1.length);
// console.log(products1[0]);
// console.log(products1[products1.length - 1]);
// console.log(products1.shift());
// console.log(products1);
// console.log(products1.pop());
// console.log(products1);
// products1.unshift('cherry', 'lemon')
// console.log(products1);
// const indexLemon = products1.indexOf('lemon')
// console.log(products1.splice(indexLemon, 1, 'grapes'));
// console.log(products1);
// const indexOrange = products1.indexOf('orange')
// console.log(products1.splice(indexOrange, 1))
// console.log(products1);
// const products2 = ["melon", "watermelon", "pineapple"];
// console.log(products1.concat(products2));
// console.log(products1);
// const products3 = products1.concat(products2);
// console.log(new Set(products3));
// // console.log(Array.from(new Set(products3)));
// console.log([...new Set(products3)]);
// const products4 = ["grapes", "pineapple", "cherry"];
// const products4Copy = products4;
// console.log("products4", products4);
// console.log("products4Copy", products4Copy);
// console.log(products4Copy.push('oops'));
// console.log("products4", products4);
// console.log("products4Copy", products4Copy);

// const products4Copy = [].concat(products4);
// const products4Copy = products4.concat([]);
// console.log(products4.slice());
// console.log([...products4]);
// console.log(Array.from(products4));


//==================task-2
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
// function printContactsInfo(names, phones) {
//     const namesArr = names.split(',')
//     console.log(namesArr);
//     const phonesArr = phones.split(',')
//     console.log(phonesArr);
//     for (let index = 0; index < namesArr.length; index++) {
//         console.log(`${namesArr[index]} ${phonesArr[index]}`);
//     }
// }

// console.log(printContactsInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300'))



//================task-3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і пробіли) і повертає найдовше слово в цьому рядку.

// function findLongestWord (string) {
//     const words = string.split(' ');
//     // let theLongestWord = '';
//     let theLongestWord = words[0];
//     for (const word of words) { 
//         if (word.length > theLongestWord.length) { 
//             theLongestWord = word;
//         }
//     };
//     return theLongestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

//=== === ===
// function calculateTotal(number) {
//  // Change code below this line
//   for (let i = 0; i < number; i++) {
//     console.log(i);
//   }


  // Change code above this line
// }

// function findLongestWord(string) {
//     const words = string.split(' ');
//     let theLongestWord = words[0];
//     for (const word of words) { 
//         if (word.length > theLongestWord.length) { 
//             theLongestWord = word;
//         }
//     };
//     return theLongestWord;


//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog")
// findLongestWord("Google do a roll")
// findLongestWord("May the force be with you")
// // findLongestWord()

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i)
//   }
//   // Change code above this line
// //   console.log(numbers);
//   return numbers;
// }


// createArrayOfNumbers(1, 3)
// createArrayOfNumbers(14, 17)

//=== === ===
// function filterArray(numbers, value) {  
//     const newNum = [];
//     for (const number of numbers) {
//         if (number > value) {
//             newNum.push(number)
//         }
//     }
    
//     // console.log(newNum);
//     return newNum;
// }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)


// function getCommonElements(array1, array2) {
//     const array3 = [];
//     for (const arr of array1) {
//         if (array2.includes(arr)) {
//             array3.push(arr)
            
//         }
//     }
//     return array3
// }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])


// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const newNum = [];
//  for (let i = start; i <= end; i+=1) {
//    if (i % 2 === 0) {
//        console.log(i);  
//     newNum.push(i)   
//    }
//  }
//     console.log(newNum);


//     // Change code above this line
// }

// getEvenNumbers(3, 11)
  


// function includes(array, value) {
//   // Change code below this line
//     // return array.includes(value)
//     for (let name of array) {
//     //   console.log(name);
//         if (name === value) {
        
//         // console.log(name);
        
//         }
//         return true
//     // result = name
//   } 
    
    
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3)
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")


// const clients = ['aa', 'bb', 'dd']
// console.log(clients);
// clients[2] = 'cc'
// console.log(clients);
//     // ['aa', 'bb', 'cc']

//     // for (let i = 0; i < clients.length; i+=1) {
//     //     const element = clients[i];
//     //     console.log(element);
//     // }

// for (const client of clients) {
//     console.log(client);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//     if (client !== clientNameToFind) {
//         message = 'yes'; 
//         continue;
//     }
//     message = 'no'
// }

// console.log(message);

// const numbers = [1, 3, 14, 112, 222, 0, 99, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//     console.log(numbers[i]);
// }

// const name = ['Alex', 'my', 'name']
// const who = 'my'
// console.log(name.split(' '));
// console.log(name.indexOf('name'));
// console.log(name.includes(who));

// const numbers = [];
// numbers.push(1)
// numbers.push(2)
// numbers.push(3)

// console.log(numbers);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients);
// console.log(clients.slice(1));

// const scores = [1, 2, 3, 4, 5];
// scores.splice(1, 1, 'abra');
// scores.splice(2, 1, 'cadabra');
// console.log(scores);

// const one = [1, 2, 3, 4, 5]
// one.splice(1, 1, 'first')

// console.log(one);

// const one = ['My', 'name']
// const two = ['Alex', 'and', 'you', '?']

// const all = one.concat(two)
// console.log(all);