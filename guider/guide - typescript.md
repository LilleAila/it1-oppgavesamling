# TypeScript

## Anbefalte guider
- [TypeScript offisiell dokumentasjon](https://www.typescriptlang.org/docs/)
- [Beginner's TypeScript](https://www.totaltypescript.com/tutorials/beginners-typescript)

NB: [Se oppgavesamling](#oppgaver) nederst i dette dokumentet.

## Bakgrunn og introduksjon

TypeScript er et programmeringsspråk som bygger på JavaScript ved å legge til statisk typing. Det betyr at du for eksempel kan spesifisere datatyper for variabler, funksjonsparametere og returverdier, noe som kan hjelpe med å fange feil tidlig i utviklingsprosessen.

Vi sier ofte at TypeScript er et "supersett" av JavaScript, fordi all gyldig JavaScript-kode også er gyldig TypeScript-kode. Dette gjør det enkelt å begynne å bruke TypeScript i eksisterende JavaScript-prosjekter.

Du må installere TypeScript først hvis du ikke har gjort det:

```bash
npm install -g typescript
```

Deretter kan du opprette en TypeScript-fil med filendelsen `.ts`. Her er et enkelt eksempel på en TypeScript-fil:

```typescript
let antallLiv: number = 5;
let navn: string = "Spiller1";
console.log(`Antall liv er ${antallLiv}, og navnet er ${navn}!`);
```
For å kunne bruke TypeScript i en nettleser, må koden transpileres (oversettes) til vanlig JavaScript ved hjelp av TypeScript-kompilatoren (`tsc`). Dette kan gjøres via kommandolinjen, eller ved å bruke verktøy som Webpack eller Babel. Eksempel på hva du skriver i terminalen for å kompilere en TypeScript-fil:

```bash
tsc filnavn.ts
```

Etter kompilering vil du få en JavaScript-fil (`filnavn.js`) som kan kjøres i en nettleser, eller et NodeJS-miljø.

Fra eksempelet over kan du se at vi har spesifisert at `antallLiv` er av typen `number` og `navn` er av typen `string`. Dette hjelper TypeScript med å forstå hvilke typer data vi forventer, og gir bedre verktøystøtte og feilmeldinger under utvikling.

## Funksjoner i TypeScript

```typescript
function beregnFødselsår(alder: number): number {
    return new Date().getFullYear() - alder;
}
```

Her kan du se at både parameteren `alder` og returverdien av funksjonen er typet som `number`.

Et annet eksempel, der vi sjekker om en person er voksen vha. alder typet som `number`, og returnerer en boolean-verdi:

```typescript
function erVoksen(alder: number): boolean {
    return alder >= 18;
}
```

## Mer avanserte typer

TypeScript støtter også mer avanserte typer som grensesnitt (interfaces), enums, og generiske typer. 

### Grensesnitt (Interfaces)

```typescript
interface Spiller {
    navn: string;
    alder: number;
    antallLiv: number;
}

let spiller1: Spiller = {
    navn: "Spiller1",
    alder: 25,
    antallLiv: 5
};
```

Dersom du prøver å tilordne en verdi som ikke samsvarer med grensesnittet, vil TypeScript gi en feilmelding.

Et annet eksempel kan være:
```typescript
interface Bil {
    merke: string;
    modell: string;
    aargang: number;
}
let minBil: Bil = {
    merke: "Toyota",
    modell: "Corolla",
    aargang: 2020
};
```

I tillegg til interfaces kan TypeScript også bruke klasser som en måte å definere objekter på.

```typescript
class Bil {
    merke: string;
    modell: string;
    aargang: number;

    constructor(merke: string, modell: string, aargang: number) {
        this.merke = merke;
        this.modell = modell;
        this.aargang = aargang;
    }
}

let minBil = new Bil("Toyota", "Corolla", 2020);
```

### Enums

```typescript
enum Retning {
    Opp,
    Ned,
    Venstre,
    Høyre
}
let minRetning: Retning = Retning.Opp;
console.log(minRetning); // Output: 0
```

Dette eksempelet definerer en enum for retninger, hvor hver retning får en numerisk verdi automatisk. Et konkret bruksområde på dette kan være i spillutvikling for å representere bevegelsesretninger. For eksempel kan du bruke `Retning`-enumet til å styre en spillkarakter basert på brukerinput.

## Oppgaver

### Oppgåve 1 – Humble Bundle-gåver
 
Lag ein enkel app som presenterer nokre spel du har til overs. Desse skal innehalde tittel, produksjonsår, spelcover. Som del av GUI skal det gå an å velje desse spela, til dømes vha. checkbox.

Du skal skrive inn e-posten til vennen som skal motta spela, og deretter gje moglegheita til å ENTEN velje å skrive ein custom-melding («Versågod, eg er glad i deg – her er nokre spel frå meg.»), ELLER ein default message («Your friend just gifted you …»). 

Bruk typar og det du har lært om i kursmaterialet for å bygge ein robust TS-app. Utvid eksempelet til å omfatte meir avanserte konsept etter behov. 

[Løysingsforslag: utvikling-2ikta/ts at main · hausnes/utvikling-2ikta (github.com)](https://github.com/hausnes/utvikling-2ikta/tree/main/ts)

### Oppgåve 2 – Etterlikning av henting frå database

Definer ein «regel» i deloppgåve 1, og bruk denne i alle påhøyrande deloppgåver.

1. Definer eit interface (eller type) for ein brukar, med felta:
   a. id
   b. namn
   c. epost
   d. fødselsdato (typen Date)
2. Lag ein array som skal innehalde ein brukar (NB: følg regel)
3. Definer ein funksjon for å legge til ein brukar, og test denne. addUser … (NB: følg regel)
4. Definer ein funksjon for å hente ein brukar vha. brukar-ID. Korleis definere denne i tilfelle ein ber om ein brukar som ikkje eksisterer? -> getUserById … (NB: følg regel, og handter feil)

[Løysingsforslag: utvikling-2ikta/ts at main · hausnes/utvikling-2ikta (github.com)](https://github.com/hausnes/utvikling-2ikta/tree/main/ts)

### Oppgåve 3 – OOP (objektorientert programmering) og interface

I dei to førre oppgåvene kunne du valt type eller interface om ein annan (begge delar hadde fungert).
I denne oppgåva er det eit krav om at du benyttar interface, fordi du skal arve/utvide.

Du skal lage eit spel og du har to ulike typar karakterar, der dei har eigne, unike eigenskapar.

Konkret oppgåve: 
- Lag eit grunnleggande interface «Character». Eigenskapar name, health og attack. Attack skal bli definert i større detalj når du opprettar ein spesifikk type karakter. Det skal vere ein funksjon som ikkje tek inn parameter, og ikkje returnerer noko (skal berre skrive ut ein tekst vha. console.log).
- Lag eit interface «Warrior» som extends Character. Legg til «weapon».
- Lag eit interface «Mage» som extends Character. Legg til «spell».
- Opprett deretter 1 stk. instans av Warrior, og 1 stk. instans av Mage. Definer attack som hhv. console.log(«Attacking with sword») og ..(«Casting fireball»).
- Test til slutt at begge karakterane kan angripe.


[Løysingsforslag: utvikling-2ikta/ts at main · hausnes/utvikling-2ikta (github.com)](https://github.com/hausnes/utvikling-2ikta/tree/main/ts)