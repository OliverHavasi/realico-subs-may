import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import asset_reklama_hero_ico_megaphone_png from "@/assets/reklama/hero_ico_megaphone.png";
import asset_reklama_hero_img_horse_png from "@/assets/reklama/hero_img_horse.png";
import asset_reklama_ico_banky_hypotekarne_spolocnosti_svg from "@/assets/reklama/ico_banky_hypotekarne_spolocnosti.svg";
import asset_reklama_ico_banner_svg from "@/assets/reklama/ico_banner.svg";
import asset_reklama_ico_dlhodoba_viditelnost_svg from "@/assets/reklama/ico_dlhodoba_viditelnost.svg";
import asset_reklama_ico_financne_investicne_firmy_svg from "@/assets/reklama/ico_financne_investicne_firmy.svg";
import asset_reklama_ico_flexbilita_svg from "@/assets/reklama/ico_flexbilita.svg";
import asset_reklama_ico_impakt_svg from "@/assets/reklama/ico_impakt.svg";
import asset_reklama_ico_individualne_riesenia_svg from "@/assets/reklama/ico_individualne_riesenia.svg";
import asset_reklama_ico_kontext_svg from "@/assets/reklama/ico_kontext.svg";
import asset_reklama_ico_kontextove_umiestnenia_svg from "@/assets/reklama/ico_kontextove_umiestnenia.svg";
import asset_reklama_ico_poistovne_svg from "@/assets/reklama/ico_poistovne.svg";
import asset_reklama_ico_publikum_svg from "@/assets/reklama/ico_publikum.svg";
import asset_reklama_ico_reklamne_formaty_svg from "@/assets/reklama/ico_reklamne_formaty.svg";
import asset_reklama_ico_rk_developeri_svg from "@/assets/reklama/ico_rk_developeri.svg";
import asset_reklama_ico_tech_real_estate_riesenia_svg from "@/assets/reklama/ico_tech_real_estate_riesenia.svg";
import asset_reklama_ico_vysledky_svg from "@/assets/reklama/ico_vysledky.svg";
import asset_reklama_ico_znacky_firmy_svg from "@/assets/reklama/ico_znacky_firmy.svg";
import asset_reklama_hero_bgr_icons_png from "@/assets/reklama/hero_bgr_icons.png";
import asset_reklama_hero_ico_mic_png from "@/assets/reklama/hero_ico_mic.png";
import asset_reklama_hero_ico_play_png from "@/assets/reklama/hero_ico_play.png";
import asset_reklama_formy_line_png from "@/assets/reklama/formy_line.png";

export const Route = createFileRoute("/reklama")({
  head: () => ({
    meta: [
      { title: "Reklama na Realico — vaša cesta k publiku" },
      { name: "description", content: "Spojte sa s publikom práve tam, kde ľudia hľadajú svoje nové bývanie." },
    ],
  }),
  component: ReklamaPage,
});

const why = [
  {
    icon: asset_reklama_ico_publikum_svg,
    title: "Relevantné",
    subtitle: "publikum",
    intro: "Oslovíte ľudí, ktorí riešia bývanie:",
    bullets: [
      "aktívni hľadači nehnuteľností",
      "záujemcovia o hypotéky a financie",
      "investori do realít",
      "rozhodujúci sa v reálnom čase",
    ],
  },
  {
    icon: asset_reklama_ico_impakt_svg,
    title: "Prirodzený",
    subtitle: "impakt",
    intro: "Reklama prepojená s kontextom realít:",
    bullets: [
      "vyššia dôveryhodnosť značky",
      "prirodzené umiestnenie v obsahu",
      "lepšia zapamätateľnosť",
      "kontaktný bod v správnom momente",
    ],
  },
  {
    icon: asset_reklama_ico_reklamne_formaty_svg,
    title: "Cielené reklamné",
    subtitle: "formáty",
    intro: "Cieľte presne podľa záujmu:",
    bullets: [
      "kontextové cielenie",
      "parametre nehnuteľností",
      "geografická segmentácia",
      "behaviorálne dáta",
    ],
  },
  {
    icon: asset_reklama_ico_kontext_svg,
    title: "Dôveryhodný",
    subtitle: "kontext",
    intro: "Profesionálne prostredie pre vašu značku:",
    bullets: [
      "moderná realitná platforma",
      "overení partneri v ekosystéme",
      "kvalitný obsah a UX",
      "transparentné dáta",
    ],
  },
  {
    icon: asset_reklama_ico_flexbilita_svg,
    title: "Flexibilita",
    subtitle: "spolupráce",
    intro: "Vyberte si formát na mieru:",
    bullets: [
      "krátkodobé kampane",
      "dlhodobý branding",
      "natívne integrácie",
      "individuálne riešenia",
    ],
  },
  {
    icon: asset_reklama_ico_vysledky_svg,
    title: "Merateľné",
    subtitle: "výsledky",
    intro: "Transparentné reporty a nástroje:",
    bullets: [
      "real-time dashboard",
      "konverzné metriky",
      "analytika publika",
      "pravidelný reporting",
    ],
  },
];

