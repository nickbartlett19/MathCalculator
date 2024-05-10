export function buildCalc() {
    for (let elem of mathButtons) {
        appendButtons(mathButtonsArr, elem);
    }
    for (let elem of calcButtons) {
        appendButtons(calcButtonsArr, elem);
    }
    for (let elem of numberButtons) {
        appendButtons(numberButtonsArr, elem);
    }
    for (let elem of trigButtons) {
        appendButtons(trigButtonsArr, elem);
    }
    for (let elem of advMathButtons) {
        appendButtons(advMathButtonsArr, elem);
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

// simple mode
let numberButtonsArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '='];
let mathButtonsArr = ['+', '-', 'x', '÷'];
let calcButtonsArr = ['AC', '+/-', '%', '.'];

// math mode
let trigButtonsArr = ['Sin', 'Cos', 'Tan'];
let advMathButtonsArr = ['a^x', 'log', 'ln'];

const toggleBtn = document.querySelector('.toggle-btn');
const mathMode = document.querySelector('.math-mode');
const simpleMode = document.querySelector('.simple-mode');

const numberButtons = document.querySelectorAll('.number-buttons');
const mathButtons = document.querySelectorAll('.math-buttons');
const calcButtons = document.querySelectorAll('.calc-buttons');

const trigButtons = document.querySelectorAll('.trig-buttons');
const advMathButtons = document.querySelectorAll('.adv-math-buttons');

toggleBtn.addEventListener('click', () => toggleMode());