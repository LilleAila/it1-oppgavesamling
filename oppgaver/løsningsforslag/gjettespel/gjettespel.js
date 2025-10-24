let inputGjett = document.getElementById("inputGjett");

inputGjett.addEventListener("change", gjett);

let riktigSvar = 3;
let gjettetSvar = 0;

function gjett() {
    gjettetSvar = parseInt(inputGjett.value);
    if (gjettetSvar === riktigSvar) {
        document.getElementById("resultat").innerText = "Gratulerar!";
    }
    else {
        document.getElementById("resultat").innerText = "Sorry, det var feil!";
    }
}