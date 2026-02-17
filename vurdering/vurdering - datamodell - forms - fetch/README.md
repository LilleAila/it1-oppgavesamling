# Prøve i IT1, del 2: Praktisk programmering

Se engelsk versjon av oppgaven [her](./README_en.md).

- `Dato`: Fredag, 13. februar, 2026
- `Tid`: 08.15 - 10.20 (siste 5 minutt brukes til å levere inn.)
- `Hjelpemiddel`: Alle, med **unntak av** KI, chatbots eller andre som skriver kode for deg. Oppgi kilder der du bruker de i koden.

Anbefalt tid:
- Oppgave 1: 20 minutter.
- Oppgave 2: 55 minutter.
- Bruk de siste 5 minuttene på å se til at du får levert inn alt arbeidet ditt.

## Oppgave 1 (10 poeng)

Du skal lage et skjema som lar brukeren registrere seg for et arrangement.

Dersom brukeren har en rabattkode, skal hen fylle ut koden på en egnet måte i skjemaet, og få rabattert pris. Denne koden må sjekkes for om den samsvarer med en av kodene som ligger i en array som inneholder godkjente koder.

Lag et skjema/form som inneholder følgende elementer:
- Tekstfelt for "Fornavn"
- Tekstfelt for "Etternavn"
- E-postfelt for "E-post"
- Passordfelt for "Passord"
- Tekstfelt for "Rabattkode"

Når skjemaet sendes inn, skal det vises en melding som sier "Takk for din registrering, [Fornavn]!" der [Fornavn] erstattes med det brukeren skrev inn i fornavn-feltet. 

Det skal også eventuelt vises en melding som sier "Du har oppgitt en rabattkode og får en rabattert pris", dersom brukeren gjorde dette, og hadde en godkjent kode.

Krav til høy måloppnåelse:
- Bruker `form` og `input`-elementer for å lage skjemaet på korrekt måte, med passende `type`-attributter for de ulike feltene
- Validering av rabattkode mot en array med godkjente koder
- Bruk av JavaScript for å håndtere innsendelse av skjemaet og vise meldinger basert på brukerens input
- God struktur i koden, med bruk av funksjoner for å skille funksjonalitet

## Oppgave 2 (20 poeng)

Du skal bruke API-en "An API of Ice and Fire" (https://anapioficeandfire.com/) for å hente og vise informasjon om bøkene. 

### 2.1 - Grunnleggende krav:
- Vis følgende informasjon om hver bok tilhørende de ulike bøkene i serien "A Song of Ice and Fire" i en liste på nettsiden:
    - Navnet på boken (`name`)
    - Utgivelsesdato (`released`)
    - Antallet sider (`numberOfPages`)

For å gjøre dette trenger du å bruke URL-en `https://www.anapioficeandfire.com/api/books` for å hente informasjon om bøkene. Du kan bruke JavaScript (fortrinnsivs vha. `fetch`) for å hente data fra API-en, og deretter manipulere DOM for å vise informasjonen på nettsiden. Dersom du får problemer med å hente data fra API-en av ulike grunner, kan du bruke JSON-filen [books.json](./books.json) som ligger i mappen for prøven, som inneholder samme data som API-en ville gitt deg.

### 2.2 - Avansert krav:
- Vis til å begynne med bare boktitlene i en liste på nettsiden.
- Når brukeren klikker på en boktittel, skal det vises mer informasjon om den boken, inkludert navnet på boken, utgivelsesdato og antallet sider. Du kan eventuelt vise som standard det du gjorde i 2.1, og så i denne deloppgaven legge til  informasjon om `mediaType` og `ISBN`.

### 2.3 - Krav til høy måloppnåelse:
- Bruk av JavaScript for å hente data fra API-en og vise det på nettsiden (primært med `fetch`)
- Bruk av createElement og appendChild for å bygge opp innholdet i DOM
- God struktur i koden, med bruk av funksjoner for å skille funksjonalitet (hente, vise), med kommentarer som forklarer hva de ulike delene av koden gjør
- Dynamisk oppdatering av innholdet på nettsiden basert på brukerinteraksjon (klikk på boktitler)

## Innlevering

Last opp en zip-fil med **alle filene** fra besvarelsen din på Teams (egen innlevering). 

Det skal være tydelig navn på elev i mappen og zip-filen.