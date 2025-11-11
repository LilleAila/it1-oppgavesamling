# CSS (Cascading Style Sheets)

CSS brukes for å style HTML-elementer på en nettside. Med CSS kan du kontrollere layout, farger, skrifttyper, avstander og mye mer.

Du finner mange bedre guider til dette temaet på nettet, og noen gode ressurser inkluderer:
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools - CSS Tutorial](https://www.w3schools.com/css/)
- [CSS-Tricks](https://css-tricks.com/)
- [Kevin Powell - YouTube Channel](https://www.youtube.com/kepowob) (sterkt anbefalt!)

Du kan også [se noen av eksemplene vi går gjennom i fellesskap i timene hos oss](../eksempel/css/).

Innhold:
- [Grunnleggende syntaks](#grunnleggende-syntaks)
- [Konkrete, nyttige eksempler](#konkrete-nyttige-eksempler)
    - [Sentrere et element horisontalt og vertikalt](#sentrere-et-element-horisontalt-og-vertikalt)
    - [Flexbox for en enkel meny](#flexbox-for-en-enkel-meny)

## Grunnleggende syntaks

CSS består av selektorer og deklarasjoner. En deklarasjon består av en egenskap og en verdi.

```css
body {
    background-color: lightblue;
}

h1 {
    color: navy;
    font-size: 24px;
}

p {
  color: darkgray;
  line-height: 1.5;
}
```

I eksempelet over er `body`, `h1` og `p` selektorer som velger HTML-elementer. Inne i krøllparentesene `{}` finner du deklarasjoner som definerer hvordan disse elementene skal styles.

Mer avansert CSS kan inkludere klasser, ID-er, pseudo-klasser og media queries for responsivt design. Her er noen eksempler:

```css
/* Klasse-selektor */
.button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}

/* ID-selektor */
#header {
    font-size: 32px;
    text-align: center;
}

/* Pseudo-klasse */
a:hover {
    color: red;
}

/* Media query for responsivt design */
@media (max-width: 600px) {
    body {
        background-color: lightgray;
    }
}
```

Du kan også spesifisere `selectors` til å style elementer basert på deres plassering i HTML-strukturen, for eksempel:

```css
nav ul li a {
    color: blue;
}
```

Denne regelen vil style alle `<a>`-elementer som er inne i en `<li>`, som igjen er inne i en `<ul>`, som igjen er inne i et `<nav>`-element.

## Konkrete, nyttige eksempler

### Sentrere et element horisontalt og vertikalt

```css
body, html {
    height: 100%;
    margin: 0;
}

body {
    display: flex;
    justify-content: center; /* Horisontal sentrering */
    align-items: center;    /* Vertikal sentrering */
}

main {
    width: 300px;
    height: 200px;
    background-color: lightcoral;
    border: 2px solid darkred;
}
```

HTML-en som hører til eksempelet over:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Sentrert Element</title>
</head>
<body>
    <main>
        <h1>Hei, verden!</h1>
        <p>Dette er et sentrert element.</p>
    </main>
</body>
</html>
```

### Flexbox for en enkel meny

```html
<nav>
    <a href="#">Hjem</a>
    <a href="#">Om oss</a>
    <a href="#">Tjenester</a>
    <a href="#">Kontakt</a>
</nav>
```

```css
nav {
    display: flex;
    background-color: #333;
    padding: 10px;
    justify-content: space-around;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
}

nav a:hover {
    background-color: #555;
}
```