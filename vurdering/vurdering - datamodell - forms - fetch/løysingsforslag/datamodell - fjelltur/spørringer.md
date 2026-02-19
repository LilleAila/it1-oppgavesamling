# Eksempel på spørringer mot fjelltur-databasen

## Tips og hjelp til oppgavene

### Småtips

- Bruk alltid **semikolon (;)** for å avslutte SQL-setninger
- **STORE BOKSTAVER** for SQL-nøkkelord er tradisjonelt, men ikke påkrevd
- Bruk **--** for kommentarer på én linje
- Bruk **GROUP BY** for å gruppere resultater basert på et felt

### Forskjeller mellom JOIN-typer

NB: Når du kommer til oppgaver som begynner å bruke JOIN, LEFT JOIN, INNER JOIN og ev. andre varianter, så kan du komme tilbake til denne forklaringen:

1. `INNER JOIN` (og bare `JOIN`):

    I SQLite er `JOIN` og `INNER JOIN` det samme.

    Hva den gjør: Den henter bare rader der det finnes en match i begge tabellene.

    I ditt tilfelle: Hvis du har en person ("Visjo") som nettopp har registrert seg, men ikke har gått noen turer ennå, vil Visjo forsvinne helt fra resultatlisten. Hen blir ikke talt som 0; hen blir rett og slett ikke med i oversikten.

2. `LEFT JOIN` (eller `LEFT OUTER JOIN`):

    Hva den gjør: Den henter alle rader fra den venstre tabellen (person), uavhengig av om de har en match i den høyre tabellen (fjelltur).

    I ditt tilfelle: Hvis "Visjo" ikke har gått noen turer, vil hen likevel dukke opp i listen. Feltet for fjell_id vil være tomt (NULL), og COUNT vil telle dette som 0.

## Oppgave 1

Hent all informasjon om alle fjellene.

Løsningsforslag:

```sql
SELECT * FROM fjell;
```

## Oppgave 2

Hent bare fjellnavn og høyde for alle fjellene.

Løsningsforslag:

```sql
SELECT fjellnavn, hoyde FROM fjell;
```

## Oppgave 3

Hent bare fjellnavn og høyde for alle fjellene som er høyere enn 2000 meter.
Løsningsforslag:

```sql
SELECT fjellnavn, hoyde FROM fjell
WHERE hoyde > 2000;
```

## Oppgave 4

Hent bare fjellnavn og høyde for alle fjellene som har akkurat samme høyde. **NB: Avansert!**

Løsningsforslag:

```sql
SELECT fjellnavn, hoyde FROM fjell
WHERE hoyde IN (
    SELECT hoyde FROM fjell
    GROUP BY hoyde
    HAVING COUNT(*) > 1
);
```

## Oppgave 5

Hent fjellnavn, høyde og navn på område for alle fjell. NB: Her må du hente informasjon fra både fjell-tabellen og omrade-tabellen.

Løsningsforslag:

```sql
SELECT fjell.fjellnavn, fjell.hoyde, omraade.navn
FROM fjell
JOIN omraade ON fjell.omraade_id = omraade.id;
```

## Oppgave 6

Hent all informasjon om alle turer (fra fjelltur-tabellen).

Løsningsforslag:

```sql
SELECT * FROM fjelltur;
```

## Oppgave 7

Hent tidspunkt, varighet, beskrivelse, fjellnavn og høyde for alle turer.

Løsningsforslag:

```sql
SELECT fjelltur.tidspunkt, fjelltur.varighet, fjelltur.beskrivelse, fjell.fjellnavn, fjell.hoyde 
FROM fjelltur
JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id;
```

## Oppgave 8

Hent det samme som fra oppgave 7, men bare for fjellturer til Fanaråken (fjell_id = 1).

Løsningsforslag:

```sql
SELECT fjelltur.tidspunkt, fjelltur.varighet, fjelltur.beskrivelse, fjell.fjellnavn, fjell.hoyde 
FROM fjelltur
JOIN fjell on fjelltur.fjell_id = fjell.fjell_id
WHERE fjelltur.fjell_id = 1;
```

Husk at du kan lese mer om forskjellige JOIN-typer [øverst i dokumentet](#tips-og-hjelp-til-oppgavene).

## Oppgave 9

Tell hvor mange turer det har vært til Fanaråken (fjell_id = 1).

Løsningsforslag:

```sql
SELECT COUNT(*) AS antall_turer
FROM fjelltur
WHERE fjell_id = 1;
```

## Oppgave 10

Tell hvor mange turer det har vært totalt i 2025 for seg, og 2026 for seg. **NB: Avansert!**

Løsningsforslag:

```sql
SELECT *
FROM fjelltur
WHERE strftime('%Y', fjelltur.tidspunkt) = '2025';

SELECT *
FROM fjelltur
WHERE strftime('%Y', fjelltur.tidspunkt) = '2026';
```

## Oppgave 11

Tell hvor mange turer hver person har gått. Vis fornavn og "antall_turer". NB: Antall turer er ikke et eget felt, så du må telle dette ved hjelp av en spørring.

Løsningsforslag:

```sql
SELECT person.fornavn, COUNT(fjelltur.fjell_id) AS antall_turer
FROM person 
LEFT JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
GROUP BY person.brukernavn;
```

Husk at du kan lese mer om forskjellige JOIN-typer [øverst i dokumentet](#tips-og-hjelp-til-oppgavene).

## Oppgave 12

Tell hvor mange turer en gitt person har gått. Du kan bruke brukernavnet "hausnes" for å hente dette.
Løsningsforslag:

```sql
SELECT person.fornavn, COUNT(fjelltur.fjell_id) AS antall_turer
FROM person 
LEFT JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
WHERE person.brukernavn = 'hausnes';
```

Husk at du kan lese mer om forskjellige JOIN-typer [øverst i dokumentet](#tips-og-hjelp-til-oppgavene).

## Oppgave 13

Vis en liste over alle fjellene som en gitt person har gått. Du kan for eksempel hente alle fjellene som "Jo Bjørnar" har gått.

Løsningsforslag:

```sql
SELECT fjell.fjellnavn
FROM person
JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id
WHERE person.fornavn = 'Jo Bjørnar';
```

Du kan eventuelt hente denne informasjonen basert på noe annet enn fornavn. Hvorfor kan det være viktig, tror du? Hva burde du velge? Korriger koden til å gjøre dette.

Husk at du kan lese mer om forskjellige JOIN-typer [øverst i dokumentet](#tips-og-hjelp-til-oppgavene).

## Oppgave 14

Vis all informasjon unntatt brukernavnet om en gitt person.

Løsningsforslag:

```sql
SELECT person.fornavn, person.etternavn, person.epost
FROM person
WHERE brukernavn = 'hausnes';
```