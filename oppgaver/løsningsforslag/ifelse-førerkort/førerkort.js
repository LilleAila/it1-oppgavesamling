// Klargjør for utskrift
const utskrift = document.getElementById("utskrift");

// Håndterer skjemaet
document.getElementById("skjema").addEventListener("submit", sjekkAlder);

function sjekkAlder(evt) {
    evt.preventDefault(); // SPA = single page application, vi håndterer alt på denne siden

    // Henter brukeren sin alder
    let alder = parseInt(document.getElementById("alder").value);

    // Sjekk alderen og gi passende melding
    if (alder < 16) {
        // console.log("Ha deg vekk!");
        utskrift.innerHTML = "Ha deg vekk!";
    }
    else if (alder < 18) {
        // console.log("Moped");
        utskrift.innerHTML = "Moped";
    }
    else if (alder < 21) {
        // console.log("Moped og bil");
        utskrift.innerHTML = "Moped og bil";
    }
    else if (alder >= 21) {
        // console.log("Moped, bil og buss");
        utskrift.innerHTML = "Moped, bil og buss";
    }
    else {
        // console.log("Ugyldig alder.");
        utskrift.innerHTML = "Ugyldig alder.";
    }
}