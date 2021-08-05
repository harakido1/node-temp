// immediately invoked function runs without being exported or assigned to a variable
const num1 = 5
const num2 = 10

function addValues() {
   console.log(`the sum is: ${num1 + num2}`);
}

addValues();