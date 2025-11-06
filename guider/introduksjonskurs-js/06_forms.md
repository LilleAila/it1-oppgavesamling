# Forms (skjemaer)

Nå skal vi se på hvordan vi kan lage og håndtere skjemaer i JavaScript. Skjemaer er en viktig del av mange nettsider, da de lar brukere sende inn data, som for eksempel registreringer, pålogginger eller tilbakemeldinger.

Det som er spesielt med skjemaer er at de ofte inneholder flere forskjellige typer input-felt, som tekstfelt, avkrysningsbokser, radioknapper og nedtrekksmenyer. I tillegg må vi kunne hente ut og behandle dataene som brukeren sender inn.

Denne guiden består av tre deler:
1. [Enkelt, "barebones" eksempel](#enkelt-barebones-eksempel)
2. [Mer avanserte skjemaer](#mer-avanserte-skjemaer)
3. [Stilsetting av skjemaer](#stilsetting-av-skjemaer)

Lenke til nedlasting av filene: [Se all koden](../../eksempel/js/forms/).

## Enkelt, "barebones" eksempel

### Lage et enkelt skjema

La oss starte med å lage et enkelt HTML-skjema. Legg det innenfor `body`. Vi kan lage et skjema som lar brukeren skrive inn navnet sitt og sende det inn.

```html
<form id="skjema">
    <label for="name">Navn:</label>
    <input type="text" id="name" name="name" placeholder="Skriv inn navnet ditt" required>
    <button type="submit">Send inn</button>
</form>
```

I dette eksempelet har vi laget et skjema med en label foran et tekstfelt for navnet, og en submit-knapp. `required`-attributtet sørger for at brukeren må fylle ut feltet før skjemaet kan sendes inn.

`label`- og `input`-elementene er koblet sammen ved hjelp av `for`-attributtet i labelen og `id`-attributtet i input-feltet.

`placeholder`-attributtet gir en veiledende tekst inne i tekstfeltet som forsvinner når brukeren begynner å skrive.

### Håndtere skjema-innsending med JavaScript

Nå som vi har laget skjemaet, må vi håndtere innsendingen med JavaScript. Vi kan bruke en `submit`-hendelse for å fange opp når brukeren sender inn skjemaet.

```javascript
const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function(event) {
    event.preventDefault(); // SPA = "Single Page Application"

    const navn = document.getElementById('name').value;
    alert('Hei, ' + navn + '! Takk for at du sendte inn skjemaet.');
});
```

I dette eksempelet legger vi til en hendelseslytter på skjemaet som fanger opp `submit`-hendelsen. Vi bruker `event.preventDefault()` for å forhindre at siden lastes på nytt når skjemaet sendes inn. Deretter henter vi verdien fra tekstfeltet og viser en melding til brukeren.

**NB**: `event.preventDefault()` er viktig for å forhindre at siden lastes på nytt, noe som er standard oppførsel når et skjema sendes inn. Dette er spesielt nyttig i Single Page Applications (SPA), hvor vi ønsker å håndtere innsendingen uten å laste siden på nytt. Dersom det oppstår problemer med dette, så kan du ofte gjenkjenne det ved at siden "refresher" når du trykker på send-knappen, og at du ser `?name=...` i URL-en i nettleseren.

## Mer avanserte skjemaer

### Flere input-typer

La oss se på et eksempel med flere forskjellige input-typer i skjemaet.

```html
<form id="skjema">
    <label for="email">E-post:</label>
    <input type="email" id="email" name="email" required>

    <label for="alder">Alder:</label>
    <input type="number" id="alder" name="alder" min="1" max="120" required>

    <label>Kjønn:</label>
    <input type="radio" id="mann" name="kjonn" value="mann" required>
    <label for="mann">Mann</label>
    <input type="radio" id="kvinne" name="kjonn" value="kvinne">
    <label for="kvinne">Kvinne</label>

    <label for="interesser">Interesser:</label>
    <select id="interesser" name="interesser" multiple>
        <option value="sport">Sport</option>
        <option value="musikk">Musikk</option>
        <option value="kunst">Kunst</option>
    </select>

    <label for="farge">Favorittfarge:</label>
    <input type="color" id="farge" name="farge" value="#ff0000">

    <button type="submit">Send inn</button>
</form>
```

I dette skjemaet har vi lagt til flere forskjellige input-typer, inkludert e-post, nummer, radioknapper, en nedtrekksmeny med flere valg, og et fargevalg.

Det er flere ting å legge merke til her.
- Se hvordan vi bruker `name`-attributtet for radioknapper for å gruppere dem sammen.
- For nedtrekksmenyen har vi satt `multiple`-attributtet, som lar brukeren velge flere alternativer. Fjern dette for å få en enkel nedtrekksmeny.
- Vi kan sette begrensninger på input-feltene, som `min` og `max` for nummerfeltet.
- Som i forrige eksempel, kan vi bruke `required` for å gjøre felt obligatoriske.

Her er det viktig å merke seg en stor fordel: Når vi setter disse kravene i HTML, vil nettleseren automatisk validere inputen før skjemaet sendes inn. Du trenger med andre ord ikke skrive ekstra JavaScript-kode for grunnleggende validering. Merk likevel at noen ganger kan det være nødvendig å gjøre mer avansert validering med JavaScript.

### Enkel håndtering av flere input-felt

Vi kan håndtere innsendingen av skjemaet med flere input-felt på samme måte som før. Her er et eksempel på hvordan vi kan hente ut verdiene fra de forskjellige feltene når skjemaet sendes inn:

```javascript
const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindre at siden lastes på nytt = SPA = "Single Page Application"

    const email = document.getElementById('email').value;
    const alder = document.getElementById('alder').value;
    const kjonn = document.querySelector('input[name="kjonn"]:checked').value;
    const interesserSelect = document.getElementById('interesser');
    const interesser = Array.from(interesserSelect.selectedOptions).map(option => option.value);

    const farge = document.getElementById('farge').value;
    console.log('E-post:', email);
    console.log('Alder:', alder);
    console.log('Kjønn:', kjonn);
    console.log('Interesser:', interesser);
    console.log('Favorittfarge:', farge);
});
```

Som du ser, så er det stort sett bare å hente ut `.value` fra de forskjellige input-feltene. For radioknappene bruker vi `document.querySelector()` for å finne den valgte knappen i gruppen.

Den mest avanserte delen i eksempelet over er hvordan vi håndterer interesser-feltet, som er en nedtrekksmeny med mulighet for flere valg. Vi bruker `selectedOptions`-egenskapen for å hente ut de valgte alternativene, og deretter konverterer vi dette til et vanlig array med `Array.from()` og `map()`.

En nærmere forklaring på map-funksjonen: Den tar hvert element i arrayet (i dette tilfellet hvert valgt alternativ) og returnerer verdien (`option.value`) for hvert av dem, som vi samler i et nytt array kalt `interesser`.

### Valgfri, avansert teknikk: Hente ut data fra flere input-felt

Når vi har et skjema med flere input-felt, må vi kunne hente ut verdiene fra disse feltene når skjemaet sendes inn. Vi kan gjøre dette ved å bruke `FormData`-objektet i JavaScript.

Her er et eksempel på hvordan vi kan hente ut data fra skjemaet med flere input-felt:

```javascript
const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(skjema);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
});
```

I dette eksempelet oppretter vi en `FormData`-instans fra skjemaet. Deretter bruker vi `Object.fromEntries()` for å konvertere `FormData`-objektet til et vanlig JavaScript-objekt. Nå kan vi enkelt få tilgang til verdiene fra de forskjellige input-feltene ved å bruke `data.email`, `data.alder`, osv.

Denne teknikken er spesielt nyttig når vi har mange input-felt i skjemaet, da vi slipper å hente ut hver enkelt verdi manuelt. Verdiene ligger nå i et objekt som vi kan bruke videre i koden vår.

## Stilsetting av skjemaer

Her er noen eksempler på hvordan du kan style ulike deler av et skjema ved hjelp av CSS. Legg spesielt merke til hvordan du kan style forskjellige input-typer for å forbedre brukeropplevelsen, som ved `input[type="number"]`.

```css
* {
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 0;
}

form {
    max-width: 480px;
    width: 100%;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

label {
    display: block;
    margin-bottom: 8px;
    margin-top: 20px;
    font-weight: 600;
    color: #333;
    font-size: 14px;
}

input[type="email"],
input[type="number"],
select,
input[type="color"] {
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 20px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.3s ease;
    background-color: #fafafa;
}

input[type="email"]:focus,
input[type="number"]:focus,
select:focus {
    outline: none;
    border-color: #667eea;
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Radiobuttons */
input[type="radio"] {
    width: auto;
    margin-right: 8px;
    margin-bottom: 0;
    accent-color: #667eea;
    cursor: pointer;
}

label[for="mann"],
label[for="kvinne"] {
    display: inline;
    font-weight: normal;
    margin-right: 20px;
    margin-bottom: 0;
    cursor: pointer;
}

/* Styling av fleirvalg */
select[multiple] {
    min-height: 120px;
    padding: 8px;
}

select[multiple] option {
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 4px;
}

select[multiple] option:checked {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

/* Color picker */
input[type="color"] {
    height: 50px;
    padding: 4px;
    cursor: pointer;
    border: 2px solid #e0e0e0;
}

input[type="color"]:hover {
    border-color: #667eea;
}

/* Submit button */
button {
    width: 100%;
    padding: 14px;
    margin-top: 10px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}
```