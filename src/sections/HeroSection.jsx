import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Section from "../components/Section";
import logo from "/logo.png";
import heroBg from "/uvod.png";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: `
          linear-gradient(180deg, rgba(40,30,20,0.75), rgba(28,20,12,0.55)),
          radial-gradient(circle at 20% 20%, rgba(150,110,70,0.35), transparent 55%),
          radial-gradient(circle at 80% 20%, rgba(90,60,30,0.40), transparent 55%),
          url(${heroBg}) center / cover no-repeat
        `,
        color: "white",
        justifyContent: "center",
      }}
    >
      <Section id="home" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack
          spacing={2.2}
          sx={{
            maxWidth: 720,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Ranč v Hájku logo"
            style={{
              maxWidth: "90%",
              marginBottom: 8,
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.35))",
            }}
          />

          <Typography variant="h6" sx={{ opacity: 0.92, fontWeight: 500 }}>
            Malá bio farma s přibližně 40 kusy krav, 10 koňmi, husami, kachnami,
            slepicemi, prasaty, králíky a dalšími zvířaty.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ pt: 1 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => scrollToId("contact")}
              sx={{ color: "text.primary" }}
            >
              Kontakt / Objednávka masa
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => scrollToId("animals")}
              sx={{ borderColor: "rgba(255,255,255,0.55)" }}
            >
              Naše zvířata
            </Button>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
}
