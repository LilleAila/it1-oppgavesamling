# Innlogging med Sessions - eksempel

## Om prosjektet

Dette er et enkelt Node.js-prosjekt som demonstrerer bruk av middleware, sessions og passord-hashing med bcrypt. Prosjektet lar brukere registrere seg, logge inn og få tilgang til beskyttede ressurser.

Prosjektet er ment å fungere som en form for mal eller utgangspunkt for å forstå hvordan disse konseptene fungerer i praksis.

## Hvordan kjøre prosjektet

1. Installer avhengigheter:
   ```
   npm install
   ```

2. Start serveren:
   ```
   node app.js
   ```

3. Åpne nettleseren på: `http://localhost:3000`

## Mappestruktur

- **public/** - Filer som alle kan se (før innlogging)
- **beskyttet/** - Filer som krever innlogging
- **app.js** - Serveren med alle ruter
- **brukere.db** - SQLite-databasen (opprettes automatisk)

## Viktige konsepter

### 1. Middleware
Funksjoner som kjører **mellom** request og response:
```javascript
function kreverInnlogging(req, res, next) {
    if (!req.session.bruker) {
        return res.redirect("/");
    }
    next(); // Gå videre til neste middleware/rute
}
```

### 2. Sessions
- Hver bruker får en unik session
- Lagres på serveren
- Nettleseren får en cookie med session-ID

### 3. Bcrypt (passord-hashing)
- Aldri lagre passord i klartekst!
- Bcrypt hasher passordet før lagring
- Kan ikke reverseres, men kan sammenlignes