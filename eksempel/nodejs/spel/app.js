// Server-bit, setter opp en Express-app
const express = require('express');
const app = express();

// Databasen
const Database = require('better-sqlite3');
const db = new Database('spel.db');

// Opprett database om den ikke finnes fra før
/*
db.prepare(`
    PRAGMA foreign_keys = on;
    
    CREATE TABLE IF NOT EXISTS spel (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        tittel TEXT NOT NULL, 
        beskrivelse TEXT, 
        aar INTEGER, 
        utvikler TEXT, 
        bilde TEXT
    );

    CREATE TABLE IF NOT EXISTS tag (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        navn TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS spel_har_tag (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        spel_id INTEGER REFERENCES spel (id), 
        tag_id INTEGER REFERENCES tag (id)
    );
`).run();
*/

// Serve statiske filer fra public-mappen
app.use(express.static('public'));

// Legg til body-parsing for skjema/JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Standard rute for å sende spelAlle.html AKA startsiden
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/spelAlle.html');
});

// Eksempel på en rute som henter alle meldingene (og hvem som har skrevet disse, samt tidspunkt)
app.get('/alleSpel', (req, res) => {
    const rows = db.prepare('SELECT * FROM spel ORDER BY tittel ASC').all();
    res.json(rows);
});

// Eksempel på en rute som henter ut et spesifikt spill basert på ID
app.get('/spel/:id', (req, res) => {
    const id = req.params.id;
    const row = db.prepare('SELECT * FROM spel WHERE id = ?').get(id);
    
    if (!row) {
        return res.status(404).json({ error: 'Spillet ble ikke funnet' });
    }
    
    res.json(row);
});

// Rute for å slette et spill
app.delete('/spel/:id', (req, res) => {
    const id = req.params.id;
    const result = db.prepare('DELETE FROM spel WHERE id = ?').run(id);
    
    if (result.changes === 0) {
        return res.status(404).json({ error: 'Spillet ble ikke funnet' });
    }
    
    res.json({ message: 'Spillet ble slettet' });
});

// Åpner en viss port på serveren, og starter serveren
app.listen(3000, () => {
    console.log('Server kjører på http://localhost:3000');
});