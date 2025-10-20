/*
The function rgbToHex converts RGB color values to a hexadecimal color code. 
It takes three parameters: r, g, and b, which represent the red, green, and blue components of the color, respectively. 
Each of these parameters is expected to be an integer between 0 and 255.
The function begins by creating a single integer that combines the RGB values. This is done using bitwise operations. 
The expression (1 << 24) shifts the number 1 left by 24 bits, effectively creating a base value that ensures the resulting 
number has enough bits to accommodate the RGB values. The red component r is then shifted left by 16 bits, the green 
component g is shifted left by 8 bits, and the blue component b is added without any shift. These shifted values are 
combined using the bitwise OR operator (+), resulting in a single integer that represents the combined RGB values.

Next, the combined integer is converted to a hexadecimal string using the toString(16) method. This method converts the 
number to a base-16 (hexadecimal) representation. The slice(1) method is then used to remove the leading '1' that was 
added by the initial bitwise shift operation. Finally, the toUpperCase() method is called to ensure that the hexadecimal 
letters are in uppercase, which is the standard format for hexadecimal color codes.

The function returns the resulting hexadecimal color code as a string, prefixed with a # symbol, which is the standard 
notation for hexadecimal color codes in web development. This allows the RGB values to be easily used in CSS or other 
contexts where hexadecimal color codes are required.
*/
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}



const canvas = document.getElementById('colorpicker');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

// Tegn fargevelgeren på canvas
// Dokumentasjon: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient 
const gradientH = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradientH.addColorStop(0, 'red');
gradientH.addColorStop(1 / 6, 'yellow');
gradientH.addColorStop(2 / 6, 'lime');
gradientH.addColorStop(3 / 6, 'cyan');
gradientH.addColorStop(4 / 6, 'blue');
gradientH.addColorStop(5 / 6, 'magenta');
gradientH.addColorStop(1, 'red');
ctx.fillStyle = gradientH;
ctx.fillRect(0, 0, canvas.width, canvas.height);

const gradientV = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradientV.addColorStop(0, 'rgba(255, 255, 255, 0)');
gradientV.addColorStop(1, 'rgba(255, 255, 255, 1)');
ctx.fillStyle = gradientV;
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const pixel = ctx.getImageData(x, y, 1, 1).data;

    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    document.getElementById('r').innerText = `R: ${r}`;
    document.getElementById('g').innerText = `G: ${g}`;
    document.getElementById('b').innerText = `B: ${b}`;

    document.body.style.backgroundColor = rgbToHex(r, g, b);
});