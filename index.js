function stringToArray(str) {
    str = str.split(',')
    let output = []
    for (let i=0; i<str.length; i++) {
        output.push([])
        for (let j=0; j<str[i].length; j++) {
            output[i].push(str[i][j])
        }
    }
    return output
}
console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))