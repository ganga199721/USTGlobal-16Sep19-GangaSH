 const message = new Promise(function(resolve,reject){
    if(30>10){                           //passing object//
        resolve([{                
            name : 'billgates',
            age : 67
        },{
            name : 'Mark jjhwkwb',
            age : 33
        }])
    }else{
        reject('Failed')
    }
})
message.then(function(msg){
    console.log('success message',msg)
}).catch(function(error){
    console.log('Failure Message',error)
})




//passing string//
const message1 = new Promise(function(resolve,reject){
    if(30>10){
    resolve('success')  
    }else{
        reject('Failed')
    }   
    })
message1.then(function(msg){
    console.log('success message1',msg)
}).catch(function(error){
    console.log('Failure Message1',error)
})



//closures
function outerFunction(counter){
    function innerFunction(){
        let count;
        count = counter+10
        return count
    }
    return innerFunction
}
let innerFunc = outerFunction(20)
let counter = innerFunc()
console.log('Counter Value',counter)

//object destuctring//
const person={
    name : 'raju',
    age : 29,
    weight : 35
}
let name =person.name
let age=person.age
let weight=person.weight
console.log('person',person)
