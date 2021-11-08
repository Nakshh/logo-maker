export default class Layer {
	constructor(size) {
		this.sides = 6;
		this.numShapes = this.sides;
		this.angle = 360 / this.numShapes;

		this.size = size;
		this.radius = this.size / 2;

		this.numSteps = random([8, 10]);
		this.stepLength = this.radius / this.numSteps;

		this.palette = [color(29, 167, 234), color(58, 51, 53), color(233, 114, 76)];
		this.color = random(this.palette);
		this.strokeWeight = random([1, 2]);
	}
}
