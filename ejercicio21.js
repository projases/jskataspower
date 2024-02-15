const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
let menores = 'Usuarios menores de edad: '
let mayores = 'Usuarios mayores de edad: '
for (element of users) {
  if (element.years >= 18) {
    mayores += `${element.name} `
  } else {
    menores += `${element.name} `
  }
}
console.log(mayores)
console.log(menores)
