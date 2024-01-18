// compter le nombre de fois qu'un mot apparait 
const arr = ['toto', 'toto', 'tati', 'tata'];
const occ = {};
for (const n of arr) {
  occ[n] = occ[n] ? occ[n] + 1 : 1;
}
console.log(occ);
// sortie console : Object { toto: 2, tati: 1, tata: 1 }
console.log(Object.values(occ));
// sortie console :Array(3) [ 2, 1, 1 ]

// retrouver les mots contenants les lettres du tableau
words=['toto', 'tre', 'hid', 'rat'];
letters=['t', 'r'];
result=[]
for(i=0; i<words.length; i++){
    for(j=0; j<letters.length; j++){
        if(words[i].includes(letters[j])){
            result.push(words[i]) 
        }
    }
    var resultat = Array.from(new Set(result))
    console.log(resultat, 'result')
}
// ||
const words = ['mot1', 'mot2', 'mot3', 'mot4', 'mot5'];
const letters = ['a', 'b', 'c', 'd', 'e'];

const result = words.filter(word => {
  for (let i = 0; i < letters.length; i++) {
    if (!word.includes(letters[i])) {
      return false;
    }
  }
  return true;
});

console.log(result);

// exercice solde
prices= [100,30,80,10];
discount=[20]

function CalculateTotalPrice(prices, discount) {
    let total=0;
    let maxPrice=0
   for(let i=0;i<prices.length;i++) {
       total +=prices[i];
       maxPrice = Math.max(...prices)
   }
   let remise = maxPrice*discount/100
   console.log(total - remise, 'r')
}
CalculateTotalPrice(prices, discount)
// ||
function calculateTotalPrice(prices, discount) {
    // Calculez le prix de vente total en utilisant la méthode reduce() de l'objet Array
    const total = prices.reduce((acc, curr) => acc + curr, 0);
  
    // Appliquer la réduction au prix de vente total
    const salePrice = total - (total * discount / 100);
  
    // Arrondir le prix de vente total à l'entier inférieur si nécessaire
    return Math.floor(salePrice);
  }
  const prices = [10, 15, 25, 30];
  const discount = 15;
  const totalPrice = calculateTotalPrice(prices, discount);
  console.log(totalPrice); // affiche 58
    
// Dans ce probleme on vous donne une liste d'entiers et un entier k, on vous demande de trouver s'il existe une paire d'entiers dans la liste dont la somme est exactement k  
tab = [1, 3, 5]
k=8
total = []
function searchSum(tab, k){
    for(let i = 0; i<tab.length; i++){
        for(let j = 0; j<tab.length; j++){
            if(tab[i]+tab[j]=== k){
                total.push(tab[i], tab[j])
                console.log(total)
            }
        }
    }
}
searchSum(tab, k)


// implémenter une fonction qui prend en entrée un identifiant et qui retourne la clé de contrôle en utilisant l'algorithme qui suit : faites la somme des chiffres situés à des positions paires, multipliez le résultat par trois, ajoutez à ce nombre la somme des chiffres situés à des positions impaires, prenez le dernier chiffre de ce résultat, si ce nombre n'est pas zéro soustrayezle à 10, sinon gardez 0.retournez le chiffre résultat

function calculateControlKey(id) {
    // Séparez les chiffres de l'identifiant en un tableau
    const digits = id.split('').map(ch => parseInt(ch, 10));
  
    // Faites la somme des chiffres situés à des positions paires
    const sumEven = digits.reduce((acc, curr, i) => {
      if (i % 2 === 0) {
        acc += curr;
      }
      return acc;
    }, 0);
  
    // Faites la somme des chiffres situés à des positions impaires
    const sumOdd = digits.reduce((acc, curr, i) => {
      if (i % 2 === 1) {
        acc += curr;
      }
      return acc;
    }, 0);
  
    // Calculez la clé de contrôle
    let controlKey = (sumEven * 3 + sumOdd) % 10;
    if (controlKey !== 0) {
      controlKey = 10 - controlKey;
    }
  
    return controlKey;
  }
  
  const controlKey = calculateControlKey('123456789');
  console.log(controlKey); // affiche 3

//   implémentez une fonction countFrequencies(words) qui prend comme entrée un tableau de chaînes de caractères (words) représentant un document de mots tokenisés. Retournez un tableau d'entiers contenant le nombre d'occurence de chaque mot triés par ordre alphabétique 
function countFrequencies(words) {
    // Créez un objet qui va stocker le nombre d'occurrences de chaque mot
    const frequency = {};
  
    // Parcourez le tableau de mots et comptez le nombre d'occurrences de chaque mot
    words.forEach(word => {
      if (word in frequency) {
        frequency[word]++;
      } else {
        frequency[word] = 1;
      }
    });
  
    // Transformez l'objet en un tableau de paires clé-valeur
    const frequencyArray = Object.entries(frequency);
  
    // Triez le tableau par ordre alphabétique
    frequencyArray.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      } else {
        return 0;
      }
    });
  
    // Extraire les valeurs (nombre d'occurrences) du tableau trié
    const result = frequencyArray.map(pair => pair[1]);
  
    return result;
  }
  function countFrequencies(words) {
    // Créez un objet qui va stocker le nombre d'occurrences de chaque mot
    const frequency = {};
  
    // Parcourez le tableau de mots et comptez le nombre d'occurrences de chaque mot
    words.forEach(word => {
      if (word in frequency) {
        frequency[word]++;
      } else {
        frequency[word] = 1;
      }
    });
  
    // Transformez l'objet en un tableau de paires clé-valeur
    const frequencyArray = Object.entries(frequency);
  
    // Triez le tableau par ordre alphabétique
    frequencyArray.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      } else {
        return 0;
      }
    });
  
    // Extraire les valeurs (nombre d'occurrences) du tableau trié
    const result = frequencyArray.map(pair => pair[1]);
  
    return result;
  }
  const words = ['hello', 'world', 'hello', 'hi', 'world'];
  const frequencies = countFrequencies(words);
  console.log(frequencies); // affiche [2, 2, 1]
      