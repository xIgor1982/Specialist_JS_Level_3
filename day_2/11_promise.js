const URL = 'https://jsonplaceholder.typicode.com/users'

fetch(URL)
	.then(response => response.json())
	.then(users =>
		users.forEach(user => {
			/*console.log(user.name)*/ 
			''
		})
	)

const p1 = new Promise((res, rej) => {
	setTimeout(() => {
		res('res - p1')
	}, 3000)
})
const p2 = new Promise((res, rej) => {
	setTimeout(() => {
		res('res - p2')
	}, 5000)
})

const p3 = new Promise((res, rej) => {
	setTimeout(() => {
		res('res - p3')
	}, 10000)
})

const pAll = Promise.all([p1, p2, p3])
pAll.then(value => {
	console.log(`Готово All! ${value}`)
})

const pRace = Promise.race([p1, p2, p3])
pRace.then(value => {
	console.log(`Готово Race! ${value}`)
})

const p5 = new Promise((res, rej) => {
	setTimeout(() => {
		res(5)
	}, 5000)
})

const p6 = new Promise((res, rej) => {
	setTimeout(() => {
		res(7)
	}, 7000)
})

async function fn1() {
	let sum = 0
	sum += await p5
	sum += await p6
	return sum
}

console.log('fn1 =>', fn1())
const p4 = fn1()
p4.then(result => console.log('p4.then =>', result))
