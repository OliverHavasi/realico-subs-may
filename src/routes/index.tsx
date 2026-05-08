import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logo_realico_dark from "@/assets/brand/realico_logo_b_w_dot.svg";
import logo_realico_yellow_dot from "@/assets/brand/realico_logo_b_y_dot.svg";
import logo_realicox_full from "@/assets/brand/realicox_logo_black_gold_y_dot.svg";
import asset_home_couch_png from "@/assets/home/sub_co_je_couch.png";
import asset_home_ico_cielena_reklama_svg from "@/assets/home/ico_cielena_reklama.svg";
import asset_home_ico_heart_sloboda_png from "@/assets/home/ico_heart_sloboda.png";
import asset_home_ico_investujte_svg from "@/assets/home/ico_investujte.svg";
import asset_home_ico_mouse_smart_vyhladavanie_png from "@/assets/home/ico_mouse_smart_vyhladavanie.png";
import asset_home_ico_pridte_k_nam_svg from "@/assets/home/ico_pridte_k_nam.svg";
import asset_home_ico_silne_partnerstva_svg from "@/assets/home/ico_silne_partnerstva.svg";
import asset_home_photo_sloboda_png from "@/assets/home/photo_fyz_osoby.png";
import asset_home_photo_smart_vyhladavanie_png from "@/assets/home/photo_rk_makleri.png";
import asset_home_photo_developeri_png from "@/assets/home/photo_developeri.png";
import asset_home_realicox_screens_png from "@/assets/home/realicox_screens.png";
import asset_home_bgr_smart_png from "@/assets/home/ico_bgr_smart_vyhladavanie.png";
import asset_home_bgr_sloboda_png from "@/assets/home/ico_bgr_sloboda.png";
import asset_home_bgr_realicox_png from "@/assets/home/realicox_bgr_icons.png";
import asset_home_bgr_developeri_png from "@/assets/home/bgr_developeri_icons.png";
import asset_home_realicox_logo_stars_png from "@/assets/home/realicox_logo_stars.png";
import asset_underline_onas_svg from "@/assets/home/realicox_underline_onas.svg";
import asset_priestor_wordmark from "@/assets/home/priestor_wordmark.png";
import ico_smart_ai from "@/assets/home/co_je_ico_smart_ai.png";
import ico_realicox from "@/assets/home/co_je_ico_realicox.png";
import ico_sloboda_feat from "@/assets/home/co_je_ico_sloboda.png";
import ico_partnerstva from "@/assets/home/co_je_ico_partnerstva.png";
import r_circle_cta from "@/assets/home/co_je_r_circle_cta.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Realico — Priestor, kde reality konečne dávajú zmysel" },
      { name: "description", content: "Inteligentný realitný ekosystém pre strednú Európu s AI nástrojmi pre celý cyklus bývania." },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    title: "Smart AI",
    subtitle: "Dátový náskok",
    icon: ico_smart_ai,
    body: "Pokročilé nástroje, ktoré s pomocou umelej inteligencie presne spájajú dopyt s ponukou.",
  },
  {
    title: "Realico X",
    subtitle: "Váš náskok",
    icon: ico_realicox,
    body: "Kompletné technologické zázemie pre efektívnu správu vášho realitného biznisu.",
  },
  {
    title: "Sloboda",
    subtitle: "a nezávislosť",
    icon: ico_sloboda_feat,
    body: "Získajte úplnú nezávislosť a lepšie ceny za inzerciu, ktoré nezaťažia váš rozpočet.",
  },
  {
    title: "Partnerstvá",
    subtitle: "a férový biznis",
    icon: ico_partnerstva,
    body: "Budujeme silné vzťahy a investičné príležitosti založené na férovom prístupe.",
  },
];

