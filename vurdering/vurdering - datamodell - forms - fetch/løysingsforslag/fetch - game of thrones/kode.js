async function hentBoker() {
    // let res = await fetch("https://www.anapioficeandfire.com/api/books");
    let res = await fetch("books.json");
    let data = await res.json();

    // Etter at vi eventuelt har feilsøkt hentingen av data mm., så kan vi nå gå videre til å vise 
    // dataen i HTML-en. Vi lager en egen funksjon for dette, og sender dataen som argument til denne funksjonen:
    visBoker(data);
}

function visBoker(data) {
    // Lager en overskrift i HTML-en som vi skal fylle med informasjon om bøkene
    let overskrift = document.createElement("h1");
    overskrift.innerText = "Bøker i Game of Thrones-serien";
    document.body.appendChild(overskrift);

    // Lager en liste i HTML-en som vi skal fylle med informasjon om bøkene
    let liste = document.createElement("ul");
    liste.id = "boker";
    document.body.appendChild(liste);

    // Fyller listen med informasjon om bøkene
    for (let i = 0; i < data.length; i++) {
        // Lagrer relevant informasjon i egne variabler for å gjøre det enklere å jobbe med denne informasjonen senere:
        let navn = data[i].name;
        let released = data[i].released;
        let numberOfPages = data[i].numberOfPages;
        let mediaType = data[i].mediaType;
        let isbn = data[i].isbn;

        // Lager et element i HTML-en for hver bok, og legger inn relevant informasjon om boken i dette elementet:
        let element = document.createElement("li");
        // Alternativ 1, som oppfyller deloppgave 2.1:
        // element.innerText = navn + " (" + released + ", " + numberOfPages + " sider)";
        // Alternativ 2, som oppfyller deloppgave 2.2 med en enkel skjule-vise-logikk (CSS):
        // NB: innerHTML må brukes fordi jeg har lagt inn span med en gitt klasse
        element.innerHTML = navn + " <span class='mer_info'>(" + released + ", " + numberOfPages + " sider)</span>"; // 
        document.getElementById("boker").appendChild(element);

        // Deloppgave 2.2, mer avansert tilnærming:
        // Her legger vi til en lyttefunksjon på hvert element,
        // og viser mer informasjon om boken når man klikker på elementet:
        element.addEventListener("click", function() {
            alert("Boktype: " + mediaType + "\nISBN: " + isbn);
        });
    }
}

hentBoker();