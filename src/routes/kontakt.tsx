import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check } from "lucide-react";
import photo from "@/assets/kontakt/kontakt_photo.png";
import bgIcons from "@/assets/kontakt/kontakt_bgr_icons.png";
import plane from "@/assets/kontakt/kontakt_plane.svg";
import mapImg from "@/assets/kontakt/kontakt_map.jpg";
import blurImg from "@/assets/kontakt/kontakt_blur.png";
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
  "Reklama na Realico",
  "Partnerstvo",
  "Investičné možnosti",
  "Technická podpora",
  "Iné",
];

type Errors = Partial<Record<"name" | "email" | "message" | "agreed", boolean>>;

const SELECT_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")";

function KontaktPage() {
  const [tab, setTab] = useState<Tab>("Osobné stretnutie");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
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
    setSent(true);
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
    setSent(false);
    setTab("Osobné stretnutie");
  };

  const inputBase: React.CSSProperties = {
    background: "#F5F5F5",
    border: "1.5px solid transparent",
    borderRadius: 7.5,
    height: 48,
    padding: "0 14px",
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
          box-shadow: 0 0 0 3px rgba(243,195,0,0.15);
        }
        .k-input.k-error { border-color: #ff4444 !important; }
        .k-select {
          appearance: none;
          background-image: ${SELECT_BG};
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px !important;
          cursor: pointer;
          color: ${form.subject ? "#111111" : "#AAAAAA"};
        }
        .k-checkbox {
          appearance: none;
          width: 17px; height: 17px;
          border: 1.5px solid #CCCCCC;
          border-radius: 4px;
          background: #F5F5F5;
          cursor: pointer;
          flex-shrink: 0;
          position: relative;
          transition: background 0.15s, border-color 0.15s;
        }
        .k-checkbox:checked { background: #F3C300; border-color: #F3C300; }
        .k-checkbox:checked::after {
          content: "";
          position: absolute;
          left: 3px; top: 3px;
          width: 9px; height: 5px;
          border-left: 2px solid #fff;
          border-bottom: 2px solid #fff;
          transform: rotate(-45deg);
        }
        @keyframes k-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }
        .k-checkbox.k-error { border-color: #ff4444; animation: k-pulse 0.4s ease; }

        .kontakt-headline { left: max(40px, calc((100vw - 1200px) / 2)); }
        .kontakt-photo-wrap { right: max(calc((100vw - 1200px) / 2 - 60px), -40px); }
        .kontakt-plane { left: calc((100vw - 1200px) / 2 + 200px); }

        .k-submit:hover:not(:disabled) {
          background: #1a1a1a !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.22);
        }

        @media (max-width: 1023px) {
          .kontakt-form-card-wrap {
            position: static !important;
            inset: auto !important;
            width: 100% !important;
            max-width: 551px;
            margin: 16px auto 0;
          }
          .kontakt-map-container { height: 420px !important; }
          .k-headline { font-size: 32px !important; max-width: 320px !important; }
        }
      `}</style>

      {/* HERO OUTER (overflow visible so plane straddles boundary) */}
      <div className="relative w-full" style={{ overflow: "visible" }}>
        <SiteHeader variant="light" />

        {/* HERO INNER */}
        <section
          className="relative w-full"
          style={{ height: 510, background: "linear-gradient(to bottom, #e0aa03, #f3c300)", overflow: "visible" }}
        >
          {/* z=1 doodles - single image fitted inside hero (scaled +20%) */}
          <img
            src={bgIcons}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full select-none"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              zIndex: 1,
              opacity: 1,
              transform: "scale(1.2)",
              transformOrigin: "center",
            }}
          />

          {/* z=5 woman photo - straight bottom edge sits on hero/body boundary */}
          <img
            src={photo}
            alt=""
            aria-hidden
            className="kontakt-photo-wrap absolute pointer-events-none select-none"
            style={{
              bottom: -56,
              height: 486,
              width: "auto",
              zIndex: 5,
            }}
          />

          {/* z=10 headline */}
          <h1
            className="kontakt-headline k-headline absolute font-bold"
            style={{
              top: "50%",
              transform: "translateY(-54%)",
              zIndex: 10,
              maxWidth: 460,
              fontSize: 46,
              fontWeight: 700,
              lineHeight: 1.14,
              letterSpacing: "-0.022em",
              color: "#000",
            }}
          >
            <span style={{ color: "#fff" }}>Začína to dialógom.</span>
            <br />
            Ozvite sa nám.
          </h1>
        </section>

        {/* z=30 plane straddling boundary */}
        <img
          src={plane}
          alt=""
          aria-hidden
          className="kontakt-plane absolute pointer-events-none"
          style={{ bottom: -44, width: 130, height: "auto", zIndex: 30 }}
        />
      </div>

      {/* SUBTITLE */}
      <section className="bg-white text-center my-[80px]" style={{ padding: "64px 24px 48px" }}>
        <p
          className="mx-auto"
          style={{ fontSize: 14, color: "#555555", lineHeight: 1.72, maxWidth: 860 }}
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
            borderRadius: 25,
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

          {/* Form card */}
          <div
            className="kontakt-form-card-wrap absolute"
            style={{
              top: 13,
              right: 13,
              bottom: 13,
              width: 490,
              zIndex: 20,
              background: "#ffffff",
              borderRadius: 15,
              boxShadow:
                "0 4px 40px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)",
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {sent ? (
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
                  <Check size={24} color="#fff" strokeWidth={3} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#000", margin: 0 }}>
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
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
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
                    height: 50,
                    background: "#F5F5F5",
                    borderRadius: 7.5,
                    display: "flex",
                    alignItems: "center",
                    padding: 4,
                    marginBottom: 20,
                    gap: 2,
                  }}
                >
                  {TABS.map((t) => {
                    const active = tab === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTab(t)}
                        style={{
                          flex: 1,
                          height: 42,
                          borderRadius: 6,
                          border: "none",
                          cursor: "pointer",
                          fontSize: 12.5,
                          fontFamily: "inherit",
                          transition: "all 0.2s ease",
                          background: active ? "#ffffff" : "transparent",
                          color: active ? "#111111" : "#777777",
                          fontWeight: 500,
                          boxShadow: active ? "0 2px 8px rgba(0,0,0,0.10)" : "none",
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                {/* Row A */}
                <div style={{ display: "flex", gap: 8 }}>
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
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
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
                  style={{ ...inputBase, marginTop: 8 }}
                  name="subject"
                  value={form.subject}
                  onChange={set("subject")}
                >
                  <option value="">Vyberte predmet</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                {/* Row D - Textarea */}
                <textarea
                  className={`k-input ${errors.message ? "k-error" : ""}`}
                  style={{
                    ...inputBase,
                    height: "auto",
                    flex: 1,
                    minHeight: 130,
                    padding: "12px 14px",
                    resize: "none",
                    lineHeight: 1.6,
                    marginTop: 8,
                  }}
                  name="message"
                  placeholder="Vaša správa..."
                  value={form.message}
                  onChange={set("message")}
                  maxLength={2000}
                />

                {/* Bottom row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 16,
                    gap: 12,
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      flexShrink: 0,
                      cursor: "pointer",
                      fontSize: 12,
                      color: "#666666",
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
                        style={{ color: "#666666", textDecoration: "underline" }}
                        onClick={(e) => e.preventDefault()}
                      >
                        osobných údajov
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="k-submit"
                    disabled={!agreed}
                    style={{
                      background: "#000000",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: 999,
                      padding: "13px 28px",
                      fontFamily: "inherit",
                      fontSize: 13.5,
                      fontWeight: 600,
                      cursor: agreed ? "pointer" : "not-allowed",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      opacity: agreed ? 1 : 0.35,
                      transition: "background 0.2s, transform 0.15s, box-shadow 0.2s, opacity 0.15s",
                    }}
                  >
                    Odoslať
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section
        className="relative"
        style={{ background: "#ffffff", padding: "40px 24px 80px" }}
      >
        {/* Blur halos (image already contains 2 halos), shifted slightly left */}
        <img
          src={blurImg}
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(47% - 180px)",
            transform: "translate(-50%, -50%)",
            width: "min(880px, 70%)",
            height: "auto",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div
          className="mx-auto relative"
          style={{
            maxWidth: 1100,
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 60,
            padding: "40px 20px",
          }}
        >
          {/* Col 1 */}
          <div>
            <img src={logoBlack} alt="Realico" style={{ height: 36, width: "auto", marginBottom: 28 }} />
            <div style={{ fontSize: 13.5, color: "#222", lineHeight: 2 }}>
              <div>
                <strong style={{ fontWeight: 700 }}>Email:</strong>{" "}
                <span style={{ color: "#444" }}>kontak@realico.sk</span>
              </div>
              <div>
                <strong style={{ fontWeight: 700 }}>Telefón:</strong>{" "}
                <span style={{ color: "#444" }}>+421 905 905 905</span>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 16 }}>
              Prevádzkovateľ:
            </h3>
            <div style={{ fontSize: 13.5, color: "#444", lineHeight: 2 }}>
              <div>Proply j.s.a.</div>
              <div>Pribinova 19276/38A</div>
              <div>Bratislava - Ružinov 811 09</div>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 16 }}>
              Fakturačné údaje:
            </h3>
            <div style={{ fontSize: 13.5, color: "#444", lineHeight: 2 }}>
              <div>IČO: 50 020 161</div>
              <div>DIČ: 21 20 153 101</div>
              <div>IČ DPH: SK2120153101</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
