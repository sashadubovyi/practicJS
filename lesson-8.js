/* DOM */
/* module 6 */
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// отримай body елемент і виведи його в консоль;

// отримай елемент id="title" і виведи його в консоль;

// отримай елемент class="list" і виведи його в консоль;

// отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// який елемент є сусідом для h1? Знайти і виведи його в консоль;

// по тегу h3 знайти всі заголовки та виведи їх у консоль;

// для кожного елмента h3 додай class="active", який змінить колів заголовка на червоний колір

// знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

// // додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// // у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// // створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// // додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// // знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// // видали елемент li в якому знаходиться заголовок, який має class="completed"
// // після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// // додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// // зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// // очисти список

// const body = document.querySelector("body");
// // console.log(body);

// const title = document.querySelector("#title");
// // console.log(title);

// const list = document.querySelector(".list");
// // console.log(list);

// const data = document.querySelectorAll("[data-topic]");
// // console.log(data);

// const dataTopic = document.querySelector("[data-topic]");
// // console.log(dataTopic);

// const dataLastTopic = document.querySelector(".list").lastElementChild;
// // console.log(dataLastTopic);

// const text = document.querySelector("#title").nextElementSibling;
// // console.log(text);

// const allTitle = document.querySelectorAll("h3");
// // allTitle.forEach(title => console.log(title.textContent))
// // console.log(allTitle);

// const addColorH3 = allTitle.forEach((title) => {
//   // console.log(title.textContent)
//   title.style.color = "red";
// });

// const navigationTopic = list.querySelector("[data-topic = 'navigation']");
// navigationTopic.style.backgroundColor = "yellow";

// const navigationTopicP = (navigationTopic.querySelector("p").textContent =
//   "Я змінив тут текст!");

// const currentTopic = "manipulation";
// const elementDataTopic = document.querySelector(`[data-topic=${currentTopic}]`);
// // console.log(elementDataTopic);
// elementDataTopic.style.backgroundColor = "blue";
// // elementDataTopic.removeAttribute('style')
// // elementDataTopic.hidden = true;

// const completedTitle = document.querySelector("h3.completed");
// // console.log(completedTitle);

// const propsLi = completedTitle.parentNode.remove();
// completedTitle.closest("li");
// // console.log(completedTitle.closest('li'));

// const addNewHeading = document.querySelector("h1");
// const textP = document.createElement("p");
// textP.textContent = "Об'єктна модель документа (Document Object Model)";
// addNewHeading.after(textP);
// // console.log(textP);

// const ulElement = document.querySelector(".list");
// const liElement = document.createElement("li");
// const titleElement = document.createElement("h3");
// const pElement = document.createElement("p");
// titleElement.textContent = "Властивість innerHTML";
// pElement.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// liElement.append(titleElement);
// liElement.append(pElement);
// ulElement.append(liElement);

// const markup = `
// <li data-topic="props">
//         <h3>Властивість innerHTML</h3>
//         <p>
//           Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
//         </p>
//       </li>
//       `;

// ulElement.insertAdjacentHTML('afterbegin', markup);

// ulElement.innerHTML = '';

// =-=-==-=--=-=-


// const innerText = document.getElementById('container').innerText;

// const textContent = document.getElementById('container').textContent;

// console.log("innerText: ", innerText); 

// console.log("textContent: ", textContent);

// =-=-=-==-=-=-=-=-=-=-=-


// const outerHTML = document.getElementById('container').outerHTML;
// const innerHTML = document.getElementById('container').innerHTML;
// console.log("outerHTML: ", outerHTML);
// console.log("innerHTML: ", innerHTML);

// =-=-=-=-=-=-=-=-=-=-=-=-=-

// const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

// const newText = document.createElement('p');
// newText.textContent = text;

// document.body.prepend(newText);

// const wordsArr = text.split(' ');
// // console.log(wordsArr);

// const newColorText = wordsArr.map((word) => {
//     if (word.length > 8) {
//         return `<span style='color: red'>${word}</span>`
//     }
//     return word;
// })

// newText.innerHTML = newColorText.join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. 

// В перушу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. 

// Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). 

// Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.


const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

// Приклад елементу списку
// <li data-id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ["film_2", "film_4", "film_5"];

function createMarkup(films) {
    const markup = films.map(({title, id, imgUrl}) => {
        return `<li data-id="${id}"><img src="${imgUrl}" alt="${title}" /><p>${title}</p></li>`;
    })
    return markup;
}

// console.log(createMarkup(films));
// 3я домашка 

const ulFilms = document.createElement('ul');
ulFilms.insertAdjacentHTML('afterbegin', createMarkup(films));
document.body.prepend(ulFilms);

const liSearch = document.querySelectorAll('[data-id]');

liSearch.forEach((li) => {
    if(watchedFilms.includes(li.dataset.id)) {
        li.style.opacity=0.5;
    }
    
})