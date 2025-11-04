// Henter img-elementet fra HTML, slik at vi kan jobbe med det senere
const bilde = document.querySelector("#bilde");
// For å kunne sette bildeteksten
const bildetekst = document.querySelector("#bildetekst");

// Lagrer en array med objekter, der hvert objekt er et bilde og tekst. 
// Dersom du vil utvide galleriet ditt med nye bilder, legger du bare til nye her.
let arrayBilderObjekt = [
    {
        bilde : "Blue-Palo-Verde-4-2025.webp",
        tekst : "Bilde nr. 1, dette viser datt og ditt."
    },
    {
        bilde : "Endless-Night-4-2025.webp",
        tekst : "Bilde nr. 2, dette viser ditt og datt."
    },
    {
        bilde : "Escape-2-2025.webp",
        tekst : "Bilde nr. 3, dette er det siste bildet."
    }
];

// console.log(arrayBilderObjekt[0].bilde);

// For å kunne "starte" bildegalleriet en plass, setter vi et bilde fra begynnelsen av
let bildeindeks = 0;
bilde.src = "bilder/" + arrayBilderObjekt[bildeindeks].bilde;
bildetekst.innerText = arrayBilderObjekt[bildeindeks].tekst;

// Funksjonalitet for å bla til høyre

const knappHoyre = document.querySelector("#right");

knappHoyre.addEventListener("click", hoyre);

function hoyre() {
    bildeindeks = bildeindeks + 1;

    if (bildeindeks >= arrayBilderObjekt.length) {
        bildeindeks = 0;
    }

    bilde.src = "bilder/" + arrayBilderObjekt[bildeindeks].bilde;
    bildetekst.innerText = arrayBilderObjekt[bildeindeks].tekst;}

// Funksjonalitet for å bla til venstre

const knappVenstre = document.querySelector("#left");

knappVenstre.addEventListener("click", venstre);

function venstre() {
    bildeindeks = bildeindeks - 1;

    if (bildeindeks < 0) {
        bildeindeks = arrayBilderObjekt.length - 1;
    }

    bilde.src = "bilder/" + arrayBilderObjekt[bildeindeks].bilde;
    bildetekst.innerText = arrayBilderObjekt[bildeindeks].tekst;
}