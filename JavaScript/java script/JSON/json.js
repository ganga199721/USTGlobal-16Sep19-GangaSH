const person ={
    name : 'sundara',
    age : 100,
    color : 'white',
    address : {
        city : 'Bijapure',
        state : 'Karnataka',
        pincode : 591115
    },
    hobbies : ['coding','Bird Watching','singing']
}

//Converting javascript to JSON//

console.log('Javascript person Object',person)
const jsonObject = JSON.stringify(person)
console.log('JSON person Object',jsonObject)

//converting JSON to javascript//tbv
const javaScriptpersonObject = JSON.parse(jsonObject)
console.log('Javascript person Object after parse',javaScriptpersonObject)

localStorage.setItem('email','billgates@gmail.com')
const emailId = localStorage.getItem('email')
console.log('Email ID',emailId)
localStorage.clear()  
