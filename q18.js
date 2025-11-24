if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); //20
// console.log(x);-> throws TDZ error 
// because let is a block scope and var is a functional scope 

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user.details.email);
console.log(profile.user.details?.phone);