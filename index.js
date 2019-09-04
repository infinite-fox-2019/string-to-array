function stringToArray(str) {
    let arrIn = [];
    let arrOut = [];

    for(let i = 0; i<str.length; i++){
        if(str[i] == ','){
            arrOut.push(arrIn);
            arrIn = [];
        }
        else if(i == str.length - 1){
            arrIn.push(str[i]);
            arrOut.push(arrIn);
            arrIn = [];
        }
        else{
            arrIn.push(str[i]);
        }
    }
    return arrOut;
}



console.log(stringToArray('aqrst,ukaei,ffooo'));
