// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=(#1)=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// // 1. Створи функцію changeBackgroundColor, яка змінює колір фону body на випадковий кожні 250 мілісекунд. Додай прослуховувач події scroll до вікна браузера, який викликає функцію debouncedBackgroundColor. Коли користувач прокручує сторінку, колір фону body буде змінюватись з затримкою в 250 мілісекунд.
// // Використовуй html з файлу scroll.html.

// const container = document.querySelector(".container");

// const changeBackgroundColor = () => {
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = randomColor;
// };

// document.addEventListener('scroll', _.throttle(changeBackgroundColor, 250))

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=(#2)=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Створи функцію getProducts, яка запускається кожного разу після того, як користувач не вводить нічого 300 мілісекунд. Є масив продуктів, у цьому масиві потрібно здійснювати пошук, та рендерити ті продукти, які починаються з тих букв, які користувач ввів в полі ввода.

// const products = [
//   { name: "Apple", img: "🍎" },
//   { name: "Pear", img: "🍐" },
//   { name: "Mango", img: "🥭" },
//   { name: "Cherry", img: "🍒" },
//   { name: "Kiwi", img: "🥝" },
//   { name: "Lemon", img: "🍋" },
//   { name: "Pineapple", img: "🍍" },
//   { name: "Orange", img: "🍊" },
// ];

// // <li style="font-size: 30px">Apple 🍎</li>
// const listEl = document.querySelector(".container");
// const inputEl = document.querySelector("input");

// const markup = createMarkup(products);

// listEl.insertAdjacentHTML("beforeend", markup);
// inputEl.addEventListener("input", _.debounce(getProducts, 300) );

// function getProducts(e) {
//   const value = e.target.value.toLowerCase();
//   const filteredProducts = products.filter((el) => {
//     if (el.name.toLowerCase().includes(value)) {
//       return el;
//     }
//   });
//   listEl.innerHTML = "";
//   const markup = createMarkup(filteredProducts);
//   listEl.insertAdjacentHTML("beforeend", markup);
// }

// function createMarkup(data) {
//   const markup = data
//     .map(({ name, img }) => {
//       return `<li style='font-size: 30px'>${name} ${img}</li>`;
//     })
//     .join("");
//     return markup;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=(#3)=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// Find movies
// Використовуй html з файлу find_cmovies.html.
// Використовуй масив фільмів з файлу movies.js
// Створи функціонал пошуку фільма за його назвою.

// Є масив об'єктів, де кожен об'єкт це фільм з своїм набором значень.
// Створи функцію handleInput, яка буде викликатися кожного разу коли користувач вводить щось в інпут.
// Необхідно застосувати прийом Debounce на обробнику події, щоб запускати функцію handleInput не одразу, а через 300мс після того, як користувач перестав вводити текст. Використовуй lodash.debounce.
// Якщо користувач повністю очищає поле пошуку, то розмітка списку фільмів або інформації про фільм зникає.
// Якщо у масиві фільмів знайшлося більше одного фільма, під тестовим полем відображається список знайдених фільмів. Кожен елемент списку складається з постера та назви фільма.

// Якщо результат запиту - це масив з одним фільмом, в інтерфейсі відображається розмітка картки з даними про фільм: постер, назва, жанр, рейтинг, короткий опис.

// Якщо фільма не було знайдено у масиві, то розмітка списку фільмів або інформації про фільм зникає і показується повідомлення в errorTextRef про те що ""Oops, there is no movie with that name""

const movies = [
  {
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg",
    genre: "Drama",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: "Crime",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    genre: "Action",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    title: "Pulp Fiction",
    poster: "https://www.miramax.com/assets/Pulp-Fiction1.png",
    genre: "Crime",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: "Fantasy",
    description:
      "A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
  },
  {
    title: "Forrest Gump",
    poster:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a936773f0c801c5bc31f5e245584e8c4ab13972101086efb347d5f94d10430e6._RI_V_TTW_.jpg",
    genre: "Drama",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
  },
  {
    title: "Avatar",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg",
    genre: "Adventure",
    description:
      "After a fateful decision to remain in avatar form, soldier Jake Sully takes on a mission to protect the Na'vi people from those who want to profit from Earth. Now Jake is the leader of this people. Therefore, when invaders invade Pandora, he will be ready to fight them off with his beloved Neytiri.",
  },
];

const refs = {
  searchInputRef: document.querySelector("#search-box"),
  errorTextRef: document.querySelector(".output-error"),
  listRef: document.querySelector(".movies-list"),
};

const { searchInputRef, errorTextRef, listRef } = refs;

function handleInput(e) {
  const value = e.target.value.toLowerCase();
  const movesList = movies.filter((movie) => {
    movie.title.toLowerCase().includes(value);
  });

  if (value === '') {
    listRef.innerHTML = '';
    errorTextRef.textContent = "";
  }
  
  if (movesList.length > 1) {
    listRef.innerHTML = '';
    errorTextRef.textContent = "";

    const markupList = createMoviesList(movesList);
    listRef.insertAdjacentHTML("beforeend", markupList);
  } else if (movesList.length === 1) {
    listRef.innerHTML = '';
    errorTextRef.textContent = "";

    const markupCard = createMovieCard(movesList);
    listRef.insertAdjacentHTML("beforeend", markupCard);
  } else {
    listRef.innerHTML = '';

    errorTextRef.textContent = "Oops, there is no movie with that name";
  }
}

function clearContent() {

}

function createMoviesList(data) {
  return data
    .map(({ poster, title }) => {
      return `
    <li>
  <img src="${poster}" alt="${title}" />
  <p class="movieName">${title}</p>
</li>
    `;
    })
    .join("");
}

function createMovieCard(data) {
  return data
    .map(({ title, poster, description, genre }) => {
      return `
        <li>
          <div class="previewCard">
            <img src="${poster}" alt="${title}" width="130px" height="200px"/>
            <div class="cardDescription">
              <h2>${title}</h2>
              <p><strong>Genre:</strong> ${genre}</p>
              <p><strong>Description:</strong> ${description}</p>
            </div>
          </div>
        </li>
      `;
    })
    .join("");
}

searchInputRef.addEventListener("input", _.debounce(handleInput, 300));
