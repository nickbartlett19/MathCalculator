export class Calculator {
    constructor(op1, op2, oper) {
        this.firstOperand = op1;
        this.secondOperand = op2;
        this.operator = oper;

        // this.valString = this.secondOperand.toString() + this.operator.toString() + this.firstOperand.toString()
    }

    updateDisplay() {

    }

    buttonClick(val) {
        let type = this.parseButtonClick(val);
        console.log(type);
    }

    compute() {

    }

    parseButtonClick(val) {
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

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const unaryOperators = ['AC', '+/-', '%', '.','Sin', ,'Cos', 'Tan', 'a^x', 'log', 'ln'];
const binaryOperators = ['+', '-', 'x', '÷'];
const equals = [];