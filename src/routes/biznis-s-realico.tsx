import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import asset_invest_invest_header_man_png from "@/assets/invest/biznis_hero_img.png";
import asset_biznis_hero_bgr_icons from "@/assets/invest/biznis_hero_bgr_icons.png";
import asset_biznis_hero_ico_moneysack from "@/assets/invest/biznis_hero_ico_moneysack.png";
import asset_invest_invest_ico_ai_first_platforma_svg from "@/assets/invest/invest_ico_ai_first_platforma.svg";
import asset_invest_invest_ico_ai_vyhladavanie_svg from "@/assets/invest/invest_ico_ai_vyhladavanie.svg";
import asset_invest_invest_ico_banky_svg from "@/assets/invest/invest_ico_banky.svg";
import asset_invest_invest_ico_buducnost_realit_svg from "@/assets/invest/invest_ico_buducnost_realit.svg";
import asset_invest_invest_ico_developeri_svg from "@/assets/invest/invest_ico_developeri.svg";
import asset_invest_invest_ico_expanzia_cee_svg from "@/assets/invest/invest_ico_expanzia_cee.svg";
import asset_invest_invest_ico_inteligentny_match_svg from "@/assets/invest/invest_ico_inteligentny_match.svg";
import asset_invest_invest_ico_majitelia_svg from "@/assets/invest/invest_ico_majitelia.svg";
import asset_invest_invest_ico_nove_inzertne_modely_svg from "@/assets/invest/invest_ico_nove_inzertne_modely.svg";
import asset_invest_invest_ico_otvoreny_ekosystem_svg from "@/assets/invest/invest_ico_otvoreny_ekosystem.svg";
import asset_invest_invest_ico_produkt_a_technologia_svg from "@/assets/invest/invest_ico_produkt_a_technologia.svg";
import asset_invest_invest_ico_rast_uzivatelskej_zakladne_svg from "@/assets/invest/invest_ico_rast_uzivatelskej_zakladne.svg";
import asset_invest_invest_ico_realico_x_svg from "@/assets/invest/invest_ico_realico_x.svg";
import asset_invest_invest_ico_rezidenti_svg from "@/assets/invest/invest_ico_rezidenti.svg";
import asset_invest_invest_ico_rozvoj_ai_funkcii_svg from "@/assets/invest/invest_ico_rozvoj_ai_funkcii.svg";
import asset_invest_invest_ico_rychlejsi_vyber_svg from "@/assets/invest/invest_ico_rychlejsi_vyber.svg";
import asset_invest_invest_ico_sloboda_svg from "@/assets/invest/invest_ico_sloboda.svg";
import asset_invest_invest_ico_smart_vyhladavanie_svg from "@/assets/invest/invest_ico_smart_vyhladavanie.svg";

import asset_invest_kam_smeruje_line_png from "@/assets/invest/invest_kam_smeruje_line.png";
import asset_underline_onas_svg from "@/assets/home/realicox_underline_onas.svg";
import asset_biznis_ico_ai_first from "@/assets/invest/biznis_ico_ai_first.svg";
import asset_biznis_ico_algorytm from "@/assets/invest/biznis_ico_algorytm_parovanie.svg";
import asset_biznis_ico_workflow from "@/assets/invest/biznis_workflow_sloboda.svg";
import asset_biznis_ico_inovacne from "@/assets/invest/biznis_ico_inovacne_jadro.svg";
import asset_biznis_ico_individual from "@/assets/invest/biznis_ico_individual_rozhranie.svg";
import asset_biznis_ico_pripravenost from "@/assets/invest/biznis_ico_pripravenost.svg";
import asset_biznis_ico_makleri from "@/assets/invest/biznis_ico_makleri.svg";
import asset_biznis_ico_developerske from "@/assets/invest/biznis_ico_developerske_spolocnosti.svg";
import asset_biznis_ico_hypo from "@/assets/invest/biznis_ico_hypo_specialisti.svg";
import asset_biznis_ico_banky_partner from "@/assets/invest/biznis_ico_banky.svg";

const partnerships = [
  { icon: asset_biznis_ico_makleri, title: "Makléri", subtitle: "a realitné kancelárie" },
  { icon: asset_biznis_ico_developerske, title: "Developerské", subtitle: "spoločnosti" },
  { icon: asset_biznis_ico_hypo, title: "Hypotekárni", subtitle: "špecialisti" },
  { icon: asset_biznis_ico_banky_partner, title: "Banky", subtitle: "a finančné inštitúcie" },
];

