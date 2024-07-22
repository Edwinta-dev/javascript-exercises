const removeFromArray = function(array,...removeElement) {
    for(let a=0;a<removeElement.length;a++){
        /*for(let i=0;i<array.length;i++){
            if (removeElement[a]===array[i]){
                array.splice(i,1);
            }
        }*/
       let i=0;
       while (i<array.length){
            if (removeElement[a]===array[i]){
                array.splice(i,1);
            }
            else{
                i++;
            }
       }
    } 
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
