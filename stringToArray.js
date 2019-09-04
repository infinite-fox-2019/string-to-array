function stringToArray(input){

    let pisah = input.split(",")
    let hasil = []
    for(let i = 0; i<pisah.length; i++){
        hasil.push(pisah[i].split(""))
    }
    return hasil
}

console.log(stringToArray("aqrst,ukaei,ffooo")) 