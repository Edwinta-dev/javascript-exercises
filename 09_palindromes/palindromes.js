const palindromes = function (string1) {
    let counter=0;
    let downCounter=(string1.length-1);
    let char;
    let char1;
    let upCountingComparator=null;
    let downCountingComparator=null;
    //Main loop
    while ((counter < downCounter)){
        // Checking for first comparable alphabet from the front
        while (!upCountingComparator && counter < downCounter){
            char = string1.charAt(counter);
            if (isAlphabet(char)||(isNum(char))){
                upCountingComparator=char.toLowerCase();
            }else{
                counter++;
            }
        }
        // Checking for the first comparable alphabet from the back
        while (!downCountingComparator && downCounter > counter){
            char1 = string1.charAt(downCounter);
            if (isAlphabet(char1)||isNum(char1)){
                downCountingComparator=char1.toLowerCase();
            }else{
                downCounter--;
            }
        }

        if (!upCountingComparator || !downCountingComparator) break;

        if (upCountingComparator===downCountingComparator){
            counter++;
            downCounter--;
            upCountingComparator=null;
            downCountingComparator=null;
        }else{
            return false;
        }
        
    }
    return true;
};

function isAlphabet(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}
function isNum(char) {
    return (char >= '0' && char <= '9');
}


// Do not edit below this line
module.exports = palindromes;
