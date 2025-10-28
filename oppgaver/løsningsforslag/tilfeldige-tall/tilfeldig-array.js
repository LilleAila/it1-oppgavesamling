// Lager en tom array, som skal fylles ut lenger ned i koden
let arrayTall = [];

// Løkke som går gjennom X ganger, og fyller inn det tilfeldige tallet i arrayen
for (let i = 0; i < 10; i++) {
    arrayTall.push(Math.floor(Math.random() * 10) + 1);
}

// Sjekker hva innholdet i arrayen er under testing
console.log(arrayTall);

// "Ting" vi skal se etter
let over5 = 0; // Skal se etter tall over 5
let akkurat4 = 0; // Skal se etter tall som har verdien 4
let summen = 0; // Skal inneholde summen av alle tallene
let high = -10; // Skal inneholde det høyeste tallet
let low = Infinity; // SKal inneholde det laveste tallet

// Går gjennom arrayen og leter etter det oppg. ber om
for (let i = 0; i < arrayTall.length; i++) {
    // Sjekker om tallet er over 5, og oppdaterer i så tilfelle variabelen
    if(arrayTall[i] > 5) {
        over5++;
    }

    // Sjekker om tallet er 4, og oppdaterer
    if(arrayTall[i] === 4) {
        akkurat4++;
    }

    // Summerer tallet
    summen = summen + arrayTall[i];

    // Finner det høyeste tallet, og oppdaterer det om det er høyere enn forrige høyeste
    if (arrayTall[i] > high) {
        high = arrayTall[i];
    }

    // Finner det laveste tallet, og oppdaterer det om tilfelle
    if (arrayTall[i] < low) {
        low = arrayTall[i];
    }
}

console.log("Tall over 5: " +  over5);
console.log("Lik 4: " + akkurat4);
console.log("Summen: " + summen);
console.log("Gjennomsnittsverdien: " + summen/arrayTall.length);
console.log("Høyeste: " + high);
console.log("Laveste: " + low);