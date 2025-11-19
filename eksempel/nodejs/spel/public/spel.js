async function visSpel() {
    const response = await fetch('/alleSpel');
    const spelData = await response.json();

    for (const spel of spelData) {
        const spelDiv = document.createElement('div');
        spelDiv.classList.add('spel');

        // Opprett tittel
        const h2 = document.createElement('h2');
        h2.textContent = `${spel.tittel} (${spel.aar})`;
        spelDiv.appendChild(h2);

        // Opprett utvikler-paragraf
        const pUtvikler = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = 'Utvikler: ';
        pUtvikler.appendChild(strong);
        pUtvikler.appendChild(document.createTextNode(spel.utvikler));
        spelDiv.appendChild(pUtvikler);

        // Opprett beskrivelse-paragraf
        const pBeskrivelse = document.createElement('p');
        pBeskrivelse.textContent = spel.beskrivelse;
        spelDiv.appendChild(pBeskrivelse);

        // Opprett bilde (hvis det finnes)
        if (spel.bilde) {
            const link = document.createElement('a');
            link.href = `spel.html?id=${spel.id}`;
            
            const img = document.createElement('img');
            img.src = "/bileter/" + spel.bilde;
            img.alt = spel.tittel;
            img.style.cursor = 'pointer';
            
            link.appendChild(img);
            spelDiv.appendChild(link);
        }

        document.querySelector('#spelsamling').appendChild(spelDiv);
    }
}

visSpel();