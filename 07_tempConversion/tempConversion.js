const convertToCelsius = function(farenheitTemp) {
     let result=((farenheitTemp-32)*(5/9));
     return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
    let result=((celsiusTemp*(9/5))+32);
    return parseFloat(result.toFixed(1));
};
/*
From celsius to farenheit
TEMP celsius= (TEMP *(9/5)+32) farenheit
TEMP farenheit = ((TEMP -32)*(5/9)) celsius




*/
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
