// Henter alle boksene (NB: Dette blir en NodeList, som er veldig lik en array)
let bokser = document.querySelectorAll("div");

// Legger inn en event listener på hver boks
for (let boks of bokser) {
    boks.addEventListener("click", klikk);
}

// Lager en generell funksjon
function klikk(event) {
    alert("Du klikket på boksen med id: " + event.target.id);
}