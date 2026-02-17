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