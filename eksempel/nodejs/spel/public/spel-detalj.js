async function visSpelDetalj() {
    // Hent ID fra URL-parametere
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    console.log('Henter spill med ID:', id);
    console.log('urlParams:', urlParams.toString());

    if (!id) {
        document.getElementById('spel-container').textContent = 'Ingen spill-ID funnet';
        return;
    }

    try {
        const response = await fetch(`/spel/${id}`);
        if (!response.ok) throw new Error('Spillet ble ikke funnet');
        
        const spel = await response.json();
        console.log('Speldata:', spel);
        const container = document.getElementById('spel-container');

        // Opprett tittel
        const h1 = document.createElement('h1');
        h1.textContent = `${spel.tittel} (${spel.aar})`;
        container.appendChild(h1);

        // Opprett bilde (hvis det finnes)
        if (spel.bilde) {
            const img = document.createElement('img');
            img.src = "/bileter/" + spel.bilde;
            img.alt = spel.tittel;
            container.appendChild(img);
        }

        // Opprett utvikler-info
        const pUtvikler = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = 'Utvikler: ';
        pUtvikler.appendChild(strong);
        pUtvikler.appendChild(document.createTextNode(spel.utvikler));
        container.appendChild(pUtvikler);

        // Opprett beskrivelse
        const pBeskrivelse = document.createElement('p');
        pBeskrivelse.textContent = spel.beskrivelse;
        container.appendChild(pBeskrivelse);

    } catch (error) {
        console.error(error);
        document.getElementById('spel-container').textContent = 'Feil ved henting av spilldata';
    }
}

visSpelDetalj();