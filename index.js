function stringToArray(string) {
    let result = [];
    let row = [];
    if (!string || string.length == 0) {
        return result;
    }

    for (let i = 0; i <= string.length; i++) {
        if (string[i] == ',' || i == string.length) {
            result.push(row);
            row = [];
        } else {
            row.push(string[i]);
        }
    }
    return result;
}


console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
