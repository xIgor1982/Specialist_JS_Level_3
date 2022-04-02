import Solid from './Solid.js'

export default class Planet extends Solid {
	addRes() {
		return (this.resources += 3 * this.square)
	}
}
