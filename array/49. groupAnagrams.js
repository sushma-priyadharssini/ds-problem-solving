// Given an array of strings strs, group the 
// anagrams
//  together. You can return the answer in any order.


// ------------ can build hash by reorder sorting too, but extra complexity ------------
// const reorder = (str) => str
//     .split('')                         
//     .sort((a, b) => a.localeCompare(b))
//     .join('');                         
// ------------ ------------  ------------ ------------ ------------

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

var buildHash = (word) => {
    var frequency = new Array(26).fill(0);
    for(let i=0; i<word.length; i++) {
       frequency[getCode(word[i])]++;
    }
    return frequency.join('')
}

var groupWords = function (words, hMap) {
    for(let i=0; i<words.length; i++) {
        let hash = buildHash(words[i]);
        let value = hMap.get(hash) || []
        value.push(words[i]);
        hMap.set(hash, value);
    }
}

var groupAnagrams = function(strs) {
    var hMap = new Map();
    if (!strs.length) return [];
    groupWords(strs, hMap);
    return [...hMap.values()];
};


const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log("result", result)
