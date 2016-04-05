module.exports = function(first,second) {

  var NON_INTERSECT = "The given rectangles do not intersect";
  var INVALID_OBJECT = " is not a valid rectangle object";

  isValidRectangle = function(rectangle) {
    return rectangle.leftX != null && !isNaN(rectangle.leftX)
        && rectangle.bottomY != null && !isNaN(rectangle.bottomY)
        && rectangle.width != null && !isNaN(rectangle.width)
        && rectangle.height != null && !isNaN(rectangle.height)
  };

  if (!isValidRectangle(first))
    return "Rectangle 1" + INVALID_OBJECT;

  if (!isValidRectangle(second))
    return "Rectangle 2" + INVALID_OBJECT;

  if (first.leftX < second.leftX && first.leftX + first.width < second.leftX) {
    return NON_INTERSECT;
  }
  else if (second.leftX < first.leftX && second.leftX + second.width < first.leftX) {
    return NON_INTERSECT;
  }

  if (first.bottomY < second.bottomY && second.bottomY - second.height > first.bottomY) {
    return NON_INTERSECT;
  }
  else if (second.bottomY < first.bottomY && first.bottomY - first.height > second.bottomY) {
    return NON_INTERSECT;
  }

  var x_values = [];
  x_values.push(first.leftX);
  x_values.push(first.leftX+first.width);
  x_values.push(second.leftX);
  x_values.push(second.leftX+second.width);
  x_values.sort();
  
  y_values = [];
  y_values.push(first.bottomY);
  y_values.push(first.bottomY-first.height);
  y_values.push(second.bottomY);
  y_values.push(second.bottomY-second.height);
  y_values.sort();
  
  return {
    leftX: x_values[1],
    bottomY: y_values[2],
    width: x_values[2]-x_values[1],
    height: y_values[2]-y_values[1]
  };
};
