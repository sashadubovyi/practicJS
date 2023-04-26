// =-=-=-=-=--=-==-=-=-=-=-
// const formSubmitRef = document.querySelector(".js-contact-form");
// const formUserNameRef = formSubmitRef.querySelector(".js-username-input");


// // 1. Form Events, Input, Blur and Focus.
// // Викоритовуй шаблон форми з файлу form.html.
// // Витягни дані з форми і при події submit законсоль їх.

// formSubmitRef.addEventListener("submit", (event) => {
//     event.preventDefault();
//     // console.log(event.currentTarget.elements.username.value);
//     // console.log(event.currentTarget.elements.accept.checked);
//     // console.log(event.currentTarget);

//     // (варіант 1)
//     // const formData = { username: event.currentTarget.elements.username.value, accept: event.currentTarget.elements.accept.checked }
    
//     // console.log(formData);

//     // (варіант 2)
//     // const formData = new FormData(event.currentTarget);
//     // const obj = {};
//     // formData.forEach((value, key) => {
//     //     obj[key] = value;
//     // })
//     // console.log(obj);

//     // варіант (3)
//     const formData = [...event.currentTarget.elements].reduce((formData, { name, value }) => {
//     if (name) {
//       formData[name] = value;
//     }
//     return formData;
//   }, {});
// });

// // При події input, якщо користувач ввів в поле більше 6 символів то зробити outline => '3px solid yellow'. Якщо ж символів менше аніж 6, то нехай outline буде => '3px solid blue'

// formUserNameRef.addEventListener("input", (event) => {
//     if (event.currentTarget.value.length === 0) { 
//         event.currentTarget.style.outline = "3px solid red";
//         return;
//     }
    
//     if (event.currentTarget.value.length >= 6) {
//         event.currentTarget.style.outline = "3px solid yellow";
//     } else {event.currentTarget.style.outline = "3px solid blue";}
// });

// // При події focus зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби outline => '3px solid red', якщо при фокусі поле непусте, то outline => '3px solid blue'

// formUserNameRef.addEventListener("focus", (event) => {
//     if (event.currentTarget.value.length === 0) {
//         event.currentTarget.style.outline = "3px solid red";
//     } else { event.currentTarget.style.outline = "3px solid blue"; }
//  });

// // При події blur зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби outline => '3px solid red', якщо при фокусі поле непусте, то outline => '3px solid lime'

// formUserNameRef.addEventListener("blur", (event) => {
//     if (event.currentTarget.value.length === 0) {
//         event.currentTarget.style.outline = "3px solid red";
//     } else { event.currentTarget.style.outline = "3px solid lime";}
// });

// =-=-=-=-=-=-

// Створіть обробники події keydown та keyup, якi будуть викликати кожного разу функцію updateValues для оновлення контенту елементів на сторінці, коли користувач натискає чи відпускає клавішу на клавіатурі.


// // refs
// const keyCode = document.getElementById("keyCode"); // показує код клавіші на яку було нажато
// const keyName = document.getElementById("keyName"); // показує клавішу на яку було нажато
// const shiftKey = document.getElementById("shiftKey"); // якщо shiftKey було нажато показує 'Pressed' інакше 'Not Pressed'
// const ctrlKey = document.getElementById("ctrlKey"); // якщо ctrlKey було нажато показує 'Pressed' інакше 'Not Pressed'
// const altKey = document.getElementById("altKey"); // якщо altKey було нажато показує 'Pressed' інакше 'Not Pressed'
// const capsLock = document.getElementById("capsLock"); // якщо capsLock увімкнено показує 'On' інакше 'Off'

// // Функція для оновлення значень на сторінці
// function updateValues(event) {

//     keyCode.textContent = event.code;
//     keyName.textContent = event.key;
//     shiftKey.textContent = event.shiftKey ? `Pressed` : `Not Pressed`;
//     ctrlKey.textContent = event.ctrlKey ? `Pressed` : `Not Pressed`;;
//     altKey.textContent = event.altKey ? `Pressed` : `Not Pressed`;;
//     capsLock.textContent = event.getModifierState('CapsLock') ? `On` : `Off`;;
// }

