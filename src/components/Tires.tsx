import { useState } from "react";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Летние", "Зимние", "Всесезонные", "Внедорожные"];

const tires = [
  {
    brand: "Michelin",
    model: "Pilot Sport 5",
    season: "Летние",
    size: "225/45 R17",
    price: "12 500 ₽",
    badge: "Хит",
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/5a08f885-7dde-4019-ab00-a77cde35fcb7.jpg",
  },
  {
    brand: "Continental",
    model: "WinterContact TS 870",
    season: "Зимние",
    size: "205/55 R16",
    price: "9 800 ₽",
    badge: "Новинка",
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/89d6af28-8883-4490-b941-487011cef689.jpg",
  },
  {
    brand: "BFGoodrich",
    model: "All-Terrain T/A KO2",
    season: "Внедорожные",
    size: "265/70 R17",
    price: "18 200 ₽",
    badge: "Топ",
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/63085e3a-3ba2-4cf9-b3f9-7568485bf5d3.jpg",
  },
  {
    brand: "Yokohama",
    model: "BluEarth-4S AW21",
    season: "Всесезонные",
    size: "215/60 R16",
    price: "8 400 ₽",
    badge: "",
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/221a1b68-43f2-4067-b528-ba1e6ebee7dd.jpg",
  },
  {
    brand: "Nokian",
    model: "Hakkapeliitta 10",
    season: "Зимние",
    size: "195/65 R15",
    price: "11 600 ₽",
    badge: "Хит",
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/688e9e68-ce35-4221-b32b-1042079bc7cd.jpg",
  },
  {
    brand: "Pirelli",
    model: "Scorpion Verde",
    season: "Летние",
    size: "235/60 R18",
    price: "14 900 ₽",
    badge: "",
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/7fdcf8da-85de-4912-b9fc-94bd61bdbe73.jpg",
  },
];

export default function Tires() {
  const [active, setActive] = useState("Все");

  const filtered =
    active === "Все" ? tires : tires.filter((t) => t.season === active);

  return (
    <section id="tires" className="py-24 bg-[#2a3140] relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="section-tag mb-3">── Каталог</div>
          <h2 className="font-oswald text-5xl font-bold text-white uppercase">
            Шины и <span className="text-amber-400">диски</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-4" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 font-oswald text-sm uppercase tracking-wider transition-all border ${
                active === cat
                  ? "bg-amber-400 text-[#1e2329] border-amber-400"
                  : "bg-transparent text-slate-400 border-[rgba(148,163,184,0.2)] hover:border-amber-400 hover:text-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tire, i) => (
            <div key={i} className="service-card overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tire.img}
                  alt={tire.model}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2329] to-transparent" />
                {tire.badge && (
                  <span className="absolute top-3 left-3 bg-amber-400 text-[#1e2329] font-oswald text-xs font-bold px-2 py-1 uppercase tracking-wider">
                    {tire.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-[#1e2329]/80 text-slate-300 text-xs px-2 py-1 uppercase tracking-wider">
                  {tire.season}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">{tire.brand}</div>
                <h3 className="font-oswald text-lg text-white font-semibold uppercase mb-1">{tire.model}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Icon name="Maximize2" size={13} />
                  {tire.size}
                </div>
                <div className="flex items-center justify-end">
                  <button className="btn-outline text-xs px-4 py-2">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-8 bg-[#2a3140] border border-[rgba(245,158,11,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-oswald text-xl text-white uppercase mb-1">Не нашли нужный размер?</p>
            <p className="text-slate-400 text-sm">У нас более 500 позиций в наличии и под заказ</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col items-center sm:items-end">
              <span className="section-tag mb-1">Продажа шин</span>
              <a href="tel:+79221198823" className="text-amber-400 font-oswald text-xl font-bold hover:text-amber-300 transition-colors flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 922 119-88-23
              </a>
            </div>
            <div className="w-px bg-amber-400/20 hidden sm:block" />
            <div className="flex flex-col items-center sm:items-end">
              <span className="section-tag mb-1">Продажа шин</span>
              <a href="tel:+79221848228" className="text-amber-400 font-oswald text-xl font-bold hover:text-amber-300 transition-colors flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 922 184-82-28
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}