# Rust-Material-Calculator
# Mall för inlämning laboration 1, 1dv610
​
## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [x] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [x] Kodkvaliterskraven är ifyllda
    - [x] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - [ ] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.

Man kan återvända appen på det sätt att man kan skicka in nya "values" för att få ut antal material man behöver. Klassens funktioner som kalkylerar hur mycket material man behöver heter följande: WallCalculator, SquareFoundationCalculator, SquareFloorCalculator, TriangleFoundationCalculator, TriangleFloorCalculator, DoorwayCalculator och WindowCalculator. Dessa metoder behöver få in vilket typ byggnadsmaterial (trä, sten, metall eller hög kvalités metall), antal av hur många som användaren vill och sen finns det även "materials" som är material som är en valfri parameter men om det buggar skicka en en variabel som innehåller [0, 0, 0, 0]. Matrial variabeln är till för om man vill skicka in totalen av materiallen som man redan beräknat. Typen av byggnadsmatriallen skickas in med värdena 1, 2, 3 och 4. 1 är det lägsta som motsvarar trä och 4 är det högsta som motsvarar hög kvalité metall. Antal är endast antal, t.ex 4. 

Det finns även StoneCalculator, MetalCalculator och SulfurCalculator. Dessa beräknar hur många nodes användaren behöver hugga. De behöver parametrar som innehåller data i följande ordning: typ av hacka, mängd av material användaren behöver samt en "multiplier" som är valfri, standard är 1. Typen av hacka anges på samma sätt som matrialtyp. 1 = stenen, 2 = sten hacka, 3 = hacka och uppåt. HighQualityMetalCalculator kan ta in parametrarna mängd och multiplier, ungefär samma som föregående förutom att typen av hackan inte ändrar hur mycket man får. Tänk bara på att en vanlig sten inte kan få ut HQM ur nodes.

Till sist så finns det även en TreeCalculator. Den behöver typ av yxa (sten, stenyxa, yxa samt "salvaged axe" eller bättre. Dessa använder även nummrerna 1,2,3,4), mängd samt multiplier som är valfri. Denna metod beräknar dock hur många träd man måste hugga som minst och mest. Detta returnerar den sedan i ett objekt genom low och high.
​
## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå. 

Jag har gjort en klass som framförallt beräknar hur mycket matrial man behöver till en bas. De behöver framförallt veta antal, vilken typ av matrial samt typ av byggnad. Den andra gruppen av metoder räknar ut hur många träd/nodes man måste hugga för att få de antalet material man anget. Detta ska underlätta för de som utvecklar rust-relaterade appar/bottar. Men denna bibliotek

Klassens funktioner som kalkylerar hur mycket material man behöver heter följande: WallCalculator, SquareFoundationCalculator, SquareFloorCalculator, TriangleFoundationCalculator, TriangleFloorCalculator, DoorwayCalculator och WindowCalculator. Sedan finns även Det finns även StoneCalculator, MetalCalculator och SulfurCalculator. Dessa beräknar hur många nodes användaren behöver hugga. Sen till sist så finns även en TreeCalculator funktion som beräknar det minsta samt högsta antalet träd som måste huggas får att nå den önskade mängden.
​
## Hur jag testat
Beskriv hur du kommit fram till om din kod fungerar.

Jag har utfört manuella tester och sett till så att den huvudsakliga delen är funktionell så länge koden använda på rätt sätt.
​
### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?
​
| Vad testas      | input | output | utfall PASS/FAIL |
| --------- | --------- | ------ | ------- |
|Testar så kalkylen blir rätt med 1 trävägg     |  1, 1   |    250   |     PASS  |
|  Testar antal sulfur nodes som måste huggas för att få 15000 sulfur  |  2, 15000     |  62    |   PASS    |
|  Testar antalet min/max träd som måste huggas för att få 250 wood  med stenyxa. |   2, 250   |   1, 1    |    PASS   |
​
​
## Kodkvalitetskrav
​
**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.
​
### Namngivning
​
| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| **materials** <br> lagrar typ samt mängd av material man behöver till sitt bygge. |   **Intention-Revealing Names** - Visar att den lagrar och hanterar matrial. Det hade kunnat bli tydligare om man skulle döpa den till något i stil med "materialsNeeded". Vill dock påstå att detta är kort och beskriver det tillräckligt bra. <br/> **Avoid Disinformation** - Ger ingen felaktig information som gör att man tror att det är något annat.<br> **Use Pronounceable Name** - Lätt att läsa samt säga vilket gör det lätt att diskutera etc.|
| **multiplier** <br> Lagrar "multiplier" för matrial vid uthuggning av matrial. |   **Intention-Revealing Names** - Visar att det är en typ av multiplier. Det hade kunnat bli ännu tydligare om man skulle döpa den till något i stil med "materialMultiplier". Det duger till att visa vad den används till. <br/> **Avoid Disinformation** - Ger ingen felaktig information som gör att man tror att det är något annat.<br> **Use Pronounceable Name** - Lätt att läsa samt säga vilket gör det lätt att diskutera etc.|
| **pickaxeTier**  <br> Lagrar vilken typ av hacka man använder, t.ex stenhacka.     |   **Avoid Disinformation** - Ger ingen felaktig information som gör att man tror att det är något annat.<br> **Use Pronounceable Name** - Lätt att läsa samt säga vilket gör det lätt att diskutera etc.|             |
​
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|  **WallCalculator** <br> Räknar ut mänd material som behövs till användares behov. https://github.com/AlbinUddenbjork/Rust-Material-Calculator/blob/7f24108e6dfd006427a1a434762f06de6a3d8fc2/RustMaterialCalculator.js#L2 | **Intention-Revealing Names** - Säger vad metoden utför för uppgift dvs beräknar material till mängd, skulle kunna bli ännu tydligare med "WallMaterialCalculator" inser jag nu dock <br> **Use Searchable Names** - Lätt att söka upp, man förstår om man skulle söka efter det helt enkelt, inga nummer som förvirrar. <br> **Use Pronounceable Name** - Lätt att läsa samt säga vilket gör det lätt att diskutera etc.|
| **StoneCalculator** <br> Beräknar hur många sten nodes man måste hugga för att få den mängd sten som angets. | **Use Pronounceable Name** - Lätt att läsa samt säga vilket gör det lätt att diskutera etc. <br> **Intention-Revealing Names** - Säger vad metoden utför för uppgift dvs beräkna mängden sten nodes som behöver huggas för att beräkna hur många sten nodes som huggas för att få den mängd sten som behövs.|
​
## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 

Jag tycker att jag har gjort ett hyffsat bra jobb men sen blir det som alltid att man kommer på bättre namn efterråt. Skulle säga att jag följde **Intention-Revealing Names** bäst, dvs döpa saker så man förstår vad de används till. Skulle också säga att de flesta namnen är ganska lättuppsökta vilket följer regeln **Use Searchable Names**. Inser dock nu efterråt att de på en del platser är en del upprepning vilket går emot en grundregel **DRY - Do Not Repeat**. Gjorde som jag trodde var bäst för stunden, skulle säga att lösningen duger dock. Har även följt regeln **Do not be cute** dvs inte ha "roliga variabelnamn" vilket gör att man inte förstår namnet.

Översiktligen skulle jag vilja påstå att koden håller hyffsad kvalité som gör att man kan följa koden samt förstå vad som händer.
