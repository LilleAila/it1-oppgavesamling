async function visSpelDetalj() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        document.getElementById('spel-container').textContent = 'Ingen spill-ID funnet';
        return;
    }

    try {
        // Hent spilldata fra serveren
        const response = await fetch(`/spel/${id}`);
        
        // Sjekk om responsen er ok
        if (!response.ok) throw new Error('Spillet ble ikke funnet');
        
        // Konverter responsen til JSON
        const spel = await response.json();

        // Vis spilldataene (legger data til i DOM, slik at brukeren kan se dem)
        visSpel(spel);
    } catch (error) {
        console.error(error);
        document.getElementById('spel-container').textContent = 'Feil ved henting av spilldata';
    }
}

// Variabel for å holde styr på om vi er i redigeringsmodus eller visningsmodus
// Som standard er vi i visningsmodus
let redigerModus = false;

function visSpel(spel) {
    const container = document.getElementById('spel-container');
    container.innerHTML = '';

    if (!redigerModus) { // Ikke i redigeringsmodus
        /*
        ----------------------------------------------
        Visningsmodus
        ----------------------------------------------
        */
        const h1 = document.createElement('h1');
        h1.textContent = `${spel.tittel} (${spel.aar})`;
        container.appendChild(h1);

        if (spel.bilde) {
            const img = document.createElement('img');
            img.src = "/bileter/" + spel.bilde;
            img.alt = spel.tittel;
            container.appendChild(img);
        }

        const pUtvikler = document.createElement('p');
        pUtvikler.innerHTML = `<strong>Utvikler:</strong> ${spel.utvikler}`;
        container.appendChild(pUtvikler);

        const pBeskrivelse = document.createElement('p');
        pBeskrivelse.textContent = spel.beskrivelse;
        container.appendChild(pBeskrivelse);

        const redigerKnapp = document.createElement('button');
        redigerKnapp.textContent = 'Rediger';
        redigerKnapp.onclick = () => {
            redigerModus = true;
            visSpel(spel);
        };
        container.appendChild(redigerKnapp);
    } else {
        /*
        ----------------------------------------------
            Redigeringsmodus
        ----------------------------------------------
        */
        const form = document.createElement('form');
        form.id = 'rediger-form';

        // Burde brukt createElement og appendChild her også, men for enkelhets skyld bruker jeg innerHTML
        form.innerHTML = `
            <label for="tittel">Tittel:</label>
            <input type="text" name="tittel" value="${spel.tittel}" required>
            <label for="aar">År:</label>
            <input type="number" name="aar" value="${spel.aar}" required>
            <label for="utvikler">Utvikler:</label>
            <input type="text" name="utvikler" value="${spel.utvikler}" required>
            <label for="bilde">Bilde:</label>
            <input type="text" name="bilde" value="${spel.bilde || ''}">
            <label for="beskrivelse">Beskrivelse:</label>
            <textarea name="beskrivelse" rows="6">${spel.beskrivelse || ''}</textarea>
            <button type="submit">Lagre</button>
            <button type="button" id="avbryt">Avbryt</button>
        `;

        container.appendChild(form);

        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Forhindre standard form-innsending, vi håndterer det selv
            
            // Her samler vi inn dataene fra skjemaet
            // formData er et praktisk verktøy for å hente ut skjema-data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            console.log('Sender oppdaterte data:', data);

            const response = await fetch(`/spel/${spel.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const oppdatertSpel = await response.json();
                redigerModus = false;
                visSpel(oppdatertSpel);
            }
        });

        document.getElementById('avbryt').onclick = () => {
            redigerModus = false;
            visSpel(spel);
        };
    }
}

visSpelDetalj();