const rabattkoder = ["RABATT10", "RABATT20", "RABATT30"];

let skjema = document.getElementById("skjema");

skjema.addEventListener("submit", handterSkjema);

function handterSkjema(event) {
    event.preventDefault(); // Forhindrer at siden refresher når skjemaet sendes inn

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