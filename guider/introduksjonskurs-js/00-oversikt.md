# Oversikt over sentrale konsepter i JavaScript

Denne siden gir en kort oppsummering av sentrale konsepter i JavaScript, inkludert variabler, datatyper, utskrift, aritmetikk, kontrollstrukturer, funksjoner, objekter og arrays. Hver seksjon inneholder eksempler på kode for å illustrere de grunnleggende prinsippene.

## DOM, variabler, utskrift og aritmetikk

Lær mer om [DOM, variabler, utskrift og aritmetikk](./01_dom_variabler_utskrift_aritmetikk.md), for detaljer om blant annet DOM-en, variabler, utskrift til konsoll og nettside, enkel brukerinput og grunnleggende aritmetikk.

```js
// "Teaser"
let antallLiv = 100;
console.log("Antall liv er: " + antallLiv);
antallLiv -= 1; // reduserer antallLiv med 1
console.log(`Antall liv er nå: ${antallLiv}`);

document.getElementById("utskrift").innerText = `Du har ${antallLiv} liv igjen!`;
```

## Kontrollstrukturer

Les [kontrollstrukturer](02_konstrollstrukturer.md), for detaljer om blant annet if-else-setninger, switch-setninger og løkker.

```js
// "Teaser"
if (betingelse) {
    // kode som kjøres hvis betingelsen er sann
} else {
    // kode som kjøres hvis betingelsen er usann
}

for (let i = 0; i < 5; i++) {
    console.log(i); // skriver ut tallene 0 til 4
}
```

## Funksjoner

Les [funksjoner](03_funksjoner.md), for detaljer om blant annet funksjonsdefinisjoner, parametere, returverdier og omfang (scope).

```js
// "Teaser"
function regnUtSum(a, b) {
    return a + b;
}
```

## Arrays og objekter

Les [arrays og objekter](04_arrays_og_objekter.md), for detaljer om blant annet opprettelse av arrays og objekter, tilgang til elementer, vanlige metoder og iterasjon over arrays og objekter.

```js
// "Teaser"
let frukter = ["eple", "banan", "appelsin"];
let person = { navn: "Ola", alder: 30 };
```

## Lyttefunksjoner og hendelseshåndtering

Les [lyttefunksjoner og hendelseshåndtering](05_lyttefunksjoner_og_hendelseshandtering.md), for detaljer om blant annet hvordan man legger til hendelseslyttere på HTML-elementer, og hvordan man håndterer brukerinteraksjoner som klikk og tastetrykk.

```js
// "Teaser"
document.getElementById("minKnapp").addEventListener("click", function() {
    alert("Knappen ble klikket!");
});
```

## Mer innhold kommer!

..etter hvert.

Vil du bidra? Opprett en pull request eller åpne en issue — alle bidrag er velkomne! 😊