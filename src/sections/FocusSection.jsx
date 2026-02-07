import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Section from "../components/Section";

const ITEMS = [
  {
    title: "Aberdeen Angus",
    text: "Chov plemenného skotu Aberdeen Angus.",
    icon: "/icons/cow.png",
  },
  {
    title: "Starokladrubský kůň",
    text: "Chov koní plemene Starokladrubský kůň.",
    icon: "/icons/horse.png",
  },
  {
    title: "Pastevní ustájení",
    text: "Pastevní ustájení koní v přirozených podmínkách.",
    icon: "/icons/grass.png",
  },
  {
    title: "Bio hovězí maso",
    text: "Prodej bio hovězího masa na objednávku.",
    icon: "/icons/meat.png",
  },
  {
    title: "Vyjížďky na koních",
    text: "Možnost vyjížděk na koních po okolí.",
    icon: "/icons/horse-rider.png",
  },
  {
    title: "Mufloní zvěř",
    text: "Chov mufloní zvěře.",
    icon: "/icons/ram.png",
  },
];

export default function FocusSection() {
  return (
    <Section id="focus" sx={{ backgroundColor: "background.paper" }}>
      <Typography
        variant="h3"
        sx={{
          mb: 6,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
          textAlign: "center",
        }}
      >
        Naše zaměření
      </Typography>

      <Box
        sx={{
          position: "relative",
          maxWidth: 900,
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 5, md: "50%" },
            top: 0,
            bottom: 0,
            width: 2,
          }}
        />

        {ITEMS.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <Grid
              container
              key={item.title}
              sx={{
                mb: { xs: 5, md: 1 },
                position: "relative",
                minHeight: { xs: 80, md: 90 },
                flexDirection: {
                  xs: "row",
                  md: isLeft ? "row" : "row-reverse",
                },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "50%" },
                  ml: { xs: 7, md: 0 },
                  textAlign: { xs: "left", md: isLeft ? "right" : "left" },

                  /* DESKTOP – fixed offset from center line */
                  pr: { md: isLeft ? "40px" : 0 },
                  pl: { md: !isLeft ? "40px" : 0 },
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.text}</Typography>
              </Box>

              {/* icon circle */}
              <Box
                sx={{
                  position: "absolute",
                  left: {
                    xs: 0,
                    md: "50%",
                  },
                  top: "50%",
                  transform: {
                    xs: "translateY(-50%)",
                    md: "translate(-50%, -50%)",
                  },
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 3,
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{
                    width: 23,
                    height: 23,
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Box>
    </Section>
  );
}