const allInOneFeatures = [
  { icon: asset_biznis_ico_ai_first, title: "AI-first realitná platforma", body: "Systém samostatne triedi a vyhodnocuje realitné dáta, čím nahrádza manuálnu prácu a radikálne znižuje chybovosť procesov." },
  { icon: asset_biznis_ico_algorytm, title: "Algoritmické párovanie dopytu", body: "Technológia prepája nehnuteľnosti s relevantnými záujemcami. Partneri získavajú kvalitnejšie leady, investori vyššiu efektivitu." },
  { icon: asset_biznis_ico_workflow, title: "Kompletný workflow v jedinom rozhraní", body: "Celý predaj prebieha digitálne v jednom bezpečnom prostredí. Od kontaktu po uzavretie bez zbytočnej administratívy." },
  { icon: asset_biznis_ico_inovacne, title: "Inovačné jadro Realico X", body: "Špeciálny priestor, kde transformujeme odvážne technologické vízie na funkčné nástroje plne pripravené pre náročný realitný trh." },
  { icon: asset_biznis_ico_individual, title: "Individuálne rozhranie pre každého užívateľa", body: "Platforma sa priebežne učí z vašich preferencií a automaticky zobrazuje len ten najrelevantnejší obsah pre vašu potrebu." },
  { icon: asset_biznis_ico_pripravenost, title: "Pripravenosť na okamžitý rast", body: "Moderné technické zázemie umožňuje hladké prepojenie s externými partnermi a plynulú expanziu na nové zahraničné trhy." },
];

export const Route = createFileRoute("/biznis-s-realico")({
  head: () => ({
    meta: [
      { title: "Investujte do Realico — Tvorte s nami nový štandard" },
      { name: "description", content: "Realico mení desaťročia neefektivity. Buďte pri tom." },
    ],
  }),
  component: InvestPage,
});

const standardIcons = [
  { icon: asset_invest_invest_ico_ai_first_platforma_svg, label: "AI-first platforma\nnovej generácie" },
  { icon: asset_invest_invest_ico_rychlejsi_vyber_svg, label: "Rýchlejší a presnejší\nvýber nehnuteľnosti" },
  { icon: asset_invest_invest_ico_inteligentny_match_svg, label: "Inteligentný match\ndopytu a ponuky" },
  { icon: asset_invest_invest_ico_ai_vyhladavanie_svg, label: "Vyhľadávanie pohánené\ndátami a AI" },
  { icon: asset_invest_invest_ico_otvoreny_ekosystem_svg, label: "Otvorený ekosystém\npre partnerov" },
  { icon: asset_invest_invest_ico_buducnost_realit_svg, label: "Budúcnosť realít\nuž dnes" },
];

const products = [
  {
    icon: asset_invest_invest_ico_smart_vyhladavanie_svg,
    title: "Smart",
    subtitle: "vyhľadávanie",
    intro: "Realico rozumie tomu, čo skutočne hľadáte:",
    bullets: [
      "hlasová a prirodzená konverzácia",
      "pamäť preferencií používateľa",
      "kontextové výsledky",
      "inteligentné odporúčania",
      "menej klikov, viac relevantných ponúk",
    ],
  },
  {
    icon: asset_invest_invest_ico_realico_x_svg,
    title: "Realico X",
    subtitle: "AI asistent",
    intro: "Realico X je inteligentný AI asistent, ktorý:",
    bullets: [
      "rozumie prirodzenému jazyku (text aj hlas),",
      "predikuje najrelevantnejšie nehnuteľnosti",
      "prispôsobuje odporúčania používateľovi v reálnom čase",
      "automatizuje rozhodovanie cez dátové modely",
    ],
  },
  {
    icon: asset_invest_invest_ico_sloboda_svg,
    title: "Sloboda",
    subtitle: "pre partnerov",
    intro: "Realitným kanceláriám a partnerom prinášame:",
    bullets: [
      "viac flexibility a slobody prezentácie",
      "férové podmienky a transparentnosť",
      "možnosť spravovať vlastné ponuky",
      "jednoduchá integrácia do ich procesov",
    ],
  },
  {
    icon: asset_invest_invest_ico_produkt_a_technologia_svg,
    title: "Produkt",
    subtitle: "& technológia",
    intro: "Moderná platforma pripravená na rast:",
    bullets: [
      "škálovateľná a robustná architektúra",
      "AI a dáta pre presnejšie vyhľadávanie",
      "pripravená na integrácie a nové funkcie",
      "bezproblémový a personalizovaný zážitok",
    ],
  },
];

const audiences = [
  { icon: asset_invest_invest_ico_rezidenti_svg, title: "Rezidenti", body: "kupujúce a zaujímané" },
  { icon: asset_invest_invest_ico_majitelia_svg, title: "Majitelia", body: "predaj a prenájom" },
  { icon: asset_invest_invest_ico_developeri_svg, title: "Developeri", body: "a realitní kancelárie" },
  { icon: asset_invest_invest_ico_banky_svg, title: "Banky", body: "hypotéky a financie" },
];

