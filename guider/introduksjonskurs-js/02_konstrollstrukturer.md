# Kontrollstrukturer

Kontrollstrukturer i JavaScript brukes til å styre flyten av programmet basert på betingelser og gjentakelser. De vanligste kontrollstrukturene inkluderer valgsetninger (if-else- og switch-setninger), og løkker (for, while, do-while).

## If-else-setninger
If-else-setninger brukes til å utføre kode basert på om en betingelse er sann eller usann.

```js
let tall = 5;

if (tall > 10) {
    console.log("Tallet er større enn 10");
} else {
    console.log("Tallet er 10 eller mindre");
}
```

Merk at du ikke skriver en test for `else`, siden `else` fanger opp alle andre tilfeller når `if`-betingelsen er falsk.

Dersom du har flere alternativer, kan du bruke flere `else if` etter hverandre:

```js
let tall = 7;

if (tall > 10) {
    console.log("Tallet er større enn 10");
} else if (tall === 10) {
    console.log("Tallet er lik 10");
} else {
    console.log("Tallet er mindre enn 10");
}
```

Du kan sjekke på flere betingelser samtidig ved å bruke logiske operatorer som `&&` (og) og `||` (eller):

```js
let tall = 5;

if (tall > 0 && tall < 10) {
    console.log("Tallet er mellom 0 og 10");
}

if (tall < 0 || tall > 10) {
    console.log("Tallet er enten mindre enn 0 eller større enn 10");
}
```

Du kan også møte på den betingede (ternary) operatoren `? :`, som gir en kortere syntaks for enkle if-else-setninger:

```js
let tall = 5;
let resultat = (tall > 10) ? "Større enn 10" : "10 eller mindre";
console.log(resultat); // Skriver "10 eller mindre"
```

## Switch-setninger
Switch-setninger brukes til å velge mellom flere alternativer basert på verdien av en variabel.

```js
let frukt = "eple";

switch (frukt) {
    case "banan":
        console.log("Dette er en banan.");
        break;
    case "eple":
        console.log("Dette er et eple.");
        break;
    default:
        console.log("Ukjent frukt.");
}
```

Merk at 
- hver `case` avsluttes med `break` for å forhindre at koden "faller gjennom" til neste case. 
- `default`-blokken kjøres hvis ingen av de andre casene matcher, noe som fungerer som en "else".

Valget mellom å bruke if-else eller switch avhenger av situasjonen. For få alternativer kan `if-else` være mer lesbart, mens `switch` kan være bedre for mange faste alternativer.

## Løkker
Løkker brukes til å gjenta kode flere ganger. De vanligste typene løkker i JavaScript er for-løkker, while-løkker og do-while-løkker. 

### For-løkke
```js
for (let i = 0; i < 5; i++) {
    console.log("Teller: " + i);
}
```

Eller, dersom du skal iterere over en array:

```js
let frukter = ["eple", "banan", "appelsin"];
for (let i = 0; i < frukter.length; i++) {
    console.log("Frukt: " + frukter[i]);
}
```

### For...of-løkke
```js
let frukter = ["eple", "banan", "appelsin"];
for (let frukt of frukter) {
    console.log("Frukt: " + frukt);
    // NB: Du kan også hente indeksen ved å bruke frukter.indexOf(frukt) hvis nødvendig
}
``` 

### For...in-løkke
```js
let frukter = ["eple", "banan", "appelsin"];
for (let indeks in frukter) {
    console.log("Frukt: " + frukter[indeks]);
}
```

Forskjellen mellom `for...of` og `for...in` er at `for...of` itererer over verdiene i en array, mens `for...in` itererer over indeksene (nøklene).

```js
// Array: for-of gir verdier, for-in gir indekser (som strings)
const arr = ["a", "b", "c"];

for (let v of arr) {
  console.log("value:", v); // "a", "b", "c"
}

for (let i in arr) {
  console.log("index:", i); // "0", "1", "2" (strings)
  console.log("value via index:", arr[i]);
}
```

### forEach-løkke

```js
let studenter = [
    { navn: "Ola", poeng: 85 },
    { navn: "Kari", poeng: 92 },
    { navn: "Per", poeng: 78 }
];
studenter.forEach(function(student) {
    console.log(student.navn + " har " + student.poeng + " poeng.");
});

// Eller med arrow function:
studenter.forEach(student => {
    console.log(`${student.navn} har ${student.poeng} poeng.`);
});

// NB: Det samme kan gjøres med for...of:
for (const student of studenter) {
    console.log(`${student.navn} har ${student.poeng} poeng.`);
};
```

### While-løkke
```js
let i = 0;
while (i < 5) {
    console.log("Teller: " + i);
    i++;
}
```

Vær alltid oppmerksom på at while-løkker kan føre til uendelige løkker hvis betingelsen aldri blir falsk. Husk derfor å oppdatere variabelen som brukes i betingelsen inne i løkken!

### Do-while-løkke
```js
let j = 0;
do {
    console.log("Teller: " + j);
    j++;
} while (j < 5);
```

Det som er spesielt med do-while-løkken er at koden inni løkken alltid kjøres minst én gang, siden betingelsen sjekkes etter at koden er kjørt. Et eksempel på når dette kan være nyttig er når du ønsker å be brukeren om input minst én gang, og deretter fortsette å be om input så lenge visse betingelser er oppfylt.

```js
let input;
do {
    input = prompt("Skriv 'exit' for å avslutte.");
    console.log("Du skrev: " + input);
} while (input !== 'exit');
```

## Bryte ut av løkker

Det kan bli aktuelt å avbryte en løkke før den naturlig avsluttes, når en bestemt betingelse er oppfylt.

Du kan bruke `break` for å avslutte en løkke tidlig, og `continue` for å hoppe over en iterasjon.

```js
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Hopper over 2
    }
    console.log("Teller: " + i);
}  
```

```js
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Avslutter løkken når i er 3
    }
    console.log("Teller: " + i);
}
```

## Oppsummering

Kontrollstrukturer er essensielle for å styre flyten i et program. De lar deg utføre kode basert på betingelser og gjenta kodeblokker flere ganger. 

Ved å mestre if-else-setninger, switch-setninger og ulike typer løkker, kan du lage mer komplekse og dynamiske programmer i JavaScript.