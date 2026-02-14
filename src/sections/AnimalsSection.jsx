import React from "react";
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
    text: "Oblíbené masné plemeno skotu proslulé vysokou kvalitou hovězího masa.",
    image: "Angus.jpeg",
    detail: [
      "Aberdeen angus je masné plemeno skotu typické svou bezrohostí a jednolitým zbarvením srsti. Nejčastěji se vyskytuje v černé nebo červenohnědé variantě a patří mezi nejrozšířenější masná plemena na světě.",
      "V České republice se toto plemeno chová ve velkém množství. První telata se zde narodila v roce 1992 a již o několik let později patřil angus mezi nejčastěji chovaná masná plemena.",
      "Jeho původ sahá do severovýchodního Skotska, kde se již na počátku 18. století v oblastech Aberdeenshire a Forfarshire podařilo vyšlechtit odolný a kvalitní masný typ skotu.",
      "Postupně se chov rozšířil z Evropy do Severní i Jižní Ameriky, Austrálie, na Nový Zéland i do Afriky. Do České republiky byly první kusy dovezeny v roce 1991.",
    ],
  },
  {
    name: "Mangalice",
    text: "Tradiční kudrnaté plemeno prasete s nezaměnitelným vzhledem.",
    image: "Mangalice.jpeg",
    detail: [
      "Mangalica je původní, dnes již vzácnější plemeno prasete pocházející z oblasti Velké uherské nížiny. V různých jazycích se její název lehce liší, ale vždy označuje stejné kudrnaté prase.",
      "Typickým znakem mangalice je hustá, zvlněná srst připomínající ovčí rouno. Jedná se o sádelný typ prasete, jehož srst tvoří štětiny i jemná podsada.",
      "Nejčastěji se chovají světlé až bílé varianty s tmavým rypákem a paznehty, jejichž zbarvení odpovídá původním srbským prasatům ze Šumadije.",
      "Existují také černé varianty, případně černé s bílým břichem, kterým se v Maďarsku říká „vlaštovčí břicho“. Dospělá mangalica může vážit 300–350 kg a dorůstat výšky až 85 cm v kohoutku.",
      "Plemeno bylo vyšlechtěno v roce 1833 křížením několika typů prasat. Ve 20. století však jeho obliba klesla kvůli vysokému obsahu tuku a mangalica byla dokonce vyhlášena ohroženým plemenem. Díky státní podpoře v Maďarsku se však podařilo její chov obnovit a dnes se znovu rozšiřuje i do dalších zemí včetně České republiky.",
      "V České republice má dnes větší význam především její křížení s jinými plemeny než samotný chov v čisté linii.",
    ],
  },
  {
    name: "Muflon Evropský",
    text: "Elegantní horské zvíře s typickými zatočenými rohy.",
    image: "Muflon.jpeg",
    detail: [
      "Muflon dorůstá délky 110 až 130 cm, výšky v kohoutku 70 až 90 cm a hmotnosti kolem 35 až 55 kg. Samice jsou menší a lehčí. Letní srst má rezavohnědý odstín s bílými znaky na břiše, nohách a kolem tlamy. Samci jsou charakterističtí mohutnými spirálovitými rohy nazývanými toulce.",
      "Původně žili mufloni ve skalnatých oblastech Středomoří. Do českých zemí byli dovezeni v 50. a 60. letech minulého století, kdy byl zahájen jejich chov například v oboře Hluboká nad Vltavou.",
    ],
  },
  {
    name: "Kůň Starokladrubský vraník",
    text: "Naše národní plemeno",
    image: "Kladrubsky.png",
    detail: [
      "Starokladrubský kůň je nejstarší české plemeno koní a významný chovatelský unikát, jehož historie sahá do začátku novověku. Byl vyšlechtěn především pro slavnostní kočárovou službu na panovnických dvorech a dodnes si zachoval typický barokní vzhled. Dnes se využívá jako výstavní, rodinný i terapeutický kůň a je vhodný i pro děti. Plemeno se dělí na dvě barevné linie – bělouše a vraníky – a jméno získalo podle hřebčína v Kladrubech nad Labem.",
      "Vraníci vznikali současně s bělouši, ale více zdědili rysy po neapolských předcích, takže nebyli tak jednotní vzhledem. U dvora sloužili hlavně při smutečních obřadech, později se uplatnili i v hospodářství díky své síle a vytrvalosti. Roku 1579 zde Rudolf II. založil hřebčín, který patří k nejstarším dosud fungujícím na světě.",
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
    <Section id="animals" sx={{ backgroundColor: "primary.main" }}>
      <Typography variant="h3" sx={{ mb: 4, color: "white" }}>
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
        PaperProps={{
          sx: {
            borderRadius: 4,
            boxShadow: 10,
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pr: 1,
            backgroundColor: "#f7f8fa",
            borderBottom: "1px solid #e6e8ec",
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
                boxShadow: 3,
                mb: 2,
              }}
            />
          )}

          <Box
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              background: "linear-gradient(145deg, #f9fafb, #eef1f5)",
              boxShadow: 2,
            }}
          >
            {selected?.detail?.map((paragraph, index) => (
              <Typography
                key={index}
                sx={{
                  lineHeight: 1.8,
                  fontSize: "0.97rem",
                  mb: index !== selected.detail.length - 1 ? 2 : 0,
                  color: "text.primary",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
