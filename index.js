function arrayToString(string){
    let bigContainer = []
    let container = []
    for(let i = 0; i < string.length; i++){
        if(string[i] === ','){
            bigContainer.push(container)
            container = []
        }else{
            container.push(string[i])
        }
    }
    bigContainer.push(container)
    return bigContainer

}

console.log(arrayToString('aqrst,ukaei,ffooo'))
console.log(arrayToString('qwer,tyui,asdf,ghjk'))