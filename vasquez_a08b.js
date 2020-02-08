/*
Bryan Vasquez
Vasquez_a08b.js
INFO 2124
Thoendel
02/08/2020
*/

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
var MathUtility = {                     //creating the object
    getAreaOfCircle: function(r){       //adding the method getAreaofCircle
        return Math.PI*Math.pow(r, 2);  //calling the Math method to work with formula

    },
    getAreaOfSquare: function(s){       //adding method getAreaofSquare
        return Math.pow(s, s);

    },
    getAreaOfTriangle: function(hb,b){  //adding method getAreaofTriangle
        return hb*b/2;

    }

};


/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);