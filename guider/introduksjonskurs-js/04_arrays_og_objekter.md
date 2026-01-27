# Arrays, objekter og JSON

Arrays og objekter er to grunnleggende datatyper i JavaScript som brukes til å lagre samlinger av data.

1. [Arrays](#arrays-og-manipulering-av-disse)
2. [Gå gjennom en array](#gå-gjennom-en-array)
3. [Arrays av arrays (matriser)](#arrays-av-arrays-matriser)
4. [Objekter](#objekter)
5. [Objekter i en array](#objekter-i-en-array)
6. [JSON (JavaScript Object Notation)](#json-javascript-object-notation)
7. [Arrays og kopiering av disse](#arrays-og-kopiering-av-disse)

## Arrays, og manipulering av disse

En array er en ordnet liste over verdier. Hver verdi i et array har en indeks, som starter på 0.

| Indeks | 0      | 1       | 2        |
|--------|--------|---------|----------|
| Verdi  | "eple" | "banan" | "appelsin" |

```js
let frukter = ["eple", "banan", "appelsin"];
console.log(frukter[0]); // "eple"
console.log(frukter.length); // 3
```

Du kan legge til elementer i et array ved å bruke `push`-metoden, eller ved `unshift`-metoden:

```js
frukter.push("drue");
console.log(frukter); // ["eple", "banan", "appelsin", "drue"]
frukter.unshift("jordbær");
console.log(frukter); // ["jordbær", "eple", "banan", "appelsin", "drue"]
```

Du kan endre et element ved å tilordne en ny verdi til en spesifikk indeks:

```js
frukter[1] = "kiwi";
console.log(frukter); // ["jordbær", "kiwi", "banan", "appelsin", "drue"]
``` 

Du kan fjerne det siste elementet i et array med `pop`-metoden:

```js
frukter.pop();
console.log(frukter); // ["jordbær", "kiwi", "banan", "appelsin"]
```

Du kan fjerne et spesifikt element ved å bruke `splice`-metoden:

```js
frukter.splice(1, 1); // Fjerner 1 element på indeks 1 ("kiwi")
console.log(frukter); // ["jordbær", "banan", "appelsin"]
```

## Gå gjennom en array

For å iterere over en array, kan du bruke ulike former for løkker:

```js
for (let i = 0; i < frukter.length; i++) {
    console.log(frukter[i]);
}

for (let frukt of frukter) {
    console.log(frukt);
}

frukter.forEach((frukt) => {
    console.log(frukt);
});
```

## Arrays av arrays (matriser)

Du kan også ha en array av arrays, som vi kaller en matrise:

```js
let matrise = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrise[0][1]); // 2
console.log(matrise[2][2]); // 9

matrise[2][0] = 10; // Endrer verdien 7 til 10
console.log(matrise[2][0]); // 10
```

## Objekter

Et objekt er en samling av nøkkel-verdi-par. Nøklene er strenger, og verdiene kan være av hvilken som helst datatype.

```js
let person = {
    navn: "Ola",
    alder: 30,
    yrke: "utvikler"
};

console.log(person.navn); // "Ola"
console.log(person.alder); // 30
```

Du kan legge til nye egenskaper til et objekt ved å tilordne en verdi til en ny nøkkel:

```js
person.kommune = "Oslo";
console.log(person.kommune); // "Oslo"
```

For å iterere over egenskapene i et objekt, kan du bruke en `for...in`-løkke:

```js
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

## Objekter i en array

Ofte vil du ha et array som inneholder flere objekter, for eksempel en liste over studenter:

```js
let studenter = [
    { navn: "Ola", poeng: 85 },
    { navn: "Kari", poeng: 92 },
    { navn: "Per", poeng: 78 }
];

for (let student of studenter) {
    console.log(student.navn + " har " + student.poeng + " poeng.");
}
```

## JSON (JavaScript Object Notation)

JSON er et format for å representere strukturerte data som ofte brukes for å sende data mellom en server og en webapplikasjon. JSON ligner på JavaScript-objekter, men har noen regler, som at nøkler må være i doble anførselstegn.

```js
let jsonData = '{"navn": "Ola", "alder": 30, "yrke": "utvikler"}';
let personObjekt = JSON.parse(jsonData);
console.log(personObjekt.navn); // "Ola"
let jsonString = JSON.stringify(personObjekt);
console.log(jsonString); // '{"navn":"Ola","alder":30,"yrke":"utvikler"}'
```

En typisk JSON-fil ser sånn ut (selv om de kan være mer intrikate, med flere nivåer av nestede objekter og arrays):

```json
{
    "studenter": [
        { "navn": "Ola", "poeng": 85 },
        { "navn": "Kari", "poeng": 92 },
        { "navn": "Per", "poeng": 78 }
    ]
}
```

Du kan bruke `JSON.parse()` for å konvertere en JSON-streng til et JavaScript-objekt, og `JSON.stringify()` for å konvertere et JavaScript-objekt til en JSON-streng.

For å gå gjennom en liste av objekter i JSON, kan du bruke en løkke som vist tidligere med arrays av objekter.

```js
for (let student of studenter) {
    console.log(student.navn + " har " + student.poeng + " poeng.");
}
```

## Arrays og kopiering av disse

Aller først, du skal ikke bruke `=` for å kopiere en array eller et objekt i JavaScript. Dette skaper bare en referanse til den originale arrayen/objektet, og endringer i kopien vil påvirke originalen.

```js
let original = [1, 2, 3];
let kopi = original; // Dette er feil for kopiering!
kopi[0] = 10;
console.log(original[0]); // Output: 10 (Originalen er endret!)
```

Du kan lage en grunn kopi (shallow copy) av en array ved å bruke `slice()`, spread-operatoren (`...`), eller `Array.from()`:

```js
let original = [1, 2, 3];
let kopi1 = original.slice();
let kopi2 = [...original];
let kopi3 = Array.from(original);
kopi1[0] = 10;
console.log(original[0]); // Output: 1 (Originalen er urørt!)
```

Når du jobber med arrays av objekter i JavaScript, eller mer komplekse datastrukturer, er det viktig å skille mellom en **grunn kopi (shallow copy)** og en **dyp kopi (deep copy)**.

Hvis du bare kopierer selve arrayen, vil objektene inni fremdeles peke til de samme minneadressene som originalen. Endrer du en egenskap i et objekt i kopien, endres det også i originalen.

Her er de beste måtene å løse dette på:

### 1: structuredClone()

Den moderne og trygge metoden: structuredClone()

Dette er nå den innebygde standarden i moderne nettlesere (og Node.js) for å lage en fullstendig dyp kopi. Den håndterer nestede objekter, arrays, datoer og mer uten problemer.

```js
const original = [{ id: 1, navn: "Ola" }, { id: 2, navn: "Kari" }];

// Lager en fullstendig uavhengig kopi
const kopi = structuredClone(original);

kopi[0].navn = "Per"; 
console.log(original[0].navn); // Output: "Ola" (Originalen er urørt!)
```

### 2: JSON-metoden

Bruke JSON-metoden (kun for enkle objekter)
Denne metoden fungerer bra for enkle objekter uten funksjoner, datoer eller spesielle datatyper. Den konverterer objektet til en JSON-streng og deretter tilbake til et objekt, noe som skaper en dyp kopi.

```js
const original = [{ id: 1, navn: "Ola" }, { id: 2, navn: "Kari" }];
const kopi = JSON.parse(JSON.stringify(original));
kopi[0].navn = "Per";
console.log(original[0].navn); // Output: "Ola" (Originalen er urørt!)
```