
// Creo un array per raggruppare i 16 numeri
var bomb = [];



console.log(bombField(bomb));


// Funzioni
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
function bombField(bomb) {
  // Utilizzo il ciclo while per generare 16 numeri da includere successivamente in bomb.array
  while (bomb.length < 16) {
    var numberBomb = randomNumber(1, 100)
    // Ora devo evitare che il numero venga duplicato due volte utilizzando la funzione includes
    // Utilizzando il not controllo se il numero non è incluso
    if (!bomb.includes(numberBomb)) {
      // Utilizzando il push lo metto nell'array
      bomb.push(numberBomb)
    }
  }
  return bomb;
}

// Generazione numeri casuali con la solita function

function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non hai inserito correttamente i dati");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
