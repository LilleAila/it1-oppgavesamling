# Pico React (og Nano React)

[as-troska](https://github.com/as-troska/) har laget et lett React-bibliotek kalt `Pico React`, som baserer seg på `Nano React`. Biblioteket er designet for å være svært lite i størrelse, noe som gjør det ideelt for prosjekter der ytelse og lastetid er kritiske faktorer.

Det er også et poeng at mange rammeverk og biblioteker blir store og komplekse, noe som kan føre til unødvendig overhead. Det blir mange mapper og filer for elevene å holde styr på, og forstå. Pico React tilbyr en minimalistisk tilnærming til å bygge brukergrensesnitt, samtidig som det beholder kjernen av Reacts funksjonalitet. 

Du kan lese mer om Pico React på [GitHub-siden](https://github.com/as-troska/pico-react-app).

Det kommer en "kom-i-gang"-guide for Pico React her snart!

## Kom i gang med React syntaks

Codecademy har et veldig bra kurs som tar for seg det grunnleggende i React, inkludert JSX syntaksen som brukes for å lage komponenter. Du kan finne kurset her: [Learn React](https://www.codecademy.com/learn/react-101).

Under følger noen grunnleggende konsepter og eksempler for å komme i gang med React.

### Hva er en komponent?

I React er en komponent en gjenbrukbar del av brukergrensesnittet. Komponenter kan være så enkle som en knapp eller et tekstfelt, eller så komplekse som hele sider eller applikasjoner. De kan også inneholde andre komponenter, noe som gjør det enkelt å bygge komplekse grensesnitt ved å kombinere mindre deler.

### Eksempel på noen enkle komponenter

Det første eksempelet viser en enkel knapp-komponent. **export*** brukes for å gjøre komponenten tilgjengelig for import i andre filer.

```jsx
import React from 'react';

const MyButton = () => {
  return <button>Klikk meg!</button>;
};

export default MyButton;
```

Det andre eksempelet viser hvordan du kan bruke `MyButton`-komponenten inne i en annen komponent kalt `MyApp`.

```jsx
import React from 'react';
import MyButton from './MyButton';

const MyApp = () => {
  return (
    <div>
      <h1>Velkommen til min app!</h1>
      <MyButton />
    </div>
  );
};

export default MyApp;
```