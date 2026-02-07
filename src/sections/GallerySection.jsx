import { useEffect, useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const IMAGES = Array.from({ length: 19 }).map(
  (_, i) => "/gallery/img_" + (i + 1) + ".jpg"
);

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => {
    setPaused(true);
    setIndex((i) => (i === 0 ? IMAGES.length - 1 : i - 1));
  };

  const next = () => {
    setPaused(true);
    setIndex((i) => (i === IMAGES.length - 1 ? 0 : i + 1));
  };

  // jemný autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % IMAGES.length),
      5000
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 8, md: 10 },
        position: "relative",
        width: "100%",
        height: { xs: "75vh", sm: "85vh", md: "100vh" },
        overflow: "hidden",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 8,
        bgcolor: "background.paper",
      }}
    >
      {/* Obrázek */}
      <Box
        component="img"
        src={IMAGES[index]}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: { xs: "cover", md: "contain" },
          borderRadius: "15px",
          boxShadow: 3,
          transition: "opacity 0.5s ease",
        }}
      />

      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 6, md: 12 },
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.85)",
          zIndex: 10,
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 6, md: 12 },
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.85)",
          zIndex: 10,
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      {/* Gradient for dots contrast */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 60, md: 80 },
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
      {/* Tečky */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 12, // pevně dole uvnitř slideru
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        {IMAGES.map((_, i) => (
          <Box
            key={i}
            onClick={() => {
              setPaused(true);
              setIndex(i);
            }}
            sx={{
              width: { xs: 12, md: 10 },
              height: { xs: 12, md: 10 },
              borderRadius: "50%",
              cursor: "pointer",
              bgcolor: i === index ? "primary.main" : "rgba(0,0,0,0.25)",
              transition: "0.2s",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
