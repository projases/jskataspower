const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  // insert code
  let total = 0
  param.forEach((number) => {
    total += number
  })
  return total / param.length
}
console.log(Math.round(average(numbers)))
