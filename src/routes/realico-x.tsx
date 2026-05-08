import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logo_realicox_white from "@/assets/brand/realicox_logo_white_gold_y_dot.svg";
import s_organizer from "@/assets/x/sluzby_ico_organizer.svg";
import s_moj_email from "@/assets/x/sluzby_ico_moj_email.svg";
import s_statistiky from "@/assets/x/sluzby_ico_statistiky.svg";
import s_dopyty from "@/assets/x/sluzby_ico_dopyty.svg";
import s_obhliadky from "@/assets/x/sluzby_ico_obhliadky.svg";
import s_databaza from "@/assets/x/sluzby_ico_databaza_klientov.svg";
import s_dokumenty from "@/assets/x/sluzby_ico_dokumenty_a_tlaciva.svg";
import s_obchody from "@/assets/x/sluzby_ico_obchody.svg";
import s_ponuky from "@/assets/x/sluzby_ico_ponuky.svg";
import s_marketing from "@/assets/x/sluzby_ico_marketing.svg";
import s_aml from "@/assets/x/sluzby_ico_aml_overenie_klienta.svg";
import s_webprofil from "@/assets/x/sluzby_ico_moj_webprofil.svg";
import s_mls from "@/assets/x/sluzby_ico_spolupraca_mls.svg";
import s_financovanie from "@/assets/x/sluzby_ico_financovanie.svg";
import s_pravo from "@/assets/x/sluzby_ico_pravo_kataster_dane.svg";
import s_referencie from "@/assets/x/sluzby_ico_referencie.svg";
import s_plus from "@/assets/x/sluzby_ico_plus.svg";
import asset_x_sub_x_hero_bgr_jpg from "@/assets/x/sub_x_hero_bgr.jpg";
import asset_x_sub_x_hero_screens_png from "@/assets/x/sub_x_hero_screens.png";
import asset_x_sub_x_ico_auto_marketing_mls_png from "@/assets/x/sub_x_ico_auto_marketing_mls.png";
import asset_x_sub_x_ico_crm_png from "@/assets/x/sub_x_ico_crm.png";
import asset_x_sub_x_ico_digital_epodpis_png from "@/assets/x/sub_x_ico_digital_epodpis.png";
import asset_x_sub_x_ico_financie_png from "@/assets/x/sub_x_ico_financie.png";
import asset_x_sub_x_ico_optimalizacia_png from "@/assets/x/sub_x_ico_optimalizacia.png";
import asset_x_sub_x_ico_pravo_kataster_png from "@/assets/x/sub_x_ico_pravo_kataster.png";
import asset_x_sub_x_ico_smart_matching_png from "@/assets/x/sub_x_ico_smart_matching.png";
import asset_x_sub_x_ico_statistiky_png from "@/assets/x/sub_x_ico_statistiky.png";
import asset_x_sub_x_ico_vzdelavanie_komunita_png from "@/assets/x/sub_x_ico_vzdelavanie_komunita.png";
import asset_x_sub_x_screens_jpg from "@/assets/x/sub_x_screens.jpg";
import asset_x_sub_x_line_element_png from "@/assets/x/sub_x_line_element.png";

export const Route = createFileRoute("/realico-x")({
  head: () => ({
    meta: [
      { title: "Realico X — Kompletný realitný ekosystém v jednom rozhraní" },
      { name: "description", content: "CRM, marketing, právo, AI asistent — všetko v jednom dashboarde." },
    ],
  }),
  component: RealicoXPage,
});

const features = [
  { title: "Inteligentné CRM a Organizér", icon: asset_x_sub_x_ico_crm_png, body: "Majte všetky podstatné dôležité informácie a kontakty. Systém vám umožní nastavovať na základe atribútov a automaticky prioritovať váš pracovný deň." },
  { title: "Právo, Kataster a AML overenie", icon: asset_x_sub_x_ico_pravo_kataster_png, body: "Generujte zmluvy, overujte vlastníctvo, pristupujte ku katastru a robte záznamy AML overenia klienta priamo v rozhraní. Rýchlo, bezpečne a digitálne." },
  { title: "Automatizovaný Marketing a MLS", icon: asset_x_sub_x_ico_auto_marketing_mls_png, body: "Export tlpu ponuky na všetky portály jediným klikom. Vyžívajte silu MLS systému na získanie práce alebo pomôcť klientom integrovane referenčne." },
  { title: "Digitálna kancelária a E-podpis", icon: asset_x_sub_x_ico_digital_epodpis_png, body: "Uzatvárajte zmluvy na diaľku s overiteľným e-podpisom, dôverné cloudové úložisko dokumentov. Realico X je vaša cestovná teplo, ktorá máte naozaj na vrcholu…" },
  { title: "Financie a Business Intelligence", icon: asset_x_sub_x_ico_financie_png, body: "Sledujte realitný výkon vašich obchodov v reálnom čase. Naše Smart-data Cell metriky overujú, čo sú integrovaný nové úlohy pre financovanie a nehnuteľnosti." },
  { title: "Vzdelávanie a Komunita", icon: asset_x_sub_x_ico_vzdelavanie_komunita_png, body: "Realico X je viac ako softvér. Získajte prístup k workshopom, know-how a webinárom. Vzdelávanie a vašej zdroj sa staráme v silnom motivovanom tíme firiem." },
];

