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

function renderButtons() {
    let button = document.createElement('div');
    let text = document.createElement('span');
    text.innerText = (Math.floor(Math.random()*100000009999)).toString();
    button.appendChild(text);
    button.classList.add('simple-button');
    return button;
}

const toggleBtn = document.querySelector('.toggle-btn');
const mathMode = document.querySelector('.math-mode');
const simpleMode = document.querySelector('.simple-mode');

const buttonGrid = document.querySelectorAll('.button-grid');

// console.log(buttonGrid);

for (let i = 0; i < 10; i++) {
    console.log('rendering buttons!');
    buttonGrid[0].appendChild(renderButtons());
    buttonGrid[1].appendChild(renderButtons());
}

toggleBtn.addEventListener('click', () => toggleMode());