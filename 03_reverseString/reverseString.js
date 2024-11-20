const reverseString = function(text) {
    const textArray = text.split("");
    let newText = '';
    for (i = text.length - 1; i >= 0; i--){
        newText += textArray[i];
    }
    return newText;
    ;
};

// Do not edit below this line
module.exports = reverseString;
