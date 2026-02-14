import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import FocusSection from "./sections/FocusSection";
import AnimalsSection from "./sections/AnimalsSection";
import GallerySection from "./sections/GallerySection";
import MeatSection from "./sections/MeatSection";
import LesniklubSection from "./sections/LesniklubSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FocusSection />
      <AnimalsSection />
      <MeatSection />
      <LesniklubSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
