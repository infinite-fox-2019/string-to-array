// Create a string intro array
function convert(str){
  let arrStr = str.split(',')
  let output = [];
  for(let i = 0 ; i < arrStr.length; i++){
    output.push(arrStr[i].split(''))
  }
  return output;
}

// Test Drive
console.log(convert('gjhkh,kfkgk,kfkkf,loids,lfoek'))
console.log(convert('gjhmkkh,kqfkgk,kfkkf,loidsdsdkf,lfodek'))