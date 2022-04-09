const p1 = new Promise((res, reg) => {
	// res('test')
	// reg('err')

	setTimeout(() => {
		res('test')
	}, 5000)

	setTimeout(() => {
		reg('err')
	}, 7000)
})

// p1.then(result => {
// 	console.log(result)
// }).catch(err => {
// 	console.log(`Ошибка:${err}`)
// })

p1.then(
	result => {
		console.log('----------------------------')
		console.log(result)
	},
	error => {
		console.log('----------------------------')
		console.log(`Ошибка: ${error}`)
	}
).then(() => {
	console.log('----------------------------')
})


//----------------------------------


const p2 = new Promise((res, rej) => {
	const i = Math.round(Math.random() * 100)
	i % 2 ? res(`нечётное ${i}`) : rej(`чётное ${i}`)
})

p2.then(result => {
	console.log(result)
}).catch(result => {
	console.log(`%c${result}`, 'color: red; font-weight:bold;')
})

// const p3 = new Promise((res, rej) => {
// 	const i = Math.round(Math.random() * 100)
// 	i % 2 ? res(`нечётное ${i}`) : res(`чётное ${i}`)
// })

// p3.then(result => {
// 	console.log(result)
// })

fetch('./9.json')
.then(result => result.json())
.then(body => console.log(body))