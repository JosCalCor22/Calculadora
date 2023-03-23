//BOARD ELEMENT
const boardNumber = document.querySelector('.board');
//BOARD ELEMENT

//NUMBER ELEMENTS
const numberZero = document.getElementById('zero');
const number1 = document.getElementById('one');
const number2 = document.getElementById('two');
const number3 = document.getElementById('three');
const number4 = document.getElementById('four');
const number5 = document.getElementById('five');
const number6 = document.getElementById('six');
const number7 = document.getElementById('seven');
const number8 = document.getElementById('eight');
const number9 = document.getElementById('nine');
const commaKey = document.getElementById('comma');
const pointKey = document.getElementById('point');
//NUMBER ELEMENTS

//OPERATORS ELEMENTS
const operatorPlus = document.getElementById('plus');
const operatorSubtract = document.getElementById('subtract');
const operatorDivision = document.getElementById('division');
const operatorEquals = document.getElementById('equal');
const operatorMultiplication = document.getElementById('multiplication');
//OPERATORS ELEMENTS

//VARIABLES
let placeBoard = boardNumber;
let result;
//VARIABLES

//EVENTS OPERATORS
operatorPlus.addEventListener('click', listenPlus);
operatorSubtract.addEventListener('click', listenSubtract);
operatorDivision.addEventListener('click', listenDivision);
operatorEquals.addEventListener('click', sendResult);
operatorMultiplication.addEventListener('click', listenMultiplication);
//EVENTS OPERATORS

//EVENTS NUMBERS
numberZero.addEventListener('click', listenNumberZero);
number1.addEventListener('click', listenNumberOne);
number2.addEventListener('click', listenNumberTwo);
number3.addEventListener('click', listenNumberThree);
number4.addEventListener('click', listenNumberFour);
number5.addEventListener('click', listenNumberFive);
number6.addEventListener('click', listenNumberSix);
number7.addEventListener('click', listenNumberSeven);
number8.addEventListener('click', listenNumberEight);
number9.addEventListener('click', listenNumberNine);
commaKey.addEventListener('click', listenNumberComma);
pointKey.addEventListener('click', listenNumberPoint);
//EVENTS NUMBERS

//FUNCTIONS NUMBERS
function listenNumberZero(){
    if(numberZero.click){
        placeBoard.innerText += 0;
        return
    };
}
function listenNumberOne(){
    if(numberZero.click){
        placeBoard.innerText += 1;
        return
    };
}
function listenNumberTwo(){
    if(number2.click){
        placeBoard.innerText += 2;
        return
    };
}
function listenNumberThree(){
    if(number3.click){
        placeBoard.innerText += 3;
        return
    };
}
function listenNumberFour(){
    if(number4.click){
        placeBoard.innerText += 4;
        return
    };
}
function listenNumberFive(){
    if(number5.click){
        placeBoard.innerText += 5;
        return
    };
}
function listenNumberSix(){
    if(number6.click){
        placeBoard.innerText += 6;
        return
    };
}
function listenNumberSeven(){
    if(number7.click){
        placeBoard.innerText += 7;
        return
    };
}
function listenNumberEight(){
    if(number8.click){
        placeBoard.innerText += 8;
        return
    };
}
function listenNumberNine(){
    if(number9.click){
        placeBoard.innerText += 9;
        return
    };
}
function listenNumberComma(){
    if(commaKey.click){
        placeBoard.innerText += ',';
        return
    };
}
function listenNumberPoint(){
    if(pointKey.click){
        placeBoard.innerText += '.';
        return
    };
}
//FUNCTIONS NUMBERS

//FUNCTIONS OPERATORS
function listenPlus(){
    if(operatorPlus.click){
        placeBoard.innerText += '+';
        return
    };
}
function listenSubtract(){
    if(operatorSubtract.click){
        placeBoard.innerText += '-';
        return
    };
}
function listenDivision(){
    if(operatorDivision.click){
        placeBoard.innerText += '/';
        return
    };
}
function listenMultiplication(){
    if(operatorMultiplication.click){
        placeBoard.innerText += '*';
        return
    };
}
function sendResult(){
    if(operatorEquals.click){
        result = eval(boardNumber.innerText);
        boardNumber.innerText = result;
    }
}
//FUNCTIONS OPERATORS