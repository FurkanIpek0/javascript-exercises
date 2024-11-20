const repeatString = function(text , number) {
    if (number < 0) {
        return 'ERROR';
    }
    let realText = '';
    for (i = 0; i < number; i++) {
        realText += text;
    }
    return realText;
};

// Do not edit below this line
module.exports = repeatString;
