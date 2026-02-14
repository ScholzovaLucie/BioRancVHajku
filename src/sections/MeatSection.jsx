import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Section from "../components/Section";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
}

export default function MeatSection() {
  return (
    <Section
      id="meat"
      sx={{
        textAlign: "center",
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Domácí bio maso na objednávku
        </Typography>

        <Typography sx={{ maxWidth: 700, opacity: 0.9 }}>
          Nabízíme kvalitní maso z vlastního chovu. Vše probíhá individuálně dle
          domluvy – bez e-shopu, bez zbytečných formulářů. Stačí nás
          kontaktovat.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ color: "white" }}
          onClick={() => scrollToId("contact")}
        >
          Nezávazná poptávka
        </Button>
      </Stack>
    </Section>
  );
}
