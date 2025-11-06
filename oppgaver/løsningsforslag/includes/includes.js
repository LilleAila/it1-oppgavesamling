const utdata = document.getElementById("utdata");

const skjema = document.getElementById("skjema");

skjema.addEventListener("submit", lesMelding);

function lesMelding(evt) {
    evt.preventDefault(); // SPA (single page application) = går ikkje til side 2 for å håndtere det

    let inndata = document.getElementById("chatInn").value;
    console.log(inndata);

    if (inndata.toLowerCase().includes("chips")) {
        utdata.innerText = "Å, eg og likar chips.";
    } else {
        utdata.innerText = "Me er ikkje kompatible.";
    }
}

// Avansert versjon som sjekkar for "negasjons-sjekk", altså at du seier at du IKKJE likar noko

// function lesMelding(evt) {
//     evt.preventDefault(); // SPA (single page application) = går ikkje til side 2 for å håndtere det

//     let setning = document.getElementById("chatInn").value.toLowerCase();
//     console.log(setning);

//     const ord = "chips";

//     // Finn ordet
//     const harOrd = new RegExp(`\\b${ord}\\b`, "i").test(setning);

//     // Sjekk mønster: "ikkje ... ord" (opp til 2 ord mellom)
//     const negasjonFør = new RegExp(`\\bikkje\\b(?:\\s+\\w+){0,2}\\s+\\b${ord}\\b`, "i").test(setning);

//     if (harOrd && !negasjonFør) {
//         console.log(`Å, eg òg likar ${ord}!`);
//     } else {
//         console.log(`Då kan ikkje me snakke saman lenger, ${ord} er veldig viktig for meg!`);
//     }
// }