const palindromes = function (word) {
    word = word.replace(/[^\w\s\']|_/g, "").toLowerCase().replace(/\s/g, "");
    for (let i = 0; i < word.length; i++) {
        const firstLetter = word[i];
        const secondLetter = word[word.length - 1 - i]
        
        if (firstLetter !== secondLetter) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
