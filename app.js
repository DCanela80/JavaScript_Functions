console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
    for (let i = 0; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(30);

// Exercise 2 Section
function checkAge (userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age < 16) {
        console.log(belowSixteen);
    } else if (age >= 16) {
        console.log(aboveSixteen);
    }
}
checkAge("Tom Holland", 50)

// Exercise 3
function whichQuadrant(x, y) {
    if ( x == 0 && y == 0) {
        console.log("Origin Point");
    } else if (x == 0) {
        console.log("Y - axis");
    } else if (y == 0) {
        console.log("X - axis");
    } else if (x > 0) {
        if (y > 0) {
            console.log("Quadrant 1");
        } else {
            console.log("Quadrant 4");
        }
    } else if (x < 0) {
        if (y > 0) {
            console.log("Quadrant 2");            
        } else {
            console.log("Quadrant 3");
        }
    }
  }

whichQuadrant(0,0)
whichQuadrant(0,2)
whichQuadrant(2,0)
whichQuadrant(2,2)
whichQuadrant(-2,2)
whichQuadrant(2,2)
whichQuadrant(2,2)

//Exercise 4
function triangleType(side1, side2, side3) {
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
      if (side1 === side2 && side2 === side3) {
        console.log("Equilateral triangle");
      } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("Isosceles triangle");
      } else {
        console.log("Scalene triangle");
      }
    } else {
      console.log("Invalid triangle");
    }
  }

  triangleType(1,2,3)



