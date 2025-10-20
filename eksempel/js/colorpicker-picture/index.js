document.getElementById('image').addEventListener('click', function(event) {
    const img = event.target;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Dokumentasjon: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
    const pixel = ctx.getImageData(x, y, 1, 1).data;

    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];

    document.getElementById('r').innerText = `R: ${r}`;
    document.getElementById('g').innerText = `G: ${g}`;
    document.getElementById('b').innerText = `B: ${b}`;
});