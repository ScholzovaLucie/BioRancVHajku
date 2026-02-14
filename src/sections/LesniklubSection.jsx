import React from "react";

import Section from "../components/Section";
import { Box, Typography, Grid, Button, Stack } from "@mui/material";

export default function LesniklubSection() {
  return (
    <Section id="lesni-klub" sx={{ backgroundColor: "background.paper" }}>
      <Box
        component="img"
        src="hajek_logo.png"
        alt="Logo Lesní klub Hájek"
        sx={{
          display: "block",
          margin: "0 auto",
          mb: { xs: 3, md: 4 },
          maxWidth: { xs: 140, md: 180 },
          height: "auto",
        }}
      />
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: { xs: 4, md: 6 }, fontWeight: 600 }}
      >
        Lesní klub Hájek
      </Typography>

      <Grid
        container
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* TEXT */}
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7 }}>
              Lesní klub Hájek je místem, kde děti tráví většinu času venku v
              přírodě, učí se samostatnosti, spolupráci a respektu k okolnímu
              světu. Program je zaměřený na přirozený rozvoj dítěte, pohyb,
              tvoření a objevování.
            </Typography>

            <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.7 }}>
              Děti mají možnost poznávat zvířata na ranči, pracovat se dřevem,
              hrát si na louce i v lese a rozvíjet svou fantazii bez tlaku a
              spěchu. Každý den je jiný a přináší nové zážitky.
            </Typography>

            <Stack
              direction="row"
              spacing={{ xs: 1.5, sm: 2 }}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              useFlexGap
            >
              <Button
                variant="contained"
                color="primary"
                href="https://lesniklubhajek.cz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web lesního klubu
              </Button>

              <Button
                variant="outlined"
                href="https://www.facebook.com/profile.php?id=100094171486836"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Button>

              <Button
                variant="outlined"
                href="https://www.instagram.com/lesni_klub_hajek/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
