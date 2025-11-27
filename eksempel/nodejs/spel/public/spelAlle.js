async function visSpel() {
    const response = await fetch('/alleSpel');
    const spelData = await response.json();

    // Fjerner det som ligger der fra før
    const spelsamling = document.getElementById('spelsamling');
    spelsamling.innerHTML = '';

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

        // Opprett bilde (hvis det finnes), og en lenke rundt dette
        if (spel.bilde) {
            const link = document.createElement('a');
            link.href = `spel-detalj.html?id=${spel.id}`;
            
            const img = document.createElement('img');
            if (spel.bilde.startsWith('http://') || spel.bilde.startsWith('https://')) {
                img.src = spel.bilde;
            } else {
                img.src = `/bileter/${spel.bilde}`;
            }
            img.alt = spel.tittel;
            img.style.cursor = 'pointer';
            
            link.appendChild(img);
            spelDiv.appendChild(link);
        }

        // Opprett slette-knapp
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Slett';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', async () => {
            if (confirm(`Er du sikker på at du vil slette "${spel.tittel}"?`)) {
                try {
                    const response = await fetch(`/spel/${spel.id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        spelDiv.remove(); // Fjern fra DOM
                        alert('Spillet ble slettet');
                    } else {
                        alert('Feil ved sletting');
                    }
                } catch (error) {
                    console.error(error);
                    alert('Feil ved sletting');
                }
            }
        });
        spelDiv.appendChild(deleteBtn);

        // Legger alt innholdet inn i "spelsamling"
        document.querySelector('#spelsamling').appendChild(spelDiv);
    }

    // Legg til skjema som siste "kort"
    const skjemaDiv = document.createElement('div');
    skjemaDiv.classList.add('spel'); // Samme styling som spillkort
    skjemaDiv.id = 'legg-til-spel';
    skjemaDiv.innerHTML = `
        <h2>➕ Legg til nytt spel</h2>
        <form id="nytt-spel-skjema">
            <label for="tittel">Tittel:</label>
            <input type="text" id="tittel" name="tittel" required>

            <label for="aar">År:</label>
            <input type="number" id="aar" name="aar" required>

            <label for="utvikler">Utvikler:</label>
            <input type="text" id="utvikler" name="utvikler" required>

            <label for="bilde">Bildefil:</label>
            <input type="text" id="bilde" name="bilde" placeholder="mario.jpg">

            <label for="beskrivelse">Beskrivelse:</label>
            <textarea id="beskrivelse" name="beskrivelse" rows="3" required></textarea>

            <button type="submit">Legg til</button>
        </form>
    `;
    spelsamling.appendChild(skjemaDiv);

    // Legg til event listener på skjemaet
    document.getElementById('nytt-spel-skjema').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        const response = await fetch('/spel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            visSpel(); // Refresh hele lista
        } else {
            alert('Feil ved lagring');
        }
    });
}

visSpel();