// document.addEventListener('keydown', updateValues);
// =-=-=-=-=-=

// 4. Розроби функціонал для вивчення нових англійський слів. У тебе є масив об'єктів translations, де кожен об'єкт це слово (оригінал та переклад). При наведенні на картку зі словом, користувач повинен побачити переклад слова. Для цього використовуй функцію getTranslation(word), яка прийматиме оригінал слова, яке потрібно перевести, функція повинна повертати переклад даного слова. При наведенні додавай на елемент з класом word ще один клас active, інакше видаляй цей клас.
// Викоритовуй шаблон html з файлу english.html. Наповни список list елементами, словами, які є в масиві translations.

// const translations = [
//   {
//     original: "hello",
//     translation: "привіт",
//   },
//   {
//     original: "flower",
//     translation: "квітка",
//   },
//   {
//     original: "apple",
//     translation: "яблуко",
//   },
// ];

// const allCards = document.querySelectorAll('li');
// // console.log(allCards);
// allCards.forEach(card => {
//     card.addEventListener('mouseover', getTranslation);
// });
 
// allCards.forEach(card => {
//     card.addEventListener('mouseleave', getOriginal);
// });
    
// function getTranslation(event) {
//     // console.log(event.target.textContent);
//     const selectedWord = event.target.textContent;

//     const selectedWordTransleted = translations.find(translation =>
//         translation.original === selectedWord).translation;
//     console.log(selectedWordTransleted);

//     event.target.textContent = selectedWordTransleted;
// }


 
// function getOriginal(event) {
//     // console.log('hello');
//     const selectedWord = event.target.textContent;
//     console.log(selectedWord);
//     const selectedWordTransleted = translations.find(word =>
//         word.translation === selectedWord
//     ).original;

//         console.log(selectedWordTransleted);
//     event.target.textContent = selectedWordTransleted;
// }

// =-=-=-=-=-=-=-=-=-=-=-

// Modal. Keyboard events.
// Викоритовуй шаблон модального вікна з файлу modal.html.
// По кліку на login_btn відкрий модальне вікно змінивши стиль модалки з display: "none" на display: "block" 
// Отримай дані з форми по події submit, виводь дані у консоль і закривай модалку попередньо очистивши форму від введених даних.
// При кліку на хрестик чи по кнопці cancel закривай модалку змінивши стиль з display: "block" на display: "none" 
// Якщо користувач натиснув не на модалку, а на задній фон, також закривай модалку
// Якщо користувач натиснув ESC також закривай модалку
// refs

const backdropRef = document.querySelector(".js-backdrop");
const openBtnRef = document.querySelector(".js-modal-open");
const closeBtnRef = document.querySelector(".js-modal-close");

// // відкриття модалки
const handleOpenClick = () => {
    backdropRef.classList.add('is-open');
    closeBtnRef.addEventListener('click', handleClose);
    openBtnRef.removeEventListener('click', handleOpenClick);
    document.addEventListener('keyup', onEscPress);
    backdropRef.addEventListener('click', handleCloseBackdrop);
};
openBtnRef.addEventListener('click', handleOpenClick);

// // закриття модалки
const handleClose = () => { 
    backdropRef.classList.remove('is-open');
    closeBtnRef.removeEventListener('click', handleClose);
    openBtnRef.addEventListener('click', handleOpenClick);
    document.removeEventListener('keyup', onEscPress);
    backdropRef.removeEventListener('click', handleCloseBackdrop);
};
closeBtnRef.addEventListener('click', handleClose);


const onEscPress = (e) => { 
    if (e.code === 'Escape') { 
        handleClose()
    }
};


function handleCloseBackdrop(e) {
    if (e.target.classList.contains('backdrop')) {
        handleClose();
    }
}
backdropRef.addEventListener('click', handleCloseBackdrop);
