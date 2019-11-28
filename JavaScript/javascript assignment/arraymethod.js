//for each metod//
const vowels = ['a','e','i','o','u']
const isArrayOrNot = Array.isArray(vowels);
console.log('vowels array or not',isArrayOrNot)
 
console.log('=============================')



const animals = ['cat','rat','dog','monkey'];
const isArrayOrNot1 = Array.isArray(animals);
console.log('animals array or not',isArrayOrNot1)

console.log('=============================')

const fruits = ['cat','apple','onoin'];
const isArrayOrNot2 = Array.isArray(fruits);
console.log('fruits array or not',isArrayOrNot2)

console.log('==============================')

const vegetables = ['20','50','tomato','potato']
const isArrayOrNot3 =Array.isArray(vegetables);
console.log('vegetables array or not',isArrayOrNot3)

console.log('=================================')

const items = ['1','2','3','4','5']
const isArrayOrNot4 =Array.isArray(items);
console.log('items array or not',isArrayOrNot4)

console.log('===============================')

const mobile =['lenovo','redmi','realme','asus']
const isArrayOrNot5 =Array.isArray(mobile);
console.log('mobile array or not',isArrayOrNot5)

console.log('===============================')

const car =['bmw','toyato','swift','ferrari']
const isArrayOrNot6 =Array.isArray(car);
console.log('car array or not',isArrayOrNot6)

console.log('==============================')

const bike =['duke','royalenfield','pulser']
const isArrayOrNot7 =Array.isArray(bike);
console.log('bike array or not',isArrayOrNot7)

console.log('=============================')

const names =['ganga','mallu','abhi']
const isArrayOrNot8 = Array.isArray(names);
console.log('names array or not',isArrayOrNot8)

console.log('===============================')

const vehicles =['car','bike','scooty','bicyle']
const isArrayOrNot9 = Array.isArray(vehicles);
console.log('vehicles array or not',isArrayOrNot9)


console.log('===========================================')
//includes method//

const vowels1=['a','e','i','o','u']
const hase =vowels1.includes('e');
console.log('using includes method',hase)

console.log('========================')

const animals1=['cat','dog','bat','rat'];
const hasbat = animals1.includes('bat')
console.log('using includes method',hasbat)

console.log('=========================')

const fruits1=['mango','apple','banana','grapes']
const hasmango = fruits1.includes('mango')
console.log('using includes method',hasmango)

console.log('========================')

const vegetables1=['carrot','bringol','tomato','potato']
const haspotato = vegetables.includes('potato')
console.log('using includes method',haspotato)
console.log('================================')

const items1=['lipstick','anklets','eyeliner']
const haslipstick = items.includes('lipstick')
console.log('using includes method',haslipstick)

console.log('==========================')

const mobile1=['lenovo','redmi','realme']
const haslenovo = mobile.includes('lenovo')
console.log('using includes method',haslenovo)

const car1=['bmw','ferrari','toyato']
const hastoyato = car.includes('toyato')
console.log('using includes method',hastoyato)

console.log('===========================')

const bike1=['duke','royalenfield','palsure']
const hasduke = bike.includes('duke')
console.log('using includes method',hasduke)

const names1=['ganga','mallu','abhi']
const haspreksha =name.includes('preksha')
console.log('using includes method',haspreksha)

console.log('==========================')

const vehicles1 =['car','bike','cycle','bus']
const hasbike =vehicles.includes('bike')
console.log('using includes method',hasbike)

console.log('============================')

//push method//

const vowels2=['a','e','i','o','u']
vowels2.push('m','p')
console.log('after push method',vowels2)
console.log('=============================')

const animals3=['cat','dog','rat','bat']
animals3.push('camel','donkey')
console.log('after using push method',animals3)

console.log('=========================')

const fruits3=['mango','apple','lemon']
fruits3.push('grapes','banana')
console.log('after using push method',fruits3)

console.log('========================')

const vegetables3=['cucumber','onion','carrot']
vegetables3.push('potato','tomato')
console.log('after using push method',vegetables3)

console.log('============================')

const items3=['lipstick','eyeliner','anklets']
items3.push('bangles','maskara')
console.log('after using push method',items3)

console.log('=============================')

const car3=['bmw','ferrari','toyato','swift']
car3.push('aqa')
console.log('after using push method',car3)

console.log('=============================')

