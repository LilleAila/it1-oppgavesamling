# Sessions og middleware

Sikkerhet er viktig i webapplikasjoner, spesielt når det gjelder håndtering av brukere og deres data. Tre viktige konsepter som vi skal se på for å oppnå dette er **passord og kryptering**, **sessions** og **middleware**.

Oversikten for denne guiden er som følger:
- [Eksempelprosjekt](#eksempelprosjekt)
- [Viktige punkter fra eksempelprosjektet](#viktige-punkter-fra-eksempelprosjektet)
  - [Nødvendige pakker](#nødvendige-pakker)
  - [Passord-hashing med bcrypt](#passord-hashing-med-bcrypt)
  - [Sessions og middleware](#sessions-og-middleware-1)
  
## Eksempelprosjekt

Vi tar utgangspunkt i en app som håndterer brukere og bilene deres.

[Se komplett kode](../eksempel/nodejs/bil-session-middleware/) (NB: Ikke ferdig, og ikke optimalisert)

Eventuelt, [se den gradvise oppbyggingen av dette prosjektet](https://github.com/hausnes/1IMA-2024-2025/tree/main/databaser/bildatabase), der hver fil (`app01.js`, `app02.js` osv.) legger til litt ny funksjonalitet, steg for steg. Her ligger det også videoer som forklarer. 

## Viktige punkter fra eksempelprosjektet

### Nødvendige pakker

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

### Passord-hashing med bcrypt

Når vi lagrer passord i databasen, skal vi aldri lagre dem som ren tekst. I stedet hasher vi dem med `bcrypt`. Etter at koden under kjører, så vil databasen inneholde en hashet versjon av passordet.

```js
// Rute for å legge til person (SQL)
app.post("/leggtilperson", async (req, res) => {
    const { personnummer, fornavn, etternavn, postnummer, passord } = req.body;

    // Hash passordet med bcrypt
    const saltRounds = 10; // Antall runder med hashing
    const hashPassord = await bcrypt.hash(passord, saltRounds);

    const stmt = db.prepare("INSERT INTO person (personnummer, fornavn, etternavn, postnummer, passord) VALUES (?, ?, ?, ?, ?)");
    const info = stmt.run(personnummer, fornavn, etternavn, postnummer, hashPassord);

    res.json({ message: "Ny person lagt til", info });
});
```

Denne blir brukt av innloggings-ruten for å verifisere passordet:

```js
// Rute for innlogging
app.post("/login", async (req, res) => {
    const { fornavn, passord } = req.body;

    const bruker = db.prepare("SELECT * FROM person WHERE fornavn = ?").get(fornavn);
    if (!bruker) {
        return res.status(401).json({ message: "Feil fornavn eller passord" });
    }

    const passordErGyldig = await bcrypt.compare(passord, bruker.passord);
    if (!passordErGyldig) {
        return res.status(401).json({ message: "Feil fornavn eller passord" });
    }

    // Lagre brukerdata i session
    req.session.bruker = { id: bruker.personnummer, fornavn: bruker.fornavn };
    res.json({ message: "Innlogging vellykket", redirect: "/dashboard" });
});
```

For brukeren så er det selve nettsiden som er det synlige innholdet, men som du ser så bruker vi denne ruten for å logge inn brukeren i bakgrunnen. I filen `login.html` ligger denne koden, som altså bruker login-ruten over:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logg inn</title>
    <link rel="stylesheet" href="css/login.css">
    <script>
        async function loggInn(event) {
            event.preventDefault();

            const fornavn = document.getElementById("fornavn").value;
            const passord = document.getElementById("passord").value;

            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fornavn, passord })
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                // window.location.href = "/beskyttet"; // Tidlegare testkode for å sjekke innlogging
                window.location.href = result.redirect; // Omdiriger til dashboard-sida
            } else {
                alert(result.message);
            }
        }
    </script>
</head>
<body>
    <main>
        <h1>Logg inn</h1>
        <form onsubmit="loggInn(event)">
            <label for="fornavn">Fornavn:</label>
            <input type="text" id="fornavn" name="fornavn" required><br>

            <label for="passord">Passord:</label>
            <input type="password" id="passord" name="passord" required><br>

            <button type="submit">Logg inn</button>
        </form>

        <hr>

        <p>Har du ikke en konto? <a href="/leggtilbruker_public.html">Registrer deg her</a>.</p>
    </main>
</body>
</html>
```

### Sessions og middleware

Sessions lar oss lagre informasjon om brukeren mellom ulike HTTP-forespørsler, slik at vi kan vite om brukeren er logget inn eller ikke.

Middleware er funksjoner som kjører mellom forespørselen og svaret i Express. Vi kan bruke middleware til å sjekke om en bruker er logget inn før vi gir tilgang til visse sider.

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