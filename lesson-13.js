// appendCharacter() - до значення з інпута додає нові значення, формує вираз, результат якого будемо обчислювати далі, конкатенує значення між собою (data-type = number і data-type = operator)
// clearDisplay() - очищує значення інпута (data-type = clear)
// deleteCharacter() - видаляє один символ з кінця (data-type = delete)
// calculate() - рахує та відображає результат у інспуті (data-type = equal)

// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll(".btn");

// // Add click event listener to each button

// function appendCharacter(character) {
//     // console.log(character);
//     display.value += character;
// }

// function clearDisplay() {
//     display.value = '';
// }
// function deleteCharacter() {
//     display.value = display.value.slice(0, -1);
// }
// function calculate() { 
//     display.value = eval(display.value);
// }

// for (const button of buttons) {
//     button.addEventListener('click', (e) => { 
//         const type = button.dataset.type;
//         const value = button.dataset.value;
//         switch (type) { 
//             case 'number':
//                 appendCharacter(value);
//                 break;
            
//             case 'operator':
//                 appendCharacter(value);
//                 break;
            
//             case 'clear':
//                 clearDisplay();
//                 break;
            
//             case 'delete':
//                 deleteCharacter();
//                 break;
            
//             case 'equal':
//                 calculate();
//                 break;
//         }
//     })
// }