const bike3=['duke','palsure']
bike3.push('palsure')
console.log('after using push method',bike3)

console.log('===============================')

const mobile3=['lenovo','redmi','realme']
mobile3.push('nokia')
console.log('after using push method',mobile3)

console.log('===============================')

const names3=['ganga','mallu']
names3.push('abhi','preksha')
console.log('after using push method',names3)

console.log('===========================')

const vehicles3=['car','bike','cycle']
vehicles3.push('train')
console.log('after using push method',vehicles3)

//pop method//

const vowels4=['a','e','i','o','u']
vowels4.pop['a','i']
console.log('after using pop method',vowels4)

const animals4=['cat','rat','bat','camel','horse']
animals4.pop('camel','rat')
console.log('after using pop method',animals4)


console.log('====================')


const fruits4=['mango','orango','banana','apple']
fruits4.pop('mango','banana')
console.log('after using pop method',fruits4)

console.log('===================')

const vegetables4=['tomato','potato','cucumber','bringle']
vegetables4.pop('potato')
console.log('after using pop method',vegetables4)

console.log('====================')


const names4=['ganga','mallu','abhi','preksha']
names4.pop('preksha')
console.log('after using pop method',names4)

console.log('=====================')

const car4=['bmw','ferrari','toyato','duke']
car4.pop('bmw')
console.log('after using pop method',car4)

console.log('======================')

const bike4=['duke','royalenfiend','palsure']
bike4.pop('duke')
console.log('after using pop method',bike4)

console.log('====================')

const mobiles4=['lenovo','redmi','realme','nokia']
mobiles4.pop('realme')
console.log('after using pop method',mobiles4)

console.log('====================')

const items4=['lipstick','eyelinner','anklet','bangles']
items4.pop('lipstick')
console.log('after using pop method',items4)

console.log('===================')

const vehicles4=['bike','train','scooty','bus']
vehicles4.pop('bike')
console.log('after using pop method',vehicles4)


//unshift method//

const vowels5=['a','e','i']
vowels5.unshift('o','u');
console.log('after using unshift method',vowels5)

console.log('========================')

const animals5=['cat','rat','dog']
animals5.unshift('donkey','rabbit')
console.log('after using unshift method',animals5)

console.log('========================')

const car5=['ferray','toyato']
car5.unshift('shwift')
console.log('after using unshift method',car5)

console.log('=========================')

const vegetables5=['carrot','potato']
vegetables5.unshift('tomato','onion')
console.log('after using unshift method',vegetables5)

console.log('========================')

const bike5=['duke','royalenfield']
bike5.unshift('palsure')
console.log('after using unshift method',bike5)

console.log('=========================')

const fruits5=['mango','banana']
fruits5.unshift('apple','jackfruit')
console.log('after using unshift method',fruits5)

console.log('===========================')

const items5=['trimmer','lipstick']
items5.unshift('eyeliner')
console.log('after using unshift method',items5)

console.log('============================')

const names5=['ganga','mallu','abhi']
names5.unshift('preksha')
console.log('after using unshift method','names5')

console.log('==========================')

const mobiles5=['lenovo','redmi','realme']
mobiles5.unshift('opo')
console.log('after using unshift method',mobiles5)

console.log('=========================')

const vehicles5=['bike','cycle']
vehicles5.unshift('bus','train')
console.log('after using unshift method',vehicles5)

const animals6=['cat','rat','bat']
animals6.shift()
console.log('after using shift method',animals6)


const fruits6=['apple','mango','banana']
fruits6.shift()
console.log('after using shift method',fruits6)


const vegetables6=['carrot','potato','tomato']
vegetables6.shift()
console.log('after using shift method',vegetables6)

const vehicles6=['car','bike','cycle','scooty']
vehicles6.shift()
console.log('after using shift method',vehicles6)


const mobiles6=['lenovo','apple','redmi']
mobiles6.shift()
console.log('after using shift method',mobiles6)

const cars6=['ferrari','bmw','toyato']
cars6.shift()
console.log('after using shift method',cars6)

const bikes6=['duke','palsure','herohonda','royalenfield']
bikes6.shift()
console.log('after using shift method',bikes6)


const items6=['dress','kajal','lipstick','bangles']
items6.shift()
console.log('after using shift method',items6)


const names6=['ganga','mallu','abhi','preksha']
names6.shift()
console.log('after using shift method',names6)


