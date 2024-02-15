const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

for (elements of placesToTravel) {
  if (elements.id === 11 || elements.id === 40) {
    placesToTravel.splice(placesToTravel.indexOf(elements), 1)
  }
}

console.log(placesToTravel)
