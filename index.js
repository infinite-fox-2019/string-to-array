function convertStringToArray(str) {
    let splitted = str.split(",");
    let output = [];

    for(let i = 0; i < splitted.length; i++) {
        let tempOutput = [];
        for(let j = 0; j < splitted[i].length; j++) {
            tempOutput.push(splitted[i][j]);
        }
        output.push(tempOutput);
    }
    return output;
}

console.log(convertStringToArray('qwer,tyui,asdf,ghjk'));
console.log(convertStringToArray('milotic,serperior,dragonair'));