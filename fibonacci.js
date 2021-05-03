const prompt = require('prompt-sync')();
let number = prompt ('ingrese un numero: ' )
function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
 }
 
console.log(fibonacci(number));
console.log('F(',number,')='+fibonacci(number));