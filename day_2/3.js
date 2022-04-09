let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
function* makeIterator(arr) {
	for (let i = 0; i < arr.length; i++) {
		yield arr[i]
	}
}

const dayIterator = makeIterator(days)

for (let i of dayIterator) {
	console.log(i)
}
