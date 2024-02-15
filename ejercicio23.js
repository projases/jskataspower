const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
const cortas = movies.filter((movie) => movie.durationInMinutes < 100)
const medias = movies.filter((movie) => 100 < movie.durationInMinutes < 200)
const largas = movies.filter((movie) => 200 < movie.durationInMinutes)

console.log('Peliculas pequeñas: ')
console.log(cortas)
console.log('Peliculas medias:')
console.log(medias)
console.log('Peliculas largas:')
console.log(largas)