const audience = [
  { icon: asset_reklama_ico_rk_developeri_svg, label: "Realitné kancelárie\na developeri" },
  { icon: asset_reklama_ico_banky_hypotekarne_spolocnosti_svg, label: "Banky a hypotekárne\nspoločnosti" },
  { icon: asset_reklama_ico_financne_investicne_firmy_svg, label: "Finančné\na investičné firmy" },
  { icon: asset_reklama_ico_poistovne_svg, label: "Poisťovne a služby\nspojené s bývaním" },
  { icon: asset_reklama_ico_tech_real_estate_riesenia_svg, label: "Technologické a real\nestate riešenia" },
  { icon: asset_reklama_ico_znacky_firmy_svg, label: "Značky a firmy\nnaprieč odvetviami" },
];

const forms = [
  { side: "right", icon: asset_reklama_ico_banner_svg, title: "Bannerová reklama\nv rámci platformy", body: "Vizuálne, relevantné plochy integrované do prirodzeného obsahu." },
  { side: "left", icon: asset_reklama_ico_kontextove_umiestnenia_svg, title: "Tematické a kontextové\numiestnenia", body: "Reklama vznikne presne na základe kontextu obsahu zobrazenia." },
  { side: "right", icon: asset_reklama_ico_dlhodoba_viditelnost_svg, title: "Dlhodobá brandová\nviditeľnosť", body: "Stabilná prítomnosť značky na dlhšie dôveru a povedomie času." },
  { side: "left", icon: asset_reklama_ico_individualne_riesenia_svg, title: "Individuálne reklamné\nriešenia na mieru", body: "Riešenia šité na mieru prispôsobené cielom partnerov a značky." },
];

