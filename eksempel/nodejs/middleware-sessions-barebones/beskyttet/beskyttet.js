// Lar brukeren kunne logge ut
const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', async () => {
    const response = await fetch('/api/logout', {
        method: 'POST'
    });
    if (response.ok) {
        window.location.href = '/';
    }
    else {
        alert('Noe gikk galt ved utlogging');
    }
});

//  Viser persondataene på "Min side"  
async function hentBrukerData() {
    const response = await fetch('/api/minside');
    if (response.ok) {
        const data = await response.json();
        const brukerDataDiv = document.getElementById('brukerData');
        brukerDataDiv.innerHTML = `
            <p>ID: ${data.bruker.id}</p>
            <p>Fornavn: ${data.bruker.fornavn}</p>
            <p>Etternavn: ${data.bruker.etternavn}</p>
            <p>Passord: ${data.bruker.passord}</p>
        `;
    } else {
        alert('Kunne ikke hente brukerdata');
    }
}

hentBrukerData();