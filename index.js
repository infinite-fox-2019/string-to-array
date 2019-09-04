function split(str, symbol) {

    let arr_temp = [];
    let arr_hasil = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            count++
            if (str[i] !== symbol) {
                arr_temp.push(str[i])
                break;
            }
        }

    if (count >= str.length) {
        arr_hasil.push(arr_temp)
        arr_temp = [];
    }

    if (i === str.length - 1) {
        arr_hasil.push(arr_temp)
    }
    count = 0;

    }
    return arr_hasil
}


console.log(split('aqrst,ukaei,ffooo', ','));
