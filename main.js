// Creo un array per raggruppare i 16 numeri
var bomb = [];
var safe = [];


console.log(bombField(bomb));
console.log(start(safe,bomb));

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

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// Creo un ciclo while che va da 100 - 16

function start(safe) {
  while (safe.length < 100 - 16) {
    var user = parseInt(prompt("Dammi un numero:"));
    // Controlli
    if (isNaN(user)) {
      location.reload(alert("Non hai inserito un numero!"));
    } else if (1 < user && user > 100) {
      location.reload(alert("Devi inserire un numero tra 1 e 100"));
    }
    // Controllo che il numero non sia già inserito nella safe e pusho
    if (!safe.includes(user)) {
      safe.push(user)
    } else {
      console.log("Hai inserito due volte lo stesso numero!");
      return safe.length;
    }
    // Se nell'array bomba è incluso user allora ho perso
    if (bomb.includes(user)) {
      console.log("Hai perso!");
      document.getElementById('bomb').innerHTML = '<i class="fas fa-bomb">'+ '</i>' + "HAI PERSO!";
      return safe.length;
    }
  }

}
