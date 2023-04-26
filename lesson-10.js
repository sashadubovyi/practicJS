// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Color Palete.Динамічно відрендери 100 блоків div з класом item задопомогою функції createPaletteItems() і помісти всі ці блоки в colorPalette.Використовуй getRandomColor для назначення рандомного кольору item.При кліку на палетку кольорів зафарбовуй body у вибраний колір.

const colorPalette = document.querySelector('.color-palette');
colorPalette / addEventListener('click', selectColor);

function selectColor(evt) {
    if (evt.target === evt.currentTarget) return;

    const targetColor = evt.target.style.backgroundColor;
    document.body.style.backgroundColor = targetColor;
}

function createPaletteItems() {
    let markup = "";

    for (let i = 0; i < 100; i += 1) {
        markup += `<div class = 'item' style = 'background-color:${getRandomColor()};'></div>`;
    }
    return markup;
}

colorPalette.insertAdjacentHTML('beforeend', createPaletteItems());

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}