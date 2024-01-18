var width = parseInt(readline()); 
var height = parseInt(readline()); 
var matrix = [];
for (var i = 0; i < height; i++) {
    var line = readline(); 
    matrix.push(line.split(""));
}

if(width > 1 && height > 1){
    for(var i = 0; i < width; i++){
        for(var j = 0; j < height; j++){
            if(matrix[i][j] == 0){
                print(stringResult(i, j));
            }
        }
    }
}else if(width == 1){
    for(var i = 0; i < height; i++){
        if(matrix[i] == 0){
            print(stringResult(i, 0));
        }
    }
}else if(height == 1){
    for(var j = 0; j < width; j++){
        if(matrix[0][j] == 0){
            print(stringResult(0, j));
        }
    }
}


function stringResult(i, j){
    var stringPositionActual = j+' '+i;
    var stringPositionLeft = getNextLeft(i, j);
    var stringPositionBottom = getNextBottom(i, j);
    
    return stringPositionActual+' '+stringPositionLeft+' '+stringPositionBottom;
}

function getNextLeft(i, j){
    var getNextLeft = '-1 -1';
    for(var col = j+1; col < width; col++){
        if(matrix[i][col] == 0){
            getNextLeft = col+' '+i;
            return getNextLeft;
        }
    }
    return getNextLeft;
}   

function getNextBottom(i, j){
    var getNextBottom = '-1 -1';
    for(var line = i+1; line < height; line++){
        if(matrix[line][j] == 0){
            getNextBottom = j+' '+line;
            return getNextBottom;    
        }
    }
    return getNextBottom;
}    
