class Card {
	constructor(from, to){
		this.from = from
	}

	getInfo(){
		console.log('this =>', this)
	}
}

const c1 = new Card()

console.log('Card =>', new Card)
console.log('from =>', c1.from)
console.log('to =>', c1.to)

for(let prop in c1) {
	console.log('prop =>', prop)
}

c1.getInfo()