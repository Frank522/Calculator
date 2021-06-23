let display = document.getElementById('display');
let calculator = {
    firstValue: 0,
    secondValue: 0,
    operation: undefined,
}


let add = function(a,b){
    return a + b;
};

let subtract = function(a,b){
    return a - b;
};

let multiply = function(a,b){
    return a * b;
};

let divide = function(a,b){
    if(b == 0){
        return "Error";
    }
    return a / b;
};

let noOp = function(a,b){
    return 0;
}

function extendDisplayValue (e) {
    display.innerText += e.target.innerText;
}

function preformOperation(e) {
    switch(this.id){
        case 'addition':
            calculator.operation = add;
            calculator.firstValue = +display.innerText;
            display.innerText = "";
            break
        case 'subtraction':
            calculator.operation = subtract;
            calculator.firstValue = +display.innerText;
            display.innerText = "";
            break;
        case 'multiplication':
            calculator.operation = multiply;
            calculator.firstValue = +display.innerText;
            display.innerText = "";
            break;
        case 'division':
            calculator.operation = divide;
            calculator.firstValue = +display.innerText;
            display.innerText = "";
            break;
        case 'equals':
            calculator.secondValue = +display.innerText
            display.innerText = parseFloat(calculator.operation(calculator.firstValue, calculator.secondValue)).toFixed(5);
            calculator.operation = noOp;
            break;
        case 'clear':
            calculator.firstValue = 0;
            calculator.secondValue = 0;
            calculator.operation = 0;
            display.innerText = "";
            break;

    }
}



let numberButtons = Array.from(document.querySelectorAll('#buttons .number'));
let operationButtons = Array.from(document.querySelectorAll('#buttons .operation'));


numberButtons.forEach(numberBtn => numberBtn.addEventListener('click', extendDisplayValue));
operationButtons.forEach(opBtn => opBtn.addEventListener('click', preformOperation));





