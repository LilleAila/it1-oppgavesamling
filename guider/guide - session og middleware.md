# Sessions og middleware

## Eksempelprosjekt

Vi tar utgangspunkt i en app som håndterer brukere og bilene deres.

[Se komplett kode](../eksempel/nodejs/bil-session-middleware/) (NB: Ikke ferdig, og ikke optimalisert)

Eventuelt, [se den gradvise oppbyggingen av dette prosjektet](https://github.com/hausnes/1IMA-2024-2025/tree/main/databaser/bildatabase), der hver fil (`app01.js`, `app02.js` osv.) legger til litt ny funksjonalitet, steg for steg. Her ligger det også videoer som forklarer. 

## Viktige punkter fra eksempelprosjektet

Vi trenger noen nye pakker for å håndtere innlogging, og verifisering. Dette er express-session for å håndtere sessions, bcrypt for å hashe passord. Fra før har vi brukt express for selve webserveren, og better-sqlite3 for databasehåndtering.

Installer med:

```bash
npm install express express-session bcrypt better-sqlite3
```
Vi bruker disse i app.js-filen slik:

```js
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Database = require("better-sqlite3");
```

For å bruke sessions, må vi sette opp en session-middleware i Express-appen vår. Dette gjøres slik:

```js
// Middleware for sessions
app.use(
    session({
        secret: "hemmeligNøkkel", // Bytt til en sikker nøkkel i produksjon
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false } // Sett til true hvis du bruker HTTPS
    })
);
```

Deretter lager vi en enkel middleware-funksjon som sjekker om brukeren er logget inn:

```js
// Middleware for å beskytte sider bak innloggings-mur
function kreverInnlogging(req, res, next) {
    if (!req.session.bruker) {
        return res.redirect("/login.html");
    }
    next();
}
```

Denne funksjonen kan vi bruke på ruter som skal være beskyttet, for eksempel:

```js
// Rute for å hente innlogget bruker (fra session)
app.get("/me", kreverInnlogging, (req, res) => {
    res.json(req.session.bruker); // { id: <personnummer>, fornavn: <navn> }
});
```

..og 

```js
// Rute for å hente bilane til den innlogga brukaren (SQL, returnerer JSON)
app.get("/minebiler", kreverInnlogging, (req, res) => {
    const personnummer = req.session.bruker.id;

    const biler = db.prepare("SELECT * FROM bil WHERE personnummer = ?").all(personnummer);

    res.json(biler);
});

// Rute for å vise minebiler.html (kun for innlogga brukarar)
app.get("/minebiler/html", kreverInnlogging, (req, res) => {
    res.sendFile(__dirname + "/beskytta/minebiler.html");
});
```