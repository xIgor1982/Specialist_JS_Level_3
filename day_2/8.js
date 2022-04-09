const cities = [
	{id: 123443, name: 'Москва'},
	{id: 12443, name: 'Санкт-Петербург'},
	{id: 2345, name: 'Владивосток'},
	{id: 767, name: 'Нижний Новгород'},
	{id: 9845, name: 'Сочи'},
]

let myMap = new Map, 
	myMap2 = new Map

cities.forEach(city => myMap.set(city.id, city.name))
cities.forEach(city => myMap2.set(city, city.name))


console.log(myMap.get(2345))
console.log(myMap2)
console.log(myMap2.get(cities[2]))