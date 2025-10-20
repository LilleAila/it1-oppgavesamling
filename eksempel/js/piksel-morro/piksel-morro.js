const skjerm = document.getElementById('skjerm');
const pixelSize = 10;
const skjermWidth = skjerm.offsetWidth;
const skjermHeight = skjerm.offsetHeight;

const cols = Math.floor(skjermWidth / pixelSize);
const rows = Math.floor(skjermHeight / pixelSize);

for (let i = 0; i < rows * cols; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  skjerm.appendChild(pixel);
}

let intervalId = null;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function togglePixelLighting() {
    const pixels = document.querySelectorAll('.pixel');
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById('toggleButton').textContent = 'Start';
        pixels.forEach(pixel => pixel.classList.remove('lit'));
        pixels.forEach(pixel => pixel.style.backgroundColor = ''); // Reset color
    } else {
        document.getElementById('toggleButton').textContent = 'Stop';
        intervalId = setInterval(() => {
            const randomPixel = pixels[Math.floor(Math.random() * pixels.length)];
            const randomColor = getRandomColor();
            randomPixel.style.backgroundColor = randomColor;
            randomPixel.classList.add('lit');
            setTimeout(() => {
                // randomPixel.classList.remove('lit');
                // randomPixel.style.backgroundColor = ''; // Reset color
            }, 500);
        }, 50);
    }
}

document.getElementById('toggleButton').addEventListener('click', togglePixelLighting);