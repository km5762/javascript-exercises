const removeFromArray = function(array, ...toRemove) {
    return array.filter(elt => !(toRemove.includes(elt)));
};

// Do not edit below this line
module.exports = removeFromArray;
