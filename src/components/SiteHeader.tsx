import { Link } from "@tanstack/react-router";
import logo_white from "@/assets/brand/realico_logo_full_white.svg";
import logo_light from "@/assets/brand/realico_logo_w_y_dot.svg";
import logo_realicox_white from "@/assets/brand/realicox_logo_white_gold_y_dot.svg";

const links = [
  { to: "/", label: "Čo je Realico?", type: "text" as const },
  { to: "/realico-x", label: "Realico X", type: "image" as const, image: logo_realicox_white },
  { to: "/biznis-s-realico", label: "Biznis s Realico", type: "text" as const },
  { to: "/kontakt", label: "Kontakt", type: "text" as const },
];

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const onYellow = variant === "light";

  const navBg = onYellow ? "bg-[#c19402]" : "bg-[#2c2c2c]";
  const linkBase = onYellow
    ? "text-white/90 hover:text-white [&.active]:bg-white [&.active]:text-[#191919]"
    : "text-white/80 hover:text-white [&.active]:bg-[#464646] [&.active]:text-white";

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1600px] items-center gap-6 px-6 pt-6">
        <Link to="/" className="shrink-0">
          <img
            src={onYellow ? logo_white : logo_light}
            alt="Realico"
            className="h-8 w-auto"
          />
        </Link>
        <nav className={`hidden md:flex flex-1 items-center justify-between rounded-full px-1 py-1 shadow-sm ${navBg}`}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`flex-1 px-6 py-2.5 text-[13px] font-bold rounded-full transition-colors flex items-center justify-center min-h-[42px] [&.active]:min-h-[64px] [&.active]:text-[15px] ${linkBase}`}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.type === "image" ? (
                <img src={l.image} alt={l.label} className="h-6 w-auto" />
              ) : (
                l.label
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
