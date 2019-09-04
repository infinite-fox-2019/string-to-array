function stringToArray(string) {
    let splitComma = string.split(",")
    let result = []
    for (let i = 0; i < splitComma.length; i++) {
        let store = []
        for (let j = 0; j < splitComma[i].length; j++) {
            store.push(splitComma[i][j])
        }
        result.push(store)
    }
    return result
}


// TEST CASE
console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))