# Kontrollstrukturer

Kontrollstrukturer i JavaScript brukes til å styre flyten av programmet basert på betingelser og gjentakelser. De vanligste kontrollstrukturene inkluderer if-else-setninger, switch-setninger og løkker som for, while og do-while.

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

Dersom du har flere altarnativer, kan du bruke `else if`:

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
Løkker brukes til å gjenta kode flere ganger.

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

for (const v of arr) {
  console.log("value:", v); // "a", "b", "c"
}

for (const i in arr) {
  console.log("index:", i); // "0", "1", "2" (strings)
  console.log("value via index:", arr[i]);
}
```

### forEach-metoden

```js
let studenter = [
    { navn: "Ola", poeng: 85 },
    { navn: "Kari", poeng: 92 },
    { navn: "Per", poeng: 78 }
];
studenter.forEach(function(student) {
    console.log(student.navn + " har " + student.poeng + " poeng.");
});
```

Det som er unikt med `forEach` er at den tar en callback-funksjon som kjøres for hvert element i arrayen. For eksempel, i koden over, vil funksjonen bli kalt tre ganger, en gang for hver frukt i arrayen.

Et bedre eksempel på bruk av `forEach` kan være når du ønsker å utføre flere operasjoner for hvert element, som å bygge en liste i brukergrensesnittet, sende data til en server, eller som i eksempelet under, der vi også beregner karakterer basert på poeng.

```js
let studenter = [
    { navn: "Ola", poeng: 85 },
    { navn: "Kari", poeng: 92 },
    { navn: "Per", poeng: 78 }
];

studenter.forEach(function(student) {
    console.log(student.navn + " har " + student.poeng + " poeng.");
    // Her kan du legge til flere operasjoner, som å oppdatere UI eller sende data til en server
    let grade = student.poeng >= 90 ? 'A' : student.poeng >= 80 ? 'B' : student.poeng >= 70 ? 'C' : 'F';
    console.log("Karakter: " + grade);
});
```

Du kan se et mer avansert eksempel på forEach på bunnen av denne siden: [avansert forEach eksempel](#bonus-mer-avansert-eksempel-om-forof-med-await)

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

Det som er spesielt med do-while-løkken er at koden inni løkken alltid kjøres minst én gang, siden betingelsen sjekkes etter at koden er kjørt.

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

## Bonus, mer avansert eksempel om for...of med await

```js
// Eksempeldata
const students = [
    { name: "Ola", score: 87 },
    { name: "Kari", score: 72 },
    { name: "Ali", score: 94 },
    { name: "Eva", score: 66 }
];

function computeGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// Aggregat for å telle fordeling av karakterer
const gradeDistribution = {};

// Anta at <tbody id="students-body"></tbody> finnes i DOM
const tbody = document.getElementById("students-body");

// forEach for side-effekter: kalkulerer karakter, bygger rad i UI, sender analytics (fire-and-forget)
students.forEach((student, index, array) => {
    const grade = computeGrade(student.score);

    // Akkumulere fordeling
    gradeDistribution[grade] = (gradeDistribution[grade] || 0) + 1;

    // Bygge og legge til en tabellrad (DOM-side-effekt)
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.score}</td>
    <td>${grade}</td>
    `;
    tbody.appendChild(tr);

    // Sende analytics uten å vente (fire-and-forget)
    fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: student.name, grade })
        }).catch(err => {
            // Håndter feil lokalt, men ikke stopp resten av forEach
            console.warn("Analytics-feil for", student.name, err);
    });
});

console.log("Karakterfordeling:", gradeDistribution);
```

Hvis du trenger å vente sekvensielt på async kall, bruk:

```js
// Sekvensiell asynkron behandling: bruk for...of med await
for (const student of students) {
  await sendAnalytics(student); // venter per student
}
```