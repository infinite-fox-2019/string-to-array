function stringToArray(str) {
    let result = [[]];
    let col = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ','){
            result[col].push(str[i]);
        } else {
            col++;
            result[col] = [];
        }
    }
    
    return result;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
