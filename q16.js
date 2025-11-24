const isEven=(n)=>n%2===0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false

const marks=40;
const result=marks>35 ? "Pass" : "Fail";
console.log(result);

const greet=(name)=> `Hello ${name ? name : "Guest" }!`;
console.log(greet("Alice")); // Hello Alice!
console.log(greet("")); // Hello Guest!