const roadmap = [
  { side: "right", icon: asset_invest_invest_ico_rozvoj_ai_funkcii_svg, title: "Rozvoj kľúčových\nAI funkcií", body: "Rozšírenie inteligent funkcií ako sú prediktívne hľadanie a AI asistent v reáľnom čase." },
  { side: "left", icon: asset_invest_invest_ico_rast_uzivatelskej_zakladne_svg, title: "Rast používateľskej\nzákladne", body: "Aktívna nabore klientov v všetkých regiónoch a úspešná integrácia v krajinách Stredom Východe." },
  { side: "right", icon: asset_invest_invest_ico_nove_inzertne_modely_svg, title: "Nové inzertné\na partnerské modely", body: "Spustenie nových biznis modelov a unikátnych spôsobov spolupráce s partnermi v ekosystéme." },
  { side: "left", icon: asset_invest_invest_ico_expanzia_cee_svg, title: "Expanzia CEE", body: "Vstúpiť na Český a Maďarský trh s plne lokalizovaným riešením." },
];

function InvestPage() {
  return (
    <div className="bg-white">
      {/* HERO — gradient background, doodles centered, dollar coin straddles boundary */}
      <section
        className="relative hero-flat overflow-hidden"
        style={{ height: "550px" }}
      >
        {/* Doodle background layer — centered, original size, not stretched */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${asset_biznis_hero_bgr_icons})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "100% auto",
          }}
        />
        <SiteHeader />
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-[1280px] px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <h1 className="font-display md:text-[52px] leading-[1.02] tracking-[-0.04em] font-bold text-white text-5xl">
                Tvorte s nami.
              </h1>
              <p className="mt-5 text-[#191919] max-w-md leading-6 text-lg font-medium">
                Realico mení pravidlá realitného vyhľadávania.
              </p>
              <p className="mt-4 text-[13px] text-[#191919]/80 max-w-md leading-6">
                Naša AI-first platforma zvyšuje efektivitu používateľov, prináša viac možností realitným partnerom a vytvára jasnú rastovú príležitosť pre investorov, ktorí chcú byť súčasťou budúcnosti trhu.
              </p>
              <button className="mt-7 btn-dark">Viac informácií</button>
            </div>
            <div />
          </div>
        </div>
        <img
          src={asset_invest_invest_header_man_png}
          alt=""
          className="hero-figure"
          style={{ height: "480px", width: "auto", maxWidth: "none", right: "calc(12% + 50px)" }}
        />
        <img
          src={asset_biznis_hero_ico_moneysack}
          alt=""
          aria-hidden
          className="absolute left-1/2 z-20 pointer-events-none select-none"
          style={{ bottom: "-70px", width: "119px", height: "auto", transform: "translateX(calc(-50% - 350px))" }}
        />
      </section>

      {/* Realico all-in-one features */}
      <section className="bg-white">
        <div className="mx-auto px-6" style={{ maxWidth: "1400px" }}>
          <div>
            <div style={{ paddingTop: "160px", paddingBottom: "40px" }}>
              <h2 className="font-display text-center text-[#191919] tracking-[-0.04em] font-bold text-4xl md:text-5xl">
                Realico – vaše realitné all-in-one<span className="text-hero">:</span>
              </h2>
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3">
                {allInOneFeatures.map((f, i) => {
                  const col = i % 3;
                  const row = Math.floor(i / 3);
                  return (
                    <div
                      key={f.title}
                      className="flex flex-col items-start text-left"
                      style={{
                        padding: "40px 48px",
                        borderRight: col < 2 ? "1px solid #e9e9e9" : undefined,
                        borderBottom: row === 0 ? "1px solid #e9e9e9" : undefined,
                      }}
                    >
                      <img src={f.icon} alt="" style={{ height: "120px", width: "auto" }} />
                      <h3 className="font-display font-bold text-black leading-[1.2]" style={{ fontSize: "22px", marginTop: "32px" }}>
                        {f.title}
                      </h3>
                      <p className="text-[#4b5563] leading-[1.6]" style={{ fontSize: "13px", marginTop: "16px", maxWidth: "280px" }}>
                        {f.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pripravení na partnerstvo? */}
      <section className="bg-white pt-24 pb-16">
        <div className="mx-auto px-6" style={{ maxWidth: "1400px" }}>
          <h2 className="font-display text-center text-[#191919] tracking-[-0.04em] font-bold" style={{ fontSize: "40px" }}>
            Pripravení na partnerstvo<span className="text-hero">?</span>
          </h2>
          <p className="text-center text-[#191919] mx-auto mt-6 leading-[1.6]" style={{ fontSize: "14px", maxWidth: "820px" }}>
            Naše riešenia sme vyvinuli pre kľúčových hráčov, ktorí tvoria trh. Či už ste progresívna realitná kancelária, developer, hypotekárny špecialista alebo finančná inštitúcia, Realico vám poskytne technológie pre novú éru biznisu.
          </p>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-12 max-w-6xl mx-auto">
            {partnerships.map((p, i) => (
              <div key={p.title} className="flex flex-col items-center text-center relative px-4">
                {i !== 0 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute left-0 w-px"
                    style={{ backgroundColor: "#f7e59c", height: "70px", bottom: "0" }}
                  />
                )}
                <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 270deg, #c3c3c3 0deg, rgba(195,195,195,0) 359deg, #ffffff 360deg)",
                      WebkitMask: "radial-gradient(circle, transparent 0 51px, #000 52px 60px, transparent 61px)",
                      mask: "radial-gradient(circle, transparent 0 51px, #000 52px 60px, transparent 61px)",
                    }}
                  />
                  <img src={p.icon} alt="" className="relative w-12 h-12 object-contain" />
                </div>
                <h3 className="mt-14 font-display text-[18px] font-bold text-[#191919] leading-tight">
                  {p.title}
                </h3>
                <div className="text-hero text-[16px] font-bold leading-tight mt-1">
                  {p.subtitle}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24" style={{ height: "1px", backgroundColor: "#d6d6d6" }} />
        </div>
      </section>

      {/* Roadmap */}
      <section className="container-wide pt-24">
        <h2 className="font-display text-center text-[#191919] tracking-[-0.05em] font-bold text-4xl">
          Kam Realico smeruje<span className="text-hero">?</span>
        </h2>
        <p className="text-center text-[13px] text-[#191919]/70 mt-4 max-w-xl mx-auto">
          Naša cesta smeruje k inteligentnejším riešeniam, širšej komunite a expanzii do strednej Európy — presne tam, kde sa stretáva inovácia s rastom.
        </p>

        {(() => {
          const LINE_H = 1200; // total height of the line graphic
          const LINE_W = 160;  // rendered width of the curved line (256:1920 -> ~160:1200)
          // Y-positions of yellow dots in the source PNG (percent of image height)
          const dotY = [10.52, 36.46, 62.29, 88.23];
          return (
            <div
              className="mt-20 relative mx-auto"
              style={{ height: `${LINE_H}px`, maxWidth: "1100px" }}
            >
              {/* Curved vertical line — exact PNG from upload, centered */}
              <img
                src={asset_invest_kam_smeruje_line_png}
                alt=""
                aria-hidden
                className="pointer-events-none select-none absolute left-1/2 top-0 -translate-x-1/2"
                style={{ width: `${LINE_W}px`, height: `${LINE_H}px` }}
              />
              {roadmap.map((r, i) => {
                const topPx = (dotY[i] / 100) * LINE_H;
                const isRight = r.side === "right"; // dot/text on right side of line
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
                            <img src={r.icon} alt="" className="h-[141px]" />
                          </div>
                          <div className="pl-24" style={{ transform: "translateX(20px)" }}>
                            <h4 className="font-display font-bold text-[#191919] whitespace-pre-line tracking-[-0.05em] text-[20px] leading-[1.2]">{r.title}</h4>
                            <p className="text-[#191919]/60 mt-3 leading-[1.6] max-w-[260px] text-[12px]">{r.body}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-right pr-24" style={{ transform: "translateX(-20px)" }}>
                            <h4 className="font-display font-bold text-[#191919] whitespace-pre-line tracking-[-0.05em] text-[20px] leading-[1.2]">{r.title}</h4>
                            <p className="text-[#191919]/60 mt-3 leading-[1.6] max-w-[260px] text-[12px] ml-auto">{r.body}</p>
                          </div>
                          <div className="pl-24">
                            <img src={r.icon} alt="" className="h-[141px]" />
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
      <section className="py-32 text-center">
        <div className="mx-auto px-6" style={{ maxWidth: "1400px" }}>
          <h3 className="font-display font-bold text-[#191919] tracking-[-0.03em]" style={{ fontSize: "32px" }}>
            Staňte sa súčasťou našej cesty
          </h3>
          <p className="text-[#191919]/80 mx-auto leading-[1.7]" style={{ fontSize: "15px", marginTop: "32px", maxWidth: "880px" }}>
            Ponúkame flexibilné investičné príležitosti pre všetkých, ktorí chcú s nami tvoriť inovatívnu budúcnosť realitného trhu.
            <br />
            Ak máte záujem o investičný vstup do Realico, zanechajte nám svoj e-mail a získajte podrobné investičné materiály.
          </p>
          <div className="flex justify-center" style={{ marginTop: "48px" }}>
            <button className="btn-dark">Kontaktuje nás</button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
