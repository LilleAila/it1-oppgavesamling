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

## find
`find` returnerer det første elementet som oppfyller en bestemt betingelse.

```javascript
const personOver30 = personer.find(person => person.alder > 30);
console.table(personOver30);
```

Dette vil gi oss den første personen som er eldre enn 30 år.

## map
`map` brukes til å lage et nytt array ved å transformere hvert element i det opprinnelige arrayet.

```javascript
const navnArray = personer.map(person => person.navn);
console.table(navnArray);
```
Dette vil gi oss et nytt array som inneholder bare navnene på personene.

## reduce
`reduce` brukes til å redusere et array til en enkelt verdi ved å bruke en funksjon som kombinerer elementene.

```javascript
const totalAlder = personer.reduce((sum, person) => sum + person.alder, 0);
console.log(totalAlder);
```

Dette vil gi oss summen av alderen til alle personene i arrayet.

## some
`some` sjekker om minst ett element i arrayet oppfyller en bestemt betingelse.

```javascript
const harVoksen = personer.some(person => person.alder >= 18);
console.log(harVoksen);
```

Dette vil returnere `true` hvis det finnes minst én person som er 18 år eller eldre.

## every
`every` sjekker om alle elementene i arrayet oppfyller en bestemt betingelse.

```javascript
const alleVoksne = personer.every(person => person.alder >= 18);
console.log(alleVoksne);
```

Dette vil returnere `true` bare hvis alle personene er 18 år eller eldre.

## sort
`sort` brukes til å sortere elementene i et array basert på en bestemt kriterie.

```javascript
const sortertEtterAlder = personer.slice().sort((a, b) => a.alder - b.alder);
console.table(sortertEtterAlder);
```

Dette vil gi oss et nytt array sortert etter alder i stigende rekkefølge.
slice brukes her for å lage en kopi av arrayet før sortering, slik at det originale arrayet forblir uendret.