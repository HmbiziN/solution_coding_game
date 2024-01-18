var n = parseInt(readline()); 
var temps = readline(); 

var tempClosestToZero = 10000;
temps = temps.split(/\s+/).map(function(n) {
    return parseInt(n);
});

if (!n) {
    tempClosestToZero = 0;
} else {
    for (var i = n-1; i>=0; i--) {
        var thisTemp = temps[i];
        if (Math.abs(thisTemp) < Math.abs(tempClosestToZero)) {
            tempClosestToZero = thisTemp; //min diff to zero
        } else if (Math.abs(thisTemp) === Math.abs(tempClosestToZero)) {
            tempClosestToZero = (tempClosestToZero > thisTemp) ? tempClosestToZero : thisTemp; //choose the positive temp if already exists
        }
    }
}

print(tempClosestToZero);