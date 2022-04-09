let user = {
	name: 'John',
	height: 180,
	[Symbol.iterator]: function () {
		let props = []
		let index = 0
		for (let i in this) {
			props.push({
				param: i,
				value: this[i],
			})
		}
		console.log(props)

		return {
			next() {
				if (index < props.length) {
					return { value: props[index++], done: false }
				}
				return { done: true }
			},
		}
	},
}

for (let prop of user) {
	console.log(prop)
}


