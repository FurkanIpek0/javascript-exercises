const fibonacci = function(number) {
    if (number == 0) {
        return 0;
    }
    if (number < 0) {
        return 'OOPS';
    }
    const fibonacciArray = [];
    for(i = 0; i < number; i++) {
        if(fibonacciArray.length < 2) {
            fibonacciArray.push(1);
        }
        else {
            fibonacciArray.push(fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]);
        }
    }
    return fibonacciArray[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
