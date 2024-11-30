const palindromes = function (str) {
    const newStr = str.toLowerCase().replace(/!| |,|\./gi, '');
    console.log(newStr);
    return newStr.split('').reverse().join('') == newStr;
};

// Do not edit below this line
module.exports = palindromes;
