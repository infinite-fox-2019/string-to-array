function stringToArr(string) {
    let res = []
    let temp = []
    for (let j=0; j<string.length; j++) {
        if (string[j] === ',') {
            res.push(temp)
            temp = []
        } else if (string[j] !== ' ') {
            temp.push(string[j])
        }
        if (j === string.length-1) {
            res.push(temp)
        }
    }
    console.log(res)
    return res
}
stringToArr('aqrst, ukaei, ffooo');
