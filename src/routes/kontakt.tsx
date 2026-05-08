import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check, ChevronDown } from "lucide-react";
import photo from "@/assets/kontakt/kontakt_photo.png";
import bgIcons from "@/assets/kontakt/kontakt_bgr_icons.png";
import plane from "@/assets/kontakt/kontakt_plane.svg";
import mapImg from "@/assets/kontakt/kontakt_map.png";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Realico" },
      {
        name: "description",
        content:
          "Začína to dialógom. Ozvite sa nám — napíšte nám svoje požiadavky a spoločne nájdeme najlepšie riešenie pre váš rast na Realico.",
      },
      { property: "og:title", content: "Kontakt — Realico" },
      {
        property: "og:description",
        content:
          "Napíšte nám svoje požiadavky a spoločne nájdeme najlepšie riešenie pre váš rast na Realico.",
      },
    ],
  }),
  component: KontaktPage,
});

const TABS = ["Telefonicky", "E-mailom", "Osobné stretnutie"] as const;
type Tab = (typeof TABS)[number];

const SUBJECTS = [
  { value: "reklama", label: "Reklama na Realico" },
  { value: "partnerstvo", label: "Partnerstvo" },
  { value: "investicie", label: "Investičné možnosti" },
  { value: "technicky", label: "Technická podpora" },
  { value: "ine", label: "Iné" },
];

type Errors = Partial<Record<"name" | "email" | "message" | "agreed", boolean>>;

function KontaktPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Osobné stretnutie");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k as keyof Errors]) setErrors((er) => ({ ...er, [k]: false }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ne: Errors = {};
    if (!form.name.trim()) ne.name = true;
    if (!form.email.trim() || !form.email.includes("@")) ne.email = true;
    if (!form.message.trim()) ne.message = true;
    if (!agreed) ne.agreed = true;
    if (Object.keys(ne).length) {
      setErrors(ne);
      return;
    }
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: "", company: "", phone: "", email: "", subject: "", message: "" });
    setAgreed(false);
    setErrors({});
    setSubmitted(false);
  };

  const inputBase =
    "w-full h-10 rounded-[10px] bg-[#F5F5F5] border-[1.5px] border-transparent px-3.5 text-[13px] text-black outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#F3C300] focus:bg-white focus:shadow-[0_0_0_3px_rgba(243,195,0,0.15)]";
  const errInput = "border-red-400/70 bg-red-50/40";

  return (
    <div className="min-h-screen bg-white font-sans">
      <SiteHeader variant="light" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F3C300]" style={{ height: 570 }}>
        <img
          src={bgIcons}
          alt=""
          aria-hidden
          className="pointer-events-none absolute select-none"
          style={{ left: 254, top: 2, width: 1410, height: 591, opacity: 0.18 }}
        />
        <div
          className="absolute z-[2]"
          style={{ left: 919, top: 72, width: 507, height: 496 }}
        >
          <img src={photo} alt="" className="h-full w-full object-contain" />
        </div>
        <div
          className="absolute rounded-[50%]"
          style={{
            left: 985,
            top: 510,
            width: 278,
            height: 60,
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.10), transparent 70%)",
          }}
          aria-hidden
        />
        <img
          src={plane}
          alt=""
          aria-hidden
          className="absolute z-[3]"
          style={{ left: 608, top: 460, width: 146, height: 120 }}
        />
        <h1
          className="absolute font-bold text-black"
          style={{
            left: 391,
            top: 211,
            fontSize: 44,
            lineHeight: 1.15,
            letterSpacing: "-0.022em",
            maxWidth: 452,
          }}
        >
          Začína to dialógom.
          <br />
          Ozvite sa nám.
        </h1>

        {/* white wave */}
        <svg
          className="absolute bottom-0 left-0 z-[4] w-full"
          style={{ height: 120 }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,60 Q360,15 720,60 T1440,60 L1440,120 L0,120 Z" fill="#fff" />
        </svg>
      </section>

      {/* SUBTITLE */}
      <section className="bg-white pb-10 pt-14 text-center">
        <p
          className="mx-auto text-[14px] font-normal leading-[1.7] text-[#555]"
          style={{ maxWidth: 918 }}
        >
          Potrebujete pomôcť s automatizáciou inzerátov, zvýšením ich dosahu alebo máte
          technickú otázku?
          <br />
          Napíšte nám svoje požiadavky a spoločne nájdeme najlepšie riešenie pre váš rast
          na Realico.
        </p>
      </section>

      {/* MAP + FORM */}
      <section className="relative mx-auto" style={{ maxWidth: 1440 }}>
        <div className="relative px-6 lg:px-0" style={{ minHeight: 686 }}>
          {/* Map */}
          <div
            className="relative overflow-hidden rounded-[20px] lg:absolute lg:left-0 lg:top-0"
            style={{ width: "100%", maxWidth: 1133, height: 686 }}
          >
            <img
              src={mapImg}
              alt="Mapa - Pribinova 19276/38A, Bratislava"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Form card */}
          <div className="kontakt-form-card relative mt-6 lg:mt-0">
            <div
              className="mx-auto bg-white"
              style={{
                width: "100%",
                maxWidth: 551,
                minHeight: 657,
                borderRadius: 20,
                boxShadow:
                  "0 8px 48px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04)",
                padding: "32px 44px",
              }}
            >
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3C300]">
                    <Check className="h-6 w-6 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="mt-5 text-[20px] font-bold text-black">
                    Ďakujeme za správu!
                  </h3>
                  <p className="mt-2 text-[14px] text-[#666]">
                    Ozveme sa vám čo najskôr.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-6 text-[13px] text-black underline underline-offset-4 hover:opacity-70"
                  >
                    Odoslať ďalšiu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <p className="mb-4 text-center text-[13px] font-medium text-[#888]">
                    Preferovaný kontakt:
                  </p>

                  {/* Tabs */}
                  <div className="mb-6 flex h-[50px] w-full rounded-full bg-[#EFEFEF] p-1">
                    {TABS.map((t) => {
                      const active = activeTab === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setActiveTab(t)}
                          className={`flex-1 rounded-full text-[12.5px] transition-all duration-200 ${
                            active
                              ? "bg-white font-semibold text-black shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                              : "bg-transparent font-medium text-[#666] hover:text-black"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>

                  {/* Row 1 */}
                  <div className="flex gap-2.5">
                    <input
                      className={`${inputBase} ${errors.name ? errInput : ""}`}
                      type="text"
                      name="name"
                      placeholder="Vaše meno"
                      value={form.name}
                      onChange={set("name")}
                      maxLength={100}
                    />
                    <input
                      className={inputBase}
                      type="text"
                      name="company"
                      placeholder="Firma (nepovinné)"
                      value={form.company}
                      onChange={set("company")}
                      maxLength={120}
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="mt-2.5 flex gap-2.5">
                    <input
                      className={inputBase}
                      type="tel"
                      name="phone"
                      placeholder="Telefón"
                      value={form.phone}
                      onChange={set("phone")}
                      maxLength={30}
                    />
                    <input
                      className={`${inputBase} ${errors.email ? errInput : ""}`}
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={set("email")}
                      maxLength={255}
                    />
                  </div>

                  {/* Row 3 - Select */}
                  <div className="relative mt-2.5">
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={set("subject")}
                      className={`${inputBase} appearance-none pr-9 ${
                        form.subject === "" ? "text-[#AAAAAA]" : "text-black"
                      }`}
                    >
                      <option value="" disabled>
                        Vyberte predmet
                      </option>
                      {SUBJECTS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888]" />
                  </div>

                  {/* Row 4 - Textarea */}
                  <textarea
                    name="message"
                    placeholder="Vaša správa..."
                    value={form.message}
                    onChange={set("message")}
                    maxLength={1000}
                    className={`mt-2.5 w-full resize-y rounded-[10px] border-[1.5px] border-transparent bg-[#F5F5F5] px-3.5 py-3 text-[13px] leading-[1.6] text-black outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#F3C300] focus:bg-white focus:shadow-[0_0_0_3px_rgba(243,195,0,0.15)] ${
                      errors.message ? errInput : ""
                    }`}
                    style={{ height: 160 }}
                  />

                  {/* Checkbox + Submit */}
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <label className="flex cursor-pointer items-center gap-2.5 text-[12px] text-[#555]">
                      <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => {
                            setAgreed(e.target.checked);
                            if (e.target.checked && errors.agreed)
                              setErrors((er) => ({ ...er, agreed: false }));
                          }}
                          className="peer absolute inset-0 h-4 w-4 cursor-pointer appearance-none rounded-[4px] border-[1.5px] border-[#CCC] bg-[#F5F5F5] transition-colors checked:border-[#F3C300] checked:bg-[#F3C300]"
                        />
                        <Check
                          className="pointer-events-none relative h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
                          strokeWidth={3}
                        />
                      </span>
                      <span className={errors.agreed ? "text-red-500" : ""}>
                        Súhlasím so spracovaním{" "}
                        <a
                          href="#"
                          className="text-black underline underline-offset-2"
                        >
                          osobných údajov
                        </a>
                        .
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={!agreed}
                      className="rounded-full bg-black text-[13px] font-semibold tracking-[0.01em] text-white transition-all duration-200 hover:bg-[#1a1a1a] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] disabled:cursor-not-allowed disabled:opacity-40 disabled:translate-y-0 disabled:shadow-none"
                      style={{ width: 114, height: 38 }}
                    >
                      Odoslať
                    </button>
                  </div>

                  {/* Hidden but conveys context for screen readers */}
                  <span className="sr-only">Vybraný kontakt: {activeTab}</span>
                </form>
              )}
            </div>
          </div>

          {/* Desktop overlap positioning */}
          <style>{`
            @media (min-width: 1024px) {
              .kontakt-form-card { position: absolute; left: 1000px; top: 12px; }
            }
          `}</style>
        </div>
      </section>

      {/* CONTACT INFO CARD */}
      <section className="bg-white px-6 pb-20 pt-16">
        <div
          className="mx-auto rounded-[20px] border border-[#EEEEEE] bg-white"
          style={{
            maxWidth: 1200,
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          <div className="grid grid-cols-1 divide-y divide-[#E8E8E8] py-12 md:grid-cols-3 md:divide-x md:divide-y-0">
            {/* Col 1 */}
            <div className="px-12 py-6 md:py-0">
              <img
                src={logoBlack}
                alt="Realico"
                className="mb-6 block h-[35px] w-auto"
              />
              <div className="mt-6 text-[14px] leading-[1.8] text-[#333]">
                <div>
                  <span className="font-bold text-black">Email: </span>
                  <a
                    href="mailto:kontak@realico.sk"
                    className="text-black hover:opacity-70"
                  >
                    kontak@realico.sk
                  </a>
                </div>
                <div>
                  <span className="font-bold text-black">Telefón: </span>
                  <span className="text-[#444]">+421 905 905 905</span>
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div className="px-12 py-6 md:py-0">
              <h3 className="mb-3.5 text-[14px] font-bold text-black">
                Prevádzkovateľ:
              </h3>
              <p className="text-[14px] leading-[1.85] text-[#555]">
                Proply j.s.a.
                <br />
                Pribinova 19276/38A
                <br />
                Bratislava - Ružinov 811 09
              </p>
            </div>

            {/* Col 3 */}
            <div className="px-12 py-6 md:py-0">
              <h3 className="mb-3.5 text-[14px] font-bold text-black">
                Fakturačné údaje:
              </h3>
              <p className="text-[14px] leading-[1.85] text-[#555]">
                IČO: 50 020 161
                <br />
                DIČ: 21 20 153 101
                <br />
                IČ DPH: SK2120153101
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
