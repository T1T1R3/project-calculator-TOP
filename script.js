const numericKeyboard = [];
const lateralKeyboard = [];
const buttonEqual = document.getElementById("buttonEqual");
const buttonClear = document.getElementById("buttonClear");
const display = document.querySelector("p");
let array = [];
let valueAux1 = 0;
let valueAux2 = 0;
let signalAux;

let result = 0;

buttonClear.addEventListener("click", () => {
    array = [];
    valueAux1 = 0;
    valueAux2 = 0;
    signalAux = "";
    return display.innerHTML = array;
})

function operationResult(value1, operation, value2){
    if(operation == " + "){
        display.innerHTML = parseFloat(value1) + parseFloat(value2);
        return parseFloat(value1) + parseFloat(value2);
    }

    else if(operation == " - "){
        display.innerHTML = parseFloat(value1) - parseFloat(value2);
        return parseFloat(value1) - parseFloat(value2);
    }

    else if(operation == " x "){
        display.innerHTML = parseFloat(value1) * parseFloat(value2);
        return parseFloat(value1) * parseFloat(value2);
    }

    else if(operation == " ÷ "){
        display.innerHTML = parseFloat(value1) / parseFloat(value2);
        return parseFloat(value1) / parseFloat(value2);
    }
}

buttonEqual.addEventListener("click", () =>{
    if(valueAux1 != 0){
        valueAux2 = concatNumber(array);
        array = [];
    }
    let result = operationResult(valueAux1, signalAux, valueAux2);
    //alert("buttonEqual value1: " + valueAux1 + " value2: " + valueAux2 + "array[0] " + array[0] + " signalAux: " + signalAux);

    array = [];
    valueAux1 = result;
    signalAux = "";
    valueAux2 = 0;

})

function concatNumber(value){
    let num = value.filter((value) => Number(value));
    num = num.join("").toString();
    return num;
}


function isEqual(){
    if(valueAux1 != 0 && valueAux2 === 0){
        valueAux2 = concatNumber(array);
        array = [];
    }
    let result = operationResult(valueAux1, signalAux, valueAux2);
    //alert("isEqual value1: " + valueAux1 + " value2: " + valueAux2 + "array[0] " + array[0] + " signalAux: " + signalAux);

    array = [];
    valueAux1 = result;
    valueAux2 = 0;
    signalAux = "";
    //alert("value1: " + valueAux1 + " value2: " + valueAux2 + "array[0] " + array[0] + " signalAux: " + signalAux);
}


function displayArray(value){
    if(value === " + " || value === " - " || value === " x " || value === " ÷ " ){
        signalValue = value;
        if(valueAux1 === 0){
            valueAux1 = concatNumber(array);
            signalAux = value;
            array = [];
        }
    }

    array.push(value);
    signalAux = array[0];
    //alert("displayArray value1: " + valueAux1 + " value2: " + valueAux2 + "array[0] " + array[0] + " signalAux: " + signalAux);
    if(valueAux1 != 0){
        display.innerHTML = valueAux1 + array.join("");
    }
    else{
        display.innerHTML = array.join("");
    }
}





function signals(value){
    if(signalAux === " + " || signalAux === " - " || signalAux === " x " || signalAux === " ÷ "){
        isEqual(); 
    }

    if(value === 0)
        displayArray(" ÷ ");
    else if(value === 1)
        displayArray(" x ");
    else if(value === 2)
        displayArray(" - ");
    else if(value === 3)
        displayArray(" + ");
}

for(let i = 0; i < 10; i++){
    numericKeyboard[i] = document.getElementById(`button${i}`);
}

for(let i = 0; i < 4; i++){
    lateralKeyboard[i] = document.getElementById(`lateral${i}`);
}

for(let i = 0; i < 10; i++){
    numericKeyboard[i].addEventListener("click", () =>{
        displayArray(i);
    })
}

for(let i = 0; i < 4; i++){
    lateralKeyboard[i].addEventListener("click", () =>{
        signals(i);
    })
}





