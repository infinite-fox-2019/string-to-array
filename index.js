function stringToArray(string) {
    let result = []
    let arr = string.split(',')

    for (let i = 0; i < arr.length; i++) {
        let row = []
        for (let j = 0; j < arr[i].length; j++) {
            row.push(arr[i][j])
        }
        result.push(row)
    }
    return result
}

let input = 'aqrst,ukaei,ffooo'
let input2 = 'qwer,tyui,asdf,ghjk'

console.log(stringToArray(input));
console.log(stringToArray(input2));


let newArr = Array.from(Array(4), () => new Array(4).fill(' '))
console.log(newArr);