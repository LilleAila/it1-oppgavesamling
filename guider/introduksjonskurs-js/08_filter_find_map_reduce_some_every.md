# Bruksområder for filter, find, map, reduce, some, every og sort

Nå skal vi jobbe videre med arrays i JavaScript. Her er en kort oppsummering av noen av de mest brukte metodene, sammen med eksempler på hvordan de kan brukes i praksis.

Du kan laste ned selve kodefilene fra [eksempelmappen](../../eksempel/js/array-funksjoner/).

Meny:
- [Utgangspunkt](#utgangspunkt)
- [filter](#filter)
- [find](#find)
- [map](#map)
- [reduce](#reduce)
- [some](#some)
- [every](#every)
- [sort](#sort)

## Utgangspunkt
For alle eksemplene nedenfor, la oss starte med et array av objekter som representerer personer:

```javascript
const personer = [
    { navn: "Ola", alder: 25 },
    { navn: "Kari", alder: 30 },
    { navn: "Per", alder: 20 },
    { navn: "Lise", alder: 35 },
    { navn: "Nina", alder: 15 },
    { navn: "Morten", alder: 17 }
];

console.table(personer); // Viser originaldataene i tabellformat
```

## filter
`filter` brukes til å lage et nytt array som inneholder alle elementene som oppfyller en bestemt betingelse.

```javascript
const voksne = personer.filter(person => person.alder >= 18);
console.table(voksne);
```

Dette vil gi oss et nytt array med alle personer som er 18 år eller eldre.

Dette kunne vi gjort uten `filter` ved å bruke en `for`-løkke og en `if`-setning.
```js
const voksneUtenFilter = [];
for (let i = 0; i < personer.length; i++) {
    if (personer[i].alder >= 18) {
        voksneUtenFilter.push(personer[i]);
    }
}
console.table(voksneUtenFilter);
```

Les mer om `filter` hos MDN: [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## find
`find` returnerer det første elementet som oppfyller en bestemt betingelse.

```javascript
const personOver30 = personer.find(person => person.alder > 30);
console.table(personOver30);
```

Dette vil gi oss den første personen som er eldre enn 30 år.

Dette kunne vi også gjort uten `find` ved å bruke en `for`-løkke og en `if`-setning.
```js
let personOver30UtenFind = null;
for (let i = 0; i < personer.length; i++) {
    if (personer[i].alder > 30) {
        personOver30UtenFind = personer[i];
        break; // Stopper løkken når vi finner den første personen
    }
}
console.table(personOver30UtenFind);
```

Les mer om `find` hos MDN: [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## map
`map` brukes til å lage et nytt array ved å transformere hvert element i det opprinnelige arrayet.

```javascript
const navnArray = personer.map(person => person.navn);
console.table(navnArray);
```
Dette vil gi oss et nytt array som inneholder bare navnene på personene.

Dette kunne vi også gjort uten `map` ved å bruke en `for`-løkke.
```js
const navnArrayUtenMap = [];
for (let i = 0; i < personer.length; i++) {
    navnArrayUtenMap.push(personer[i].navn);
}
console.table(navnArrayUtenMap);
```

Les mer om `map` hos MDN: [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## reduce
`reduce` brukes til å redusere et array til en enkelt verdi ved å bruke en funksjon som kombinerer elementene.

```javascript
const totalAlder = personer.reduce((sum, person) => sum + person.alder, 0);
console.log(totalAlder);
```

Dette vil gi oss summen av alderen til alle personene i arrayet.

Dette kunne vi også gjort uten `reduce` ved å bruke en `for`-løkke.
```js
let totalAlderUtenReduce = 0;
for (let i = 0; i < personer.length; i++) {
    totalAlderUtenReduce += personer[i].alder;
}
console.log(totalAlderUtenReduce);
```

Les mer om `reduce` hos MDN: [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## some
`some` sjekker om minst ett element i arrayet oppfyller en bestemt betingelse.

```javascript
const harVoksen = personer.some(person => person.alder >= 18);
console.log(harVoksen);
```

Dette vil returnere `true` hvis det finnes minst én person som er 18 år eller eldre.

Dette kunne vi også gjort uten `some` ved å bruke en `for`-løkke og en `if`-setning.
```js
let harVoksenUtenSome = false;
for (let i = 0; i < personer.length; i++) {
    if (personer[i].alder >= 18) {
        harVoksenUtenSome = true;
        break; // Stopper løkken når vi finner en voksen
    }
}
console.log(harVoksenUtenSome);
```

Les mer om `some` hos MDN: [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## every
`every` sjekker om alle elementene i arrayet oppfyller en bestemt betingelse.

```javascript
const alleVoksne = personer.every(person => person.alder >= 18);
console.log(alleVoksne);
```

Dette vil returnere `true` bare hvis alle personene er 18 år eller eldre.

Dette kunne vi også gjort uten `every` ved å bruke en `for`-løkke og en `if`-setning.
```js
let alleVoksneUtenEvery = true;
for (let i = 0; i < personer.length; i++) {
    if (personer[i].alder < 18) {
        alleVoksneUtenEvery = false;
        break; // Stopper løkken når vi finner en som ikke er voksen
    }
}
console.log(alleVoksneUtenEvery);
```

Les mer om `every` hos MDN: [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## sort
`sort` brukes til å sortere elementene i et array basert på en bestemt kriterie.

```javascript
const sortertEtterAlder = personer.slice().sort((a, b) => a.alder - b.alder);
console.table(sortertEtterAlder);
```

Dette vil gi oss et nytt array sortert etter alder i stigende rekkefølge.
slice brukes her for å lage en kopi av arrayet før sortering, slik at det originale arrayet forblir uendret.

Dette kunne vi også gjort uten `sort` ved å implementere en enkel sorteringsalgoritme som "boble-sortering".

```js
const personerKopi = personer.slice(); // Lag en kopi for å bevare originalen
for (let i = 0; i < personerKopi.length - 1; i++) {
    for (let j = 0; j < personerKopi.length - i - 1; j++) {
        if (personerKopi[j].alder > personerKopi[j + 1].alder) {
            // Bytt plass
            const temp = personerKopi[j];
            personerKopi[j] = personerKopi[j + 1];
            personerKopi[j + 1] = temp;
        }
    }
}

console.table(personerKopi);
```

Les mer om `sort` hos MDN: [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)