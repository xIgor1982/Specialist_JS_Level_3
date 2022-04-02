export default class Solid {
	constructor(x, y, square, resources = 0) {
		this.x = x
		this.y = y
		this.square = square
		this.resources = resources
	}

	get res() {
		return this.resources
	}
	addRes() {
		return (this.resources += 1)
	}
}
