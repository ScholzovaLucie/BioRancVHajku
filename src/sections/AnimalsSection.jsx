import { useState } from "react";
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Section from "../components/Section";

const ANIMALS = [
  {
    name: "Aberdeen Angus",
    text: "Masné plemeno skotu známé kvalitou masa.",
    image: "/Angus.jpg",
    detail: [
      "Aberdeen-anguský skot je masné plemeno skotu typické bezrohostí a plášťovým zbarvením, zvířata jsou jednolitě černá nebo červenohnědá. Je to jedno z nejvíce chovaných masných plemen na světě.",
      "V hojném počtu je toto plemeno zastoupeno též v České republice, první telata se zde narodila v roce 1992 a v roce 2003 byl Aberdeen-anguský skot druhým nejčastěji chovaným masným plemenem v ČR.",
      "Zemí původu plemene je severovýchodní Skotsko. Již na začátku 18. století se v krajích Aberdeenshire a Forfarshire podařilo vyšlechtit masný užitkový typ skotu.",
      "Postupně se chov rozšířil z Evropy do Severní a Jižní Ameriky, Austrálie, na Nový Zéland i do Afriky. Do České republiky byly první kusy importovány v roce 1991.",
    ],
  },
  {
    name: "Mangalice",
    text: "Tradiční kudrnaté prase.",
    image: "/mangalice.jpg",
    detail: [
      "Mangalica, také mangalice, mangalika nebo mangulica je primitivní plemeno prasat pocházející z Velké uherské nížiny.",
      "Vyznačuje se hustými, zvlněnými štětinami. Jedná se o plemeno sádelného typu. Plemeno se vyznačuje dlouhou vlnitou srstí, jíž vedle štětin tvoří i podsada.",
      "Nejčastěji se chovají mangalice plavé až bílé, s tmavým rypákem a koptýky, které zbarvením odpovídají původním srbským prasatům ze Šumadije.",
      "Černé mangalice mají více krve bakoňských prasat (bagounů), mohou být buďto celé černé a nebo, častěji, černé s bílým břichem a boky, Maďaři tomuto zbarvení říkají Fecskehasú ('vlaštovčí břicho'). Jen zřídka se chovají mangalice rezavě zbarvené, které mají více krve szalontajského plemene. Dospělá mangalica váží 300-350 kg, kanci bývají těžší než svině, výška v kohoutku dosahuje 80-85 cm.",
      "Mangalica byla vyšlechtěna roku 1833, kdy srbský kníže Miloš poslal uherskému palatinovi Josefovi darem dvanáct polodivokých, kudrnatých prasat ze srbské Šumadije. Ta byla dále křížena s rezavě zbarvenými szalontajskými prasaty a tmavými prasaty z Bakoňského lesa. Jméno vytvořil Vuk Stefanović Karadžić spojením starogermánského výrazu mangh ('kříženec') se slovanskou ženskou koncovkou -ica. Ve 2. polovině 19. a na počátku 20. století bývaly mladé mangalice přiháněny na prodej do Českých zemí, Rakouska i Haliče. Po roce 1890 byl příhon prasat z veterinárních důvodů omezován. První světová válka a rozpad Rakouska-Uherska znamenaly konec příhonu mangalice do Českých zemí. Ve 20. století začali chovatelé o mangalici ztrácet zájem. Spotřebitelé vyžadovali vepřové maso s nižším obsahem tuku. V roce 1973 byla mangalica vyhlášena za ohrožené plemeno a od roku 1974 existuje v Maďarsku státní podpora pro její chov jakožto genové rezervy. Zásah byl velmi úspěšný, neboť mangalica již není ohrožena a Maďarsko ročně vyprodukuje 60 000 kusů mangalice. Její chov se rozšířil i do jiných států včtně Slovenska a České republiky.",
      "Větší význam než chov v čisté linii však má v České republice její křížení s jiným plemeny prasat.",
    ],
  },
  {
    name: "Muflon Evropský",
    text: "Původní horské zvíře.",
    image: "/muflon2.jpg",
    detail: [
      "Muflon dosahuje délky 110 až 130 cm, výšky v kohoutku 70 až 90 cm a hmotnosti 35 až 55 kg. Muflonice jsou menší a dosahují maximálně 30 kg. Letní srst muflona je krátká a rezavohnědá. Bílá srst je na břichu, vnitřní straně a spodku nohou, okolo úst, uvnitř uší, okolo krátkého chvostu a na sedle. Muflon má mohutné spirálovitě stočené rohy 'toulce'. Mladému muflonkovi už po 2 měsících začínají narůstat růžky a roční muflonek je má dlouhé 25 až 35 cm.",
      "Mufloni kdysi žili ve skalnatých pohořích okolo středozemního moře. Počátek chovu muflonů u nás se nejčastěji datuje do 50. a 60. let minulého století, kdy byli do obory v Hluboké nad Vltavou dovezeni mufloni z rakouské obory Lainz.",
    ],
  },
];

export default function AnimalsSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (animal) => {
    setSelected(animal);
    setOpen(true);
  };

  return (
    <Section id="animals">
      <Typography variant="h3" sx={{ mb: 4 }}>
        Naše zvířata
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {ANIMALS.map((animal) => (
          <Grid
            item
            width={{ md: "300px", xs: "300px" }}
            height={{ md: "200px", xs: "200px" }}
            key={animal.name}
          >
            <Card
              sx={{
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <CardContent>
                <Typography variant="h6">{animal.name}</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {animal.text}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpen(animal)}
                >
                  Více informací
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pr: 1,
          }}
        >
          {selected?.name}
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selected?.image && (
            <Box
              component="img"
              src={selected.image}
              alt={selected.name}
              sx={{
                width: "100%",
                maxHeight: 300,
                objectFit: "cover",
                borderRadius: 2,
                mb: 2,
              }}
            />
          )}

          {selected?.detail?.map((paragraph, index) => (
            <Typography key={index} sx={{ mb: 2, lineHeight: 1.7 }}>
              {paragraph}
            </Typography>
          ))}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
