export class Calculator {
    constructor(op1 = '', op2 = '', oper = '') {
        this.firstOperand = op1;
        this.secondOperand = op2;
        this.operator = oper;
    }

    buttonClick(val) {
        let type = this.parseButtonType(val);

        if (type === 'binaryOperator') {
            this.operator = val;
            this.secondOperand = this.firstOperand;
            this.firstOperand = '';
        }
        else if (type === 'unaryOperator') {
            this.operator = val;
            this.compute(type);
        }
        else if (type === 'number') {
            this.firstOperand += val;
        }
        else if (type === 'specialButton') {
            if (val === 'AC') {
                this.clearDisplay();
            }
            else if (val === '.') {
                // this.clearDisplay();
            }
            else if (val === '=') {
                this.compute();
            }
        }

        this.updateDisplay(nmScreen, lgScreen);
    }

    compute(type) {
        // get the function
        let operatorFcn = this.parseOperator(this.operator);

        // based on type, either call with 1 or 2 args
        if (type === 'unaryOperator') {
            this.firstOperand = operatorFcn(+this.firstOperand);
        }
        else {
            this.firstOperand = operatorFcn(+this.secondOperand, +this.firstOperand);
        }

        // clear and update screen
        this.operator = '';
        this.secondOperand = '';
        this.updateDisplay(nmScreen, lgScreen);
    }

    parseOperator(operator) {
        switch (operator) {
            // binary operators
            case '+':
                return ((a,b) => a + b);
            case '-':
                return ((a,b) => a - b);
            case 'x':
                return ((a,b) => a * b);
            case '÷':
                return ((a,b) => a / b);
            // unary operators
            case '+/-':
                return ((a) => (-1) * a);
            case '%':
                return ((a) => a/100);
            case 'Sin':
                return ((a) => Math.sin(a));
            case 'Cos':
                return ((a) => Math.cos(a));
            case 'Tan':
                return ((a) => (Math.tan(a)));
        }
    }

    parseButtonType(val) {
        if (numbers.includes(val)){
            return 'number';
        }
        else if (unaryOperators.includes(val)) {
            return 'unaryOperator';
        }
        else if (binaryOperators.includes(val)) {
            return 'binaryOperator';
        }
        else if (specialButtons.includes(val)) {
            return 'specialButton';
        }
        else {
            return undefined;
        }
    }

    // display functions
    updateDisplay(screen1, screen2) {
        screen1.innerText = this.secondOperand + ' ' + this.operator + ' ' + this.firstOperand;
        screen2.innerText = this.secondOperand + ' ' + this.operator + ' ' + this.firstOperand;
    }

    clearDisplay() {
        this.firstOperand = '';
        this.secondOperand = '';
        this.operator = '';

        this.updateDisplay(nmScreen, lgScreen);
    }
}

const nmScreen = document.querySelector('.screen');
const lgScreen = document.querySelector('.screen-large');

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const unaryOperators = ['+/-', '%', 'Sin', 'Cos', 'Tan', 'a^x', 'log', 'ln'];
const binaryOperators = ['+', '-', 'x', '÷'];
const specialButtons = ['AC', '.', '='];