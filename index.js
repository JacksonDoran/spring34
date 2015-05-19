var PI = Math.PI;

exports.circlearea = function (r) {
  return PI * r * r;
  return value.toFixed(2)
};

exports.circlecircumference = function (r) {
  value= 2 * PI * r;
  return value.toFixed(2)
};

exports.squarearea = function (s) {
  value= s * s;
  return value.toFixed(2)
};

exports.squareper = function (s) {
  value= s * 4;
  return value.toFixed(2)
};

exports.trianglearea = function (s) {
  value= .5*(s)*(s);
  return value.toFixed(2)
};

exports.rectangleper = function (b , h) {
  value= (b + b) + (h + h);
  return value.toFixed(2)
};

exports.trianglearea = function (b , h) {
  value= (.5 * b) * h;
  return value.toFixed(2)
};

exports.triangleper2 = function (b , h , c) {
  value= b+c+h;
  return value.toFixed(2)
};

exports.octper = function (s) {
  value= s * 8;
  return value.toFixed(2)
};
