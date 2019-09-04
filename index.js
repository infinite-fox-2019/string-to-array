

function splitArray(str) {
    let arr = []
    let string1 = []

    for (let h = 0; h < str.length; h++) {
        if (str[h] !== ',') {
            string1.push(str[h])
        } else {
            arr.push(string1)
            string1 = []
        }
    }
    arr.push(string1)
    return arr
}


console.log(splitArray("aqrst,ukaei,ffooo"));

console.log(splitArray("qwer,tyui,asdf,ghjk"));

