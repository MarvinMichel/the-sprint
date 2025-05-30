# QSite - Mensen pagina

De opdracht is het bouwen van een pagina voor onze website. Op de pagina willen we graag met trots al onze collega’s tonen aan de buitenwereld. Via een volledig responsive grid willen we alle Q’ers tonen van twee kanten: een serieuze kant en een speelse kant. Ook is het de bedoeling voor onze bezoekers om te kunnen filteren, om zo een specifieke groep in beeld te krijgen. Aan jullie de opdracht om deze pagina te ontwerpen en te prototypen.

Er hoeft niet zoveel geschreven content aanwezig te zijn op de pagina. Alles wat er in moet komen kun je vinden bij [de huisstijl](./huisstijl.md), maar voel je vrij om content toe te voegen. Alle foto's die gebruikt moeten worden en de fonts zijn al aanwezig in de repo.

> [!IMPORTANT]
> De benodigde data van onze collega's kan opgehaald worden via dit API endpoint: `/api/people`. Bekijk de [interactieve documentatie](https://the-sprint-api.onrender.com/docs#/default/get_people_people_get) om te zien wat voor data je terug krijgt.

## KPI’s

- [ ] Gebruikers kunnen filteren op tags
  1. “Short hair, don’t care”
  2. “Is stiekem een designer”
  3. “Front-end”
  4. “Harry Potter fan”
  5. "Partner van de club"
- [ ] De pagina is volledig responsive
- [ ] De foto’s in het grid hebben een hover animatie
  - Toont een andere foto van een collega
  - Toont een fallback als er geen extra foto is
- [ ] De pagina is volledig toegankelijk (A11y)
- [ ] De pagina is volledig in de huisstijl van Q42
- [ ] De pagina is deployed (Github Pages/Netlify/Vercel)

## Development

Installeer de npm package voor de dev-server:

```bash
npm install
```

Start de dev-server:

```bash
npm run start
```

> De dev server heeft hot-module reload. Dus je hoeft niet je server te herstarten om je changes te bekijken.
