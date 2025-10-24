let alder = parseInt(prompt("Hva er alderen din?"));

if (alder < 18) {
    document.body.innerHTML = "Du er for ung!";
    document.body.style.filter = "blur(5px)";
    // document.querySelector("main") = "hidden"; // Skjuler alt
}
else {
    document.body.style.filter = "blur(0px)";
}