var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); 
var lightY = parseInt(inputs[1]); 
var initialTX = parseInt(inputs[2]); 
var initialTY = parseInt(inputs[3]); 
var thorX = initialTX;
var thorY = initialTY;

while (true) {
	var remainingTurns = parseInt(readline()); 
	var directionX = '';
	var directionY = '';

	if (thorX !== lightX) {
		directionX = (thorX > lightX) ? 'W' : 'E';
		thorX += (directionX === 'E') ? 1 : -1;
	}
	if (thorY !== lightY) {
		directionY = (thorY > lightY) ? 'N' : 'S';
		thorY += (directionY === 'S') ? 1 : -1;
	}
	print(directionY + directionX); 
}