const laptops6=['apple','banana','mango','pinapple']
laptops6.shift()
console.log('after using shift method',laptops6)


//splice method//
const animals7=['cat','rat','bat','monkey','donkey']
animals7.splice('2','3','camel','elephant')
console.log('after using splice method',animals7)

const items7=['trimmer','eyelinner','nailpolish','lipstick']
items7.splice('2','4','bangles','anklets')
console.log('after using splice method',items7)

const mobiles7=['lenovo','redmi','realme','opo','apple']
mobiles7.splice('1','3','nokia','moto')
console.log('after using splice method',mobiles7)

const cars7=['toyato','shwift','redbus','airavati']
cars7.splice('3','1','kanaka','ganga')
console.log('after using splice method',cars7)


const bikes7=['duke','paslsoue','hundyai','royalenfield']
bikes7.splice('1','2','mallu','abhi')
console.log('after using splice method',bikes7)

const names7=['aaakei','netri','kavana','rekhi']
names7.splice('4','1','rekhii','vindhya')
console.log('after using splice method',names7)

const fruits7=['apple','mango','lemon','banan']
fruits7.splice('2','1','jackfruits','onion')
console.log('after using splice method',fruits7)

const vegetables7=['onion','potato','chilli','tomato']
vegetables7.splice('3','1','yyayy','iiiiiii')
console.log('after using splice method',vegetables7)

const vehicles7=['bike','train','bus','car','cycle']
vehicles7.splice('3','1','metro','tiktok')
console.log('after using splice method',vehicles7)

const vowels7=['a','e','i','o','u']
vowels7.splice('2','1','z','x')
console.log('after using splice method',vowels7)

//slice method//

const animals8=['cat','rat','bat','camel','horse']
const  afterSlice = animals8.slice(3,4)
console.log('after slice method',animals8)
console.log('after slice method',afterSlice)

const names8=['ganga','mallu','abhi','preksha','chinnu']
const afterSlice1 = names8.slice(2,5)
console.log('after slice method',names8)
console.log('after slice method',afterSlice1)

const vehicles8=['bike','car','bus','scooty','train']
const afterSlice2 = vehicles8.slice(4,1)
console.log('after slice method',vehicles8)
console.log('after slice method',afterSlice2)

const items8=['kajal','lipstick','trimmer','eyelashes','eyebrow']
const afterSlice3 = items8.slice(3,1)
console.log('after slice method',items8)
console.log('after slice method',afterSlice3)

const fruits8=['apple','mango','jackfruit','banana','lemeon']
const afterSlice4 = fruits8.slice(2,1)
console.log('after slice method',fruits8)
console.log('after slice method',afterSlice4)

const vegetables8=['carrot','cucumber','chilly','beans']
const afterSlice5 = vegetables8.slice(3,2)
console.log('after slice method',vegetables8)
console.log('after slice method',afterSlice5)

const mobiles8=['lenovo','apple','sumsang','realme']
const afterSlice6 = mobiles8.slice(1,2)
console.log('after slice method',mobiles8)
console.log('after slice method',afterSlice6)
 
const vowels8=['a','e','i','o','u']
const afterSlice7 = vowels8.slice(3,1)
console.log('after slice method',vowels8)
console.log('after slice method',afterSlice7)

const bikes8=['kannada','english','science','maths']
const afterSlice8 = bikes8.slice(1,3)
console.log('after slice method',bikes8)
console.log('after slice method',afterSlice8)

const cars8=['java','javascript','sql','html']
const afterSlice9 = cars8.slice(4,2)
console.log('after slice method',cars8)
console.log('after slice method',afterSlice9)

//map method//

const namess = [1,2,3,4]
const names9 = namess.map(function(value,index){
    let newValue = value+ 20
    return  newValue
})                                                                                                                        ``
console.log('after map metod',names9)
const vegetables9=['carrot','chilly','tomato','potato']
const bikes9=['duke','royalenfield','toyato']
const cars9=['toyato','swift','mahindra','meme']
const items9=['trimmer','lipstick','eyeliner','eyebrow']
const vowels9=['a','e','i','o','u']
const mobiles9=['lenovo','realme','redmi','apple']
const fruits9=['apple','mango','jackfruit','banana']
const vehicles9=['bike','scooty','car','bus','train']

