import Icon from "@/components/ui/icon";

const advantages = [
  { icon: "ShieldCheck", text: "Гарантия на все виды работ" },
  { icon: "Clock", text: "Быстро — от 20 минут" },
  { icon: "Users", text: "Опытные мастера" },
  { icon: "Star", text: "Официальный партнёр Ural Adventure Company" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#2a3140] relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-amber-400/5 blur-2xl rounded" />
            <img
              src="https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/221a1b68-43f2-4067-b528-ba1e6ebee7dd.jpg"
              alt="О нас"
              className="relative w-full h-80 lg:h-[480px] object-cover border border-[rgba(245,158,11,0.15)]"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 bg-[#1e2329]/90 border border-amber-400/30 px-6 py-4">
              <div className="stat-number text-3xl">2023</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest">год основания</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="section-tag mb-3">── Кто мы</div>
            <h2 className="font-oswald text-5xl font-bold text-white uppercase mb-2">
              О <span className="text-amber-400">компании</span>
            </h2>
            <div className="w-16 h-1 bg-amber-400 mb-7" />

            <p className="text-slate-300 leading-relaxed mb-4">
              <span className="text-white font-semibold">Шинмастер</span> — профессиональный
              шиномонтаж в Екатеринбурге с многолетним опытом работы. Выполняем все виды работ с
              шинами для легковых и грузовых автомобилей, внедорожников и спецтехники.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Являемся официальной шинной мастерской клуба{" "}
              <span className="text-amber-400 font-semibold">URAL ADVENTURE COMPANY</span> —
              объединения любителей внедорожных приключений Урала и Сибири.
            </p>

            {/* Advantages */}
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((a, i) => (
                <div key={i} className="flex items-start gap-3 industrial-border-left pl-4 py-2">
                  <Icon name={a.icon} size={18} className="text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}