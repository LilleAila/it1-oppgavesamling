const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); // Importerer bcrypt, ein pakke for å m.a. hashe passord
const PORT = 3000;

// Middleware for å servere statiske filer fra public-mappen
app.use(express.static('public'));

// Middleware for å parse JSON fra request body
app.use(express.json());

// Databasen
const Database = require('better-sqlite3');
const db = new Database('./brukere.db');
// Opprett tabell dersom den ikkje finst
db.exec(`CREATE TABLE IF NOT EXISTS person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT,
    etternavn TEXT,
    passord TEXT
)`);

// Eksempel på rute som viser deg index.html fra public-mappen (alltid tilgjengelig)
app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.post("/api/leggtilperson", async (req, res) => {
    const { fornavn, etternavn, passord } = req.body;

    // Hash passordet med bcrypt
    const saltRounds = 10; // Antall runder med hashing
    const hashPassord = await bcrypt.hash(passord, saltRounds);

    const stmt = db.prepare("INSERT INTO person (fornavn, etternavn, passord) VALUES (?, ?, ?)");
    const info = stmt.run(fornavn, etternavn, hashPassord);

    res.json({ message: "Ny person lagt til", info });
});

// Starter serveren
app.listen(PORT, () => {
    console.log(`Server køyrer: http://localhost:${PORT}`);
});