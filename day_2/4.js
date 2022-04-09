function* fibonacciGenerator() {
	let n1 = 0, n2 = 1, n3;
	yield n1
	yield n2

	while(true) {		
		yield n1 + n2
			n3 = n1
			n1 = n2
			n2 = n1 + n3
	}
}

const fiboncciIterator = fibonacciGenerator()
for(let i = 0; i < 20; i++) {
	let result = fiboncciIterator.next()
	console.log(result.value)
}