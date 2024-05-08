function toggleMode() {
    if (simpleMode.classList.contains('hide')) {
        simpleMode.classList.remove('hide');
        mathMode.classList.add('hide');
    }
    else if (mathMode.classList.contains('hide')) {
        mathMode.classList.remove('hide');
        simpleMode.classList.add('hide');
    }

    // if (buttonGrid.firstChild) {
    //     renderButtons();
    // }
}

let basicButtons = [
 '+', '-', 'x', '÷', '=', 'AC', '+/-', '%', '.',
 '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// renderButton(basicButtons);

// for (let button of basicButtons) {
//     console.log(button);
// }

function renderButton(buttonText, buttonType) {
    let button = document.createElement('div');
    let text = document.createElement('span');
    text.innerText = buttonText;
    button.appendChild(text);
    button.classList.add(buttonType.toString());
    return button;
    // for (let elem of buttons) {
    //     let buttonDiv = document.createElement('div');
    //     let buttonText = document.createElement('span');
    //     buttonText.innerText = elem;

    //     buttonDiv.appendChild(text);
    //     buttonDiv.classList.add('simple-button');
    // }

    // button.appendChild(text);
    // button.classList.add('simple-button');
    // return button;
}

function appendButtons(buttons, HTMLelem) {
    console.log('appending buttons!')
    for (let elem of buttons) {
        let button = renderButton(elem, 'simple-button');
        HTMLelem.appendChild(button);
    }
}

const toggleBtn = document.querySelector('.toggle-btn');
const mathMode = document.querySelector('.math-mode');
const simpleMode = document.querySelector('.simple-mode');

const buttonGrid = document.querySelectorAll('.button-grid');

appendButtons(basicButtons, buttonGrid[0]);
appendButtons(basicButtons, buttonGrid[1]);
appendButtons(basicButtons, buttonGrid[2]);


toggleBtn.addEventListener('click', () => toggleMode());