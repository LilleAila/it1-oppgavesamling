## DOM = Document Object Model
DOM er en representasjon av HTML-dokumentet som et tre av noder (elementer). JavaScript kan bruke DOM til å lese og endre innhold og struktur på en nettside.

DOM-en for en HTML-side bygges automatisk av nettleseren når siden lastes. JavaScript kan deretter manipulere denne strukturen ved å legge til, fjerne eller endre elementer og deres egenskaper.

Eksempel på HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Min side</title>
</head>
<body>
    <h1 id="header">Velkommen til min side</h1>
    <div id="utskrift"></div>
    <nav>
        <ul>
            <li><a href="#home">Hjem</a></li>
            <li><a href="#about">Om oss</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul>
    </nav>
</body>
</html>
```

I HTML-eksemplet over har vi et `<h1>`-element med id "header", en `<div>` med id "utskrift", og en `<nav>` med en liste over lenker. Alle disse er barn av `<body>`-elementet i DOM-treet. Dette kan vi illustrere slik:

``` 
- html
  - head
    - title
  - body
    - h1 (id="header")
    - div (id="utskrift")
    - nav
      - ul
        - li
          - a
        - li
          - a
        - li
          - a
        - li
          - a
```

JavaScript kan samhandle med DOM for å endre teksten i overskriften eller legge til innhold i `<div id="utskrift">`.

```js
let header = document.getElementById('header'); // finner element med id="header"
header.innerText = "Ny overskrift!"; // endrer teksten i elementet
```

I tillegg til document.getElementById, finnes det flere måter å velge elementer i DOM på, som `document.getElementsByClassName`, `document.getElementsByTagName`, og de mer moderne `document.querySelector` og `document.querySelectorAll`. Det anbefales å bruke `querySelector` og `querySelectorAll` for både en mer fleksibel og 'kraftfull' seleksjon av elementer.

Et eksempel på bruk av querySelector er `document.querySelector('#utskrift')` som finner elementet med id "utskrift". Et mer avansert eksempel på en selector er `document.querySelector('nav ul li a')`, som finner det første `<a>`-elementet inne i en `<li>`, som er inne i en `<ul>`, som er inne i en `<nav>`.

Du kan også finne alle elementer som matcher en selector med `document.querySelectorAll('.klasseNavn')`, som returnerer en liste av alle elementer med klassen "klasseNavn". Et eksempel på dette:

```js
let lenker = document.querySelectorAll('nav ul li a'); // finner alle lenker i navigasjonsmenyen

// lenker er en NodeList som kan itereres over (se egen guide om løkker)
for (const lenke of lenker) {
  console.log(lenke.href); // skriver ut href-attributtet til hver lenke
}
```

## Variabler

I JavaScript bruker vi vanligvis `let` og `const` for å erklære variabler:

- `const` — for konstanter (verdi som ikke endres). Bruk når verdien ikke skal settes om.
- `let` — for variabler som kan endres senere.

Eksempel:

```js
const PI = 3.14159;
let navn = "Jo Bjørnar";
let alder = 17;
```

Tips om navngivning: bruk camelCase (f.eks. `antallBarn`, `minVariabel`) og beskrivende navn.

## Utskrift / logging

Unngå `document.write()` i moderne kode — det er lite fleksibelt og kan overskrive siden. Bruk heller:

- `console.log(...)` for utviklerlogg i konsollen, med flere varianter som `console.error()`, `console.warn()`, og `console.table()`.
- `document.getElementById('id').innerText`, eller `.textContent` for å vise tekst i DOM. Eventuelt `innerHTML` for HTML-innhold.
- `document.querySelector('nav').innerText` som et kraftigere alternativ til `getElementById`.

Eksempel:

```js
let pris = 43.99;
console.log('Prisen er ' + pris + ' kr.');
// eller med template literals
console.log(`Prisen er ${pris} kr.`);

