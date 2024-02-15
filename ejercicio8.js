const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  // insert code
  let strlen = 0
  let hero = ''
  param.forEach((avenger) => {
    if (avenger.length > strlen) {
      strlen = avenger.length
      hero = avenger
    }
  })
  return hero
}
console.log(findLongestWord(avengers))
