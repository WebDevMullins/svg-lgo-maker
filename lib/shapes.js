class Shapes {
	constructor(text, textColor, shapeColor) {
		this.text = `${text}`.toUpperCase()
		this.textColor = `#${textColor}`
		this.shapeColor = `#${shapeColor}`
	}
}
class Circle extends Shapes {
	constructor(text, textColor, shapeColor) {
		super(text, textColor, shapeColor)
	}
	render() {
		return `
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
			<text x="150" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
		</svg>
		`
	}
}
class Square extends Shapes {
	constructor(text, textColor, shapeColor) {
		super(text, textColor, shapeColor)
	}
	render() {
		return `
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<rect width="200" height="200" fill="${this.shapeColor}" />
			<text x="100" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
		</svg>
		`
	}
}
class Triangle extends Shapes {
	constructor(text, textColor, shapeColor) {
		super(text, textColor, shapeColor)
	}
	render() {
		return `
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<polygon points="150, 0 300, 200 0, 200" fill="${this.shapeColor}" />
			<text x="150" y="170" font-size="70" font-family="Arial" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
		</svg>
		`
	}
}

export { Circle, Shapes, Square, Triangle }
