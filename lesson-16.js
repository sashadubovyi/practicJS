// =-=-=-=-=-=-=-=-=-=-=-=-=( #1 )=-=-=-=-=-=-=-=-=-=-=-=-=
// 3. Різниця між textContent i innerText. Що буде у консолі?
// <div id="container">
//   <p>Це <em>параграф</em> зі <strong>строгою</strong> розміткою<span style="display: none;"> та прихованим текстом</span></p>
// </div>
// const innerText = document.getElementById('container').innerText;
// const textContent = document.getElementById('container').textContent;
// console.log("innerText: ", innerText);
// console.log("textContent: ", textContent);

// =-=-=-=-=-=-=-=-=-=-=-=-=( #2 )=-=-=-=-=-=-=-=-=-=-=-=-=
// 4. Різниця між outerHTML i innerHTML. Що буде у консолі?
// <div id="container">
//   <p>Це <em>параграф</em> зі <strong>строгою</strong> розміткою<span style="display: none;"> та прихованим текстом</span></p>
// </div>
// const outerHTML = document.getElementById('container').outerHTML;
// const innerHTML = document.getElementById('container').innerHTML;
// console.log("outerHTML: ", outerHTML);
// console.log("innerHTML: ", innerHTML);

// =-=-=-=-=-=-=-=-=-=-=-=-=( #3 )=-=-=-=-=-=-=-=-=-=-=-=-=
// Використовуючи поширення подій, напиши скрипт, який при кліку по кнопці remove-button буде видаляти елемент зі списку.

// const list = document.querySelector(".list");

// list.addEventListener("click", closeItem);

// function closeItem(e) {
//     if (e.target.nodeName === 'BUTTON') {
//         const item = e.target.closest('li');
//         // const item = event.target.parentNode;
//         item.remove();
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=( #4 )=-=-=-=-=-=-=-=-=-=-=-=-=
// При кліку на певну дату у календарі, вішай клас active на обрану дату.Якщо раптом захотілось обрати іншу дату, не проблема, просто видали всі вже існуючі класи active зі сторінки і додай новий клас active на нову дату.

// const calendar = document.querySelector('.calendar');

// calendar.addEventListener('click', handleClick);

// function handleClick (e) {
//     if (e.target.nodeName === 'TD') {
//         if (e.target.textContent === '') return;
//         const activeClass = calendar.querySelectorAll('.active');
//         activeClass.forEach((activeElements) => activeElements.classList.remove('active'));

//         e.target.classList.add('active');
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=( #5 )=-=-=-=-=-=-=-=-=-=-=-=-=
// 4. При відправці форми записуй дані з інпутів у об'єкт під назвою formData і роби перевірку, якщо інпут емейла чи пароля був не заповнений, то вішай клас error на emailError і passwordError відповіно. Якщо ж все було заповнено, то видаляй ці класи.
// html: https://github.com/SofiaProtsiv/bc-51/blob/main/faq/form.html

// const form = document.querySelector("form");
// const emailError = document.querySelector(".field.email");
// const passwordError = document.querySelector(".field.password");

// form.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   const resultObj = {};
//   const email = e.currentTarget.elements.email.value;
//   const password = e.currentTarget.elements.password.value;

//   if (!email) {
//     emailError.classList.add("error");
//   } else {
//     emailError.classList.remove("error");
//   }

//   if (!password) {
//     passwordError.classList.add("error");
//   } else {
//     passwordError.classList.remove("error");
//   }

//     if (email && password) {
//         resultObj.email = email;
//         resultObj.password = password;
//         console.log(resultObj);
//   }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=( #8 )=-=-=-=-=-=-=-=-=-=-=-=-=
// Зарендери розмітку піц у список.Використовуй шаблон карточки піци, який наведений нижче.У кожної піци є своя категорія, тому зроби масив §категорій, які є унікальними на основі масиву об'єктів піц і зарендери категорії у список контейнера categories, просто огорнувши назву категорії у елемент списку. Тепер ти можеш додати динаміку і зробити фільтр по категоріях, показуй ті піци, які співпали з обраною категорією.

const pizzas = [
  {
    id: 0,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    title: "Pepperoni Fresh with pepper",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 80.3,
    category: "Meat",
    rating: 4,
  },
  {
    id: 1,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    title: "Cheese",
    types: ["thin"],
    sizes: [26, 40],
    price: 24.5,
    category: "Vegetarian",
    rating: 6,
  },
  {
    id: 2,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    title: "Barbecue chicken",
    types: ["thin"],
    sizes: [26, 40],
    price: 29.5,
    category: "Grill",
    rating: 4,
  },
  {
    id: 3,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
    title: "Sweet and sour chicken",
    types: ["thin"],
    sizes: [26, 30, 40],
    price: 27.5,
    category: "Meat",
    rating: 2,
  },
  {
    id: 4,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    title: "Cheeseburger pizza",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 41.5,
    category: "Grill",
    rating: 8,
  },
  {
    id: 5,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
    title: "Crazy pepperoni",
    types: ["thin"],
    sizes: [30, 40],
    price: 58,
    category: "Meat",
    rating: 2,
  },
  {
    id: 6,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
    title: "Pepperoni",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 67.5,
    category: "Meat",
    rating: 9,
  },
  {
    id: 7,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    title: "Margarita",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 45,
    category: "Vegetarian",
    rating: 10,
  },
  {
    id: 8,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    title: "Four seasons",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 39.5,
    category: "Meat",
    rating: 10,
  },
  {
    id: 9,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
    title: "Vegetables and mushrooms 🌱",
    types: ["thin", "traditional"],
    sizes: [26, 30, 40],
    price: 28.5,
    category: "Vegetarian",
    rating: 7,
  },
];

const newList = document.querySelector(".cards-list");

const pizzaMarkup = pizzas
  .map(({ id, title, imageUrl }) => {
    return `
    <li class="card" id="${id}">
        <div class="card__image">
            <img src="${imageUrl}" alt="${title}" />
        </div>    
        <div class="card__info">
        <div class="car__info--title">
        <h3>${title}</h3>
        </div>
        <div class="card__info--button">
        <div data-heart>&#x2764;</div>
        </div>
        </div>
    </li>
    `;
  })
  .join("");

newList.insertAdjacentHTML("afterbegin", pizzaMarkup);

const categoriesList = document.querySelector(".categories > ul");
const categoriesItem = pizzas.map(({ category }) => category);
const uniqueCategory = [...new Set(categoriesItem)];
const categoryMarkup = uniqueCategory
  .map(
    (category) =>
      `
    <li>${category}</li>
    `
  )
  .join(" ");

categoriesList.insertAdjacentHTML("afterbegin", categoryMarkup);
categoriesList.addEventListener("click", filterPizzas);

function filterPizzas(e) {
  if (e.target.nodeName === "LI") {
    const selectedCategory = e.target.textContent;
    const filteredArray = pizzas.filter(
      (pizza) => pizza.category === selectedCategory
    );
    const pizzaMarkup = filteredArray
      .map(({ id, title, imageUrl }) => {
        return `
    <li class="card" id="${id}">
        <div class="card__image">
            <img src="${imageUrl}" alt="${title}" />
        </div>    
        <div class="card__info">
        <div class="car__info--title">
        <h3>${title}</h3>
        </div>
        <div class="card__info--button">
        <div data-heart>&#x2764;</div>
        </div>
        </div>
    </li>
    `;
      })
      .join("");

    newList.innerHTML = "";
    newList.insertAdjacentHTML("afterbegin", pizzaMarkup);
  }
}
