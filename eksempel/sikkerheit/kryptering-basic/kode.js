let alfabet = "0123456789abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!? ";
let alfabetLengde = alfabet.length;
console.log("Alfabetet sin lengde: " + alfabetLengde);

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen. 
// Returnerer den nye bokstaven.
function krypterBokstav(bokstavInn, krypteringsnokkelInn) {  
    let posisjon   = alfabet.indexOf(bokstavInn);
    let posisjonNy = posisjon + krypteringsnokkelInn;
    
    if (posisjonNy >= alfabetLengde) {
        posisjonNy = posisjonNy - alfabetLengde;
    }
    
    return alfabet[posisjonNy];
}

console.log(krypterBokstav("a", 1)); // Skal returnere "b"

function dekrypterBokstav(bokstavInn, krypteringsnokkelInn) {  
    let posisjon   = alfabet.indexOf(bokstavInn);
    let posisjonNy = posisjon - krypteringsnokkelInn;
    
    if (posisjonNy < 0) {
        posisjonNy = posisjonNy + alfabetLengde;
    }
    
    return alfabet[posisjonNy];
}

console.log(dekrypterBokstav("b", 1));

// Her tester vi om det går an å kryptere en hel setning

let setning = "Angrip i morgen, klokka 08.15!";
let kryptertSetning = "";

for (let bokstav of setning) {
    kryptertSetning = kryptertSetning + krypterBokstav(bokstav, 1);
}

console.log(kryptertSetning); 

let hemmeligBeskjed = "Yvzb vx yvzHvF ÆC SæPFBrFc Vx urBGrF HtyrdHtyrdHtyr øJrF øJvåu wPF vx åvxx Avxc";
let nokkel = 17;
let avsloring = "";

for (let bokstav of hemmeligBeskjed) {
    avsloring = avsloring + dekrypterBokstav(bokstav, nokkel);
}

console.log(avsloring);