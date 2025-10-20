// Koden baserer seg på eksempelet frå https://www.w3schools.com/howto/howto_js_draggable.asp
// Men, koden er refaktorisert til å bruke moderne JavaScript og til å bruke mellom anna eventlistener.

document.addEventListener("DOMContentLoaded", () => {
    const draggableElement = document.getElementById("mydiv");
    const header = document.getElementById("mydivheader");

    header.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(e) {
        e.preventDefault();
        let pos3 = e.clientX;
        let pos4 = e.clientY;

        document.addEventListener("mousemove", elementDrag);
        document.addEventListener("mouseup", closeDragElement);

        function elementDrag(e) {
            e.preventDefault();
            const pos1 = pos3 - e.clientX;
            const pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            draggableElement.style.top = (draggableElement.offsetTop - pos2) + "px";
            draggableElement.style.left = (draggableElement.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.removeEventListener("mousemove", elementDrag);
            document.removeEventListener("mouseup", closeDragElement);
        }
    }
});