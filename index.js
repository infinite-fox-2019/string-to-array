function stringToArray(string){
  let result = []
  var penampung = []
  for(let i=0 ; i<string.length ; i++){
    if(string[i] == ','){
      result.push(penampung)
      penampung = []
    } else if (i == string.length -1){
      penampung.push(string[i])
      result.push(penampung)
      penampung = []
    } else {
      penampung.push(string[i])

    }
  }

  return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
