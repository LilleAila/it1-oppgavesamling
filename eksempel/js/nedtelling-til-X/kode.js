// Testing av nedtelling til julaften
let tid = new Date();

let julaften = new Date("2025-12-24T00:00:00+01:00");

let tidTilJulaften = julaften - tid; // Millisekunder
console.log(tidTilJulaften); // Skriv ut tid til julaften i millisekunder

/*
    -----------------------
    Faktisk implementasjon
    -----------------------
*/

// Funksjon for å berekne tid igjen til julaftan
function beregnTidTilJulaften() {
    let no = new Date();
    let tidIgjen = julaften - no;

    if (tidIgjen <= 0) {
        return "God jul! Julaften er her!";
    }

    const msPerDag = 1000 * 60 * 60 * 24; // Millisekunder per dag
    const msPerTime = 1000 * 60 * 60; // Millisekunder per time
    const msPerMinutt = 1000 * 60; // Millisekunder per minutt
    const msPerSekund = 1000; // Millisekunder per sekund

    let dager = Math.floor(tidIgjen / msPerDag); // Henter ut antall dagar
    let timer = Math.floor((tidIgjen % msPerDag) / msPerTime); // Henter ut antall timar
    let minutter = Math.floor((tidIgjen % msPerTime) / msPerMinutt); // Henter ut antall minutt
    let sekunder = Math.floor((tidIgjen % msPerMinutt) / msPerSekund); // Henter ut antall sekund

    return `${dager} dagar, ${timer} timar, ${minutter} minutt og ${sekunder} sekunder igjen`;
}

// Oppdaterer utskrifta kvart sekund
setInterval(function() {
    let utskrift = document.querySelector("#tidIgjen");
    utskrift.innerText = beregnTidTilJulaften(); // Oppdaterer teksten, funksjonen returnerer teksten som skal visast
}, 1000);