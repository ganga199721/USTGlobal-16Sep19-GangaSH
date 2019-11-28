console.log('window object,window');
console.log('This keyword',this);
console.log(this === window)


//alert('welcome to ust Global')
//window.alert('welcome to ust')


//let confirmDelete= confirm('Are you sure you want to delete');
//console.log('confirm Delete',confirmDelete)


//let userName= prompt('what is your name','ganga')
//console.log('user Name',userName)

const person ={
    firstName : 'Aliya',
    age : 26,
    lastName : 'kapoor',
    getName :function(){
        console.log('This keyword',this)
        return this.firstName + ' ' +this.lastName
    }
}
let fullName = person.getName()
console.log('Full Name',fullName)