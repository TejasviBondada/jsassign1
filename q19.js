console.log(`${5+7}`);

let profile=`Tejasvi
21
Korukonda`;
console.log(profile);

let firstName="John",lastName="Doe";
console.log(`${firstName} ${lastName}`);

const square=n => n*n;
console.log(2);

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // because arrow functions doesn't support this keyword

const obj1 = {
  value: 50,
  test: function(){
    console.log(this.value);
  }
};
obj1.test();

const product = { name: "Pen", price: 10 };
 let p={...product}
console.log(p);

const a = { x: 1 };
const b = { y: 2 };
let merged={...a,...b}
console.log(merged);

const maxValue=(...nums) =>Math.max(...nums);
console.log(maxValue(3,9,12,15));

const arr = [10, 20, 30];
let [a1,b1]=arr;
console.log(a1);
console.log(b1);

const laptop = { brand: "Dell", ram: "8GB" };
let {brand}=laptop;
console.log(brand);

const info = {};
console.log(info?.name);

for (var i = 0; i < 3; i++) {}
console.log(i);  //prints 2

//for (let j = 0; j < 3; j++) {}
//console.log(j);
//gets Refereance error

let kmph=65;
let speed=kmph>60 ? "Fast":"Normal"
console.log(speed);

age=20;
console.log(age>=18 ? "Adult":"Minor");

let num=-20;
console.log((num>0 ? "Positive": num===0 ? "Zero":"Negative"));

const nums = [1,2,3];
n=[...nums,4,5];
console.log(n);
a2 = ["x","y"];
b2= ["z"];
let c=[...a2,...b2];
console.log(c);


function prinNames(...r){
    return r;
} 
console.log(prinNames(["A","B","C"]));

const user3 = { id: 101, status: "active" };
let {id,status}=user3
console.log(id);
console.log(status);

const id1 = 101;
const role = "admin";
const user4 = {
  id1,
  role
};
console.log(user4)

var name="teju";
var age="21";
const user5={
    name,
    age,
    greet:() => "Hello"
}
console.log(user5)
console.log(user5.greet())

console.log(`${new Date().toDateString()}`)
let score=95;
console.log(`Hello ${name} ,your score is ${score}/100`);

let arr2=[1,2,3,45]
let arr3=[...arr2];
arr4=[100,...arr2];
arr5=[...arr3,...arr4];
console.log(arr4)
console.log(arr5);

const user6 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user6.address?.city);
console.log(user6?.job?.title);



