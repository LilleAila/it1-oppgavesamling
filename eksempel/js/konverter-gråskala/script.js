document.getElementById('upload').addEventListener('change', handleImageUpload);
document.getElementById('grayscale').addEventListener('click', applyGrayscale);
document.getElementById('contrast').addEventListener('click', increaseContrast);

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let imageData;

function handleImageUpload(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        let img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
}

function applyGrayscale() {
    for (let i = 0; i < imageData.data.length; i += 4) {
        let avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
        imageData.data[i] = avg;
        imageData.data[i + 1] = avg;
        imageData.data[i + 2] = avg;
    }
    ctx.putImageData(imageData, 0, 0);
}

function increaseContrast() {
    let contrast = 100; // Juster kontrastnivået her
    let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = truncate(factor * (imageData.data[i] - 128) + 128);
        imageData.data[i + 1] = truncate(factor * (imageData.data[i + 1] - 128) + 128);
        imageData.data[i + 2] = truncate(factor * (imageData.data[i + 2] - 128) + 128);
    }
    ctx.putImageData(imageData, 0, 0);
}

function truncate(value) {
    return Math.min(255, Math.max(0, value));
}