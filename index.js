/**
 * Represent a line (y = mx + b)
 */
function LinearEquation(m, b) {
  this._m = m;
  this._b = b;
}

LinearEquation.fromTwoPoints = function(p0, p1) {
  var p = LinearEquation.parametersFromTwoPoints(p0, p1);
  return new LinearEquation(p.m, p.b);
};

LinearEquation.parametersFromTwoPoints = function(p0, p1) {
  var m = (p1.y - p0.y) / (p1.x - p0.x);
  var b = p1.y - m * p1.x;
  return {
    m: m,
    b: b
  };
};

/**
 * Set the line parameters from two points
 * @param {Object} p0
 * @param {Object} p1
 * @return undefined
 */
LinearEquation.prototype.fromTwoPoints = function(p0, p1) {
  var p = LinearEquation.parametersFromTwoPoints(p0, p1);
  this.m(p.m);
  this.b(p.b);
};

LinearEquation.prototype._m = 1;

LinearEquation.prototype._b = 0;

/**
 * Set or get slope (m) for line
 * @param {Number} slope
 */
LinearEquation.prototype.m = function(factor) {
  if (typeof factor === 'undefined') {
    return this._m;
  }
  return this._m = factor;
};

/**
 * Set or get offset (b) for line
 * @param {Number} offset
 */
LinearEquation.prototype.b = function(offset) {
  if (typeof offset === 'undefined') {
    return this._b;
  }
  return this._b = offset;
};

LinearEquation.prototype.map = function(x) {
  return this._m * x + this._b;
};

LinearEquation.prototype.invert = function(y) {
  return (y - this._b) / this._m;
};

/**
 * Set the slope of the line (y = mx + b) at point x
 *
 * @param {Number} point around which to rotate line
 */
LinearEquation.prototype.setSlopeAtPoint = function(slope, x) {
  var m0, m1, b0, b1;
  m0 = this._m;
  m1 = slope;
  b0 = this._b;
  b1 = m0 * x + b0 - m1 * x;
  this._m = m1;
  return this._b = b1;
};

module.exports = LinearEquation;
