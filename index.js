const strToArr = (str) => {
  const notComma = str.split(',')
  const board = []
  for (let i = 0; i < notComma.length; i++) {
    board.push(notComma[i].split(''))
  }
  return board
}

console.log(strToArr('aqrst,ukaei,ffooo'))
console.log(strToArr('qwer,tyui,asdf,ghjk'))