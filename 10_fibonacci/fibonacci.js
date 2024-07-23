const fibonacci = function(numTerm) {
    if (isString(numTerm)===false&&(numTerm>=0)){
        return fibonacciCalculator(numTerm);
    }else if(isString(numTerm)&&(parseInt(numTerm)>=0)){
        let stringNumTerm = parseInt(numTerm);
        return fibonacciCalculator(stringNumTerm);
    }else {
        return "OOPS";
    }
};

function isString(numTerm){
    if (typeof(numTerm)===String){
        return true;
    }else {
        return false;
    }
}

function fibonacciCalculator(numTerm){
    let termN = [0,1];
    let result = 0;
    if (numTerm>1){
        for (let counter=2;counter<numTerm+1;counter++){
            termN[counter]=(termN[(counter-1)]+termN[(counter-2)]);
        }
         result = termN[numTerm];
    }else {
        result = termN[numTerm];
    }
    return result;
}
// Do not edit below this line
module.exports = fibonacci;
