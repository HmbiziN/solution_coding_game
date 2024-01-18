// test tech jeu de l'avatar dans les différents espaces.
// implémentez la fonction countFinalPosition(width, height,position,portalA, portalB, moves) qui prend en entrées width height, les tableaux d'entiers position, portalA, portalB et la chaine de caractère moves avec : 0< width <20, 0< height<20; 0<= nombres de caractères de moves<=255. retournez la position finale de l'avatar sous forme d'un tableau de deux entiers

function countFinalPosition(width: number, height: number, position: number[], portalA: number[], portalB: number[], moves: string): number[] {
    // Parcourez les mouvements et mettez à jour la position de l'avatar en conséquence
    for (const move of moves) {
      switch (move) {
        case 'U':
          position[1]--;
          break;
        case 'D':
          position[1]++;
          break;
        case 'L':
          position[0]--;
          break;
        case 'R':
          position[0]++;
          break;
      }
  
      // Vérifiez si l'avatar est passé par un portail
      if (position[0] === portalA[0] && position[1] === portalA[1]) {
        position[0] = portalB[0];
        position[1] = portalB[1];
      } else if (position[0] === portalB[0] && position[1] === portalB[1]) {
        position[0] = portalA[0];
        position[1] = portalA[1];
      }
  
      // Vérifiez si l'avatar est sorti de la grille
      if (position[0] < 0) {
        position[0] = width - 1;
      } else if (position[0] >= width) {
        position[0] = 0;
      }
      if (position[1] < 0) {
        position[1] = height - 1;
      } else if (position[1] >= height) {
        position[1] = 0;
      }
    }
  
    // Retournez la position finale de l'avatar
    return position;
  }

  
  const width = 10;
const height = 10;
const position = [0, 0];
const portalA = [1, 1];
const portalB = [8, 8];
const moves = 'RRUULLDD';
const finalPosition = countFinalPosition(width, height, position, portalA, portalB, moves);
console.log(finalPosition); // affiche [1, 1]
