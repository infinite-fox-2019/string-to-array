
function stringToArray(str) {
    let output = []
    let row = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ',') {
            row.push(str[i])
        } else {
            output.push(row)
            row = []
        }
    }
    output.push(row)

    return output

}

let str = 'aqsrt,ukaei,ffooo'
let str2 = 'qwer,tyui,asdf,ghjk'

console.log(stringToArray(str));
console.log(stringToArray(str2));