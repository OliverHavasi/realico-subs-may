import { Link } from "@tanstack/react-router";
import { Plus, User, ChevronDown, Facebook, Instagram } from "lucide-react";
import logo_white from "@/assets/brand/realico_logo_w_y_dot.svg";

export function SiteFooter() {
  return (
    <footer className="bg-[#0A0A0A] text-[#a9a9a9]" style={{ height: 300 }}>
      <div className="mx-auto max-w-[1280px] h-full px-10 flex flex-col">
        {/* Top row */}
        <div className="flex items-start justify-between pt-16">
          <Link to="/" className="shrink-0">
            <img src={logo_white} alt="Realico" className="h-8 w-auto" />
          </Link>

          <nav className="flex items-center gap-10 text-[14px] font-semibold text-[#a9a9a9] pt-2">
            <Link to="/" className="hover:opacity-70 transition-opacity">Čo je Realico</Link>
            <Link to="/reklama" className="hover:opacity-70 transition-opacity">Ako inzerovať</Link>
            <a href="#" className="hover:opacity-70 transition-opacity">GDPR</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Cookies</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Kontakt</a>
          </nav>

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] text-[#a9a9a9] hover:bg-white/15 transition-colors">
                <Plus className="w-4 h-4" /> Pridať inzerát
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] text-[#a9a9a9] hover:bg-white/15 transition-colors">
                <User className="w-4 h-4" /> Prihlásiť sa
              </button>
              <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-2 text-[13px] text-[#a9a9a9] hover:bg-white/15 transition-colors">
                SK <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-start justify-between w-full gap-8">
              <ul className="flex flex-col items-start gap-2 text-[13px] text-[#a9a9a9]">
                <li><a href="#" className="hover:opacity-70 transition-opacity">Podmienky používania</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Ochrana osobných údajov</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Pripomienky a nápady</a></li>
              </ul>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 transition-colors flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-[#a9a9a9]" />
                </a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 transition-colors flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-[#a9a9a9]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pl-[173px] text-left text-[12px] text-[#a9a9a9]">
          © Copyright 2026 Realico.sk Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
}
