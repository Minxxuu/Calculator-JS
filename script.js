let value1 = "";
let value2 = "";
let operator;

const buttons = document.querySelectorAll(".numButton");
const display = document.getElementById("display");

const clearButton = document.getElementById(".clear")
clearButton.addEventListener("click", () => {display.value = ""})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const text = button.textContent;

        if (text >= "0" && text <= "9") {
            if (operator === "") {
                value1 += text;  
                display.value = value1;
            } else {
                value2 += text;  
                display.value = value2;
            }
        }});
    });

    buttons.forEach(button => {button.addEventListener("click", () => {
        const text = button.textContent;

        if(text === '+' || text === '-' || text === '*' || text === '/')
        {
            operator += text;
            display.value = value1 + " " + operator;
        }
})});


    
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
        case '+': return addition(value1, value2)
        break;
        case '-': return  subtract(value1, value2)
        break;
        case '*': return  multiply(value1, value2)
        break;
        case '/': return  divide(value1, value2)
        break;
    }
}
