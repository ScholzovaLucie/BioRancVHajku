import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "/logo.png";

const NAV_ITEMS = [
  { label: "Úvod", id: "home" },
  { label: "O nás", id: "about" },
  { label: "Zaměření", id: "focus" },
  { label: "Zvířata", id: "animals" },
  { label: "Galerie", id: "gallery" },
  { label: "Kontakt", id: "contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, gap: 2 }}>
          <img
            src={logo}
            alt="Ranč v Hájku logo"
            style={{
              width: 100,
              marginBottom: 8,
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.35))",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.3 }}>
            Bio Ranč v Hájku
          </Typography>

          <Box sx={{ flex: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToId(item.id)}
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