function ReklamaPage() {
  return (
    <div className="bg-white">
      {/* HERO — yellow with sharp straight bottom edge (no stroke) */}
      <section
        className="relative hero-flat hero-doodle min-h-[720px] overflow-visible"
        style={{ ["--doodle-bg" as never]: `url(${asset_reklama_hero_bgr_icons_png})` }}
      >
        <SiteHeader />
        <div className="relative mx-auto max-w-[1280px] px-6 pt-44 pb-44 grid md:grid-cols-2 gap-10 z-10">
          <div className="relative">
            <h1 className="font-display md:text-[52px] leading-[1.02] tracking-[-0.04em] font-bold text-white text-5xl">
              Reklama na Realico<br /><span>je vaša cesta k publiku.</span>
            </h1>
            <p className="mt-5 text-[13px] text-[#191919]/85 max-w-md leading-6">
              Realico je moderná realitná platforma využívajúca najnovšie technológie, ktoré spájajú používateľov hľadajúcich bývanie a investičné platformy s overenými partnermi. Vaša reklama na nás zasiahne s inovatívnym a dynamickým spôsobom známym dnes na trhu hľadania.
            </p>
            <button className="mt-8 btn-dark">Viac informácií</button>
            {/* Mic icon — right of the button, near character's waist level */}
            <img src={asset_reklama_hero_ico_mic_png} alt="" className="absolute bottom-0 left-[260px] w-12 pointer-events-none opacity-95 z-30" />
          </div>
          <div className="relative h-full">
            {/* Play icon — between text column and character's torso */}
            <img src={asset_reklama_hero_ico_play_png} alt="" className="absolute top-[35%] -left-12 w-11 pointer-events-none opacity-95 z-30" />
          </div>
        </div>

        {/* Horse-mask figure — extends past yellow into white section */}
        <img
          src={asset_reklama_hero_img_horse_png}
          alt=""
          className="hero-figure w-[720px] max-w-none z-20"
          style={{ bottom: "-6px" }}
        />

        {/* Megaphone — straddles the boundary, half yellow / half white */}
        <img
          src={asset_reklama_hero_ico_megaphone_png}
          alt=""
          className="absolute left-[34%] w-[150px] z-30 pointer-events-none opacity-95"
          style={{ bottom: "-60px" }}
        />
      </section>

      {/* Why */}
      <section className="container-wide pt-24">
        <h2 className="font-display text-center text-[34px] text-[#191919] tracking-[-0.05em] font-bold">
          Prečo to stojí za to<span className="text-hero">?</span>
        </h2>
        <div className="mt-20 grid md:grid-cols-3 max-w-6xl mx-auto">
          {why.map((w, i) => {
            const col = i % 3;
            const isLastRow = i >= why.length - 3;
            return (
              <div
                key={w.title}
                className="px-12 py-16 text-center flex flex-col items-center"
                style={{
                  borderRight: col !== 2 ? "1px solid #e9e9e9" : undefined,
                  borderBottom: !isLastRow ? "1px solid #e9e9e9" : undefined,
                }}
              >
                <img src={w.icon} alt="" className="h-36 w-auto" />
                <h3 className="font-display mt-9 text-[22px] font-bold text-[#191919] tracking-[-0.05em] leading-[1.15]">
                  {w.title}<br />{w.subtitle}
                </h3>
                <p className="mt-7 text-[13px] text-[#191919]/70 leading-[1.6] max-w-[260px]">{w.intro}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Audience — expanded scale per mockup */}
      <section className="bg-[#f7f7f5] mt-48 py-40">
        <h2 className="font-display text-center text-[32px] text-[#191919] tracking-[-0.05em] font-bold">
          Pre koho je reklama vhodná<span className="text-hero">?</span>
        </h2>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {audience.map((a) => (
            <div key={a.label} className="bg-white rounded-xl p-10 text-center shadow-[0_2px_24px_rgba(0,0,0,0.04)] card-hover">
              <img src={a.icon} alt="" className="h-32 w-auto mx-auto" />
              <div className="font-display mt-6 font-bold text-[#191919] whitespace-pre-line leading-[1.3] tracking-[-0.05em] text-lg">
                {a.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Forms (timeline) */}
      <section className="container-wide pt-40">
        <h2 className="font-display text-center text-[#191919] tracking-[-0.05em] font-bold text-4xl">
          Formy reklamy<span className="text-hero">:</span>
        </h2>

        {(() => {
          const LINE_H = 1200;
          const LINE_W = 160;
          const dotY = [10.49, 36.43, 62.27, 88.23];
          return (
            <div
              className="mt-20 relative mx-auto"
              style={{ height: `${LINE_H}px`, maxWidth: "1100px" }}
            >
              <img
                src={asset_reklama_formy_line_png}
                alt=""
                aria-hidden
                className="pointer-events-none select-none absolute left-1/2 top-0 -translate-x-1/2"
                style={{ width: `${LINE_W}px`, height: `${LINE_H}px` }}
              />
              {forms.map((f, i) => {
                const topPx = (dotY[i] / 100) * LINE_H;
                const isRight = f.side === "right";
                return (
                  <div
                    key={i}
                    className="absolute left-0 right-0"
                    style={{ top: `${topPx}px`, transform: "translateY(-50%)" }}
                  >
                    <div className="grid grid-cols-2 items-center">
                      {isRight ? (
                        <>
                          <div className="flex justify-end pr-24">
                            <img src={f.icon} alt="" className="h-[141px]" />
                          </div>
                          <div className="pl-24" style={{ transform: "translateX(20px)" }}>
                            <h4 className="font-display font-bold text-[#191919] whitespace-pre-line tracking-[-0.05em] text-[20px] leading-[1.2]">{f.title}</h4>
                            <p className="text-[#191919]/60 mt-3 leading-[1.6] max-w-[260px] text-[12px]">{f.body}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-right pr-24" style={{ transform: "translateX(-20px)" }}>
                            <h4 className="font-display font-bold text-[#191919] whitespace-pre-line tracking-[-0.05em] text-[20px] leading-[1.2]">{f.title}</h4>
                            <p className="text-[#191919]/60 mt-3 leading-[1.6] max-w-[260px] text-[12px] ml-auto">{f.body}</p>
                          </div>
                          <div className="pl-24">
                            <img src={f.icon} alt="" className="h-[141px]" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </section>

      {/* CTA */}
      <section className="container-narrow py-28 text-center">
        <h3 className="font-display text-[22px] font-bold text-[#191919] tracking-[-0.025em]">Budujte svoju značku na Realico.</h3>
        <p className="text-[12px] text-[#191919]/70 mt-4">
          Oslovte správne publikum priamo tam, kde ľudia hľadajú svoje nové bývanie.<br />
          Zanechajte nám svoj e-mail a my sa vám ozveme s ponukou na mieru.
        </p>
        <div className="mt-8 max-w-md mx-auto flex items-center gap-2">
          <input placeholder="Zadajte Váš e-mail" className="flex-1 rounded-full border border-[#191919]/15 px-5 py-2.5 text-[12px] outline-none" />
          <button className="btn-dark">Odoslať</button>
        </div>
        <p className="mt-6 text-[12px] text-[#191919]/60">reklama@realico.sk</p>
      </section>

      <SiteFooter />
    </div>
  );
}
