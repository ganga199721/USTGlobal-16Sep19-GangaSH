//For of loop//
var brands = ['kingfisher','bisleri','aqua','kinley']
console.log('For of Loop')
for(var element of brands){
    console.log('Brand =',element);
}

console.log('==============================');

//for in loop//
console.log('For in Loop')
for(var index in brands){
    console.log('Brand =',[index])
}

console.log('===============================')

//for in using Object//
console.log('For in Loop of Object');
var person ={
   name : 'Sundari',
   agr : 33,
   color : 'White'
}
for(var key in person){
    console.log('value =',person[key])
}

console.log('=============================')

//for Each method of array//
var movies =['a','b','c','d']
movies.forEach(function(value,index){
    console.log('movie =',value)
    console.log('movie Index =',index)
})

console.log('===============================')

//for Each method of Object//
var items = [
{
    item : 'bangles',
    id : 1,
    price : 200
},
{
    item : 'lipstick',
    id : 2,
    price : 100
},
{
    item : 'bike',
    id :3,
    price : 100000
},
{
    item : 'watch',
    id : 4,
    price : 200
}
]
items.forEach(function(item,index){
    console.log('Item =',item)
    console.log('Index of item =',index)
})


// for var keyword//
var name;
var name ='ganga';
name = 'abhi'


//for let keyword//
//console.log(name1)
let name1 ;
//let name1 ='saho'
name1='mom'


//for const keyword//
//const name2;
const name2 ='pailwan'
//name2 ='kgf'


for(const i=0;i<5;i++)
{
    console.log('Inside for loop',i)
}
console.log('Outside for loop',i)





