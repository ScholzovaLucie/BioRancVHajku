import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const IMAGES = Array.from({ length: 55 }).map((_, i) => {
  const base = "gallery/img_" + i;
  return EXTENSIONS.map((ext) => base + "." + ext);
});

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const thumbsRef = useRef([]);
  const thumbsContainerRef = useRef(null);

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

  // preload next & previous image
  useEffect(() => {
    const nextIndex = (index + 1) % IMAGES.length;
    const prevIndex = index === 0 ? IMAGES.length - 1 : index - 1;

    const imgNext = new Image();
    imgNext.src = IMAGES[nextIndex][0];

    const imgPrev = new Image();
    imgPrev.src = IMAGES[prevIndex][0];
  }, [index]);

  useEffect(() => {
    const el = thumbsRef.current[index];
    const container = thumbsContainerRef.current;
    if (!el || !container) return;

    const elLeft = el.offsetLeft;
    const elWidth = el.clientWidth;
    const containerWidth = container.clientWidth;

    const scrollTo = elLeft - containerWidth / 2 + elWidth / 2;

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <Box
      id="gallery"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "80vh", sm: "90vh", md: "100vh" },
        overflow: "hidden",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.main",
      }}
    >
      {/* Obrázek */}
      <Box
        key={index}
        component="img"
        src={IMAGES[index][0]}
        onError={(e) => {
          const currentList = IMAGES[index];
          const currentSrc = e.currentTarget.src;
          const next = currentList.find(
            (s) => !currentSrc.endsWith(s.split(".").pop())
          );
          if (next) e.currentTarget.src = next;
        }}
        decoding="async"
        sx={{
          maxWidth: "100%",
          maxHeight: "80%",
          objectFit: { xs: "cover", md: "contain" },
          borderRadius: "15px",
          boxShadow: 3,
          transition: "opacity 0.4s ease, transform 0.3s ease",
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
          zIndex: 20,
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
          zIndex: 20,
          width: { xs: 36, md: 44 },
          height: { xs: 36, md: 44 },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Miniatury */}
      <Stack
        ref={thumbsContainerRef}
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          px: 2,
          overflowX: "auto",
          overflowY: "hidden",
          zIndex: 5,
          height: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {IMAGES.map((img, i) => (
          <Box
            key={i}
            ref={(el) => (thumbsRef.current[i] = el)}
            component="img"
            src={img[0]}
            onError={(e) => {
              const currentList = img;
              const currentSrc = e.currentTarget.src;
              const next = currentList.find(
                (s) => !currentSrc.endsWith(s.split(".").pop())
              );
              if (next) e.currentTarget.src = next;
            }}
            loading="lazy"
            decoding="async"
            onClick={() => {
              setPaused(true);
              setIndex(i);
            }}
            sx={{
              height: { xs: 60, md: 70 },
              width: "auto",
              borderRadius: "8px",
              cursor: "pointer",
              opacity: i === index ? 1 : 0.6,
              border: i === index ? "2px solid" : "2px solid transparent",
              borderColor: i === index ? "primary.main" : "transparent",
              transition: "0.2s",
              flexShrink: 0,
              pointerEvents: "auto",
              "&:hover": {
                opacity: 1,
                transform: "scale(1.05)",
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
