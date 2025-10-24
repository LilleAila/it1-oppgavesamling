// Grunnleggande info om nettlesar
let språk = navigator.language;
console.log(språk);

let språkFleire = navigator.languages;
console.log(språkFleire);

let nettlesar = window.navigator.userAgent;
console.log(nettlesar);

let bredde = window.screen.width;
let hoyde = window.screen.height;
console.log(bredde,hoyde);

let tidssone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(tidssone);

// Sjekke språk

if (språk.toLowerCase().includes("nb") || språk.toLowerCase().includes("no")) {
    console.log("Du bruker norsk språk.");
}
else {
    console.log("This service does not support your language.");
}

// Sjekke operativsystem/system

if (nettlesar.toLowerCase().includes("windows")) {
    console.log("Du bruker Windows.");
}
else if (nettlesar.toLowerCase().includes("macintosh")) {
    console.log("Du bruker MacOS.");
}
else {
    console.log("Du bruker Linux."); // NB: Forenkla.
}