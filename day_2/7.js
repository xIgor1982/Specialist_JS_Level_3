const myMap = new Map()

let keyObj = {}
let keyFn = () => {}
let keyNum = 5

myMap.set('key', 'value')
myMap.set(keyObj, 100_000)
myMap.set(keyFn, 'функция')
myMap.set(keyNum, true)

console.log(myMap)
console.log(myMap.size)
console.log(myMap.get('key'))
console.log('keyObj =>', myMap.get(keyObj))

console.log('------------')
for (let item of myMap) {
	console.log(item)
}
console.log('------------')
console.log(myMap)
console.log('------------')
myMap.delete(keyObj)
console.log(myMap)
console.log('------------')
console.log('keys', myMap.keys())
console.log('values', myMap.values())
console.log('entries', myMap.entries())