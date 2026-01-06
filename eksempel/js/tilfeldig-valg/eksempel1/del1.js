// ---------------
// Steg 1, testing av konsept og ideer
// let navn = ["Benedikte", "Alexander", "Rick", "Jo Bjørnar"];
// let tilfeldigTall = Math.floor(Math.random() * navn.length); 
// let tilfeldigPerson = navn[tilfeldigTall];
// console.log(tilfeldigPerson);
// // Utskrift med flere detaljer
// console.log(tilfeldigPerson + " med tilfeldig indeks lik " + tilfeldigTall + ".");

// ---------------
// Steg 2, velge ut flere personer UTEN at samme person kan bli valgt på nytt

// Arrayen med alle personene
let navn = ["Benedikte", "Alexander", "Rick", "Jo Bjørnar", "Bent", "Trond", "Hilde", "Frode", "Øyvind", "Liam"];
// Arrayen med de utvalgte personene
let utvalgtePersoner = [];

let antallPersonerSomSkalVinne = 2;

for (let i = 0; i < antallPersonerSomSkalVinne; i++) {
    // Velger et tilfeldig tall (som tilsvarer en person i arrayen)
    let tilfeldigTall = Math.floor(Math.random() * navn.length);
    console.log(navn[tilfeldigTall] + " ble den heldige!");
    // Legger til person i utvalgtePersoner, og..
    utvalgtePersoner.push(navn[tilfeldigTall]);
    // ..fjerner deretter personen fra den originale samlingen. 
    navn.splice(tilfeldigTall, 1);
}

// De som ble valgt, ligger i tabellen "utvalgtePersoner"
console.table(utvalgtePersoner)

// De som IKKE ble valgt ligger igjen i tabellen "navn"
console.table(navn);

// ---------------
// Anbefaler en refleksjon over tilfeldigheter vha. Math.random()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
// https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131 
// https://rohitmondal929.medium.com/how-random-is-math-random-af60782ec493