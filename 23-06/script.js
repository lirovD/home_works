//     1
const mul = (m,n) => {
    return m * n;
}

console.log(mul(21,17)); //357



//     2
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(7)); //5040