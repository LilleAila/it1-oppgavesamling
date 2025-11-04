## Lyttefunksjoner og hendelseshåndtering

I JavaScript kan vi legge til lyttefunksjoner (event listeners) på HTML-elementer for å håndtere brukerinteraksjoner som klikk, tastetrykk, musbevegelser og mer. Dette gjøres vanligvis ved hjelp av `addEventListener`-metoden.

```js
let knapp = document.getElementById("minKnapp");

knapp.addEventListener("click", function() {
    alert("Knappen ble klikket!");
});
```

I eksemplet over legger vi til en lyttefunksjon på et knapp-element med id "minKnapp". Når knappen klikkes, vil funksjonen som viser en alert-boks bli kalt.

Du kan legge til lyttefunksjon på alle mulige HTML-elementer, som for eksempel tekstfelt, bilder, eller hele dokumentet. Her er et annet eksempel som lytter etter tastetrykk på et tekstfelt:

```js
let tekstfelt = document.getElementById("mittTekstfelt");

tekstfelt.addEventListener("keydown", function(event) {
    console.log("Tasten " + event.key + " ble trykket ned.");

    if (event.key === "Enter") {
        alert("Du trykket Enter!");
    }
});
```

Du kan også skrive koden over som arrow-funksjon, dersom du foretrekker det, eller ved å bruke en navngitt funksjon:

```js
knapp.addEventListener("click", () => {
    alert("Knappen ble klikket!");
});
```

```js
function visAlert() {
    alert("Knappen ble klikket!");
}

knapp.addEventListener("click", visAlert);
```

Merk at du kan legge til lyttefunksjoner for mange forskjellige hendelser. Du kan for eksempel lytte etter et dobbeltklikk med `dblclick`, musbevegelser med `mousemove`, eller tastetrykk med `keydown` og `keyup`. Her er noen eksempler:

```js
knapp.addEventListener("dblclick", () => {
    alert("Knappen ble dobbeltklikket!");
});

document.addEventListener("mousemove", (event) => {
    console.log("Musen beveget seg til: " + event.clientX + ", " + event.clientY);
});

document.addEventListener("keydown", function(event) {
    console.log("Tasten " + event.key + " ble trykket ned.");
});

document.addEventListener("keyup", function(event) {
    console.log("Tasten " + event.key + " ble sluppet opp.");
});
```