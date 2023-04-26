//  Викоритовуй шаблон акордеон меню з файлу accordion.html та напиши наступний функціонал: при кліку на елемент меню, розкривай блок з текстом. При повторному кліку по елементу, розкритий текст приховується. Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.


const listRef = document.querySelector(".js-accordion-list");

console.dir(listRef)

function handleBtnClick(event) {
    if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'SPAN') {
        // console.log('hello');
        const activeElement = event.target.closest('li');
        const panel = activeElement.querySelector('.panel')

        panel.classList.toggle('active');
    }
}

listRef.addEventListener("click", handleBtnClick);