// vise i en side (forutsetter <div id="utskrift"></div> i HTML)
document.getElementById('utskrift').innerText = `Prisen er ${pris} kr.`;
```

## Datatyper

Noen vanlige datatyper i JavaScript:

- Number: både heltall og desimaler (f.eks. `3` og `3.14`)
- String: tekst, enten med doble eller enkle anførselstegn (`"tekst"` eller `'tekst'`)
- Boolean: `true` eller `false`
- Null: representerer "ingen verdi" (`null`)
- Undefined: variabel uten verdi (`undefined`)
- Object: samling av nøkkel-verdi-par (f.eks. `{ navn: "Jo", alder: 17 }`)
- Array: liste av verdier (f.eks. `[1, 2, 3]`)

Eksempler og tekst-manipulasjon:

```js
let navn = "Jo Bjørnar";
console.log(navn[0]); // 'J'
console.log(navn.indexOf('J')); // 0
console.log(navn.indexOf('å')); // -1 (ikke funnet)
console.log(navn.toLowerCase()); // 'jo bjørnar'
console.log(navn.toUpperCase()); // 'JO BJØRNAR'
console.log(navn.length); // antall tegn, f.eks. 10
console.log(navn.substring(0, 2)); // 'Jo' (fra indeks 0 til 2, ikke inkludert 2)

let over18 = true;
```

Merk: strings er immutable — du kan ikke gjøre `navn[0] = 'J'` for å endre et tegn.

## Operatorer og regneoperasjoner

Grunnleggende aritmetikk:

```js
let sum = 4 + 8;
let differanse = 9 - 6;
let produkt = 8 * 7;
let kvotient = 15 / 3;
```

Operatorer for å oppdatere variabler:

- `+=`, `-=`, `*=`, `/=` (f.eks. `a += 3` betyr `a = a + 3`)
- `++` og `--` for å øke eller minke med 1 (`a++`, `a--`)

Parenteser styrer rekkefølgen av operasjoner:

```js
let antallBarn   = 8;
let antallVoksne = 8;
let brusPerGjest = 2;
let antallBrusFeil   = antallBarn + antallVoksne * brusPerGjest; // 8 + 8*2 = 24
let antallBrusRiktig = (antallBarn + antallVoksne) * brusPerGjest; // (8+8)*2 = 32
```

Tabell (kort oversikt):

- `+` addisjon
- `-` subtraksjon
- `*` multiplikasjon
- `/` divisjon
- `%` modulus (rest)
- `++` inkrement
- `--` dekrement

## Inkrement og dekrement (eksempler)

```js
let antallLiv = 100;
antallLiv = antallLiv - 1; // 99
antallLiv -= 1;            // 98
antallLiv--;               // 97

antallLiv = antallLiv + 1; // 98
antallLiv += 1;            // 99
antallLiv++;               // 100
```

Vær klar over pre- og post-inkrement når det brukes i uttrykk:

```js
let a = 5;
console.log(a++); // skriver 5, så a blir 6
console.log(++a); // a blir 7, skriver 7
```

## Modulus (rest)

`a % b` gir resten når `a` deles på `b`:

```js
let rest1 = 9 % 3; // 0
let rest2 = 8 % 3; // 2
```

Brukes ofte for å sjekke om et tall er partall/oddetall (`n % 2 === 0` betyr partall).

## typeof

Av og til kan det være nyttig å sjekke datatypen til en verdi.

`typeof` gir oss dette:

```js
let tekst = "litt tekst";
console.log(typeof tekst); // 'string'
let tall  = 17;
console.log(typeof tall); // 'number'
let tallString = "17";
console.log(typeof tallString); // 'string'
let arrayBilder = ["bilde1.jpg", "bilde2.jpg"];
console.log(typeof arrayBilder); // 'object'
console.log(typeof 3.14); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof {navn: "Jo", alder: 17}); // 'object'
```

Som du ser så blir arrays og objekter begge rapportert som 'object' av `typeof`. For å sjekke om noe er en array, bruk `Array.isArray()`:

```js
console.log(Array.isArray(arrayBilder));  // true
console.log(Array.isArray(tekst));        // false
```

## Konvertere mellom string og number

Noen nyttige funksjoner:

- `Number.isInteger(x)` — sjekker om `x` er et heltall
- `parseInt(str)` — konverterer en streng til heltall (stopper ved første ikke-siffer)
- `parseFloat(str)` — konverterer en streng til flyttall
- `parseInt(str, base)` — kan tolke strenger i forskjellige baser (f.eks. base 2 for binært, base 16 for heksadesimalt)
- `Number(str)` — konverterer hele strengen til et tall eller `NaN` hvis ugyldig

Eksempler:

```js
let tall = 3.14;
console.log('tall er eit heiltal: ' + Number.isInteger(tall)); // false
tall = parseInt(tall);
console.log('tall er eit heiltal: ' + Number.isInteger(tall)); // true (3)

let bin = '1011';
console.log(parseInt(bin, 2)); // 11

console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('3. 14')); // 3 (stopp på mellomrom)

console.log(Number('3.14')); // 3.14
console.log(Number('abc')); // NaN
```