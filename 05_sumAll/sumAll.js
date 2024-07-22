const sumAll = function(num1,num2) {
    let sumFloor;
    let sumCeiling;
    if ((num1>num2)&&(num1>0)&&(num2>0)&&(Number.isInteger(num1))&&(Number.isInteger(num2))){
        sumFloor=num2;
        sumCeiling=num1;
    }else if ((num2>num1)&&(num1>0)&&(num2>0)&&(Number.isInteger(num1))&&(Number.isInteger(num2))){
        sumFloor=num1;
        sumCeiling=num2;
    }else {
        return "ERROR";
    }
    let adder=sumFloor;
    let result=sumFloor;
    for(let i = sumFloor;i<sumCeiling;i++){
        adder+=1;
        result+=adder;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
