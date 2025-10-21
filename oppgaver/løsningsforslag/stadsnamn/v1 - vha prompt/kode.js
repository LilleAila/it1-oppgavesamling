// Ber brukeren om et stedsnavn, og lagrer lengden på det som ble skrevet inn
let stedsnavn1 = prompt("Skriv inn stedsnavn nr. 1:");
let stedsnavn1Lengde = stedsnavn1.length;
// Samme for stedsnavn 2
let stedsnavn2 = prompt("Skriv inn stedsnavn nr. 2:");
let stedsnavn2Lengde = stedsnavn2.length;

// Regner ut differansen i antall tegn på de to stedsnavnene
let differanse = stedsnavn1Lengde - stedsnavn2Lengde;

// Håndterer det at tallet kunne bli negativt, ved å lagre absoluttverdien av det 
differanse = Math.abs(differanse);
// console.log(differanse); // test for å se om det fungerer

// Utskrift til HTML, 3 versjoner i stigende vanskelighetsgrad, og detaljnivå:
// Alternativ 1: Så enkelt som mulig
document.getElementById("utskrift").innerText = differanse;

// Alternativ 2: Litt mer detaljer i utskriften
document.getElementById("utskrift").innerText = "Differansen er " + differanse;

// Alternativ 3: Veldg detaljert utskrift
document.getElementById("utskrift").innerText = `
    Stedsnavn 1: ${stedsnavn1}, med lengde ${stedsnavn1Lengde}, og
    stedsnavn 2: ${stedsnavn2}, med legde ${stedsnavn2Lengde} har en 
    differanse på ${differanse} antall tegn.
    ` ;