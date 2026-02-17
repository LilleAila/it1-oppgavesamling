async function hentBoker() {
    // let res = await fetch("https://www.anapioficeandfire.com/api/books");
    let res = await fetch("books.json");
    let data = await res.json();

    // Alle data (vi ser at det er 10 arrays)
    console.log("Alle data:");
    console.log(data);

    // Vi ser på innholdet i det første elementet i arrayen (og vi ser at det her er et objekt):
    console.log("Den første arrayen (data[0]");
    console.log(data[0]);

    // Siden vi i resultatet fra forrige punkt så at det var et objekt, så forsøker
    // vi å hente ut noe av den relevante informasjonen:
    console.log("Navnet til den første boken (data[0].name), og deretter den andre boken data[1].name:")
    console.log(data[0].name);
    console.log(data[1].name);
    // osv.

    // Nå kan vi hente ut alle bøkene sine titler på en mye bedre måte, vha en løkke
    // Vi tar også med den andre informasjonen vi ble bedt om, nemlig utviklingsår (released) og antall sider (numberOfPages):
    console.log("Vi bruker en løkke for å skrive ut alle navnene på bøkene:");
    for (let i = 0; i < data.length; i++) {
        console.log("- " + data[i].name + " (" + data[i].released + ", " + data[i].numberOfPages + " sider)");
    }
}

hentBoker();