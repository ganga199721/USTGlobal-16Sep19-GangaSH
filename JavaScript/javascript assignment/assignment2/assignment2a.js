//Named functin//
function factorial(n){
    var i,fact=1;
for(i=1;i<=n;i++){
    fact =fact*i;
}
console.log('fact =',fact);
}
factorial(5);

//Function Expression//
var facto = function(n){
    var i,fact=1;
    for(i=1;i<=n;i++)
    {
        fact =fact*i;
    }
return fact;
}
var value =facto(6);
console.log('value =',value);

//Self invoked functions//
(function(n){
    var i,fact=i;
    for(i=1;i<n;i++)
    {
        fact =fact*i;
    }
    console.log('value1 =',fact);
})(5);

//Fat arrow functions//
var facto1 =(n)=>{
    var i,fact =1;
    for(i=1;i<n;i++){
        fact = fact*i;
    }
    console.log('res =',fact)
}
facto1(3)