const aiSteps = [
  { title: "Prediktívne Štatistiky", icon: asset_x_sub_x_ico_statistiky_png, body: "RealicoX analyzuje trh v plnom čase a poskytuje ako analytický nástroj náhľad cenového, trh investícií aj odhadov klientov." },
  { title: "Smart Matching", icon: asset_x_sub_x_ico_smart_matching_png, body: "Systém inteligentne spojuje vaše ponuky s dopytmi a obchodom v dostupnosti na nehnuteľných klientov." },
  { title: "Optimalizácia predaja", icon: asset_x_sub_x_ico_optimalizacia_png, body: "Na základe analýzy dáme obchodov sieť AI optimalizuje, ktoré uvedú a naplno deformačné záujem v posladných obhodoch." },
];

const serviceTiles: { label: string; icon: string; disabled?: boolean }[] = [
  { label: "Organizér", icon: s_organizer },
  { label: "Môj e-mail", icon: s_moj_email },
  { label: "E-obhliadky", icon: s_obhliadky },
  { label: "Ponuky", icon: s_ponuky },
  { label: "Dopyty", icon: s_dopyty, disabled: true },
  { label: "Klienti", icon: s_databaza },
  { label: "Dokumenty", icon: s_dokumenty },
  { label: "Vzdelávanie", icon: s_webprofil, disabled: true },
  { label: "Spolupráca", icon: s_mls },
  { label: "Marketing", icon: s_marketing, disabled: true },
  { label: "AML overenie", icon: s_aml },
  { label: "Obchody", icon: s_obchody, disabled: true },
  { label: "Môj webprofil", icon: s_webprofil },
  { label: "Moje čísla", icon: s_statistiky },
  { label: "Financovanie", icon: s_financovanie, disabled: true },
  { label: "Právo a dane", icon: s_pravo },
  { label: "Referencie", icon: s_referencie },
  { label: "Premium", icon: s_plus },
];

