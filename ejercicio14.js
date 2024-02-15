const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
// function Person()
function repeatCounter(param) {
  // insert code
  // Obtener valores unicos, es decir, no repetidos
  const nonRepeat = new Set(param)
  //generamos un array
  let aObj = []
  //recorremos el set de valores unicos
  nonRepeat.forEach((element) => {
    //filtramos el array con un filter con callback function que nos diga si el elemento del array original es igual al elemnto del set
    let value = param.filter((item) => item === element)
    //añadimos al array un objeto con el elemento y el numero de veces que aparece
    aObj.push({ name: element, instances: value.length })
  })
  return aObj
}
console.log(repeatCounter(counterWords))