function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO — flat yellow ending in a STRICT STRAIGHT horizontal line.
          Sofa overlaps the boundary; "Priestor" wordmark sits BEHIND the sofa. */}
      <section className="relative hero-flat" style={{ height: 640 }}>
        <SiteHeader />
        <div className="relative z-20 pt-52 text-center">
          <img src={logo_realico_dark} alt="Realico" className="h-16 w-auto mx-auto" />
          <p className="mt-1 text-white font-bold text-[26px]">Najchytrejší AI realitný portál</p>
        </div>

        {/* Sofa — sits BEHIND the PRIESTOR wordmark */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-12 z-10 w-[1344px] max-w-[98%] pointer-events-none select-none">
          <img src={asset_home_couch_png} alt="" className="w-full block" />
        </div>

        {/* Massive PRIESTOR wordmark image — sized to match prior 225px text */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-center pointer-events-none">
          <img
            src={asset_priestor_wordmark}
            alt="Priestor"
            className="select-none block"
            style={{ height: "225px", width: "auto", transform: "translateX(-30px)" }}
          />
        </div>
      </section>
      {/* spacer to clear sofa overlap */}
      <div className="h-[160px] bg-white my-0 py-0" />

      {/* INTRO TEXT */}
      <section className="container-wide text-center pt-0">
        <h2 className="font-display font-bold leading-[1.02] text-[#191919] tracking-[-0.04em] text-[72px] my-0 px-[5px] mb-[100px]">
          kde reality <span className="relative inline-block isolate"><img src={asset_underline_onas_svg} alt="" aria-hidden="true" className="absolute left-0 right-0 -bottom-2 w-full pointer-events-none select-none z-0" /><span className="relative z-10">konečne</span></span>
          <br /> dávajú zmysel<span className="text-hero">.</span>
        </h2>
        <p className="mt-10 max-w-[1100px] mx-auto leading-[1.9] text-black text-base">
          Realico je inteligentný realitný portál novej generácie pre strednú Európu. Vďaka vlastnej AI a špičkovým
          <br /> nástrojom prinášame bezprecedentnú transparentnosť a ľahkosť do celého cyklu bývania. S nami máte technologický
          <br /> náskok v každom kroku – od bleskového nájmu a inteligentného financovania až po efektívny predaj nehnuteľnosti.
        </p>
      </section>

      {/* SILA EKOSYSTÉMU heading */}
      <section className="container-wide pt-24">
        <h2 className="font-display text-center text-[36px] font-bold text-[#191919] tracking-[-0.035em]">
          Sila nášho ekosystému<span className="text-hero">:</span>
        </h2>
      </section>

      {/* Smart vyhľadávanie — 710px, woman ~60px head clearance */}
      <section className="relative overflow-hidden mt-12 h-[710px]">
        <img
          src={asset_home_bgr_smart_png}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none select-none z-0 opacity-60"
        />
        <div className="relative z-10 h-full mx-auto w-full px-6" style={{ maxWidth: "1600px" }}>
          <div className="grid md:grid-cols-2 gap-24 items-end h-full">
            <div className="relative pl-2 md:pl-4 pt-[40px] self-start">
              <img
                src={asset_home_ico_mouse_smart_vyhladavanie_png}
                alt=""
                className="absolute left-[470px] top-[80px]"
                style={{ width: "260px", height: "auto", objectFit: "contain" }}
              />
              <h3 className="font-display text-[42px] font-bold text-[#191919] tracking-[-0.02em] leading-[1.05] mt-[230px]">Realitky a maklérov</h3>
              <p className="text-hero font-semibold text-[30px] mt-2">Profesionálny nástroj pre váš biznis.</p>
              <p className="text-[16px] text-[#000000] mt-8 leading-[1.65] max-w-[530px] font-normal">
                Realico je strategickým partnerom pre každého realitného profesionála. Ponúkame efektívnu správu
                inzerátov, vysoký dosah na relevantných záujemcov a technologické riešenia, ktoré urýchľujú predajný
                proces a posilňujú vašu značku na trhu.
              </p>
            </div>
            <div className="relative flex justify-end items-end h-full">
              {/* Section 710px - 60px head clearance = 650px image */}
              <img
                src={asset_home_photo_smart_vyhladavanie_png}
                alt=""
                className="block w-auto relative z-10"
                style={{ height: "650px", marginBottom: "-1px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Separator — 1400px centered */}
      <div className="relative z-20 mx-auto h-px mb-0" style={{ backgroundColor: "#bebebe", maxWidth: "1400px", width: "100%" }} />

      {/* Sloboda — 710px, man ~90px head clearance */}
      <section className="relative overflow-hidden h-[710px] max-h-[710px]">
        <img
          src={asset_home_bgr_sloboda_png}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none select-none z-0 opacity-60"
        />
        <div className="relative z-10 h-full mx-auto w-full px-6" style={{ maxWidth: "1600px" }}>
          <div className="grid md:grid-cols-2 gap-24 items-end h-full">
            <div className="order-2 md:order-1 relative flex justify-start items-end h-full">
              {/* Section 710px - 90px head clearance = 620px image */}
              <img
                src={asset_home_photo_sloboda_png}
                alt=""
                className="block w-auto relative z-10"
                style={{ height: "620px", marginBottom: "-1px" }}
              />
            </div>
            <div className="order-1 md:order-2 relative pl-2 md:pl-4 pt-[40px] self-start">
              <img
                src={asset_home_ico_heart_sloboda_png}
                alt=""
                className="absolute top-[60px] right-12"
                style={{ width: "160px", height: "200px", objectFit: "contain" }}
              />
              <h3 className="font-display text-[42px] font-bold text-[#191919] tracking-[-0.02em] leading-[1.05] mt-[230px]">Fyzické osoby</h3>
              <p className="text-hero font-semibold text-[30px] mt-2">Predaj, kúpa, prenájom - rýchlo a bezpečne.</p>
              <p className="text-[16px] text-[#000000] mt-8 leading-[1.65] max-w-[530px] font-normal">
                Či už ponúkate byt, dom alebo pozemok, s Realico máte proces pod kontrolou. Jednoduché pridanie
                inzerátu, prehľadná správa ponúk a priame spojenie s overenými záujemcami – to všetko bez zbytočných
                komplikácií a poplatkov navyše.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator — 1400px centered */}
      <div className="relative z-20 mx-auto h-px mb-0" style={{ backgroundColor: "#bebebe", maxWidth: "1400px", width: "100%" }} />

      {/* Developerov, banky a finančné inštitúcie */}
      <section className="relative overflow-hidden h-[710px] max-h-[710px]">
        <img
          src={asset_home_bgr_developeri_png}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none select-none z-0 opacity-60"
        />
        <div className="relative z-10 h-full pb-0 mx-auto w-full px-6" style={{ maxWidth: "1600px" }}>
          <div className="grid md:grid-cols-2 gap-24 items-end h-full pb-0">
            <div className="relative pl-2 md:pl-4 pt-[40px] self-start">
              <h3 className="font-display text-[42px] font-bold text-[#191919] tracking-[-0.02em] leading-[1.05] mt-[230px]">Developerov,</h3>
              <p className="text-hero font-semibold text-[30px] mt-2">banky a finančné inštitúcie</p>
              <p className="text-[16px] text-[#000000] mt-8 leading-[1.65] max-w-[530px] font-normal">
                Developerom prinášame komplexnú platformu na prezentáciu nových projektov a efektívny manažment voľných jednotiek. Hypotékarnym špecialistom a finančným inštitúciám otvárame priestor pre priamu integráciu služieb tam, kde klient rieši svoje nové bývanie.
              </p>
            </div>
            <div className="relative flex justify-end items-end h-full">
              <img
                src={asset_home_photo_developeri_png}
                alt=""
                className="block relative z-10 flex-none"
                style={{ height: "620px", width: "auto", maxWidth: "none", objectFit: "contain", objectPosition: "bottom right", flexShrink: 0, marginBottom: "-1px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Separator — 1400px centered */}
      <div className="relative z-20 mx-auto h-px mb-0" style={{ backgroundColor: "#bebebe", maxWidth: "1400px", width: "100%" }} />

      <section className="container-wide pt-[20px]">

        {/* Trust */}
        <div className="mt-32 text-center">
          <h2 className="font-display text-[#191919] leading-[1.05] tracking-[-0.04em] font-bold mt-0 text-5xl">
            Viac než len portál.<br />Budujeme ekosystém dôvery<span className="text-hero">.</span>
          </h2>
          <p className="max-w-[1200px] mx-auto leading-[1.8] whitespace-pre-line text-[15px] my-[80px] mt-[80px] text-black">
            Trh s nehnuteľnosťami dlho stagnoval, kým svet napredoval. V Realico tento cyklus končíme. Neprinášame len ďalšiu databázu inzerátov – tvoríme ekosystém novej generácie, ktorý vracia slobodu a férovosť tam, kde doteraz chýbali. Špičková technológia a AI sú pre nás nástrojom, ktorý búra bariéry a dáva našim užívateľom aj partnerom rovnaké šance na úspech.{"\n\n"}
            Naše riešenia sú od základu navrhnuté tak, aby boli rýchlejšie a transparentnejšie než čokoľvek doteraz. Zbavili sme sa zbytočnej byrokracie a skrytých poplatkov, aby sme vytvorili prostredie, kde sa môžete rozhodovať slobodne a na základe faktov.
          </p>
          <p className="text-hero mt-6 text-xl font-bold">Moderné reality bez bariér, fér a pre všetkých.</p>
        </div>

        {/* Feature grid 1x4 */}
        <div className="mt-20 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((f) => {
              return (
              <div key={f.title} className="flex flex-col items-center text-center">
                <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                  {/* Conic-gradient ring with hard-stop at 9 o'clock (270deg) */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 270deg, #f3c300 0deg, rgba(243,195,0,0) 359deg, #ffffff 360deg)",
                      WebkitMask: "radial-gradient(circle, transparent 0 51px, #000 52px 60px, transparent 61px)",
                      mask: "radial-gradient(circle, transparent 0 51px, #000 52px 60px, transparent 61px)",
                    }}
                  />
                  <img src={f.icon} alt="" className="relative w-12 h-12 object-contain" />
                </div>
                <h4 className="mt-7 font-display text-[18px] font-bold text-[#191919] leading-tight">{f.title}</h4>
                <p className="text-hero text-[16px] font-bold leading-tight mt-1">{f.subtitle}</p>
                <p className="mt-7 text-[13px] text-[#191919] leading-[1.45] max-w-[200px]">{f.body}</p>
              </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-32 pb-28 text-center flex flex-col items-center">
          <img src={r_circle_cta} alt="Realico" className="w-[80px] h-[80px]" />
          <p className="mt-7 font-display font-bold text-[#191919] leading-tight text-xl">Pozdáva sa vám Realico? Ozvite sa nám</p>
          <a href="mailto:kontakt@realico.sk" className="mt-3 text-[13px] text-[#191919] hover:text-hero transition-colors">kontakt@realico.sk</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
