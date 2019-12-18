// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// quanti km l'utente deve percorrere

// etá passeggero

// calcolo prezzo biglietto (numero km * 0.21)

// se < 18 allora -20%;

// se < 65 allora -40%;


var KmDaPercorrere = prompt('Inserisca la distanza che deve percorrere in km');
console.log(KmDaPercorrere);

document.getElementById('km').innerHTML = KmDaPercorrere;

var EtaPasseggero = prompt('Inserisca la sua etá');
console.log(EtaPasseggero);

document.getElementById('eta').innerHTML = EtaPasseggero;

var PrezzoBiglietto = (KmDaPercorrere * 0.21);
console.log(PrezzoBiglietto);



if (EtaPasseggero > 18 && EtaPasseggero < 65 ) {
  var TariffaNormale = PrezzoBiglietto;
} else if (EtaPasseggero < 18) {
  var TariffaMinorenni = PrezzoBiglietto - (PrezzoBiglietto * 20 / 100) ;
  console.log(TariffaMinorenni);
} else if (EtaPasseggero > 65) {
    var TariffaOver = PrezzoBiglietto - (PrezzoBiglietto * 40 / 100) ;
    console.log(TariffaOver);
}

document.getElementById('Prezzo-biglietto').innerHTML = TariffaNormale || TariffaMinorenni || TariffaOver;
