
let score;
score=2;
console.log(score)


//String, Numbers, Boolean, null, Undefined,Symbols

const name="John";
const age=30;
const rating=3.5;
const isCool=true;
const x=null;
const y=undefined;
let z;

console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

//concatenation
console.log("My name is" +name+ "and I am "+age+" years old.");
console.log(`My name is ${name} and I am ${rating} years old.`);

const hello=`My name is ${name} and I am ${rating} years old.`
console.log(hello);

//String Properties
const s='Hello world!'
const p="Hello,technology,it,codes"
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(6,12).toUpperCase())
console.log(s.split(""))
console.log(p.split(","))

// Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers)
const fruits=['apple','orange',true, "mango",10]
fruits [5]="grapes"
fruits.push("strawberries");
fruits.unshift("pears");
fruits.pop()
console.log(fruits)
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('orange'))

/*Multiline
comments
*/
const person={
                firstName: "Laurent",
                lastName:"Kabila",
                age: 30,
                hobbies:["music", 'movies', 'sports'],
                address:{
                            street:"50 main St",
                            city: 'Boston',
                            state:'MA',
                         }
            }

console.log(person.firstName, person.lastName, person.address)
console.log(person.hobbies.indexOf("movies"))
console.log(person.address.state)

const{firstName, lastName,address:{street, city}}=person;
console.log(lastName, firstName)
console.log(city, street)

person.email="laurent@gmail.com"
console.log(person)


const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appointment',
        isCompleted:false
    }
]

console.log(todos)
console.log(todos[2].text, todos[2].id)

//JSON string

const todoJSON=JSON.stringify(todos)
console.log(todoJSON);

//for loop
for (let i=0;i<=10;i+=5){
 console.log(`For loop number: ${i}`)
}

//while loop
let i=1;
while(i<=7){
    console.log(`while loop number: ${i}`);
    i+=3;
}

for (i=0; i<todos.length;i++){
    console.log(todos[i].text);
}

for (let todo of todos){
    console.log(todo.id);
}

// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
})


const todoText=todos.map(function(todo){
    return todo.text;
});
console.log(todoText)

const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted==true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

const todotext=todos.filter(function(todo){
    return todo.isCompleted===false;
}).map(function(todo){
    return todo.text;
});
console.log(todotext);

//Conditionals

const c=9;
const d=1;
if (c===10){
    console.log('C is 10')
} else if (c>10){
    console.log('X is greater than 10')
}
else{
    console.log("C is less than 10 and it is equal to "+c)
};

if (c>5&& d<2){
    console.log("c is greater than 5 and d is less than 2" )
}
//Other Operators
const color="green"
console.log(color)

//switches
switch (color){
    case "red":
        console.log("color is red");
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log("Color is not red or blue");
}

//Functions

function addNum(num1=1, num2=1){
    return num1+num2;
};
world=addNum(3,7);
console.log("the sum is "+world);

const AddNums=(num1=2, num2=2)=>{
    return num1+num2;
}
console.log(AddNums(3,5))


//Object Oriented Programming

//Construct object

/*
function Person(firstname, lastname, dob)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.date= dob;
   
    }
    Person.prototype.getBirthYear=function(){
        return `${this.date}`;
    }

    Person.prototype.getFullName=function(){
        return `${this.firstname} ${this.lastname}`
    }
    
    */

    //Class
    class Person{
        constructor(lastname, firstname, dob){
            this.lastname=lastname;
            this.firstname=firstname;
            this.dob=dob;
        }
        getBirthYear(){
            return this.dob.getFullYear();
        }
    }


//Instantiate object
const person1=new Person('John', 'Doe','4-3-1980');
const person2=new Person('UN', 'Georgina','7-5-2008')

console.log(person1.date, person2.lastname, person2.firstname)


console.log(person1.getBirthYear())
//Methods

