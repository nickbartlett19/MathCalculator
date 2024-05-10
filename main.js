import {Calculator} from './modules/calculator.js';
import {buildCalc} from './modules/buildCalc.js';

buildCalc();

let myCalc = new Calculator();

let simpleBtns = document.querySelectorAll('.simple-button');
simpleBtns.forEach(elem => elem.addEventListener('click', () => myCalc.buttonClick(elem.firstChild.innerText)))