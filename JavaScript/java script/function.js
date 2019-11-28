//Nmaed Functions
function add(num1,num2){
    console.log('Sum =',num1+num2);

}
add(10,20)
function add(num1,num2,num3){
    console.log('sum value =',num1+num2+num3)
}
//Function Expression(Anonymous)
var sub =function(num1,num2){
    var subValue = num1-num2;
    return subValue;
}


var value = sub(90,89)
console.log('Value =',value);

//self invoked functions
(function(num1,num2){
    console.log('value =',num1*num2);
})(10,20)

console.log('====================')

//fat arrow functions
var div = (num1,num2)=>{
    console.log('value =',num1/num2);
}
div(10,5);

console.log('====================')

var div1 = num1=>{
    console.log('value =',num1);
}
 
console.log('======================')
var div2=num1=>console.log(num1);
div2(20);

console.log('==========================')
var add1=(num1,num2)=> num1+num2;
var value =add(10,20);

console.log('==================')
greeting('ganga');
function greting(msg){
    console.log('Hello',msg);
}

console.log('========================')
greet('Dinga');
var greet=function(msg){
    console.log('Hi',mag);
}

console.log('=====================')
greets ('Dingi');
var greets=(msg)=>{
    console.log('Hi',msg);
}


