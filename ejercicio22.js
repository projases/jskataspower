const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
let randValues = []
for (element of foodSchedule) {
  //si el elemento no es vegano
  if (!element.isVegan) {
    // genera un valor aleatorio menor a el tamaño del frutas
    let value = Math.floor(Math.random() * fruits.length)
    //mientras el valor aleatorio no este en array randValue sigue generando valoes aleatorios
    while (randValues.includes(value))
      value = Math.floor(Math.random() * fruits.length)
    // agregar el valor ala lista de valores random randValue
    randValues.push(value)
    // una vez el valor nos encuentre en randValue entonces utiliza la fruta correspondiente al array de frutas
    element.name = fruits[value]
    // cambiar a vegano a pesar de la explotación de las abejas
    element.isVegan = true
  }
}
console.log(foodSchedule)
