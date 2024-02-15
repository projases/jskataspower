const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
products.forEach((item) => {
  if (item.sellCount > 20) {
    goodProducts.push(item)
  } else {
    badProducts.push(item)
  }
})
console.log(goodProducts)
console.log(badProducts)
