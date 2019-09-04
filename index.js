function strToArray (str) {
    let result = [];
    let temp = [];
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ',' || i === str.length) {
            result.push(temp);
            temp = [];
        } else {
            temp.push(str[i]);
        }
    }
    return result;
};

console.log(strToArray('aqrst,ukaei,ffooo'));
console.log(strToArray('qwer,tyui,asdf,ghjk'));