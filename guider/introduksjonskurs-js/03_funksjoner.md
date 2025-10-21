# Funksjoner

Funksjoner er blokker med kode som kan gjenbrukes flere ganger. 

Den enkleste formen for en funksjon er en funksjonsdefinisjon etterfulgt av et funksjonskall:

```js
function siHei() {
    console.log("Hei!");
}

siHei(); // Kaller funksjonen
```

En funksjon kan også ta inn parametere og returnere en verdi.
```js
function siHeiTilNavn(navn) {
    console.log("Hei, " + navn + "!");
}

siHeiTilNavn("Ola");
```

De kan ta inn parametere, og **returnere** verdier.

```js
function leggSammen(a, b) {
    return a + b;
}

let resultat = leggSammen(3, 4);
console.log(resultat); // 7
```

Du ser at funksjonen `leggSammen` tar inn to parametere `a` og `b`, og returnerer summen av disse. Når vi kaller funksjonen med `leggSammen(3, 4)`, får vi tilbake verdien `7`, som vi lagrer i variabelen `resultat`.

## Omfang (scope)
Variabler definert inne i en funksjon er kun tilgjengelige innenfor den funksjonen. Dette kalles funksjonens **omfang** (scope).

```js
function testOmfang() {
    let x = 10;
    console.log(x);
}

testOmfang();
console.log(x); // ReferenceError: x is not defined
```

I eksempelet over er variabelen `x` definert inne i funksjonen `testOmfang`, og er derfor ikke tilgjengelig utenfor funksjonen. Forsøket på å logge `x` utenfor funksjonen resulterer i en feil.

## Piler (arrow functions)
En mer moderne og kortere måte å definere funksjoner på er ved å bruke pilfunksjoner (arrow functions):

```js
const siHei = () => {
    console.log("Hei!");
};

siHei();
```

Pilfunksjoner kan også ta inn parametere og returnere verdier på en mer kompakt måte:

```js
const siHeiTilNavn = (navn) => {
    console.log("Hei, " + navn + "!");
};

siHeiTilNavn("Ola");
```

```js
const leggSammen = (a, b) => a + b;

let resultat = leggSammen(3, 4);
console.log(resultat); // 7
```

I eksempelet over ser du at pilfunksjonen `leggSammen` er definert på en enkelt linje, og den returnerer automatisk resultatet av uttrykket `a + b` uten behov for et eksplisitt `return`-statement eller krøllparenteser.

## Anonyme funksjoner og callback-funksjoner
Funksjoner kan også defineres uten navn, kalt anonyme funksjoner. Disse brukes ofte som argumenter til andre funksjoner, kjent som callback-funksjoner.

```js
setTimeout(() => {
    console.log("Dette er en callback-funksjon");
}, 1000);
```

I eksempelet over bruker vi `setTimeout`-funksjonen, som tar en anonym pilfunksjon som argument. Denne funksjonen vil bli kalt etter 1000 millisekunder (1 sekund).

Du kan også skrive anonyme funksjoner med den tradisjonelle funksjonssyntaksen:

```js
setTimeout(function() {
    console.log("Dette er en callback-funksjon");
}, 1000);
```

## Oppsummering
- Funksjoner er blokker med kode som kan gjenbrukes.
- De kan ta inn parametere og returnere verdier.
- Variabler definert inne i en funksjon er kun tilgjengelige innenfor den funksjonen (omfang/scope).
- Pilfunksjoner (arrow functions) gir en kortere syntaks for å definere funksjoner.
- Anonyme funksjoner brukes ofte som callback-funksjoner i andre funksjoner.