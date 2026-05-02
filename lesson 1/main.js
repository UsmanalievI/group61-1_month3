console.log("hello world")

        //типы данных
"some text"  //string
1; //number
true; //boolean
undefined; //undefined
null; //null
{} //object, array
        //+2 типы данных
21243234n //BigInt
Symbol(); //symbol

//Переменные- это ячейки памяти где можно хранить данные

var variable="value";
variable="changed value";
console.log(variable);

//let; const
let LetVariables="let value"; // можно менять значение 
LetVariables="Changed let value"
console.log(LetVariables);

const ConstVariable="const value"; //нельзя менять значение 

console.log(ConstVariable);

//условия 
if(5<4){
    console.log("condition worked");
}else if(4<3){
    console.log("else if worked");
}else{
    console.log("else worked");
};

//циклы
let numberCycle=1;

while(numberCycle<=10){
    console.log(numberCycle);
    numberCycle++;
};

for(i=11; i<=20; i++){
    console.log(i);
}

//иттирация- это каждое исполнение цикла

//функции 

function funcName(){
    console.log("function worked!");
};

funcName();

function calculate(a,b){
    console.log(a+b);
    return;
}

calculate(3,7);

const arrowFunction = (a) => {
    console.log(a*a);
    
    return;
};

arrowFunction(5);

// DOM- document object model
// методы DOM
// методы это функции внутри обьекта 
