// Funksjon for å velge N tilfeldige element fra en array
function velgTilfeldig(array, antall) {
  // Lag en kopi av arrayen slik at vi ikke endrer originalen
  let kopi = [...array];
  
  // Array for å lagre de valgte elementene
  let valgt = [];
  
  // Velg antall tilfeldige element
  for (let i = 0; i < antall; i++) {
    // Generer et tilfeldig indeks-nummer
    let tilfeldigIndeks = Math.floor(Math.random() * kopi.length);
    
    // Hent elementet på den indeksen
    let element = kopi[tilfeldigIndeks];
    
    // Legg det til i valgt-arrayen
    valgt.push(element);
    
    // Fjern elementet fra kopien slik at det ikke velges igjen
    kopi.splice(tilfeldigIndeks, 1);
  }
  
  return valgt;
}

// Funksjon for å parse CSV-data
function parseCsv(csvData) {
  // Del opp teksten i linjer
  let linjer = csvData.trim().split('\n');
  
  // Fjern overskriften (første linje)
  linjer.shift();
  
  // Lag en array for alle brukerne
  let brukere = [];
  
  // Gå gjennom hver linje
  for (let linje of linjer) {
    // Del linjen på semikolon
    let deler = linje.split(';');
    
    // Hent fornavn og etternavn
    let fornavn = deler[4].trim();
    let etternavn = deler[5].trim();
    let navn = fornavn + ' ' + etternavn;
    
    // Legg brukeren til i arrayen
    brukere.push(navn);
  }
  
  return brukere;
}

// Async funksjon som håndterer hele prosessen
async function lastOgVelgBrukere() {
    try {
        // Hent CSV-filen
        let response = await fetch('users.csv');
        let csvData = await response.text();

        // Parse CSV-dataene
        let alleBrukere = parseCsv(csvData);

        // Velg 5 tilfeldige brukere
        let femBrukere = velgTilfeldig(alleBrukere, 5);

        // Vis resultatet i konsollen
        console.log('5 tilfeldige brukere:');
        console.log(femBrukere);

        // Vis resultatet på siden
        let html = '<h2>5 tilfeldige brukere:</h2><ul>';
        for (let navn of femBrukere) {
            html += '<li>' + navn + '</li>';
        }
        html += '</ul>';

        document.querySelector('#resultat').innerHTML = html; // Plasser resultatet i et element med id "resultat"
    } catch (error) {
        console.error('Feil ved lasting av fil:', error);
        document.querySelector('#resultat').innerHTML = '<p style="color: red;">Feil ved lasting av fil</p>';
    }
}

// Kjør funksjonen når siden har lastet
lastOgVelgBrukere();