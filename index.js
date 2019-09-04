function splitToArray (str){
    return str.split(",")
}

function stringToArray (arr) {

    let result = [];
    for (let i = 0;i<arr.length;i++) {
        let subSplit = arr[i].split('');
        result.push(subSplit)
    }
    return result;
}//end function


let arrString = splitToArray("aqrst,ukaei,ffooo")


console.log(stringToArray(arrString))