const prompt = require("prompt-sync")()
let input = prompt("Enter the number for working on: ")

if (!isNaN(input)) {
    let num = parseInt(input)
    let result_f = factorial(num)
    let result_F = Fibonachi(num)
    console.log('\x1b[34m%s\x1b[0m', `Factorial of a number (${num}) =`, result_f)
    console.log('\x1b[32m%s\x1b[0m', `Fibonacci number at the index (${num}) =`, result_F)
    return
} 

console.log('\x1b[31m%s\x1b[0m',"Invalid input. Please enter a valid number.")


function factorial(a){
    if(a <= 0){ 
        return `It is not possible to calculate the factorial of the given number`
    }
    else if(a <= 1){ 
        return 1
    }

    return a * factorial(a - 1)

}

function Fibonachi(a){
    if(a < 0){ 
        return `The Fibonacci number is undefined for the given number`
    }
    else if(a <= 1){ 
        return a
    }
    return Fibonachi(a - 1) + Fibonachi(a - 2)
}

