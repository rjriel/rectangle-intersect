# rectangle-intersect

This is a node module that accepts 2 rectangle objects of the following structure:

    {
      leftX: 1, // the left most point of the rectangle
      bottomY: 4, // the bottom most point of the rectangle
      width: 4, // the width of the rectangle
      height: 4 // the height of the rectangle
    }
    
The module returns an object of the same type. The following is an example of usage:

    var intersection = require('./rectangle_intersect');
    
    var first_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 4 };
    var second_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 4 };
    var resulting_rectangle = intersection(first_rectangle, second_rectangle);
    // resulting_rectangle will be { leftX: 2, bottomY: 5, width: 3, height: 3 };
