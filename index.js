function convertString(str){
    let arrOut = [];
    let arrIn = [];
    for (let i=0; i<str.length; i++){
        if (str[i] === ','){
            arrOut.push(arrIn);
            arrIn = [];
        }
        else {
            arrIn.push(str[i])
        }
    }
    arrOut.push(arrIn)
    return arrOut;
}
console.log(convertString('aqrst,ukaei,ffooo'));
console.log(convertString('qwer,tyui,asdf,ghjk'));
