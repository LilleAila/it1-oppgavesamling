// Henter img-elementet fra HTML, slik at vi kan jobbe med det senere
const bilde = document.querySelector("#bilde");

// Lagrer en array med bilder. Dersom du vil utvide galleriet ditt med nye bilder, 
// legger du bare til nye her.
let arrayBilder = [
    "Blue-Palo-Verde-4-2025.webp",
    "Endless-Night-4-2025.webp",
    "Escape-2-2025.webp"
];

// For å kunne "starte" bildegalleriet en plass, setter vi et bilde fra begynnelsen av
let bildeindeks = 0;
bilde.src = "bilder/" + arrayBilder[bildeindeks];

// Funksjonalitet for å bla til høyre

const knappHoyre = document.querySelector("#right");

knappHoyre.addEventListener("click", hoyre);

function hoyre() {
    bildeindeks = bildeindeks + 1;

    if (bildeindeks >= arrayBilder.length) {
        bildeindeks = 0;
    }

    bilde.src = "bilder/" + arrayBilder[bildeindeks];
}

// Funksjonalitet for å bla til venstre

const knappVenstre = document.querySelector("#left");

knappVenstre.addEventListener("click", venstre);

function venstre() {
    bildeindeks = bildeindeks - 1;

    if (bildeindeks < 0) {
        bildeindeks = arrayBilder.length - 1;
    }

    bilde.src = "bilder/" + arrayBilder[bildeindeks];
}