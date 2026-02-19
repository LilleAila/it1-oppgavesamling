/* 
    NB!
    Dette er løsningen til Nikolai E. Arildsen
    Litt ekstra kommentarer om details og summary er lagt til av faglærer:
    Details og summary er en veldig fin måte å lage en "skjul/vis" funksjon på, siden det er laget for det formålet.
    Se en nærmere forklaring her: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary
*/

const main = document.querySelector("main") // Bruker main for å legge til elementene i 

function genererBok(bok) { // Funksjon for å generere en bok
    div = document.createElement("details") // Bruker details for å gjøre det lett å vise infoen når noen trykker

    summary = document.createElement("summary"); // summary er eneste som viser før man trykker
    summary.textContent = bok.name;
    
    div.appendChild(summary);
    
    navn = document.createElement("h1"); // h1 for stor tittel etter man har trykket
    navn.textContent = bok.name;
    div.appendChild(navn);
    
    dato = document.createElement("p"); 
    dato.textContent = `Boken ble utgitt ${bok.released}`; 
    div.appendChild(dato);
    
    antallSider = document.createElement("p");
    antallSider.textContent = `Boken har ${bok.numberOfPages} sider`;
    div.appendChild(antallSider);

    tekst = document.createElement("p");
    tekst.textContent = `Boken er skrevet av`;
    div.appendChild(tekst);    

    listeAvForfattere = document.createElement("ul");
    div.appendChild(listeAvForfattere);    

    bok.authors.forEach(forfatter => { // lage en liste med forfattere (selv om det bare er en), siden forfatterene blir gitt som en array
        forfatterElement = document.createElement("li");
        forfatterElement.textContent = forfatter;
        listeAvForfattere.appendChild(forfatterElement);
    }); 

    isbn = document.createElement("p"); // ISBN bare for å legge til mer info om boken
    isbn.textContent = `ISBN: ${bok.isbn}`;
    div.appendChild(isbn);

    main.appendChild(div) // Legg det til på siden
}


async function hentData() { // Henter infoen om bøkene gjennom fetch
    const res = await fetch('https://www.anapioficeandfire.com/api/books');
    const data = await res.json();

    //console.log(data)
    data.forEach(bok => { // gå gjennom alle bøkene og bruk funksjonen generer bok for hvert element
        genererBok(bok)
    });
}

hentData() // Kjører alt
