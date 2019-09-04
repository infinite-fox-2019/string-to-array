function stringToArray(str) {
    let result = [];
    let words = str.split(',');
    for(let i = 0; i < words.length; i++) {
        result[i] = words[i].split('');
    }
    
    return result;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
