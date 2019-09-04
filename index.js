function SToarray(array){
    let array = array.split(',')
    let output = []
    for(let i = 0 ; i < array.length; i++){
        let temp = []
        for(let j = 0; j < array[i].length; j++){
            temp.push(array[i][j])
        }
        output.push(temp)
    }
    return output
}
console.log(SToarray('qwer,tyui,asdf,ghjk'));
console.log(SToarray('aqrst,ukaei,ffooo'));