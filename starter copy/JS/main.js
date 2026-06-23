let x = 10; //its local variable scope is only within the block it is defined in
var y = 20; //its global variable scope is throughout the entire program
const pi = 3.14; //its constant variable scope is throughout the entire program and its value cannot be changed

const numbers = [1, 2, 3, "Hello"]; //array destructuring assignment
const object1 = {
  name: "John",
  age: 30,
}; //object destructuring assignment
console.log(object1.name);
console.log(object1.age); 
console.log(numbers); 

if (4 === "4") {
  let z = x + y;
  console.log(z); 
}
else {
  console.log("x is not greater than 10");
}

for (let i = 2 ; i <= 5; i++) {
  console.log(i); 
}

console.log(10+null);
console.log(10+undefined);
let a =null + undefined;
console.log(a);
console.log(null==undefined);
console.log(null===undefined);
console.log(NaN===NaN);
// == is used for comparison and checks for value equality, while === is used for strict comparison and checks for both value and type equality.


function sum(a, b) {
  return "This is a function" + " and the sum of a and b is: " + (a + b);
}
console.log(sum(5, 10));

console.log(document);


let section1 = document.getElementById('hero');
console.log(section1);  

let par = document.querySelector(".par");
console.log(par);
let par5 = document.querySelectorAll("p");
let par1 = document.getElementsByClassName("par");
par1[0].innerHTML = "Hello, World! Osama";
let input1= document.getElementsByTagName("par3");
let image= document.getElementsByTagName("img");
par2[1].innerHTML = "This is a new paragraph.";
let par3= document.getElementsByName("par3");
par3[0].value = "This is a new paragraph with name par3.";




