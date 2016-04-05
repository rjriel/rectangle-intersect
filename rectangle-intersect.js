module.exports = function(first,second) {

  // Returning messages
  var NON_INTERSECT = "The given rectangles do not intersect";
  var INVALID_OBJECT = " is not a valid rectangle object";

  // this function ensures the given rectangle has a valid
  // leftX, bottomY, width and height
  var isValidRectangle = function(rectangle) {
    return rectangle.leftX != null && !isNaN(rectangle.leftX)
        && rectangle.bottomY != null && !isNaN(rectangle.bottomY)
        && rectangle.width != null && !isNaN(rectangle.width)
        && rectangle.height != null && !isNaN(rectangle.height)
  };

  // make sure the first rectangle is valid
  if (!isValidRectangle(first))
    return "Rectangle 1" + INVALID_OBJECT;

  // make sure the second rectangle is valid
  if (!isValidRectangle(second))
    return "Rectangle 2" + INVALID_OBJECT;

  // make sure the rectangles intersect on the x axis
  if (first.leftX < second.leftX && first.leftX + first.width < second.leftX) {
    return NON_INTERSECT;
  }
  else if (second.leftX < first.leftX && second.leftX + second.width < first.leftX) {
    return NON_INTERSECT;
  }

  // make sure the rectangles intersect on the y axis
  if (first.bottomY < second.bottomY && second.bottomY - second.height > first.bottomY) {
    return NON_INTERSECT;
  }
  else if (second.bottomY < first.bottomY && first.bottomY - first.height > second.bottomY) {
    return NON_INTERSECT;
  }

  /* create an array that consists of the left and right X values
     for each rectangle, result in 4 X axis values. These values
     are then sorted to ensure the x values are in order from
     left to right. */
  var x_values = [];
  x_values.push(first.leftX);
  x_values.push(first.leftX+first.width);
  x_values.push(second.leftX);
  x_values.push(second.leftX+second.width);
  x_values.sort();
  
  /* create an array that consists of the top and bottom Y values
     for each rectangle, result in 4 Y axis values. These values
     are then sorted to ensure the y values are in order from
     top to bottom. */
  y_values = [];
  y_values.push(first.bottomY);
  y_values.push(first.bottomY-first.height);
  y_values.push(second.bottomY);
  y_values.push(second.bottomY-second.height);
  y_values.sort();
  
  /* based on the above sorting of the x and y values we can make
     the following assumptions:
       - the leftX value of the intersecting rectangle will be
         the second X value.
       - the bottomY value of the intersecting rectangle will be
         the third Y value.
       - the width of the intersecting rectangle will be the third
         X value minus the second X value.
       - the height of the intersecting rectangle will be the third
         Y value minus the second Y value.
  */
  return {
    leftX: x_values[1],
    bottomY: y_values[2],
    width: x_values[2]-x_values[1],
    height: y_values[2]-y_values[1]
  };
};
