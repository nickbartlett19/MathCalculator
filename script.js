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


const toggleBtn = document.querySelector('.toggle-btn');
const mathMode = document.querySelector('.math-mode');
const simpleMode = document.querySelector('.simple-mode');


toggleBtn.addEventListener('click', () => toggleMode());