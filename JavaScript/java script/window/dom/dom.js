let h1Element = document.getElementById('demo')
console.log('Element =',h1Element)
console.log('Element Text =',h1Element.textContent)
h1Element.textContent ='Good Evening'

console.log('=====================')

let buttonElement = document.createElement('button')
buttonElement.textContent = 'Click Me!!!!'
console.log('Button Element',buttonElement)

document.body.appendChild(buttonElement);
let ulElement = document.createElement('ul')
let li1Element = document.createElement('li')
let li2Element = document.createElement('li')
let li3Element = document.createElement('li')

li1Element.textContent = 'JAVA'
li2Element.textContent = 'SQL'
li3Element.textContent = 'JAVASCRIPT'

ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)
ulElement.appendChild(li3Element)
document.body.appendChild(ulElement)

h1Element.style.color = 'blue'
h1Element.style.fontSize = '40px'
 
function showMessage(){
    alert('Hi Hello Welcom!!!!!')
}
function changeColor(){
    let pElemenet = document.getElementById('mover')
    pElemenet.style.color = 'red'
}
function removeColor(){
    let pElement = document.getElementById('mover')
    pElement.style.color = 'black'

}
function printHello(){
    console.log('Hello')
    let userName = document.getElementById('username').value
    document.getElementById('showuserName').textContent = userName;

}
let name = 'Ganga'
let age = 22
let phoneno = 9731126168
console.log('Name is '+name + 'Age is '+age+'phone no is '+phoneno);
console.log('Nmae is ${Name} Age is ${age} phone no is ${phoneno}')
console.log(`2 + 2 = ${2+2}`)
document.getElementById('b1'). enable = true
//document.getElementById('b2'). disable = false
