// CARA 1
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


// CARA 2
function convertStringToArray(str) {
    let output = [];
    let tempOutput = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] == ',') {
            output.push(tempOutput);
            tempOutput = [];
        } else {
            tempOutput.push(str[i]);
        }
    }
    output.push(tempOutput);
    return output;
}

console.log(convertStringToArray('qwer,tyui,asdf,ghjk'));
console.log(convertStringToArray('milotic,serperior,dragonair'));