# Arrays og objekter

Arrays og objekter er to grunnleggende datatyper i JavaScript som brukes til å lagre samlinger av data.

## Arrays
Et array er en ordnet liste over verdier. Hver verdi i et array har en indeks, som starter på 0.

```js
let frukter = ["eple", "banan", "appelsin"];
console.log(frukter[0]); // "eple"
console.log(frukter.length); // 3
```

Du kan legge til elementer i et array ved å bruke `push`-metoden:

```js
frukter.push("drue");
console.log(frukter); // ["eple", "banan", "appelsin", "drue"]
```

For å iterere over et array, kan du bruke en `for`-løkke eller `forEach`-metoden:

```js
for (let i = 0; i < frukter.length; i++) {
    console.log(frukter[i]);
}
frukter.forEach((frukt) => {
    console.log(frukt);
});
```

## Arrays av arrays (matriser)

Du kan også ha en array av arrays, for eksempel en matrise:

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