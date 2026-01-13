const skjema = document.querySelector("#skjema"); // Hent skjemaet frå HTML
const resultatDiv = document.querySelector("#resultat"); // For å kunne vise resultatet i HTML

skjema.addEventListener("submit", handterSkjema); // Når skjemaet blir sendt inn, kall funksjonen handterSkjema

function handterSkjema(evt) { 
    evt.preventDefault(); // Hindre at sida lastar på nytt

    const inputOrd = document.querySelector("#inputOrd").value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputOrd}`; // Lag URL til API-et

    console.log(url);
    console.log(inputOrd)

    hentDefinisjon(url); // Kall funksjonen hentDefinisjon med URL-en som argument
}

async function hentDefinisjon(url) { // Asynkron funksjon for å hente definisjonen frå API-et
    const respons = await fetch(url); 
    const data = await respons.json();
    console.log(data);

    if (data.length > 0) { // Sjekk om det finst definisjonar (returneres det data?)
        visDefinisjon(data);
    } else {
        resultatDiv.innerHTML = "Ingen definisjon funne.";
    }
}

function visDefinisjon(ord) {
    resultatDiv.innerHTML = ""; // Tøm resultat-diven før vi viser ny definisjon

    const overskrift = document.createElement("h2");
    overskrift.innerText = `Definisjon for ${ord[0].word}:`;
    resultatDiv.appendChild(overskrift);

    // Første betydning i API-responsen
    const betydning = document.createElement("h3");
    betydning.innerText = ord[0].meanings[0].definitions[0].definition;
    resultatDiv.appendChild(betydning);

    // NB: Dette er ein enkel visning som berre viser den første betydninga og forklaringa.
    // I tillegg, det er ikkje handtert mange problem som kan oppstå med enkelte ord.
    // Videre arbeid: Legg til fleire definisjonar, eksempel, og handter fleire betydningar.
}