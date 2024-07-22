const reverseString = function(originalStr) {
    let reverseString = "";
    for (let i = originalStr.length - 1 ; i > -1; i--){
        reverseString+=originalStr.charAt(i);
    }
    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
