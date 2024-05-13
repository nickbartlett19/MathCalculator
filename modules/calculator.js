export class Calculator {
    constructor(op1, op2, oper) {
        this.firstOperand = op1;
        this.secondOperand = op2;
        this.operator = oper;
    }

    updateDisplay(screen) {
        screen.innerText = this.firstOperand + this.operator + this.secondOperand;
        console.log('updateDisplay', screen.innerText);
    }

    buttonClick(val) {
        let type = this.parseButtonType(val);
        console.log(type);

        if (type === 'unaryOperator' || type === 'binaryOperator') {
            this.operator = val;
        }
        
        this.updateDisplay(nmScreen);
        this.updateDisplay(lgScreen);
    }

    compute() {

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
        else {
            return undefined;
        }
    }
}

const nmScreen = document.querySelector('.screen');
const lgScreen = document.querySelector('.screen-large');

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const unaryOperators = ['AC', '+/-', '%', '.','Sin', ,'Cos', 'Tan', 'a^x', 'log', 'ln'];
const binaryOperators = ['+', '-', 'x', '÷'];
const equals = [];