import { rand } from './mod/rand.js'
import Stars from './mod/Star.js'
import Planets from './mod/Planets.js'
import Asteroids from './mod/Asteroids.js'

const stars = []
for (let i = 0; i < 10; i++) {
	stars.push(new Stars(rand(0, 100), rand(0, 100), rand(10, 20)))
}

const planets = []
for (let i = 0; i < 50; i++) {
	planets.push(new Planets(rand(0, 100), rand(0, 100), rand(5, 10)))
}
const asteroids = []
for (let i = 0; i < 500; i++) {
	asteroids.push(new Asteroids(rand(0, 100), rand(0, 100), rand(1, 5)))
}

console.log(stars)
console.log(planets)
console.log(asteroids)

const universe1 = [...stars, ...planets, ...asteroids]

// console.log(universe1)

setInterval(() => {
	let summaryResource = 0
	universe1.forEach(item => {
		summaryResource += item.addRes()
	})
	console.log('summaryResource =', summaryResource)
}, 10000)
