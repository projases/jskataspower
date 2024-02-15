const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(bbdd, name) {
  // insert code
  const exist = bbdd.includes(name)
  const obj = []
  if (exist) {
    obj.push(exist)
    obj.push(bbdd.indexOf(name))
    return obj
  } else {
    return exist
  }
}
console.log(finderName(nameFinder, 'Juan'))
