while (true) {
    var highest = 0; 
    var mountainFire = 0; 
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); 
        if (highest < mountainH) { 
            highest = mountainH; 
            mountainFire = i;
            }
    }
    print(mountainFire); 
}