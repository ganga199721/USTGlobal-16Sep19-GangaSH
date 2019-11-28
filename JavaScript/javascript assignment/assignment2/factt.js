//named function//
function fact(n){

    console.log('fact =',fact)
}
fact(43)

//function Expansiion//
var fact = function(n){
    return n;
}
var value = fact(90)
console.log('value ='value);

//self invoked function//
(function(n){
    console.log('value =',value)
})(67);

//fat arrow function//
var fact=()=>{
    console.log('value =',value)
}
fact(7,7);