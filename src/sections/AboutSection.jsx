import React from "react";
import { Typography } from "@mui/material";
import Section from "../components/Section";

var text = [
  "Jsme malá rodinná bio farma a chováme krávy, koně, muflony, prasata, slepice, králíky, husy i kachny.",
  "Můžete u nás najít i další zvířata, jako jsou psi, kočky, morčata, papoušci, osmáci, křecci a želvy.",
  "Rádi u nás přivítáme rodiny s dětmi a kohokoli, koho zajímá zemědělství a příroda. Můžeme nabídnout svezení na koních, pozorování stáda muflonů, pohlazení prasátek i pomazlení s ostatními zvířátky nebo jen klidné posezení v srdci přírody a odpočinek od neustálého shonu.",
  "Nabízíme ustájení koní v režimu 24/7 na rozlehlých pastvinách s možností úkrytu v přístřešku nebo pod četnými stromy. Voda a seno nonstop.",
  "Několikrát do roka můžeme nabídnout bio hovězí maso z našich býčků, kteří jsou celoročně na pastvinách.",
  "Ve spolupráci s Broumovským útulkem poskytujeme dočasnou péči a pomoc pro opuštěné pejsky a kočičky, ale i ostatní zvířátka, která to potřebují.",
  "Pro poutníky je možnost přenocování pod širým nebem nebo ve stanu v těsné blízkosti našich zvířátek. Pejsci i koníci jsou též vítáni.",
  "V létě pořádáme ve spolupráci s místní MAS příměstské tábory na téma pohyb v přírodě se zvířátky.",
  "Těšíme se na vaši návštěvu.",
];

export default function AboutSection() {
  return (
    <Section id="about">
      <Typography variant="h3" sx={{ mb: 2 }}>
        O nás
      </Typography>
      {text.map((item, index) => (
        <Typography
          key={index}
          sx={{
            fontSize: 18,
            lineHeight: 1.8,
            maxWidth: 800,
            mx: "auto",
          }}
        >
          {item}
        </Typography>
      ))}
    </Section>
  );
}
