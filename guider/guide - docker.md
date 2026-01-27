# Docker

Docker lar oss pakke applikasjoner og deres avhengigheter i containere, noe som gjør det enklere å distribuere og kjøre dem på forskjellige miljøer uten å bekymre oss for kompatibilitetsproblemer.

Innhold:
- [Installere Docker](#installere-docker)
- [Følg de innebygde guidene i Docker Desktop](#følg-de-innebygde-guidene-i-docker-desktop)
- [Grunnleggende Docker-kommandoer](#grunnleggende-docker-kommandoer)
- [Eksempel: Kjøre en enkel webserver med Docker](#eksempel-kjøre-en-enkel-webserver-med-docker)
- [Forsøk å kjøre kø-appen med Docker](#forsøk-å-kjøre-kø-appen-med-docker)
- [Eksempel på bruk for en avansert Node JS-applikasjon](#eksempel-på-bruk-for-en-avansert-node-js-applikasjon)
- [Oppgave, forsøk selv](#oppgave-forsøk-selv)

## Installere Docker

Vi anbefaler Docker Desktop for å bedre holde oversikt over dine containere og bilder, i alle fall i første omgang.

[Følg denne guiden for å installere Docker](https://docs.docker.com/get-started/get-docker/)

NB: Docker krever at maskinen din støtter virtualisering, og at dette er aktivert i BIOS/UEFI-innstillingene. Sjekk dette dersom du får problemer under installasjonen eller når du prøver å starte Docker.

NB2: På Windows må du ha WSL2 (Windows Subsystem for Linux 2) installert og aktivert. Alternativt Hyper-V.

## Følg de innebygde guidene i Docker Desktop

Når du har installert Docker Desktop, åpne programmet og følg disse innebygde guidene for å bli kjent med grensesnittet og funksjonene:
- "What is a Container?"
- "How do I run a Container?"

Flere etter behov og ønske.

## Grunnleggende Docker-kommandoer

Du kan administrere Docker via kommandolinjen, eller via Docker Desktop sitt grafiske grensesnitt. Du bør kjenne til begge deler.

Her er noen grunnleggende Docker-kommandoer som er nyttige å kjenne til:
- `docker --version`: Sjekk hvilken versjon av Docker som er installert.
- `docker pull <image>`: Last ned et Docker-bilde fra Docker Hub.
- `docker run <image>`: Kjør en container basert på et Docker-bilde.
- `docker ps`: Vis kjørende containere.
- `docker ps -a`: Vis alle containere, inkludert de som ikke kjører.
- `docker stop <container_id>`: Stopp en kjørende container.
- `docker rm <container_id>`: Fjern en stoppet container.
- `docker rmi <image_id>`: Fjern et Docker-bilde.
- `docker build -t <image_name> .`: Bygg et Docker-bilde fra en Dockerfile i gjeldende katalog.

Det er også en del kommandoer relatert til Docker Compose, som brukes for å definere og kjøre multi-container Docker-applikasjoner via `docker compose`-kommandoen:
- Start: `docker compose up -d` (-d for "detached" mode, som kjører i bakgrunnen)
- Start og bygg på nytt: `docker compose up -d --build` (bygger bildene på nytt før oppstart)
- Stopp og fjern containere: `docker compose down`
- Slett alt inkl. volumer og foreldreløse containere: `docker compose down -v --remove-orphans`
- Restart tjenester: `docker compose restart`
- Se status: `docker compose ps`
- Se logger: `docker compose logs -f --tail=100`

## Eksempel: Kjøre en enkel webserver med Docker

Se til at Docker Desktop kjører på din maskin, og følg stegene under for å lage en enkel webserver som serverer en statisk HTML-side.

1. Lag en ny katalog for prosjektet ditt og naviger inn i den:
   ```bash
   mkdir min-docker-webserver
   cd min-docker-webserver
   ```
2. Lag en enkel `index.html`-fil:
   ```html
    <!DOCTYPE html>
    <html lang="no">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Min Docker Webserver</title>
    </head>
    <body>
        <h1>Velkommen til min Docker-webserver!</h1>
    </body>
    </html>
   ```
3. Lag en `Dockerfile` i prosjektmappen. Denne filen kaller du for `Dockerfile` uten filendelse:
   ```dockerfile
   # Bruk en offisiell Nginx-bilde som base
   FROM nginx:alpine

   # Kopier index.html til Nginx sin standard katalog
   COPY index.html /usr/share/nginx/html/index.html
   ```
4. Bygg Docker-bildet:
   ```bash
   docker build -t min-docker-webserver .
   ```
5. Kjør Docker-containeren:
   ```bash
   docker run -d -p 8080:80 min-docker-webserver
   ```
6. Åpne nettleseren og gå til `http://localhost:8080` for å se innholdet på webserveren.

### Rydde opp

Når du er ferdig med å teste, kan du stoppe og fjerne containeren, samt fjerne bildet:

```bash
docker ps -a # Finn container-IDen
docker stop <container_id> # Stopp containeren
docker rm <container_id> # Fjern containeren
docker rmi min-docker-webserver # Fjern bildet
```

## Forsøk å kjøre kø-appen med Docker

Det ligger instruksjoner i README-filen for kø-appen vi har sett på i timene.

[Besøk vent-paa-tur-prosjektet på GitHub](https://github.com/hausnes/vent-paa-tur).

## Eksempel på bruk for en avansert Node JS-applikasjon

Se den offisielle Docker-guiden for Node.js applikasjoner her:

[Node.js Docker Guide](https://docs.docker.com/guides/nodejs/)

NB: Dette er et mer avansert eksempel, og kan hoppes over.

## Oppgave, forsøk selv

Gjør en an appene dine fra tidligere i år til en Docker-container. Lag en Dockerfile for appen din, bygg bildet, og kjør det i en container. Test at alt fungerer som forventet.

Bruk gjerne KI for å hjelpe deg med å lage Dockerfile, og sette opp Docker for appen din! Det kan være mange små detaljer å huske på, og vanskelig å feilsøke dersom noe ikke fungerer som forventet.