import { Box, Container, Stack, Typography, Link } from "@mui/material";
import Logo from "/sweby_logo.png";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        bgcolor: "primary.main",
        color: "rgba(255,255,255,0.85)",
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography align="center" sx={{ opacity: 0.85 }}>
            © {new Date().getFullYear()} Ranč v Hájku
          </Typography>

          <Link
            href="https://s-weby.cz"
            target="_blank"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              verticalAlign: "middle",
              gap: 1,
              fontWeight: 600,
              color: "secondary.light",
              transition: "0.2s",
              "&:hover": {
                color: "secondary.main",
                transform: "scale(1.03)",
              },
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ width: 18, height: 18, objectFit: "contain" }}
            />
            Ing. Lucie Nováková
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
