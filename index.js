function stringToArray(string){
    
    let newString = string.split(',')
    let output = []
    for(let i = 0; i<newString.length; i++){
        let temp = []
        for(let j=0; j<newString[i].length; j++){
            temp.push(newString[i][j])
        }
        output.push(temp)
    }
    return output
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))