function toggleMode() {
    if (simpleMode.classList.contains('hide')) {
        simpleMode.classList.remove('hide');
        mathMode.classList.add('hide');
    }
    else if (mathMode.classList.contains('hide')) {
        mathMode.classList.remove('hide');
        simpleMode.classList.add('hide');
    }
}

function renderButton(buttonText, buttonType) {
    let button = document.createElement('div');
    let text = document.createElement('span');
    text.innerText = buttonText;
    button.appendChild(text);
    button.classList.add(buttonType.toString());
    return button;
}

function appendButtons(buttons, HTMLelem) {
    for (let elem of buttons) {
        let button = renderButton(elem, 'simple-button');
        HTMLelem.appendChild(button);
    }
}

let basicButtons = [
 '+', '-', 'x', '÷', '=', 'AC', '+/-', '%', '.',
 '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// simple mode
let numberButtonsArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let mathButtonsArr = ['+', '-', 'x', '÷', '='];
let calcButtonsArr = ['AC', '+/-', '%', '.'];

// math mode
let trigButtonsArr = ['Sin', 'Cos', 'Tan'];
let advMathButtonsArr = ['a^x', 'log', 'ln'];

const toggleBtn = document.querySelector('.toggle-btn');
const mathMode = document.querySelector('.math-mode');
const simpleMode = document.querySelector('.simple-mode');

const buttonGrid = document.querySelectorAll('.button-grid');
const numbers = document.querySelector('.numbers');
const mathButtons = document.querySelector('.math-buttons');
const calcButtons = document.querySelector('.calc-buttons');




// for (let elem of buttonGrid) {
//     appendButtons(basicButtons, elem);
// }

appendButtons(mathButtonsArr, mathButtons);
appendButtons(calcButtonsArr, calcButtons);
appendButtons(basicButtons, buttonGrid[1]);






toggleBtn.addEventListener('click', () => toggleMode());