var rect = require('./rectangle')

function solveRectangle(l,b){
    console.log("Solving l "+l+" b "+b);
    if(l <=0 || b<= 0){
        console.log("Invalid dimension");
    }
    else{
        console.log("area: "+rect.area(l,b));
        console.log("Perimeter: "+rect.perimeter(l,b))
    }
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,5);
solveRectangle(-3,5);