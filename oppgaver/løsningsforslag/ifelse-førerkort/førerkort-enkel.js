// Be om brukerens alder
let alder = 8;

// Sjekk alderen og gi passende melding
if (alder < 16) {
    console.log("Ha deg vekk!");
}
else if (alder < 18) {
    console.log("Moped");
}
else if (alder < 21) {
    console.log("Moped og bil");
}
else if (alder < 24) {
    console.log("Moped, bil og lastebil");
}
else if (alder >= 24 && alder < 120) { // Antar 120 som en øvre grense for gyldig alder
    console.log("Moped, bil, lastebil og buss.");
}
else {
    console.log("Ugyldig alder.")
}

// NB: Lag gjerne et flytskjema for mer komplekse if-else-strukturer!