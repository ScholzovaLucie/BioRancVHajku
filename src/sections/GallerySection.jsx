import { Grid, Paper, Typography } from "@mui/material";
import Section from "../components/Section";

const IMAGES = Array.from({ length: 9 }).map((_, i) => i);

export default function GallerySection() {
  return (
    <Section id="gallery" sx={{ backgroundColor: "background.paper" }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Fotogalerie
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {" "}
        {IMAGES.map((i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Paper
              sx={{
                height: 200,
                background: "linear-gradient(135deg, #d9c39a, #5a4d2f)",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
