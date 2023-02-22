// Fa apparire i valori digitati nel campo input .screen
function addToScreen(value) {
  document.querySelector(".screen").value += value;
}

// Cancella il contenuto apparso nel campo input .screen cliccando CE
function clearScreen() {
  document.querySelector(".screen").value = "";
}

// Calcolo operazioni con eval() partendo dalla stringa di calcolo (value) che ho creato cliccando i tasti
function calculate() {
  var result = eval(document.querySelector(".screen").value);
  // il risultato viene assegnato come value alla variabile result (input .screen)
  document.querySelector(".screen").value = result;
}
