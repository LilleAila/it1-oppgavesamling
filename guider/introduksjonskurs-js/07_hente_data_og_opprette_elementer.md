# Fetch, async og await, createElement og appendChild

I denne leksjonen skal vi lære om hvordan vi kan hente data fra en ekstern kilde ved hjelp av `fetch`-funksjonen, samt forstå hvorfor vi må bruke `await`- og `async`-nøkkelordene i JavaScript for å håndtere asynkrone operasjoner på en enkel måte. Vi skal også se på hvordan vi kan opprette nye HTML-elementer og legge dem til i DOM-en basert på data vi har hentet.

Oversikt:
- [Hva er Fetch?](#hva-er-fetch)
- [Hva er async og await?](#hva-er-async-og-await)
- [Grunnleggende bruk av Fetch](#grunnleggende-bruk-av-fetch)
- [Opprette og legge til elementer i DOM](#opprette-og-legge-til-elementer-i-dom)
- [Ferdig kode](#ferdig-kode)

## Hva er Fetch?

`fetch` er en innebygd funksjon i JavaScript som lar oss gjøre nettverksforespørsler til servere for å hente ressurser som JSON-data, bilder, eller andre filer. Den returnerer et `Promise` som løses når svaret fra serveren er mottatt.

## Hva er async og await?

`async` og `await` er syntaktiske konstruksjoner i JavaScript som gjør det enklere å jobbe med asynkrone operasjoner, som nettverksforespørsler. Tanken er altså at noen operasjoner kan ta tid, og i noen tilfeller må vi vente på disse før vi går videre. Når en funksjon er merket med `async`, kan vi bruke `await` inne i den funksjonen for å pause utførelsen av koden til et `Promise` er løst.

## Grunnleggende bruk av Fetch

Her er et enkelt eksempel på hvordan vi kan bruke `fetch` for å hente data fra en offentlig API. Vi bruker https://api.chucknorris.io/ som et eksempel, som gir oss tilfeldige Chuck Norris-vitser. Les mer på nettsidene for hvordan du kan bruke API-et.

```javascript
async function hentData(){
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    console.log("Alle data:");
    console.log(data);
    console.log("\nBare vitsen:");
    console.log(data.value)
}

hentData();
```

Legg merke til at:
- vi definerer funksjonen `hentData` som en `async` funksjon, slik at vi kan bruke `await` inne i den.
- vi bruker `await` foran `fetch` og `response.json()`, noe som gjør at koden venter på at disse operasjonene skal fullføres før den går videre.
- vi logger både hele dataobjektet og bare selve vitsen til konsollen, noe som kan være nyttig for å forstå strukturen på dataene vi mottar.
    - denne delen kan bestå av en god del "detektivarbeid", altså å utforske dataene for å finne ut hva vi faktisk trenger.

## Opprette og legge til elementer i DOM

Etter at vi har hentet dataene, kan vi opprette nye HTML-elementer og legge dem til i DOM-en for å vise informasjonen på nettsiden. Her er et eksempel på hvordan vi kan gjøre dette.

Vi tar som utgangspunkt en enkel HTML-side:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chuck Norris, sa du?</title>
    <link rel="stylesheet" href="stilark.css">
    <script src="chuck.js" defer></script>
</head>
<body>
    <h1>Har du høyrt denne?</h1>
    <div id="vits">
        <!-- fylles ut av JavaScript -->
    </div>
</body>
</html>

```

Vi bruker enkel CSS:

```css
html, body {
    height: 100%;
}
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* https://cssgradient.io/ */
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    text-align: center;
}
p {
    font-size: 1.5em;
    color: white;
}
h1 {
    font-size: 2em;
    color: rgb(213, 255, 74);
}
```

Og her er JavaScript-koden som henter en vits og legger den til i DOM-en:

```javascript
async function hentVits() {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    
    // Tømmer sida for gamle vitsar
    document.querySelector("#vits").innerHTML = "";

    // Opprettar ein ny vits i ein paragraf
    let vits = document.createElement("p");
    vits.innerText = data.value;
    document.querySelector("#vits").appendChild(vits);
    
    // Legg til eit bilete av Chuck Norris
    let bilde = document.createElement("img");
    bilde.src = data.icon_url;
    document.querySelector("#vits").appendChild(bilde);
}

hentVits(); // Slik at me får ein vits med ein gong me lastar sida

// Slik kan me hente ein vits kvar gong me trykker på ein knapp på tastaturet
document.body.addEventListener("keydown", hentVits);
```

I dette eksemplet:
- Vi henter en tilfeldig Chuck Norris-vits som før.
- Vi oppretter et nytt `<p>`-element og setter tekstinnholdet til vitsen vi hentet.
- Vi legger det nye elementet til i `#vits`-elementet på nettsiden, slik at vitsen vises for brukeren.
- Vi oppretter også et `<img>`-element for å vise et bilde av Chuck Norris, og legger det til på samme måte.
- Vi legger til en event listener som gjør at vi kan hente en ny vits hver gang vi trykker på en tast på tastaturet.

## Ferdig kode

Du kan se ferdig kode her dersom du får problemer: [Chuck Norris, REST API](../../eksempel/js/rest-api-chuck-norris/).