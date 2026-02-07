import { Card, CardContent, Grid, Typography } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import PetsIcon from "@mui/icons-material/Pets";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ForestIcon from "@mui/icons-material/Forest";
import Section from "../components/Section";

const ITEMS = [
  {
    title: "Aberdeen Angus",
    text: "Chov plemenného skotu Aberdeen Angus.",
    icon: <PetsIcon fontSize="large" />,
  },
  {
    title: "Starokladrubský kůň",
    text: "Chov koní plemene Starokladrubský kůň.",
    icon: <SpaIcon fontSize="large" />,
  },
  {
    title: "Pastevní ustájení",
    text: "Pastevní ustájení koní v přirozených podmínkách.",
    icon: <ForestIcon fontSize="large" />,
  },
  {
    title: "Bio hovězí maso",
    text: "Prodej bio hovězího masa na objednávku.",
    icon: <LocalDiningIcon fontSize="large" />,
  },
  {
    title: "Vyjížďky na koních",
    text: "Možnost vyjížděk na koních po okolí.",
    icon: <SpaIcon fontSize="large" />,
  },
  {
    title: "Mufloní zvěř",
    text: "Chov mufloní zvěře.",
    icon: <PetsIcon fontSize="large" />,
  },
];

export default function FocusSection() {
  return (
    <Section id="focus" sx={{ backgroundColor: "background.paper" }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Naše zaměření
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {" "}
        {ITEMS.map((item) => (
          <Grid item xs={12} md={6} lg={3} key={item.title}>
            <Card sx={{ height: "100%", textAlign: "center" }}>
              {" "}
              <CardContent>
                <Typography color="primary" sx={{ mb: 1 }}>
                  {item.icon}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
