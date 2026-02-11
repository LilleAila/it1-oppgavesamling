async function hentHusinfo() {
    const res = await fetch('./houses.json');
    const data = await res.json();

    // Dette er alle dataene me får frå JSON-fila
    console.log("Her er alle data (console.log(data)):")
    console.log(data);
    
    // Dette er det første navnet som står inne i JSON-fila
    // NB: Legg merke til at me må skrive .hogwarts_houses, fordi det er eit objekt - og under der ligg det ein array!
    console.log("\nHer er resultatet av console.log(data.hogwarts_houses):")
    console.log(data.hogwarts_houses);

    // Sidan me såg i førre steg at det var ein array (beståande av 0 og 1, altså to elementer), kan me til dømes sjå på det første elementet i arrayen, og hente ut namnet på det huset
    console.log("\nHer er resultatet av console.log(data.hogwarts_houses[0]):")
    console.log(data.hogwarts_houses[0]);

    // I førre steg såg me at det var eit objekt som låg inne i kvart array-element, med navna "house_name" og "members" (array).
    console.log("\nHer er resultatet av console.log(data.hogwarts_houses[0].house_name) og for den andre:")
    console.log(data.hogwarts_houses[0].house_name);
    console.log(data.hogwarts_houses[1].house_name);

    // I staden for å berre hente ut eitt og eitt namn som i førre eksempel, kan me bruke ei løkke til å hente ut alle namna i arrayen
    console.log("\nHer er resultatet av løkka som hentar ut alle husa:")
    for (let i = 0; i < data.hogwarts_houses.length; i++) {
        console.log(data.hogwarts_houses[i].house_name);
    }

    // På same måten kan me sjå på medlemmene i eit gitt hus (sjå tilbake på linje 18 for å sjå at "members" er ein array)
    console.log("\nHer er det me ser dersom me kikkar på data.hogwarts_houses[0].members:")
    console.log(data.hogwarts_houses[0].members);

    // Me såg i førre punkt at "members" var ein array, og vidare at deg låg eit objekt som heitte "bio", som igjen hadde "full_name".
    // NB: Denne verkar litt komplisert, men det er berre å følge strukturen i JSON-fila - 
    // hugseregel, dersom det ikkje er ein array, så bruker me punktum (.) for å hente ut data, medan dersom det er ein array, så bruker me klammeparentesar ([]) for å hente ut data.
    console.log("\nHer er resultatet av console.log(data.hogwarts_houses[0].members[0].bio.full_name):")
    console.log(data.hogwarts_houses[0].members[0].bio.full_name);

    // Så, for å slå alt dette saman, og hente ut alle medlemmene i alle husa, kan me bruke to løkker:
    console.log("\nHer er resultatet av to løkker som hentar ut alle medlemmene i alle husa:")
    for (let i = 0; i < data.hogwarts_houses.length; i++) {
        console.log("Medlemmer i " + data.hogwarts_houses[i].house_name + ":");
        for (let j = 0; j < data.hogwarts_houses[i].members.length; j++) {
            console.log("- " + data.hogwarts_houses[i].members[j].bio.full_name);
        }
    }
}

hentHusinfo();