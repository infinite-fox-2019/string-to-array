function stringToArray(input){
    let len = input.length
    let arrTampung = ['']
    let result = []
    let counter = 0
    for(let i=0; i<len; i++){
        if(input.charAt(i)===','){
            counter++
            arrTampung.push('')
        }else{
            arrTampung[counter] += input.charAt(i)
        }
    }

    for(let k=0; k<arrTampung.length; k++){
        result[k] = []
        for(let l=0; l<arrTampung[k].length; l++){
            result[k][l] = arrTampung[k][l]
        }
    }
    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))