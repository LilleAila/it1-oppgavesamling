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

        // Opprett bilde (hvis det finnes), og en lenke rundt dette
        if (spel.bilde) {
            const link = document.createElement('a');
            link.href = `spel-detalj.html?id=${spel.id}`;
            
            const img = document.createElement('img');
            img.src = "/bileter/" + spel.bilde;
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
}

visSpel();