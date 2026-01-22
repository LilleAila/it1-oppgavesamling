// ORDBOK DATASETT
// Dette datasettet inneholder noen ord med ulike bruksområder (ordklasser), og definisjoner

const ordbok = [
    {
        ord: "tre",
        ordklasser: [
            {
                type: "substantiv",
                definisjon: "en stor plante med stamme og greiner",
                eksempel: "De klatret opp i et høyt tre."
            },
            {
                type: "tallord",
                definisjon: "tallet som kommer etter to og før fire",
                eksempel: "Jeg har tre søstre."
            },
            {
                type: "verb",
                definisjon: "å føre noe gjennom en åpning, eller å sette foten ned",
                eksempel: "Du må tre tråden gjennom nåløyet."
            }
        ],
        popularitet: 22,
        antallBokstaver: 3
    },
    {
        ord: "rett",
        ordklasser: [
            {
                type: "adjektiv",
                definisjon: "som ikke er bøyd, som går den korteste veien",
                eksempel: "Du må tegne en rett linje."
            },
            {
                type: "substantiv",
                definisjon: "en tilberedt porsjon mat",
                eksempel: "Vi fikk servert en deilig rett til middag."
            },
            {
                type: "substantiv",
                definisjon: "lov og domstol, eller det man har krav på",
                eksempel: "Saken skal opp i retten neste uke."
            }
        ],
        popularitet: 92,
        antallBokstaver: 4
    },
    {
        ord: "sky",
        ordklasser: [
            {
                type: "substantiv",
                definisjon: "synlig masse av vanndamp som svever i luften",
                eksempel: "Det var ikke en eneste sky på himmelen."
            },
            {
                type: "adjektiv",
                definisjon: "engstelig, reservert eller redd for mennesker",
                eksempel: "Katten var veldig sky og gjemte seg under sofaen."
            },
            {
                type: "verb",
                definisjon: "å unngå noe eller noen bevisst",
                eksempel: "Han pleier å sky unna vanskelige oppgaver."
            }
        ],
        popularitet: 75,
        antallBokstaver: 3
    },
    {
        ord: "fast",
        ordklasser: [
            {
                type: "adjektiv",
                definisjon: "ikke løs, solid, stabil",
                eksempel: "Bordet står fast på gulvet."
            },
            {
                type: "adjektiv",
                definisjon: "regelmessig, permanent",
                eksempel: "Han har fast jobb."
            }
        ],
        popularitet: 72,
        antallBokstaver: 4
    },
    {
        ord: "løpe",
        ordklasser: [
            {
                type: "verb",
                definisjon: "å bevege seg raskt ved å sette det ene beinet foran det andre i rask rekkefølge",
                eksempel: "Han må løpe for å rekke bussen."
            }
        ],
        popularitet: 95,
        antallBokstaver: 4
    }
];

// Skriv ut det opprinnelige datasettet
console.log("=== ORDBOK DATASETT ===");
console.table(ordbok);

console.log("\n=== LØSNINGSFORSLAG ===\n");

// =====================================
// OPPGAVE 1: filter
// =====================================
console.log("--- OPPGAVE 1: filter ---");
console.log("Filtrer ut alle ord som har 3 eller flere ordklasser");
const ordMed3EllerFlereOrdklasser = ordbok.filter(ord => ord.ordklasser.length >= 3);
console.table(ordMed3EllerFlereOrdklasser);

// =====================================
// OPPGAVE 2: find
// =====================================
console.log("\n--- OPPGAVE 2: find ---");
console.log("Finn det første ordet som har en popularitet over 85");
const popularOrd = ordbok.find(ord => ord.popularitet > 85);
console.log(popularOrd);

// =====================================
// OPPGAVE 3: map
// =====================================
console.log("\n--- OPPGAVE 3: map ---");
console.log("Lag et nytt array som inneholder bare ordene (strengene)");
const bareOrd = ordbok.map(ord => ord.ord);
console.log(bareOrd);

// =====================================
// OPPGAVE 4: map (avansert)
// =====================================
console.log("\n--- OPPGAVE 4: map (avansert) ---");
console.log("Lag et nytt array med objekter: { ord: ..., antallOrdklasser: ... }");
const ordMedAntall = ordbok.map(ord => ({
    ord: ord.ord,
    antallOrdklasser: ord.ordklasser.length
}));
console.table(ordMedAntall);

