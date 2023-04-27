// // Налаштування, необов'язковий параметр
// let options = {
//   root: document.querySelector('.scroll-list'),
//   // root - елемент, який виступає в ролі області перегляду для target (предок цільового елемента або null для viewport)
//   rootMargin: '5px',
//   // rootMargin - відступи навколо root (margin у CSS, за умовчанням всі відступи дорівнюють 0)
//   threshold: 0.5,
//   // threshold - число або масив чисел, що вказує допустимий відсоток перетину target та root
// };

// Функція зворотного виклику. Виклик callback повертає об'єкт, що містить запис про зміни, що відбулися з цільовим елементом:
let callback = (entries, observer) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.setAttribute('src', entry.target.dataset.src)
          observer.unobserve(entry.target);
    }
  });
};

// Спостерігач
let observer = new IntersectionObserver(callback);

// Далі знаходимо цільовий елемент, за яким спостерігатиме спостерігач:
// let target = document.querySelector('.list-item');
const images = document.querySelectorAll('img');
images.forEach(img => {
    observer.observe(img);
});


// Вішаємо спостерігача на той цільовий елемент який знайшли раніше
;

