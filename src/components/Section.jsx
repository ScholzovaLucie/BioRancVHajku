import React from "react";
import { Box, Container } from "@mui/material";

export default function Section({ id, children, sx }) {
  return (
    <Box id={id} component="section" sx={{ py: { xs: 6, md: 10 }, ...sx }}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
