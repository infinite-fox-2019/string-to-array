function stringToArr(str){
    let hasil = []
    let temp = []
    for(let i = 0; i < str.length; i++){
        if(str[i] != ','){
            temp.push(str[i])
        } else {
            hasil.push(temp)
            temp = []
        }        
    }
    hasil.push(temp)
    return hasil
}

console.log(stringToArr('aqrst,ukaei,ffooo'));
