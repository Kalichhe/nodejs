const {
  name,
  lastname,
  age,
  email,
  address: { cra, number },
} = require("./module/myModule");

console.log(
  `Hello ${name} ${lastname}, you have ${age} year old, your email is ${email} and you life in ${cra} # ${number}`
);

// Exports individuales nos quedamos
