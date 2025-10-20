const express = require('express');
const morgan = require('morgan'); // Importer morgan
const app = express();
const port = 3000;

// Bruk morgan for logging
app.use(morgan('combined')); // 'combined' er eit forhåndsdefinert loggformat

app.get('/', (req, res) => {
    res.send('Serveren fungerer!');
});

app.listen(port, () => {
    console.log(`Serveren køyrer på http://localhost:${port}`);
});