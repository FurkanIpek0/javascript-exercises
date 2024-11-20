const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 ||
        secondNumber < 0 ||
        firstNumber%1 !== 0 ||
        secondNumber%1 !== 0 ||
        typeof(firstNumber) !== 'number' ||
        typeof(secondNumber) !== 'number') return 'ERROR';
    if (firstNumber == secondNumber) {
        return firstNumber;
    }
    let bigNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
    let smallNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
    let sum = 0;
    for (;smallNumber <= bigNumber; smallNumber++){
        sum += smallNumber;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
