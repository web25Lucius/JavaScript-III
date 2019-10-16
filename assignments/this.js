/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding: most often used.  check left of the .notation and you'll find what object 'this' is calling
* 2. explicit binding: directly call what you want to pull into a function using .call, .apply or .bind.  
* 3. window binding: this is usually a mistake, and def bad practice.  When you forget to define 'this' it attaches to the window (global) object.  Avoid this.
* 4. new binding:  using the word 'new' you can create a constructor.  
*
* write out a code example of each explanation above
*/


// Principle 1
window.age =35; 
const sayAge = function (){
    console.log(this.age); 
}

sayAge(); 
// code example for Window Binding.



// Principle 2
let person = {
    name: 'Bea', 
    age: 42, 
    location: 'Shawnee',
    greeting: function (){
        return (`Welcome to SLC, ${this.name}! The ${this.location} group guide will meet you in the green room!`);
    }
}; 

console.log(person.greeting()); 
// code example for Implicit Binding



// Principle 3

function BestFriend (species, color, name, age) {
    this.species= 'animial';
    this.color= 'color'; 
    this.name= 'name'; 
    this.age= Number 
}; 

let prince = new BestFriend ('cat', 'orange', 'Prince', 12); 
let emeril = new BestFriend ('cat', 'grey-black-white-stripes', 'Emeril', 17); 
let duke =  new BestFriend ('cat', 'hairless', 'Duke', 8); 
let juju = new BestFriend ('cat', 'dark-grey', 'JuJuBee', 5); 

console.log(prince); 
// code example for New Binding




// Principle 4
function greetPet (name, age, food){
    console.log(`Happy Birthday ${this.name}! You are ${this.age} today!  Enjoy our gift to you!  Your favorite, ${this.food} !!`); 
}

let bird = {
    name: 'Soran', 
    age: 19, 
    food: 'Bacon'
}; 

let ferret = {
    name: 'Juliet', 
    age: 7, 
    food: 'apple-chips'
}; 

let dog = {
    name: 'Rocko',
    age: 2, 
    food: 'nuggets'
}; 


greetPet.call(bird); 
// code example for Explicit Binding