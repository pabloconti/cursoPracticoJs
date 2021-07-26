function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

//SQUARE CODE
let squarePerimeter = function(squareSide){
    return squareSide * 4;
}

let squareArea = function(squareSide){
    return squareSide * 2;
}

// RIGHT TRIANGLE CODE

let trianglePerimeter = function(triangleSide1, triangleSide2, triangleBase){
    return triangleSide1 + triangleSide2 + triangleBase;
}

let triangleArea = function(triangleHeight, triangleBase){
    return (triangleHeight * triangleBase)/2;
}
//ISOSCELES TRIANGLE CALCULATION
let tirangleIsHeight = function(side, base){
    let sideSquared = side * side;
    let simplifiedBase = (base*base)/4;
    let height = Math.sqrt(sideSquared - simplifiedBase);
    return height;
    
}
//CIRCLE CODE

let PI = Math.PI;
let circleRadius = 10;
let radiusSquared = Math.pow(circleRadius, 2);

let circlePerimeter = (PI, circleRadius) => (2*PI)*circleRadius;
let circleArea = (PI, radiusSquared) => PI*radiusSquared;

// HTML INTERACTION

//SQUARE

function squareAreaCalculation(){
let input = document.getElementById("inputSquare");
let value = input.value;
let perimeter = squarePerimeter(value);
alert(perimeter);
}

function squarePerimeterCalculation(){
    let input = document.getElementById("inputSquare");
    let value = input.value;
    let area = squareArea(value);
    alert(area);
}

//RIGHT TRIANGLE

function triangleAreaCalculation(){
    let inputBase = document.getElementById("triangleBase");
    let base = inputBase.value;

    let inputHeight = document.getElementById("triangleHeight");
    let height = inputHeight.value;

    let area = triangleArea(height, base);
    alert(area);  
}
function trianglePerimeterCalculation(){
    let inputSide1 = document.getElementById("triangleSide1");
    let side1 = inputSide1.value;
    side1 = parseInt(side1);

    let inputSide2 = document.getElementById("triangleSide2");
    let side2 = inputSide2.value;
    side2 = parseInt(side2);

    let inputBase = document.getElementById("triangleBase");
    let base = inputBase.value;
    base = parseInt(base);
    let perimeter = trianglePerimeter(side1, side2, base);

    alert(perimeter);
}
//ISOSCELES TRIANGLE

function triangleIsHeightCalculation(){
    let inputSide = document.getElementById("triangleIsEqualSide");
    let side = inputSide.value;

    let inputBase = document.getElementById("triangleIsBase");
    let base = inputBase.value;
    let height = tirangleIsHeight(side, base);
    height = roundToTwo(height);
    alert(height);
}
// CIRCLE

function circlePerimeterCalculation(){
    let inputRadius = document.getElementById("circleRadius");
    let radius = inputRadius.value;
    radius = parseInt(radius);
    let perimeter = circlePerimeter(PI, radius);
    perimeter = roundToTwo(perimeter);
    alert(perimeter);
}

function circleAreaCalculation(){
    let inputRadius = document.getElementById("circleRadius");
    let radius = inputRadius.value;
    radius = parseInt(radius);
    let area = circleArea(PI, radius);
    area = roundToTwo(area);
    alert(area);
}