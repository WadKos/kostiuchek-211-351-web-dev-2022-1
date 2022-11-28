function factorialRec(ourNumber) {
    if (ourNumber > 1) {
        return ourNumber * factorialRec(ourNumber - 1);
    } else {
        return 1;
    }
}

console.log(factorialRec(6));

function factorialIter(ourNumber) {
    let result = 1;
    for (let i = 2; i <= ourNumber; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialIter(5));