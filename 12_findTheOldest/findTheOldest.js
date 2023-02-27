const findTheOldest = function(people) {
    let ages = people.map(person => ((person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth));
    let index = ages.indexOf(Math.max(...ages));
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
