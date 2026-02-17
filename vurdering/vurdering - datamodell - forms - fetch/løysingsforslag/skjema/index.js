// En array med rabattkoder som er gjeldende
const rabattkoder = ["RABATT10", "RABATT20", "RABATT30"];

// Vi henter ut skjemaet fra HTML ..
let skjema = document.getElementById("skjema");

// .. og legger en lyttefunksjon på det, som skal kjøre når skjemaet sendes inn.
skjema.addEventListener("submit", handterSkjema);

// Funksjon som håndterer innsendelsen av skjemaet
function handterSkjema(event) {
    event.preventDefault(); // Forhindrer at siden refresher når skjemaet sendes inn

    // Henter ut verdiene som brukeren har skrevet inn i skjemaet, og lagrer dem i variabler.
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let epost = document.getElementById("epost").value;
    let passord = document.getElementById("passord").value;
    let rabattkode = document.getElementById("rabattkode").value;

    // Viser en velkomsthilsen til brukeren.
    document.getElementById("resultat").innerHTML = "<p>Velkommen, " + fornavn + " " + etternavn + "!";

    // Sjekker om rabattkoden som brukeren har skrevet inn er gyldig, og legger til tilbakemelding på dette:
    if (sjekkRabattkode(rabattkode)) {
        document.getElementById("resultat").innerHTML +=  "<p> Du har en gyldig rabattkode.</p>";
    } else {
        document.getElementById("resultat").innerHTML += "<p> Du har IKKE gyldig rabattkode.</p>";
    }
}

// Funksjon for å sjekke om en gitt rabattkode er gyldig eller ikke:
function sjekkRabattkode(kode) {
    if (rabattkoder.includes(kode)) {
        return true;
    } else {
        return false;
    }
}