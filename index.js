function stringToArray (str){
    let arr1 = [];
    let arr2 = [];
    let string = "";
    let arrTotal = [];

    for(let i = 0;i<=str.length;i++){
        if (str[i]==","|| i == str.length){
            arr1.push(string);
            string = "";
        } else {
            string += str[i];
        }
    }

    for(let i = 0; i<arr1.length;i++){
        for(let j = 0;j<arr1[i].length;j++){
            arr2.push(arr1[i][j]);
        }
        arrTotal.push(arr2);
        arr2 = [];
    }
    return arrTotal;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));