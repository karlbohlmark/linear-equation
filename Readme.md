
# linear-equation

  Represent a 2D linear equation

## Installation

    $ component install karlbohlmark/linear-equation

## API

		var LinearEquation = require('linear-equation')
		var line = new LinearEquation(2, 1) // y = 2x + 1
		line.map(1) // 3

		line = LinearEquation.fromTwoPoints({x:0, y:1}, {x:1, y:2}) // y = x + 1

		// rotate to slope=2 around point x=0
		line.setSlopeAtPoint(2, 0) // y = 2x + 1

## License

  MIT
