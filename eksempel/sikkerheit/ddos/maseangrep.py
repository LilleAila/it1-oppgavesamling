'''
Dette programmet sender førespurnader til ein server i ei løkke, og nyttar trådar om du ynskjer. 
Programmet kan brukast til å teste korleis ein server handterer mange førespurnader samtidig. 
For å teste programmet, må du ha ein server som lyttar på port 3000.
Ver varsam med å bruke dette programmet, då det kan føre til at serveren blir overbelasta og sluttar å fungere.

---------------------------------------------------------------------------------------
Du skal ikkje bruke dette programmet til å sende førespurnader til ein server utan lov.

"DDoS (tjenestenektangrep) er ulovlig i Norge. Straffeloven inneholder flere bestemmelser som rammer både hackerangrep og DDoS.
En person som utfører et slikt DDoS-angrep risikerer å straffes etter straffeloven § 204 om innbrudd i datasystem og straffeloven § 206 om fare for driftshindring. 
Strafferammen i disse bestemmelsene er bot eller fengsel i inntil 2 år."
---------------------------------------------------------------------------------------

'''

import threading
import requests
import time

# Flaggvariabel for å kontrollere avslutning av trådane
stop_threads = False

def send_request():
    while not stop_threads:
        response = requests.get('http://localhost:3000')
        print(response.status_code)
        time.sleep(1)  # Sov i 1 sekund mellom kvar førespurnad

# Opprett og start trådar
threads = []
for i in range(1):  # Antall trådar som sender førespurnader
    thread = threading.Thread(target=send_request)
    thread.start()
    threads.append(thread)

# Vent på at brukaren skal trykke på Enter for å avslutte
input("Trykk Enter for å avslutte...\n")
stop_threads = True

# Vent på at alle trådane skal avslutte
for thread in threads:
    thread.join()

print("Programmet er avslutta.")