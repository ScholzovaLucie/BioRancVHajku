import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5a4d2f",
    },
    secondary: {
      main: "#d9c39a",
    },
    background: {
      default: "#f5f3ee",
      paper: "#ffffff",
    },
    text: {
      primary: "#1c1c1c",
      secondary: "#5a4d2f",
    },
  },
  typography: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
