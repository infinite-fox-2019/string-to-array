function stringToArray(str) {
    let result = [[]];
    let col = 0;
    for(let i = 0; i < str.length; i++) {
        result[col].push(str[i]);
        if(str[i + 1] === ','){
            col++;
            result[col] = [];
            i++;
        }
    }
    
    return result;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
