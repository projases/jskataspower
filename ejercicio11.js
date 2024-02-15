const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  // insert code
  let total = 0
  param.forEach((element) => {
    if (typeof element === 'string') {
      total += element.length
    } else {
      total += element
    }
  })
  return total
}
console.log(averageWord(mixedElements))
