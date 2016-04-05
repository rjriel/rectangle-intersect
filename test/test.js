var assert = require('assert');
var intersection = require('../rectangle-intersect');

var first_rectangle, second_rectangle, expected_rectangle, resulting_rectangle;

describe('Valid Tests', function() {
  it('1st rectangle further left, 1st rectangle further down', function() {
    first_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 4 };
    second_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 6, width: 3, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('1st rectangle further left, 2nd rectangle further down', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 2, bottomY: 6, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 6, width: 3, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('1st rectangle further left, matching down, 1st rectangle shorter', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 3 };
    second_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 5, width: 3, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('1st rectangle further left, matching down, 2nd rectangle shorter', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 3 };
    expected_rectangle = { leftX: 2, bottomY: 5, width: 3, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('1st rectangle further left, matching down, matching height', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 5, width: 3, height: 4 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle further left, 2nd rectangle further down', function() {
    first_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 6, width: 3, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle further left, 1st rectangle further down', function() {
    first_rectangle = { leftX: 2, bottomY: 6, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 6, width: 3, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle further left, matching down, 2nd rectangle shorter', function() {
    first_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 3 };
    expected_rectangle = { leftX: 2, bottomY: 5, width: 3, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle further left, matching down, 1st rectangle shorter', function() {
    first_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 3 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 5, width: 3, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle further left, matching down, matching height', function() {
    first_rectangle = { leftX: 2, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 5, width: 3, height: 4 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('matching left, wider 1st rectangle, 1st rectangle further down', function() {
    first_rectangle = { leftX: 1, bottomY: 6, width: 5, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('matching left, wider 1st rectangle, 2nd rectangle further down', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 5, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 4 };
    expected_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('matching left, wider 2nd rectangle, 1st rectangle further down', function() {
    first_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 5, height: 4 };
    expected_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('matching left, wider 2nd rectangle, 2nd rectangle further down', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 6, width: 5, height: 4 };
    expected_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('matching left, matching width, 1st rectangle further down', function() {
    first_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 3 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('matching left, matching width, 2nd rectangle further down', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 4 };
    expected_rectangle = { leftX: 1, bottomY: 6, width: 4, height: 3};
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('matching left, matching width, matching down, different height', function() {
    first_rectangle = { leftX: 1, bottomY: 7, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 7, width: 4, height: 5 };
    expected_rectangle = { leftX: 1, bottomY: 7, width: 4, height: 4 };
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('matching left, matching width, matching down, matching height', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    second_rectangle = first_rectangle;
    expected_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4};
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle inside 1st rectangle', function() {
    first_rectangle = { leftX: 1, bottomY: 7, width: 6, height: 6 };
    second_rectangle = { leftX: 2, bottomY: 8, width: 4, height: 4 };
    expected_rectangle = { leftX: 2, bottomY: 8, width: 4, height: 4};
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('1st rectangle inside 2nd rectangle', function() {
    first_rectangle = { leftX: 2, bottomY: 6, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 6, height: 6 };
    expected_rectangle = { leftX: 2, bottomY: 6, width: 4, height: 4};
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
});
describe('Invalid Tests', function() {
  it('1st rectangle is not a valid rectangle', function() {
    first_rectangle = { };
    second_rectangle = { leftX: 6, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = "Rectangle 1 is not a valid rectangle object";
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle is not a valid rectangle', function() {
    first_rectangle = { leftX: 6, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { };
    expected_rectangle = "Rectangle 2 is not a valid rectangle object";
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('1st rectangle further left, matching bottom, rectangles do not intersect', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 6, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = "The given rectangles do not intersect";
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle further left, matching bottom, rectangles do not intersect', function() {
    first_rectangle = { leftX: 6, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = "The given rectangles do not intersect";
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('1st rectangle further down, matching left, rectangles do not intersect', function() {
    first_rectangle = { leftX: 1, bottomY: 10, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    expected_rectangle = "The given rectangles do not intersect";
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
  it('2nd rectangle further down, matching left, rectangles do not intersect', function() {
    first_rectangle = { leftX: 1, bottomY: 5, width: 4, height: 4 };
    second_rectangle = { leftX: 1, bottomY: 10, width: 4, height: 4 };
    expected_rectangle = "The given rectangles do not intersect";
    resulting_rectangle = intersection(first_rectangle, second_rectangle);
    assert.deepEqual(expected_rectangle, resulting_rectangle);
  });
});
