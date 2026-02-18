# Eksempel på spørringer mot fjelltur-databasen

## Oppgave 1

Hent all informasjon om alle turer (fra fjelltur-tabellen).

Løsningsforslag:

```sql
SELECT * FROM fjelltur;
```

## Oppgave 2

Hent tidspunkt, varighet, beskrivelse, fjellnavn og høyde for alle turer.

Løsningsforslag:

```sql
SELECT fjelltur.tidspunkt, fjelltur.varighet, fjelltur.beskrivelse, fjell.fjellnavn, fjell.hoyde 
FROM fjelltur
JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id;
```

## Oppgave 3

Hent det samme som fra oppgave 2, men bare for fjellturer til Fanaråken (fjell_id = 1).

Løsningsforslag:

```sql
SELECT fjelltur.tidspunkt, fjelltur.varighet, fjelltur.beskrivelse, fjell.fjellnavn, fjell.hoyde 
FROM fjelltur
JOIN fjell on fjelltur.fjell_id = fjell.fjell_id
WHERE fjelltur.fjell_id = 1;
```

## Oppgave 4

Tell hvor mange turer det har vært til Fanaråken (fjell_id = 1).

Løsningsforslag:

```sql
SELECT COUNT(*) AS antall_turer
FROM fjelltur
WHERE fjell_id = 1;
```

## Oppgave 5

Tell hvor mange turer det har vært totalt i 2025 for seg, og 2026 for seg.

Løsningsforslag:

```sql
SELECT *
FROM fjelltur
WHERE strftime('%Y', fjelltur.tidspunkt) = '2025';

SELECT *
FROM fjelltur
WHERE strftime('%Y', fjelltur.tidspunkt) = '2026';
```

## Oppgave 6

Tell hvor mange turer hver person har gått. Vis fornavn og "antall_turer". NB: Antall turer er ikke et eget felt, så du må telle dette ved hjelp av en spørring.

Løsningsforslag:

```sql
SELECT person.fornavn, COUNT(fjelltur.fjell_id) AS antall_turer
FROM person 
LEFT JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
GROUP BY person.brukernavn;
```

## Oppgave 7

Tell hvor mange turer en gitt person har gått. Du kan bruke brukernavnet "hausnes" for å hente dette.
Løsningsforslag:

```sql
SELECT person.fornavn, COUNT(fjelltur.fjell_id) AS antall_turer
FROM person 
LEFT JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
WHERE person.brukernavn = 'hausnes';
```

## Oppgave 8

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

## Oppgave 9

Vis all informasjon unntatt brukernavnet om en gitt person.

Løsningsforslag:

```sql
SELECT person.fornavn, person.etternavn, person.epost
FROM person
WHERE brukernavn = 'hausnes';
```