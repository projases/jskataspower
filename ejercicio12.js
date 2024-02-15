const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  // insert code
  const result = new Set(param)
  return Array.from(result)
}
console.log(removeDuplicates(duplicates))
