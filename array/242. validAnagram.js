// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var addToMap = (hMap,s) => {
    for(let i=0; i<s.length; i++) {
        if(hMap.has(s[i])) {
            hMap.set(s[i], hMap.get(s[i])+1);
        } else {
            hMap.set(s[i], 1)
        }
    }
    return hMap;
}

var subractFromMap = (hMap,s) => {
    for(let i=0; i<s.length; i++) {
        if(hMap.has(s[i])) {
            hMap.set(s[i], hMap.get(s[i])-1);
        } else {
            return false;
        }
    }
    return hMap;
}

var checkMap = (hMap) => {
     for (const [index, count] of hMap) {
        const isEmpty = count === 0;
        if (!isEmpty) return false;
    }
    return true;
}

var isAnagram = function(s, t) {
    var hMap = new Map();
    if(s.length === t.length) {
        hMap = addToMap(hMap,s);
        hMap = subractFromMap(hMap, t);
        return hMap ? checkMap(hMap) : false;
    } else {
        return false;
    }
};