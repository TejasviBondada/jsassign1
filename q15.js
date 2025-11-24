const username = "Alex";
const course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);

const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    return (`Hello ${this.name} of age ${this.age}`);
  }
};
console.log(student.greet());

const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("John", "Doe"));
