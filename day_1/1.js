function lighting(str, ...parts) {
	console.log('str =>', str)
	console.log('parts =>', parts)

	let result = ''
	for (let i = 0; i < parts.length; i++) {
		console.log(
			'${str[i]} <b>${parts[i]}</b> =>',
			`${str[i]} <b>${parts[i]}</b>`
		)
		result += `${str[i]} <b>${parts[i]}</b>`
	}
	result += str[parts.length]

	return result
}

let user = { name: 'John', salary: 100_000 }
const text = lighting`Привет, ${user.name}!
Твоя зарплата ${user.salary}`
// console.log(text)

document.body.innerHTML = text

//************************************ */

let duration = 45
let title = 'JS'
let propPrice = 'price'
let priceSum = 10_000

const course = {
	title,
	duration,
	[propPrice]: priceSum,
	[propPrice + 'WithTax']: priceSum * 1.1,
}

console.log('course => ', course)

let course2 = Object.assign({}, course, {title: 'MongoDB'})

console.log('course2 => ', course2)
