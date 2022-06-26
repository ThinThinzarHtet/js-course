// regular function
// const calcArea = function (radius) {
//   return  3.14 * radius ** 2;
// };

// arrow function
// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log(area);

// practise arrow functions

// const greet = () => 'hello world';
// const result = greet();
// console.log(result);

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

const name = 'shaun';

// functions
const greet = () => 'hello';
let resultOne = greet();

// methods
let resultTwo = name.toUpperCase();

// callbacks and foreach
// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc((value) => {
//   console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shuan', 'chuang'];

// const logPerson = (person, index) => {
//   console.log(`${index} - Hello ${person}`);
// };
// people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');
const people = ['mario', 'luigi', 'ryu', 'shuan', 'chuang'];

let html = ``;
people.forEach((person) => {
  // create html template
  html += `<li style = "color: purple">${person}</li> `;
});

console.log(html);
ul.innerHTML = html;
