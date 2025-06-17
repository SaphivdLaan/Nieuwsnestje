# Nieuwsnestje – Nieuws leren met je eigen diertje

Een speels educatief platform voor kinderen van 6 tot 8 jaar waarin zij op een laagdrempelige manier kennismaken met het nieuws.

## Over het project

Nieuwsnestje is ontworpen als klassikale web-app waarin kinderen elke week nieuws krijgen uitgelegd door een diertje dat met hen meegroeit. Door vragen en spelletjes te beantwoorden groeit het diertje gedurende de week. Elk kind kan het diertje personaliseren met een naam en kleding, en ervoor zorgen via een aparte speelomgeving.

Leerkrachten kiezen per week een thema of nieuwsitem (handmatig of via AI). Zo blijft het nieuwsaanbod actueel, passend bij de klas, én veilig voor jongere kinderen. Het platform is eenvoudig te gebruiken, interactief en gericht op taalontwikkeling, nieuwsgierigheid en betrokkenheid.

Bekijk het live prototype: [https://nieuwsnestje.vercel.app/](https://nieuwsnestje.vercel.app/)

## Wat ik heb gebouwd

- **Interactief nieuwsdiertje** – Elke week een nieuw karakter dat het nieuws uitlegt
- **Spelenderwijs leren** – Kinderen beantwoorden quizvragen om hun diertje te laten groeien
- **Personalisatie** – Naam geven, aankleden, verzorgen
- **Leerkrachtfilters** – Thema’s en hoeveelheid content aanpasbaar
- **Visueel rustige interface** – Ontwikkeld voor jonge lezers met weinig tekst en duidelijke iconen

## Technische stack

- **React + TypeScript** – Voor snelle en schaalbare ontwikkeling
- **Tailwind CSS** – Voor moderne, toegankelijke styling
- **shadcn/ui** – Voor herbruikbare UI-componenten
- **Vite** – Voor een lichte en snelle ontwikkelomgeving
- **Lovable** – Voor AI-gestuurde prototyping
- **RunwayML API** – Voor het genereren van visuele diertjes

## Wat ik heb geleerd

Tijdens dit project heb ik veel geleerd over:
- Ontwerpen voor een jonge doelgroep (6–8 jaar)
- Werken met low-code/AI tools zoals Lovable
- Aansturen van visuele generatie via prompts en API’s
- Testen en itereren op basis van klaslokaalfeedback
- Samenwerken met journalistieke studenten aan inhoud

## Projectstructuur

nieuwsnestje/
├── public/             # Statische bestanden
├── src/
│   ├── components/     # UI-componenten zoals dier, quiz, menu
│   ├── pages/          # Pagina’s zoals nieuwsoverzicht en profiel
│   ├── assets/         # Afbeeldingen, iconen, AI-diervormen
│   └── styles/         # Tailwind & globale CSS
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

## Lokale installatie

Wil je zelf aan de slag met het project?

```bash
git clone https://github.com/jouw-gebruikersnaam/nieuwsnestje.git
cd nieuwsnestje
npm install
npm run dev
````

Ga dan naar [http://localhost:5173](http://localhost:5173) in je browser.

## Deployment

Het project is gedeployed via Vercel. Iedere nieuwe versie is direct online zichtbaar. Custom domains kunnen gekoppeld worden via Project > Settings > Domains.

## Toekomstplannen

* Nieuwssysteem verbeteren met meerdere moeilijkheidsniveaus
* Koppeling met bestaande onderwijskundige thema’s
* Rollen voor ouders en thuissituaties toevoegen
* Grafische herontwerpen in samenwerking met Figma

---

**Gemaakt door: Saphi
**Live versie:** [Bekijk de web-app](https://nieuwsnestje.vercel.app/)

*Dit project is gemaakt in het kader van een onderwijsproject en richt zich op kindvriendelijke nieuwsconsumptie via digitale tools.*

