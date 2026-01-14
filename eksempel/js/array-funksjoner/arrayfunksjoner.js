const personer = [
    { navn: "Ola", alder: 25 },
    { navn: "Kari", alder: 30 },
    { navn: "Per", alder: 20 },
    { navn: "Lise", alder: 35 },
    { navn: "Nina", alder: 15 },
    { navn: "Morten", alder: 17 }
];

// Original array
console.table(personer);

// filter brukes til å lage et nytt array som inneholder alle elementene som oppfyller en bestemt betingelse.
const voksne = personer.filter(person => person.alder >= 18);
console.table(voksne);

// find brukes til å finne det første elementet som oppfyller en bestemt betingelse.
const personOver30 = personer.find(person => person.alder > 30);
console.table(personOver30);

// map brukes til å lage et nytt array ved å transformere hvert element i det opprinnelige arrayet.
const navnArray = personer.map(person => person.navn);
console.table(navnArray);

// reduce brukes til å redusere et array til en enkelt verdi ved å akkumulere resultater basert på hvert element.
const totalAlder = personer.reduce((sum, person) => sum + person.alder, 0);
console.table(`Total alder: ${totalAlder}`);

// some brukes til å sjekke om minst ett element i arrayet oppfyller en bestemt betingelse.
const harVoksen = personer.some(person => person.alder >= 18);
console.log("Finnes det en voksen? " + harVoksen);

// every brukes til å sjekke om alle elementene i arrayet oppfyller en bestemt betingelse.
const alleVoksne = personer.every(person => person.alder >= 18);
console.log("Er alle voksne? " + alleVoksne);

// sort brukes til å sortere elementene i et array basert på en bestemt kriterie.
const sortertEtterAlder = personer.slice().sort((a, b) => a.alder - b.alder);
console.table(sortertEtterAlder);