let myName : string = "Mikel"

console.log(myName , typeof myName)

let age : number;

console.log(age , typeof age)

let mobileNumber=4569875214;
 
console.log(mobileNumber , typeof mobileNumber);

let address;

address = "sdsd";

address = 12;

console.log(address , typeof address)

let myAge = function() : void {

    console.log("Age is", 23)

}
myAge();

class Person{
    constructor(public name:string , public age : number){

    }
}
let person1 = new Person("Sanmathi" , 23)
console.log(person1);

class Student extends Person{
    constructor(name : string , age : number , public rollNo : number){
    super(name,age)
    }
}
let student1 = new Student("Jhon" , 20 , 122);

console.log(student1)