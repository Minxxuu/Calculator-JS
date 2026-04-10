let value1;
let value2;
let operator;


function addition(a , b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a , b){
    return a * b;
}

function divide (a , b){
    return a / b;
}

function operate(value1, value2, operator){
    switch(operator)
    {
        case '+': addition(value1, value2)
        break;
        case '-': subtract(value1, value2)
        break;
        case '*': multiply(value1, value2)
        break;
        case '/': divide(value1, value2)
        break;
    }
}
