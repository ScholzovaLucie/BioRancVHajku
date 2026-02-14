import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Section from "../components/Section";
import { Padding } from "@mui/icons-material";

export default function ContactSection() {
  const formRef = useRef(null);

  const [data, setData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    to_email: "bio@rancvhajku.cz",
  });

  const [sending, setSending] = useState(false);

  const [snack, setSnack] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleChange = (e) => {
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS env vars are missing (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)."
      );
      setSnack({
        open: true,
        severity: "error",
        message: "Konfigurace formuláře chybí. Zkuste to prosím později.",
      });
      return;
    }

    try {
      setSending(true);

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setSnack({
        open: true,
        severity: "success",
        message: "Děkujeme! Zpráva byla odeslána.",
      });

      setData({ from_name: "", reply_to: "", message: "" });
    } catch (err) {
      console.error("Failed to send contact form via EmailJS.", err);
      setSnack({
        open: true,
        severity: "error",
        message: "Odeslání se nepodařilo. Zkuste to prosím znovu.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      sx={{
        width: "100%",
        px: { xs: 2, md: 8 },
        py: { xs: 5, md: 6 },
        m: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        Kontakt
      </Typography>

      <Box sx={{ width: "100%", mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="center"
          justifyContent="center"
          textAlign={{ xs: "center", md: "left" }}
        >
          {/* INFO */}
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Stack
              spacing={3}
              alignItems="center"
              width="100%"
              sx={{ width: "100%" }}
            >
              <Typography>
                <strong>Ranč v Hájku</strong>
              </Typography>
              <Typography>Email: bio@rancvhajku.cz</Typography>
              <Typography>Telefon: +420 737 787 061</Typography>
              <Typography>
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/RancvHajku"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#5a4d2f", fontWeight: 600 }}
                >
                  Otevřít profil
                </a>
              </Typography>
            </Stack>
          </Grid>

          {/* MAPA */}
          <Grid
            item
            xs={12}
            md={4}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <iframe
                title="Mapa Ranč v Hájku"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.0042696544265!2d16.247945815818834!3d50.496878291899286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e6988a31104f3%3A0x93d2ad3d546e9514!2sMachov%20195%2C%20549%2063%20Machov!5e0!3m2!1scs!2scz!4v1645477967250!5m2!1scs!2scz"
                width="100%"
                height="480"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid>

          {/* FORMULÁŘ */}
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              ref={formRef}
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              <Stack
                spacing={2}
                alignItems="center"
                sx={{ width: "100%", textAlign: "center" }}
              >
                <input type="hidden" name="to_email" value={data.to_email} />
                <TextField
                  label="Jméno"
                  name="from_name"
                  value={data.from_name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                <TextField
                  label="Email"
                  name="reply_to"
                  type="email"
                  value={data.reply_to}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                <TextField
                  label="Zpráva"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={sending}
                  sx={{ width: "100%" }}
                >
                  {sending ? "Odesílám..." : "Odeslat zprávu"}
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          severity={snack.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Section>
  );
}
