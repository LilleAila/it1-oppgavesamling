const express = require('express');
const app = express();
const port = 3000;

// Rate limiting, for å betre kunne handtere DDoS-angrep
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutt
    max: 100 // maks 100 førespurnader per vindu
});
app.use(limiter);

let besokTeller = 0; // Tellar for antall besøk

// Middleware for å logge kvar førespurnad
app.use((req, res, next) => {
    const clientIP = req.ip; // Hent IP-adressen til klienten
    const requestTime = new Date().toISOString(); // Hent tidspunktet for førespurnaden
    const requestUrl = req.originalUrl; // Hent URL-en som vart forespurt

    // Ignorer forespørsler til /favicon.ico, om ynskjeleg
    // if (requestUrl === '/favicon.ico') {
    //     return next();
    // }

    besokTeller++; // Auk tellaren for antall besøk

    console.log(`Førespurnad mottatt: 
        Tid: ${requestTime}, 
        IP: ${clientIP}, 
        URL: ${requestUrl}, 
        Antall besøk: ${besokTeller}`);

    next(); // Fortsett til neste middleware eller route
});

// Ei enkel route
app.get('/', (req, res) => {
    res.send(`Serveren fungerer! Antall besøk: ${besokTeller}`);
});

// Start serveren
app.listen(port, () => {
    console.log(`Serveren køyrer på http://localhost:${port}`);
});