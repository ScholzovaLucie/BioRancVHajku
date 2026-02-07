import { Typography } from "@mui/material";
import Section from "../components/Section";

export default function AboutSection() {
  return (
    <Section id="about">
      <Typography variant="h3" sx={{ mb: 2 }}>
        O nás
      </Typography>

      <Typography
        sx={{
          fontSize: 18,
          lineHeight: 1.8,
          maxWidth: 800,
          mx: "auto",
        }}
      >
        Jsme malá začínající bio farma s přibližne čtiřiceti kusy krav, deseti
        koňmi, s několika husami, kachnami, slepicemi, prasaty, králikami.
      </Typography>

      <Typography
        sx={{
          fontSize: 18,
          lineHeight: 1.8,
          maxWidth: 800,
          mx: "auto",
        }}
      >
        Na našem pozemku můžete najít i několik nezemědělských zvížat, jako jsou
        mufloni, psi, kočky. Jsme docela pěkná atrakce pro rodiny s dětmi a pro
        kohokoli koho zajímá zemědělství. Můžeme Vám nabídnout projížďku na
        koních, vidění asi dvaceti kusového stáda muflonů, možná i pohlazení
        domácích prasat docela nevšedního vzhledu.
      </Typography>

      <Typography
        sx={{
          fontSize: 18,
          lineHeight: 1.8,
          maxWidth: 800,
          mx: "auto",
        }}
      >
        V některých případech nabízíme i kočky a vyjímečně i psi, kteří sou u
        nás v dočastné péči, díky spolupráci s Broumovským útulkem.
      </Typography>

      <Typography
        sx={{
          fontSize: 18,
          lineHeight: 1.8,
          maxWidth: 800,
          mx: "auto",
        }}
      >
        Kdyby jste měli zájem, můžeme Vám, zatím tedy jen v malé míře,
        nabídnou i několik kusů bio hovězího masa.
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          lineHeight: 1.8,
          maxWidth: 800,
          mx: "auto",
        }}
      >
        Budeme se na Vaši návštěvu moc těšit.
      </Typography>
    </Section>
  );
}
