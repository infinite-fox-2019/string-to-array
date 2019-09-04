function stringToArray (str) {
  let res = []
  let splitted = str.split(',')
  
  for (let i = 0; i < splitted.length; i++) {
    splittedAgain = splitted[i].split('')
    res.push(splittedAgain)
  }
  return res
}

console.log(stringToArray('qwre,tyui,oplk'));
