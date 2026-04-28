import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Шиномонтаж", href: "#services" },
  { label: "Грузовая мойка", href: "#carwash" },
  { label: "Шины и диски", href: "#tires" },
  { label: "Галерея", href: "#gallery" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1e2329]/95 backdrop-blur-md border-b border-[rgba(245,158,11,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => handleNav("#home")} className="flex items-center gap-3 group">
          <img
            src="https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/bucket/15c81c9c-5931-4e0c-b6bf-13c7fb1bee51.jpg"
            alt="Шинмастер"
            className="w-10 h-10 object-contain rounded"
          />
          <span className="font-oswald text-xl font-bold text-white tracking-widest uppercase group-hover:text-amber-400 transition-colors">
            ШИНМАСТЕР
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`nav-link ${active === item.href ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA phones */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-slate-500 text-[10px] uppercase tracking-widest">Шиномонтаж</span>
            <a href="tel:+79120375507" className="text-white font-oswald text-sm font-semibold hover:text-amber-400 transition-colors">
              +7 912 037-55-07
            </a>
          </div>
          <div className="w-px h-8 bg-amber-400/20" />
          <div className="flex flex-col items-end">
            <span className="text-slate-500 text-[10px] uppercase tracking-widest">Мойка</span>
            <a href="tel:+79935098823" className="text-amber-400 font-oswald text-sm font-semibold hover:text-amber-300 transition-colors">
              +7 993 509-88-23
            </a>
          </div>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1e2329]/98 border-t border-[rgba(245,158,11,0.15)] py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`nav-link text-left text-base ${active === item.href ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+79120375507"
            className="btn-primary text-center mt-2"
          >
            +7 912 037-55-07
          </a>
        </div>
      )}
    </header>
  );
}