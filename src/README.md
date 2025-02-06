# "Att göra" -lista med React och TypeScript

Anne-Lii Hansen - anha2324@student.miun.se

Detta projekt är en Todo List-webbapplikation byggd med React och TypeScript. Applikationen gör det möjligt för användare att hantera sina todos, inklusive skapa, uppdatera och ta bort todo-objekt. Applikationen är kopplad till ett backend-API som hanterar CRUD (Skapa, Läs, Uppdatera, Ta bort) operationer för todo-objekten.

## Funktioner
* Visa todos: Visar alla todos som hämtats från backend.
* Lägg till en ny todo: Lägg till todo-objekt med en titel, beskrivning och status.
* Uppdatera status: Ändra status för en todo (t.ex. Ej påbörjad, Pågående, Avklarad).
* Ta bort en todo: Ta bort en todo från listan.
* Datavalidering: Säkerställer att titeln är minst 3 tecken lång och att beskrivningen inte överskrider 200 tecken.
* Felhantering: Visar felmeddelanden om något går fel vid hämtning eller modifiering av data.

## Tech
* React: JavaScript-bibliotek för att bygga användargränssnittet.
* TypeScript: För typkontroll och bättre kodkvalitet.
* CSS: För att styla applikationen.
* Fetch API: För att göra HTTP-förfrågningar till backend-API:t.
* Backend API: Ett anpassat API som hanterar CRUD-operationer för todos.


### Installation
1. Klona repot:
```bash
   git clone https://github.com/Anne-Lii/react_m2_todoList.git
```
2. Navigera till mappen:
```bash
   cd react_m2_todoList
```
3. Installera beroenden:
```bash
   npm install
```
4. Starta servern:
```bash
   npm run dev
```
5. Öppna applikationen i webbläsaren via klickbar länk i terminalen. 