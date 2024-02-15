const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  // insert code
  let total = 0
  param.forEach((number) => {
    total += number
  })
  return total
}

console.log(sumAll(numbers))
