# Mange-til-mange-forhold i databaser

Det er egentlig ikke slik at mange-til-mange-forhold (N:M) er "ulovlige" i teorien, men de er teknisk umulige/utfordrende å implementere direkte i en relasjonsdatabase.

Her er et eksempel du kan bruke til å forstå hvorfor vi må splitte dem opp.

## Problemet: Hvor skal vi skrive ned informasjonen?

Tenk deg et klassisk eksempel: **Elever og Fag**.

- En elev har mange fag.
- Et fag har mange elever.

Hvis vi prøver å koble disse direkte i tabellene, møter vi raskt veggen:

### 1. Vi kan ikke legge det i Elev-tabellen

Skal vi lage en kolonne som heter "Fag"? Hva gjør vi når en elev har 5 fag? Vi kan ikke dytte fem verdier inn i én celle (det bryter med prinsippet om "atomære verdier"). Hvis vi lager kolonner som "Fag1", "Fag2", "Fag3", begrenser vi systemet, og det blir et mareritt å søke i.

### 2. Vi kan ikke legge det i Fag-tabellen

Samme problem her. Skal faget "Programmering" ha en liste med 30 elev-ID-er i én celle? Det blir umulig for databasen å sortere, filtrere eller vedlikeholde dataene effektivt.

## Løsningen: Mellomtabellen (Koblingstabellen)

For å løse dette "lovlig", må vi introdusere en tredjepart. Vi lager en mellomtabell som bryter ned det store, uoversiktlige forholdet til to enklere én-til-mange-forhold.

Slik ser logikken ut:

1. En Elev kan finnes mange ganger i Mellomtabellen.
2. Et Fag kan finnes mange ganger i Mellomtabellen.

### Hvorfor er dette bedre?

- **Dataintegritet**: Hver celle inneholder kun én verdi.
- **Fleksibilitet**: Vi kan legge til så mange koblinger vi vil uten å endre på strukturen i Elev- eller Fag-tabellen.
- **Metadata**: Vi kan lagre info om selve relasjonen. For eksempel: Hvilken karakter fikk eleven i akkurat det faget? Den informasjonen hører verken hjemme på eleven eller på faget, men midt i mellom!

---

## Alternativt eksempel

Tenk på en konsertbillett. Du er kunden, og det er en artist. Du kan gå på mange konserter, og artisten har mange fans. Billetten er 'mellomtabellen' – den beviser koblingen mellom akkurat deg og akkurat den konserten.