function RealicoXPage() {
  return (
    <div className="bg-[#191919] text-white">
      {/* HERO */}
      <section className="relative bg-[#191919] overflow-hidden"
        style={{ backgroundImage: `url(${asset_x_sub_x_hero_bgr_jpg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <SiteHeader variant="dark" />
        <div className="mx-auto max-w-[1280px] px-6 pt-36 pb-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={logo_realicox_white} alt="Realico X" className="w-[320px] mb-12" />
            <h1 className="font-display text-[28px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
              Kompletný realitný ekosystém<br />v jednom rozhraní
            </h1>
            <p className="mt-5 text-[13px] text-white/70 max-w-md leading-[1.7]">
              Robte reality, nie administratívu. RealicoX spája CRM, marketing a právo do inteligentného celku. S podporou AI a modelom pay-per-service získate technologický náskok bez fixných nákladov.<br />
              <span className="text-[#f3c300]">Prvé 3 mesiace na náš účet.</span>  Ušetrite hneď od začiatku.
            </p>
            <button className="mt-8 inline-flex items-center justify-center rounded-full border border-[#f3c300]/60 px-10 py-3.5 text-[14px] text-white hover:bg-[#f3c300] hover:text-[#191919] transition">
              Vyskúšať zadarmo
            </button>
          </div>
          <div>
            <img src={asset_x_sub_x_hero_screens_png} alt="" className="w-full" style={{ transform: "scale(1.7)", transformOrigin: "center left" }} />
          </div>
        </div>
      </section>

      {/* All under one roof */}
      <section className="bg-[#191919] container-wide py-24">
        <h2 className="font-display text-center text-[36px] tracking-[-0.04em] font-bold">
          <span className="text-gold-gradient">Všetko</span> pod jednou strechou
        </h2>
        <p className="text-center text-white/70 text-[13px] mt-4">Zabudnite na prepínanie medzi desiatkami aplikácií.</p>
        <p className="text-center text-white/50 text-[12px]">V RealicoX máte všetko dôležité na dosah jediného kliku z vášho dashboardu.</p>

        <div className="mt-16 grid md:grid-cols-2 max-w-5xl mx-auto">
          {features.map((f, i) => {
            const isLeft = i % 2 === 0;
            const isLastRow = i >= features.length - 2;

            return (
            <div
              key={f.title}
              className="px-12 py-14"
              style={{
                borderColor: "#3b3b3b",
                borderBottomWidth: isLastRow ? 0 : 1,
                borderRightWidth: isLeft ? 1 : 0,
                borderStyle: "solid",
              }}
            >
              <img src={f.icon} alt="" className="h-14 w-auto" />
              <h3 className="font-display mt-5 text-[19px] font-bold text-white tracking-[-0.025em]">{f.title}</h3>
              <p className="text-[12px] text-white/60 mt-3 leading-6 max-w-sm">{f.body}</p>
            </div>
          )})}
        </div>
      </section>

      {/* AI section — gold-gradient circles + circuit line behind */}
      <section className="bg-[#191919] container-wide py-20">
        <h2 className="font-display text-center text-[32px] tracking-[-0.035em] font-bold">
          <span className="text-gold-gradient">Realico AI</span>: Váš digitálny analytik
        </h2>
        <p className="text-center text-white/70 text-[13px] mt-3">Nehádajte, rozhodujte sa na základe dát</p>
        <p className="text-center text-white/50 text-[12px]">RealicoX využíva umelú inteligenciu, aby vám uľahčil cestu k provízii.</p>

        <div className="mt-24 relative max-w-6xl mx-auto">
          {/* Circuit line behind circles — full width, behind icons */}
          <div className="hidden md:block absolute top-[60px] -left-[8%] -right-[8%] pointer-events-none z-0">
            <img
              src={asset_x_sub_x_line_element_png}
              alt=""
              className="w-full h-auto opacity-90"
              style={{ filter: "drop-shadow(0 0 18px rgba(243,195,0,0.35))", transform: "scaleY(1.4)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {aiSteps.map((s) => (
              <div key={s.title} className="text-center">
                <div className="relative mx-auto" style={{ width: 150, height: 150 }}>
                  <span className="ai-ellipse" aria-hidden />
                  <div className="ai-circle mx-auto relative z-10">
                    <img src={s.icon} alt="" className="h-14 w-14" />
                  </div>
                </div>
                <h4 className="font-display mt-10 text-[26px] font-bold text-white tracking-[-0.03em]">{s.title}:</h4>
                <p className="mt-5 text-[16px] leading-[1.7] max-w-sm mx-auto text-[#787878]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pay-per-service */}
      <section className="bg-[#191919] container-wide py-20 border-t border-white/10">
        <h2 className="font-display text-center text-[32px] tracking-[-0.035em] font-bold">
          <span className="text-gold-gradient">Férový model:</span> Pay-per-service
        </h2>
        <p className="text-center text-white/70 text-[13px] mt-3">Neplaťte za funkcie, ktoré nepoužívate.</p>
        <p className="text-center text-white/50 text-[12px] max-w-2xl mx-auto">Zabudnite na drahé mesačné paušály. V RealicoX veríme v efektívnosti — systémoveho k súčasnej a platíte len za konkrétne úlohy a služby, ktoré reálne využívate pre svoj biznis. Šetríme vaše náklady, aby ste mohli rásť.</p>

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {serviceTiles.map((t, i) => {
            const isMarketing = t.label === "Marketing";
            return (
            <div
              key={i}
              className="relative aspect-square rounded-[32px] flex flex-col items-center justify-center gap-4"
              style={{
                backgroundColor: t.disabled ? "#1f1e1e" : "rgba(255,255,255,0.04)",
                border: t.disabled ? "none" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <img
                src={t.icon}
                alt=""
                className="h-14 w-14"
                style={t.disabled ? { filter: "brightness(0) invert(24%)", opacity: 1 } : { opacity: 0.9 }}
              />
              <div
                className="text-[13px] text-center px-2"
                style={{ color: t.disabled ? "#4c4c4c" : "rgba(255,255,255,0.75)" }}
              >
                {t.label}
              </div>

              {isMarketing && (
                <>
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-black"
                    style={{
                      backgroundColor: "#f3c300",
                      boxShadow: "0 0 35px 8px rgba(243,195,0,0.5)",
                    }}
                  >
                    AKTIVOVAŤ
                  </div>
                  <svg
                    className="absolute"
                    style={{ left: "60%", top: "60%", width: 36, height: 42 }}
                    viewBox="0 0 24 28"
                    fill="white"
                    stroke="black"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  >
                    <path d="M3 2 L3 22 L8 18 L11 26 L14 25 L11 17 L18 17 Z" />
                  </svg>
                </>
              )}
            </div>
          )})}
        </div>
        <p className="mt-10 text-center text-white/50 text-[12px]">… a omnoho viac</p>
      </section>

      {/* Closing */}
      <section className="bg-[#191919] border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 grid md:grid-cols-2 items-center relative" style={{ height: 700 }}>
          <div className="py-24 relative z-20">
            <img src={logo_realicox_white} alt="" style={{ width: 260 }} />
            <h3 className="font-display mt-8 text-[30px] tracking-[-0.035em] font-bold leading-[1.2]">Váš biznis v roku 2026 <span className="text-gold-gradient">začína tu.</span></h3>
            <button className="mt-10 inline-flex rounded-full border border-[#f3c300]/60 px-10 py-4 text-[15px] text-white hover:bg-[#f3c300] hover:text-[#191919] transition">
              Vyskúšať zadarmo
            </button>
          </div>
          <img src={asset_x_sub_x_screens_jpg} alt="" className="justify-self-end relative z-10" style={{ height: 700, width: "auto", maxWidth: "none" }} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
