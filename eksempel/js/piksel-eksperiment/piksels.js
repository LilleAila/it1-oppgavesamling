// Create a container element to hold the pixels
const container = document.createElement('div');
container.classList.add('pixel-container');

let bredde = 64; // NB: Hugs å oppdatere CSS og!
let hoyde = 36;

// Generate the pixels
for (let i = 0; i < bredde * hoyde; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
}

// Set the CSS grid properties
container.style.gridTemplateColumns = `repeat(${bredde}, 1fr)`;
container.style.gridTemplateRows = `repeat(${hoyde}, 1fr)`;

// Append the container to the body
document.body.appendChild(container);

// When the mouse moves over a pixel, set the background color of the pixel
// container.addEventListener('mousemove', (event) => {
//     const pixel = event.target;
//     if (pixel.classList.contains('pixel')) {
//         pixel.style.backgroundColor = 'black';
//     }
// });

// Gjer brukaren eit val mellom fargar

let currentColor = 'blue'; // Default color

// Add a keydown event listener to the document
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '1':
            currentColor = 'blue';
            break;
        case '2':
            currentColor = 'red';
            break;
        case '3':
            currentColor = 'green';
            break;
    }
});

// Teikning med musa

// Add a click event listener to the container
container.addEventListener('click', (event) => {
    const pixel = event.target;
    if (pixel.classList.contains('pixel')) {
        // Check the current background color of the pixel
        if (pixel.style.backgroundColor === currentColor) {
            // If it's the current color, set it to white
            pixel.style.backgroundColor = 'white';
        } else {
            // If it's not the current color, set it to the current color
            pixel.style.backgroundColor = currentColor;
        }
    }
});

// Instruksar   

// Create the overlay
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.color = 'white';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.zIndex = '1000';

// Add instructions to the overlay
const instructions = document.createElement('p');
instructions.textContent = 'Instructions: Press 1 for blue, 2 for red, 3 for green. Click a pixel to color it, click again to make it white.';
overlay.appendChild(instructions);

// Append the overlay to the body
document.body.appendChild(overlay);

// Remove the overlay when it's clicked
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});