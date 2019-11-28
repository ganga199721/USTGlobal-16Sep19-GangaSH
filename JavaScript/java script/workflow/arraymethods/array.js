const hobbies = ['sleeping','cricket','eating','coading','roaming']
console.log(typeof hobbies);
const isArrayOrNot = Array.isArray(hobbies);
console.log('Hobbies array or not',isArrayOrNot)


const hascricket = hobbies.includes('cricket');
console.log('using includes method',hascricket)


hobbies.push('guiter','volleyball')
console.log('Aftet push method',hobbies)


hobbies.pop()
console.log('After pop method',hobbies)


hobbies.unshift('Numismatics','singing')
console.log('After Unshift method',hobbies)

hobbies.shift()
console.log('After shit method',hobbies)


//splice method//
const hobbies1 = ['sleeping','cricket','eating','coading','roaming']
hobbies1.splice(1,2,'Bird Watching','PUBG')
console.log('After Splice method',hobbies)

//slice method//
const afterSlice =hobbies1.slice(2,4)
console.log('After slice method',hobbies1)
console.log('After slice method',afterSlice)

const indexOfcoading = hobbies1.indexOf('coading',1)
console.log('Index of method',indexOfcoading)
const stringHobbies =hobbies1.join('-')

//map method//
const numbers = [100,200,300,400]
const nums1= numbers.map(function(value,index){
    let newValue =value + 50
    return newValue
})
console.log('After Map method',nums1)
//using fat arrow function//
const nums2 = numbers.map(value=>value+50)
console.log('After Map arrow function',nums2)

//filter method//
const number = numbers.filter(function (value,index){
    if(value>200){
        return true
    }else{
        return false
    }
})
console.log('After filter method',number)

//using fat arrow function//
const number1Arrow = numbers.filter(value=>value>200)
console.log('After filter method using arrow',number1Arrow)

const items =[{
    name : 'earrings',
    id :1,
    price :500
},{
    name : 'lipstick',
    id : 2,
    price : 5000
},{
    name : 'kajal',
    id :3,
    price : 300
},{
    name : 'eyeliner',
    id : 4,
    price : 400
}]



const updatedItem=items.map(function(item,index){
    item.price = item.price + 300
    return item
})
console.log('After Map arrow function',updatedItem)


//fat arrow fnction//
const itemsArrow = items.map((value)=>{
    value.price = value.price + 300
    return value
})
console.log('After Map arrow function',itemsArrow)

console.log('================================')

const items1 =[{
    name : 'earrings',
    id :1,
    price :500
},{
    name : 'lipstick',
    id : 2,
    price : 5000
},{
    name : 'kajal',
    id :3,
    price : 300
},{
    name : 'eyeliner',
    id : 4,
    price : 400
}]


//using fat arrow function//
const filterdItems = items.filter((item)=>item.price>1000)
console.log('After filter function',filterdItems)
