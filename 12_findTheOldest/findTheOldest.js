const findTheOldest = function(people) {
    let elementAge = 0;
    let oldestPerson = [0,0];
    for(counter=0;counter<people.length;counter++){
        if(people[counter].yearOfDeath===undefined){
            elementAge = 2024-people[counter].yearOfBirth;
        }else{
            elementAge = people[counter].yearOfDeath-people[counter].yearOfBirth;
        }
        oldestPerson = ageComparator(oldestPerson,elementAge,counter);
    }
    return people[oldestPerson[1]];    
};


function ageComparator(oldestPerson,elementAge,counter){
    if (elementAge>oldestPerson[0]){
        oldestPerson[0] =elementAge;
        oldestPerson[1] = counter;
    }
    return oldestPerson;
}
// Do not edit below this line
module.exports = findTheOldest;
