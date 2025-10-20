function søkArtikler() {
    // Hent søkeordet frå input-feltet
    const søkeord = document.getElementById("searchInput").value.toLowerCase();

    // Hent alle artiklar
    const artikler = document.querySelectorAll("article");

    // Gå gjennom kvar artikkel og sjekk om søkeordet blir funne
    let funnet = false;
    artikler.forEach(artikkel => {
        const overskrift = artikkel.querySelector("h2").textContent.toLowerCase();
        const innhold = artikkel.querySelector("p").textContent.toLowerCase();

        // Dersom søkeordet blir funne i overskrifta eller innhaldet
        if (overskrift.includes(søkeord) || innhold.includes(søkeord)) {
            // Rull til artikkelen
            artikkel.scrollIntoView({ behavior: "smooth" });
            artikkel.style.backgroundColor = "#ffff99"; // Markerer artikkelen midlertidig
            funnet = true;

            // Fjern markeringa etter 2 sekund
            setTimeout(() => {
                artikkel.style.backgroundColor = "";
            }, 2000);
        }
    });

    // Dersom ingen treff blei funne, vis ein melding
    if (!funnet) {
        alert("Ingen artikler matchet søket ditt.");
    }
}

document.getElementById("searchButton").addEventListener("click", søkArtikler);