// =====================================
// OPPGAVE 5: reduce
// =====================================
console.log("\n--- OPPGAVE 5: reduce ---");
console.log("Beregn totalt antall ordklasser for alle ord til sammen");
const totaltAntallOrdklasser = ordbok.reduce((sum, ord) => sum + ord.ordklasser.length, 0);
console.log(`Totalt antall ordklasser: ${totaltAntallOrdklasser}`);

// =====================================
// OPPGAVE 6: reduce (avansert)
// =====================================
console.log("\n--- OPPGAVE 6: reduce (avansert) ---");
console.log("Beregn gjennomsnittlig popularitet for alle ord");
const totalPopularitet = ordbok.reduce((sum, ord) => sum + ord.popularitet, 0);
const gjennomsnittPopularitet = totalPopularitet / ordbok.length;
console.log(`Gjennomsnittlig popularitet: ${gjennomsnittPopularitet.toFixed(2)}`);

// =====================================
// OPPGAVE 7: some
// =====================================
console.log("\n--- OPPGAVE 7: some ---");
console.log("Sjekk om minst ett ord kan brukes som verb");
const harVerb = ordbok.some(ord => 
    ord.ordklasser.some(ordklasse => ordklasse.type === "verb")
);
console.log(`Finnes det minst ett verb? ${harVerb}`);

// =====================================
// OPPGAVE 8: every
// =====================================
console.log("\n--- OPPGAVE 8: every ---");
console.log("Sjekk om alle ord har minst 2 ordklasser");
const alleHarMinst2 = ordbok.every(ord => ord.ordklasser.length >= 2);
console.log(`Har alle ord minst 2 ordklasser? ${alleHarMinst2}`);

// =====================================
// OPPGAVE 9: sort
// =====================================
console.log("\n--- OPPGAVE 9: sort ---");
console.log("Sorter ordene etter popularitet (høyest først)");
const sortertEtterPopularitet = ordbok.slice().sort((a, b) => b.popularitet - a.popularitet);
console.table(sortertEtterPopularitet);

// =====================================
// OPPGAVE 10: Kombinasjon (filter + map)
// =====================================
console.log("\n--- OPPGAVE 10: Kombinasjon (filter + map) ---");
console.log("Filtrer ut ord som kan brukes som adjektiv, og lag et array med bare ordene");
const adjektiver = ordbok
    .filter(ord => ord.ordklasser.some(ordklasse => ordklasse.type === "adjektiv"))
    .map(ord => ord.ord);
console.log(adjektiver);

// =====================================
// OPPGAVE 11: Kombinasjon (filter + reduce)
// =====================================
console.log("\n--- OPPGAVE 11: Kombinasjon (filter + reduce) ---");
console.log("Finn totalt antall bokstaver i alle ord som har popularitet over 80");
const totaltBokstaverIPopulaereOrd = ordbok
    .filter(ord => ord.popularitet > 80)
    .reduce((sum, ord) => sum + ord.antallBokstaver, 0);
console.log(`Totalt antall bokstaver i populære ord: ${totaltBokstaverIPopulaereOrd}`);

// =====================================
// OPPGAVE 12: Avansert (flatMap)
// =====================================
console.log("\n--- OPPGAVE 12: Avansert (flatMap) ---");
console.log("Lag et array med alle definisjoner fra alle ord");

// Løsning 1: Med flatMap (mest elegant)
const alleDefinisjoner1 = ordbok.flatMap(ord => 
    ord.ordklasser.map(ordklasse => ordklasse.definisjon)
);

// Løsning 2: Med map og flat
const alleDefinisjoner2 = ordbok
    .map(ord => ord.ordklasser.map(ordklasse => ordklasse.definisjon))
    .flat();

console.log("Løsning 1 (flatMap):");
console.log(alleDefinisjoner1);

console.log("\nLøsning 2 (map + flat):");
console.log(alleDefinisjoner2);

// =====================================
// BONUSOPPGAVE: Kompleks kombinasjon
// =====================================
console.log("\n--- BONUSOPPGAVE ---");
console.log("Finn hvilken ordklasse som forekommer oftest");
const ordklasseFrekvens = ordbok
    .flatMap(ord => ord.ordklasser)
    .reduce((frekvens, ordklasse) => {
        frekvens[ordklasse.type] = (frekvens[ordklasse.type] || 0) + 1;
        return frekvens;
    }, {});

const mestVanligeOrdklasse = Object.entries(ordklasseFrekvens)
    .sort((a, b) => b[1] - a[1])[0];

console.log("Frekvens per ordklasse:", ordklasseFrekvens);
console.log(`Mest vanlige ordklasse: ${mestVanligeOrdklasse[0]} (${mestVanligeOrdklasse[1]} ganger)`);
