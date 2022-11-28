function factorial(ourNumber) {
    let result = 1;
    for (let i = 2; i <= ourNumber; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));