# rectangle-intersect

This is a node module that accepts 2 rectangle objects of the following structure:

    {
      leftX: 1, // the left most point of the rectangle
      bottomY: 4, // the bottom most point of the rectangle
      width: 4, // the width of the rectangle
      height: 4 // the height of the rectangle
    }
    
The module returns an object of the same type.

# Usage

The following is an example of usage:

    var intersection = require('./rectangle-intersect');
    
    var first_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 4 };
    var second_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 4 };
    var resulting_rectangle = intersection(first_rectangle, second_rectangle);
    // resulting_rectangle will be { leftX: 2, bottomY: 5, width: 3, height: 3 };

The [index.js](index.js) module exists to try out the [rectangle-intersect](rectangle-intersect.js) module. This can be run with the following:

    npm start <rect 1 leftX> <rect 1 bottomY> <rect 1 width> <rect 1 height> <rect 2 leftX> <rect 2 bottomY> <rect 2 width> <rect 2 height>
    
For example:

    npm start 1 6 4 4 2 5 4 4

# Testing

There is a test module available using [mocha](https://www.npmjs.com/package/mocha) and [assert](https://www.npmjs.com/package/assert) and can be run with the following command:

    npm test
