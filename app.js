var geometry = require('./index.js');
console.log( 'The area of a circle of radius 4 is '
           + geometry.circlearea(4));

console.log( 'The circumference of a circle of radius 4 is',
            geometry.circlecircumference(4));

console.log( 'The area of a square with side 4 is',
            geometry.squarearea(4));
console.log( 'The perimeter of a square with side 4 is',
            geometry.squareper(4));
console.log( 'The are of a triangle with sides of 4 is',
            geometry.trianglearea(4));

console.log( 'The perimeter of a rectangle with height of 6 and base of 4 is ',
            geometry.rectangleper(4 , 6));

console.log( 'The area of a triangle with height of 6 and base of 4 is ',
            geometry.trianglearea(4 , 6));
console.log( 'The perimeter of a triangle with sides of 4, 6 and 12 is ',
            geometry.triangleper2(4 , 6 , 12));
console.log( 'The perimeter of an octagon with sides of 4 is ',
            geometry.octper(4));


