function stringToArray(string){
  let output = []
  let temp = []
  for ( let i = 0; i<string.length;i++){
    if (string[i] === ','){
      if (temp.length >= 1){
        output.push(temp)
        temp=[]
      }
    } else {
      temp.push(string[i])
    }
  }
output.push(temp)
return output;
}

let string1 = "aqrst,ukaei,ffooo"
let string2 = "qwer,tyui,asdf,ghjk"

console.log(stringToArray(string1))
console.log(stringToArray(string2))