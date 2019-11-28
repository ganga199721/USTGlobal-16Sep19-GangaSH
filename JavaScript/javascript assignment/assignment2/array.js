//named function//
function array_sum(a){
    var a =[1,2,3,4,5,6];
    var sum =0;
    for (var i=0;i<a.length;i++)
    {
        sum += a[i];
    }
    console.log('sum =',sum);
}
array_sum(6);

//Function Expression//
var array1 = function(n){
    var n = [3,5,6,1];
    var sum1=0;
    for(var i = 0;i<n.length;i++)
    {
        sum1 += n[i];
    }
    return sum1;
}
var value = array1(4)
console.log('value =',value);


//self invoked functions//
(function(r){
    var r = [6,8,9];
    var sum = 0;
    for(var i=0;i<r.length;i++){
        sum += r[i];
    }
console.log('value =',sum);
})(3);

//fat arrow function//
var array2 = (p) =>{
    var p = [3,4];
    var sum = 0;
    for(var i=0;i<p.length;i++){
        sum += p[i];
    }
    console.log('value =',sum);
}
array2(2);


