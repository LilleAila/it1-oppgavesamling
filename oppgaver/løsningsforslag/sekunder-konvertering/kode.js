// Henter utskrift frå HTML, for å seinare kunne skrive til det
const utskrift = document.getElementById("utskrift");

// Hentar antall sekund frå den som besøker nettsida
let tidSekunder = prompt("Skriv inn antall sekunder:");

// Konverterer sekund til timar, minutt og sekund
let timar = Math.floor(tidSekunder / 3600); // 1 time = 3600 sekund
let minutt = Math.floor((tidSekunder % 3600) / 60); // 1 minutt = 60 sekund
let sekund = tidSekunder % 60; // Resterande sekund

// NB: Math.floor() blir brukt for å runde ned til nærmaste heile tal

// Skriver ut resultatet til nettsida
utskrift.innerHTML = `Du skreiv inn ${tidSekunder} sekund, noko som blir...<p>${timar} timer, ${minutt} minutt, ${sekund} sekund</p>`;