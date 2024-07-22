const leapYears = function(year) {
    if ((year%4===0)){
        if ((year%100!==0)||((year%100===0)&&(year%400===0))){
            return true;
        }else{
            return false;
        }
        
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
/*To be a leap year, the year number must be divisible by four – except for end-of-century years, 
which must be divisible by 400. This means that the year 2000 was a leap year, although 1900 was not*/