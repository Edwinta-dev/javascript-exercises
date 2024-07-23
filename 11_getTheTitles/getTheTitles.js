const getTheTitles = function(bookArray) {
    result=[];
    for (counter=0;counter<bookArray.length;counter++){
        result[counter]=bookArray[counter].title;
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
