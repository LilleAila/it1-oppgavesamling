const skjemaNyBruker = document.querySelector("#skjemaNyBruker");

skjemaNyBruker.addEventListener("submit", leggTilPerson);

async function leggTilPerson(event) {
    event.preventDefault(); // Forhindre standard form-innsending

    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const passord = document.getElementById("passord").value;

    alert(fornavn + etternavn + passord);

    const response = await fetch("/api/leggtilperson", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fornavn,
            etternavn,
            passord
        })
    });

    const result = await response.json();
    alert(result.message);
}