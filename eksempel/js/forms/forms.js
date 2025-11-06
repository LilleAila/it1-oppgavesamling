const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindre at siden lastes på nytt = SPA = "Single Page Application"

    const email = document.getElementById('email').value;
    const alder = document.getElementById('alder').value;
    const kjonn = document.querySelector('input[name="kjonn"]:checked').value;
    const interesserSelect = document.getElementById('interesser');
    const interesser = Array.from(interesserSelect.selectedOptions).map(option => option.value);

    const farge = document.getElementById('farge').value;
    console.log('E-post:', email);
    console.log('Alder:', alder);
    console.log('Kjønn:', kjonn);
    console.log('Interesser:', interesser);
    console.log('Favorittfarge:', farge);
});


// Alternativ teknikk dersom du vil ha det som et objekt
// const skjema = document.getElementById('skjema');

// skjema.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(skjema);
//     const data = Object.fromEntries(formData.entries());

//     console.log(data);
// });