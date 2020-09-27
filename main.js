// numbers buttons
let number0, number1, number2, number3, number4, number5, number6, number7, number8, number9;
number0 = document.getElementById("number-0");
number1 = document.getElementById("number-1");
number2 = document.getElementById("number-2");
number3 = document.getElementById("number-3");
number4 = document.getElementById("number-4");
number5 = document.getElementById("number-5");
number6 = document.getElementById("number-6");
number7 = document.getElementById("number-7");
number8 = document.getElementById("number-8");
number9 = document.getElementById("number-9");

// operators

let operatorC, operatorAC, operatorRemainder, operatorDivision, operatorMultiply, operatorMinus, operatorPlus, operatorResult;
operatorC =  document.getElementById("operator-c");
operatorAC =  document.getElementById("operator-ac");
operatorRemainder =  document.getElementById("operator-remainder");
operatorDivision =  document.getElementById("operator-division");
operatorMultiply =  document.getElementById("operator-multiply");
operatorMinus =  document.getElementById("operator-minus");
operatorPlus =  document.getElementById("operator-plus");
operatorResult = document.getElementById("operator-result");

// show result variables
const newResult = document.getElementById("new-result");
const oldResult = document.getElementById("old-result");


const printValue = (value) => {
    value.addEventListener("click", function(){
        let nuevo = newResult.textContent + value.textContent;   // add to texcontent the value of textContent
        newResult.textContent = nuevo;                           // print new text-content
        // if(nuevo.length >= 8) {
        //     alert("superaste el limite de caracteres")
        // }
    });
}

const showResult = () => {
    let data = newResult.textContent;
    if(data.includes("+")){
        let result = 0;
        let arrayData = data.split("+");   // return array in string
        for (let element of arrayData) {
            result += parseInt(element);   // transform string element to number
        }

        return oldResult.textContent = result;
    } else if (data.includes("-")){
        let result = 0;
        let arrayData = data.split("-");   // return array in string
        result = arrayData.reduce((a,b) => a - b);  // subtract value1 of arrayData  with value2 of arrayaData
    
        return oldResult.textContent = result;
    } else if (data.includes("x")){
        let result = 0;
        let arrayData = data.split("x");   // return array in string
        result = arrayData.reduce((a,b) => a * b);  // multiply value1 of arrayData  with value2 of arrayaData
    
        return oldResult.textContent = result;
    } else if (data.includes("÷")){
        let result = 0;
        let arrayData = data.split("÷");   // return array in string
        result = arrayData.reduce((a,b) => a / b);  // multiply value1 of arrayData  with value2 of arrayaData
    
        return oldResult.textContent = result;
    } else {
        let result = 0;
        let arrayData = data.split("%");   // return array in string
        result = arrayData.reduce((a,b) => a % b);  // multiply value1 of arrayData  with value2 of arrayaData
    
        return oldResult.textContent = result;
    }
}

operatorResult.addEventListener("click", showResult);
operatorAC.addEventListener("click", function(){
    oldResult.textContent = "";
    newResult.textContent = "";
});
operatorC.addEventListener("click", function(){
    newResult.textContent = "";
});


printValue(number0);
printValue(number1);
printValue(number2);
printValue(number3);
printValue(number4);
printValue(number5);
printValue(number6);
printValue(number7);
printValue(number8);
printValue(number9);
printValue(operatorPlus);
printValue(operatorMinus);
printValue(operatorMultiply);
printValue(operatorDivision);
printValue(operatorRemainder);



