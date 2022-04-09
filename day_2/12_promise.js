const asyncIterator = {
	[Symbol.asyncIterator]() {
		const usersPromise = fetch(
			'https://jsonplaceholder.typicode.com/users'
		).then(result => result.json())

		return {
			i: 0,
			async next() {
				const users = await usersPromise
				if (this.i < users.length) {
					return { value: users[this.i++], done: false }
				}
				return { done: true }
			},
		}
	},
}

;(async function () {
	for await (let item of asyncIterator) {
		console.log(item)
	}
})()
