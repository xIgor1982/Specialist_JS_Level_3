console.log('2.js')
const range = { from: 2, to: 100, delta: 3 }

range[Symbol.iterator] = function () {
	const { from, to, delta } = this
	let i
	return {
		next() {
			if (typeof i == 'undefined') {
				i = from
			} else {
				i += delta
			}
			return i < to ? { value: i, done: false } : { done: true }
		},
	}
}

for (let num of range) {
	console.log(num)
}
