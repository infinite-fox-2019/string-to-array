function stringToArray (str) {
    let splitByComma = [];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ',') {
            splitByComma.push(temp);
            temp = '';
        } else if (i === str.length-1) {
            temp += str[i];
            splitByComma.push(temp);
        } else {
            temp += str[i];
        }
    }
    let result = [];
    for (let i = 0; i < splitByComma.length; i++) {
        result.push([]);
        for (let j = 0; j < splitByComma[i].length; j++) {
            result[i].push(splitByComma[i][j]);
        }
    }
    return result;
}
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
