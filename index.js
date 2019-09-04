
function toArray (str){
    let arr = []
    arr.push([])
    for(let i = 0 ; i<str.length ; i++){
        if(str[i] == ","){
            arr.push([])
        }
        else{
            arr[arr.length-1].push(str[i])
        }
    }
    return arr
}

console.log(toArray("aqrst,ukaei,ffooo"));
console.log(toArray("qwer,tyui,asdf,ghjk"));