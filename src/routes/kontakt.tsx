import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check } from "lucide-react";
import photo from "@/assets/kontakt/kontakt_photo.png";
import bgIcons from "@/assets/kontakt/kontakt_bgr_icons.png";
import plane from "@/assets/kontakt/kontakt_plane.svg";
import mapImg from "@/assets/kontakt/kontakt_map.png";
import logoBlack from "@/assets/brand/realico_logo_b_y_dot.svg";

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
  { value: "technicka", label: "Technická podpora" },
  { value: "ine", label: "Iné" },
];

type Errors = Partial<Record<"name" | "email" | "message" | "agreed", boolean>>;

const SELECT_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")";

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

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k as keyof Errors])
        setErrors((er) => ({ ...er, [k]: false }));
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
    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    setAgreed(false);
    setErrors({});
    setSubmitted(false);
  };

  const inputBase: React.CSSProperties = {
    background: "#F2F2F2",
    border: "1.5px solid transparent",
    borderRadius: 10,
    height: 52,
    padding: "0 16px",
    fontFamily: "inherit",
    fontSize: 13.5,
    color: "#111111",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.15s, background 0.15s, box-shadow 0.15s",
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        .k-input::placeholder { color: #AAAAAA; }
        .k-input:focus {
          border-color: #F3C300 !important;
          background: #ffffff !important;
          box-shadow: 0 0 0 3px rgba(243,195,0,0.18);
        }
        .k-input.k-error { border-color: #ff4444 !important; }
        .k-select {
          appearance: none;
          background-image: ${SELECT_BG};
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px !important;
          cursor: pointer;
        }
        .k-checkbox {
          appearance: none;
          width: 18px; height: 18px;
          border: 1.5px solid #CCCCCC;
          border-radius: 4px;
          background: #F2F2F2;
          cursor: pointer;
          flex-shrink: 0;
          position: relative;
          transition: background 0.15s, border-color 0.15s;
        }
        .k-checkbox:checked {
          background: #F3C300;
          border-color: #F3C300;
        }
        .k-checkbox:checked::after {
          content: "";
          position: absolute;
          left: 3px; top: 4px;
          width: 10px; height: 6px;
          border-left: 2px solid #fff;
          border-bottom: 2px solid #fff;
          transform: rotate(-45deg);
        }
        @keyframes k-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .k-checkbox.k-error { border-color: #ff4444; animation: k-pulse 0.4s ease; }

        .kontakt-hero-photo { right: max(calc((100vw - 1200px) / 2 - 60px), -40px); }
        .kontakt-headline { left: max(calc((100vw - 1200px) / 2), 24px); }
        .kontakt-plane { left: calc((100vw - 1200px) / 2 + 200px); }

        @media (max-width: 1023px) {
          .kontakt-form-card-wrap {
            position: static !important;
            inset: auto !important;
            width: 100% !important;
            max-width: 551px;
            margin: 16px auto 0;
          }
          .kontakt-map-container { height: 420px !important; }
        }
      `}</style>

      <SiteHeader variant="light" />

      {/* HERO */}
      <section
        className="relative w-full"
        style={{ height: 480, background: "#F3C300", overflow: "visible" }}
      >
        <div
          className="absolute inset-0"
          style={{ overflow: "hidden", zIndex: 1 }}
        >
          <img
            src={bgIcons}
            alt=""
            aria-hidden
            className="pointer-events-none h-full w-full select-none"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        <h1
          className="kontakt-headline absolute font-bold text-black"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            maxWidth: 460,
            fontSize: 46,
            lineHeight: 1.14,
            letterSpacing: "-0.022em",
          }}
        >
          Začína to dialógom.
          <br />
          Ozvite sa nám.
        </h1>

        <div
          className="absolute"
          style={{ top: 0, bottom: 0, right: 0, left: 0, overflow: "hidden", zIndex: 5, pointerEvents: "none" }}
        >
          <img
            src={photo}
            alt=""
            aria-hidden
            className="kontakt-hero-photo absolute"
            style={{
              bottom: 0,
              height: "100%",
              width: "auto",
              objectFit: "contain",
              objectPosition: "bottom center",
            }}
          />
        </div>

        <img
          src={plane}
          alt=""
          aria-hidden
          className="kontakt-plane absolute pointer-events-none"
          style={{ bottom: -40, width: 130, height: "auto", zIndex: 30 }}
        />
      </section>

      {/* SUBTITLE */}
      <section
        className="bg-white text-center"
        style={{ padding: "56px 24px 48px" }}
      >
        <p
          className="mx-auto"
          style={{
            fontSize: 14,
            color: "#555555",
            lineHeight: 1.72,
            maxWidth: 860,
          }}
        >
          Potrebujete pomôcť s automatizáciou inzerátov, zvýšením ich dosahu
          alebo máte technickú otázku?
          <br />
          Napíšte nám svoje požiadavky a spoločne nájdeme najlepšie riešenie
          pre váš rast na Realico.
        </p>
      </section>

      {/* MAP + FORM */}
      <section
        className="mx-auto"
        style={{ width: "100%", maxWidth: 1320, padding: "0 40px 80px" }}
      >
        <div
          className="kontakt-map-container relative"
          style={{
            width: "100%",
            height: 700,
            borderRadius: 24,
            overflow: "hidden",
            background: "#e8e8e8",
          }}
        >
          <img
            src={mapImg}
            alt="Mapa - Pribinova 19276/38A, Bratislava"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />

          {/* Custom map pin */}
          <svg
            className="absolute pointer-events-none"
            style={{
              left: "37%",
              top: "48%",
              transform: "translate(-50%, -100%)",
              zIndex: 10,
            }}
            width="52"
            height="70"
            viewBox="0 0 52 70"
          >
            <path
              d="M26,68 C26,68 2,44 2,26 a24,24 0 1,1 48,0 C50,44 26,68 26,68 Z"
              fill="#F3C300"
            />
            <circle cx="26" cy="26" r="18" fill="white" />
            <text
              x="26"
              y="31"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#000"
            >
              R.
            </text>
          </svg>

          {/* Form card */}
          <div
            className="kontakt-form-card-wrap absolute"
            style={{
              top: 28,
              right: 28,
              bottom: 28,
              width: 480,
              zIndex: 20,
              background: "#ffffff",
              borderRadius: 20,
              boxShadow:
                "0 4px 40px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)",
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#F3C300",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check size={28} color="#fff" strokeWidth={3} />
                </div>
                <h3
                  style={{ fontSize: 20, fontWeight: 700, color: "#000", margin: 0 }}
                >
                  Ďakujeme!
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#666",
                    textAlign: "center",
                    margin: 0,
                    maxWidth: 320,
                  }}
                >
                  Vaša správa bola odoslaná. Ozveme sa vám čo najskôr.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  style={{
                    fontSize: 13,
                    color: "#888",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Odoslať ďalšiu správu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#888888",
                    textAlign: "center",
                    marginBottom: 14,
                  }}
                >
                  Preferovaný kontakt:
                </p>

                {/* Toggle */}
                <div
                  style={{
                    width: "100%",
                    height: 52,
                    background: "#EFEFEF",
                    borderRadius: 999,
                    display: "flex",
                    alignItems: "center",
                    padding: 4,
                    marginBottom: 22,
                  }}
                >
                  {TABS.map((t) => {
                    const active = activeTab === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setActiveTab(t)}
                        style={{
                          flex: 1,
                          height: 44,
                          borderRadius: 999,
                          border: "none",
                          cursor: "pointer",
                          fontSize: 13,
                          fontFamily: "inherit",
                          transition: "all 0.2s ease",
                          background: active ? "#ffffff" : "transparent",
                          color: active ? "#000000" : "#666666",
                          fontWeight: active ? 700 : 400,
                          boxShadow: active
                            ? "0 2px 10px rgba(0,0,0,0.12)"
                            : "none",
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                {/* Row A */}
                <div style={{ display: "flex", gap: 10 }}>
                  <input
                    className={`k-input ${errors.name ? "k-error" : ""}`}
                    style={inputBase}
                    type="text"
                    name="name"
                    placeholder="Vaše meno"
                    value={form.name}
                    onChange={set("name")}
                    maxLength={100}
                  />
                  <input
                    className="k-input"
                    style={inputBase}
                    type="text"
                    name="company"
                    placeholder="Firma (nepovinné)"
                    value={form.company}
                    onChange={set("company")}
                    maxLength={120}
                  />
                </div>

                {/* Row B */}
                <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                  <input
                    className="k-input"
                    style={inputBase}
                    type="tel"
                    name="phone"
                    placeholder="Telefón"
                    value={form.phone}
                    onChange={set("phone")}
                    maxLength={30}
                  />
                  <input
                    className={`k-input ${errors.email ? "k-error" : ""}`}
                    style={inputBase}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={set("email")}
                    maxLength={255}
                  />
                </div>

                {/* Row C - Select */}
                <select
                  className="k-input k-select"
                  name="subject"
                  value={form.subject}
                  onChange={set("subject")}
                  style={{
                    ...inputBase,
                    marginTop: 10,
                    color: form.subject === "" ? "#AAAAAA" : "#111",
                  }}
                >
                  <option value="" disabled>
                    Vyberte predmet
                  </option>
                  {SUBJECTS.map((s) => (
                    <option key={s.value} value={s.value} style={{ color: "#111" }}>
                      {s.label}
                    </option>
                  ))}
                </select>

                {/* Row D - Textarea */}
                <textarea
                  className={`k-input ${errors.message ? "k-error" : ""}`}
                  name="message"
                  placeholder="Vaša správa..."
                  value={form.message}
                  onChange={set("message")}
                  maxLength={1000}
                  style={{
                    ...inputBase,
                    height: 185,
                    padding: "14px 16px",
                    marginTop: 10,
                    resize: "none",
                    lineHeight: 1.6,
                  }}
                />

                {/* Bottom row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 18,
                    gap: 12,
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 12,
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      className={`k-checkbox ${errors.agreed ? "k-error" : ""}`}
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                        if (e.target.checked && errors.agreed)
                          setErrors((er) => ({ ...er, agreed: false }));
                      }}
                    />
                    <span>
                      Súhlasím so spracovanim{" "}
                      <a
                        href="#"
                        style={{ color: "#000", textDecoration: "underline" }}
                      >
                        osobných údajov
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    style={{
                      background: "#000",
                      color: "#fff",
                      border: "none",
                      borderRadius: 999,
                      padding: "14px 32px",
                      fontFamily: "inherit",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: agreed ? "pointer" : "not-allowed",
                      opacity: agreed ? 1 : 0.38,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      transition:
                        "background 0.2s, transform 0.15s, box-shadow 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (!agreed) return;
                      e.currentTarget.style.background = "#1a1a1a";
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#000";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Odoslať
                  </button>
                </div>

                <span className="sr-only">Vybraný kontakt: {activeTab}</span>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARD */}
      <section style={{ background: "#fff", padding: "72px 40px 80px" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            background: "#fff",
            border: "1px solid #E8E8E8",
            borderRadius: 20,
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            overflow: "hidden",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr]">
            <div style={{ padding: "40px 48px" }}>
              <img
                src={logoBlack}
                alt="Realico"
                style={{ height: 32, marginBottom: 20, display: "block" }}
              />
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 2,
                  color: "#333",
                  marginTop: 20,
                }}
              >
                <p style={{ margin: 0 }}>
                  <strong style={{ color: "#000", fontWeight: 700 }}>
                    Email:
                  </strong>{" "}
                  <a href="mailto:kontak@realico.sk" style={{ color: "#333" }}>
                    kontak@realico.sk
                  </a>
                </p>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: "#000", fontWeight: 700 }}>
                    Telefón:
                  </strong>{" "}
                  +421 905 905 905
                </p>
              </div>
            </div>
            <div
              className="hidden md:block"
              style={{ background: "#E8E8E8", margin: "40px 0" }}
            />
            <div style={{ padding: "40px 48px" }}>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#000",
                  marginBottom: 14,
                }}
              >
                Prevádzkovateľ:
              </h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, margin: 0 }}>
                Proply j.s.a.
                <br />
                Pribinova 19276/38A
                <br />
                Bratislava - Ružinov 811 09
              </p>
            </div>
            <div
              className="hidden md:block"
              style={{ background: "#E8E8E8", margin: "40px 0" }}
            />
            <div style={{ padding: "40px 48px" }}>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#000",
                  marginBottom: 14,
                }}
              >
                Fakturačné údaje:
              </h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, margin: 0 }}>
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
