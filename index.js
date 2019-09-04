const stringToArray = str => {
  str = str.split(',')
  const result = []

  for (let i = 0; i < str.length; i++) {
    const tempStr = []
    for (let j = 0; j < str[i].length; j++) {
      tempStr.push(str[i][j])
    }
    result.push(tempStr)
  }

  return result
}

console.log(stringToArray('aqrst,ukaet,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
