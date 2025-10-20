// Hentar ut bileta av stein, saks og papir frå HTML-fila
let img_stein = document.getElementById("stein");
let img_saks  = document.getElementById("saks");
let img_papir = document.getElementById("papir");

// Legg til eventlisteners for å kunne velgje stein, saks eller papir
img_stein.addEventListener("click", velgStein);
img_saks.addEventListener("click", velgSaks);
img_papir.addEventListener("click", velgPapir);

// Skjuler boksen med informasjon om korleis du kan nullstille spelet (starte på nytt)
document.getElementById("resetinformasjon").style.display = "none";

let valgBruker = ""; // Variabel for å lagre om brukeren velger stein, saks eller papir - per nå tom string.
let scoreBruker = 0; // Variabel for å lagre poenga til brukaren
let scoreDatamaskin = 0; // Variabel for å lagre poenga til datamaskina
let rounds = 0; // Variabel for å lagre antall runder som er spelt

function velgStein() { // Denne funksjonen setter brukeren sitt valg til "stein", og sjekkar resultatet
    valgBruker = "stein";
    sjekkResultat();
}

function velgSaks() { // Denne funksjonen setter brukeren sitt valg til "stein" og ...
    valgBruker = "saks";
    sjekkResultat();
}

function velgPapir() { // Denne funksjonen setter brukeren sitt valg til "stein" og ...
    valgBruker = "papir";
    sjekkResultat();
}

function sjekkResultat() {
    // Lar datamaskinen ta eit val
    let valgDatamaskin = Math.floor(Math.random()*3); // Genererer eit tilfeldig tal mellom 0 og 2
    // Overset tal til stein, saks eller papir
    let arrayValg = ["stein","saks","papir"];
    valgDatamaskin = arrayValg[valgDatamaskin];

    // Ein eigen variabel for å lagre resultatutskrifta, som gjer siste linja enklare.
    let resultat = "";

    // Sjekker resultatet, først alt som resulterer i uavgjort
    if (valgBruker == valgDatamaskin) {
        resultat = "Uavgjort!";
    }
    // Sjekker deretter alle alternativa som gjer at brukaren vinn (3 stk) || betyr "eller", altså at ein av dei tre må vere sann
    else if (valgBruker == "stein" && valgDatamaskin == "saks" || 
             valgBruker == "saks" && valgDatamaskin == "papir" || 
             valgBruker == "papir" && valgDatamaskin == "stein") {
        resultat = "Spelaren vant!";
        scoreBruker++;
    } else {
        resultat = "Datamaskina vant!";
        scoreDatamaskin++;
    }
    rounds++; // Aukar antall runder med 1

    // Skriv ut resultatet
    document.getElementById("utskrift").innerHTML = resultat + " (Spelaren valte " + valgBruker + ", datamaskina valte " + valgDatamaskin + ")"; 

    // Kontrollerer om det er spelt 3 runder, og skriv ut vinnaren av best av 3
    if (rounds >= 3) {
        if (scoreBruker > scoreDatamaskin) {
            document.getElementById("sluttresultat").innerHTML = "<span id='vinn'>Spelaren vant best av 3!</span>";
        } else if (scoreDatamaskin > scoreBruker) {
            document.getElementById("sluttresultat").innerHTML = "<span id='tap'>Datamaskina vant best av 3!</span>";
        } else {
            document.getElementById("sluttresultat").innerHTML = "Det blei uavgjort i best av 3!";
        }
        // Skriv ut ein oppsummering av poenga
        document.getElementById("sluttresultat").innerHTML += "<br>Spelaren: " + scoreBruker + " - Datamaskina: " + scoreDatamaskin;

        // Fjernar eventlisteners for å hindre brukaren i å velgje etter at spelet er ferdig
        img_stein.removeEventListener("click", velgStein);
        img_saks.removeEventListener("click", velgSaks);
        img_papir.removeEventListener("click", velgPapir);

        // Viser boksen med informasjon om korleis du kan nullstille spelet (starte på nytt)
        document.getElementById("resetinformasjon").style.display = "block";
    }
}

// Funksjon for å nullstille spelet, køyrer når brukaren trykker på space på tastaturet
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        reset();
    }
}

function reset() {
    valgBruker = "";
    scoreBruker = 0;
    scoreDatamaskin = 0;
    rounds = 0;
    
    document.getElementById("utskrift").innerHTML = "Velg stein, saks eller papir - forsøk å slå datamaskina!";
    document.getElementById("sluttresultat").innerHTML = "&nbsp;<br>&nbsp;";

    // Legg til eventlisteners igjen for å kunne spele på nytt
    img_stein.addEventListener("click", velgStein);
    img_saks.addEventListener("click", velgSaks);
    img_papir.addEventListener("click", velgPapir);

    // Skjuler boksen med informasjon om korleis du kan nullstille spelet (starte på nytt)
    document.getElementById("resetinformasjon").style.display = "none";
}