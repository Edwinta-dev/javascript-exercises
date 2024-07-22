const repeatString = function(userInput,numRepeat) {
    if (numRepeat<0){
        return "ERROR";
    }else if(numRepeat===0){
        return "";
    }else{
        /* Using a js method
        return (userInput.repeat(numRepeat));
        */
       // Using for loops to achieve
       let result = "";
       for (let a=0;a<numRepeat;a++){
            result+=userInput;
       } 
       return result;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
