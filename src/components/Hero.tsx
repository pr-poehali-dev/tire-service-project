import Icon from "@/components/ui/icon";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1e2329]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/221a1b68-43f2-4067-b528-ba1e6ebee7dd.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2329] via-[#1e2329]/85 to-[#1e2329]/40" />
      </div>

      {/* Tire track decorations */}
      <div className="absolute inset-0 grid-texture opacity-60 pointer-events-none" />

      {/* Vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Content */}
        <div>
          <div className="section-tag mb-5 animate-fade-in-up">
            ── Легковой и грузовой шиномонтаж
          </div>

          <h1 className="font-oswald text-6xl sm:text-7xl lg:text-8xl font-bold text-white uppercase leading-none mb-2 animate-fade-in-up delay-100">
            ШИН
            <span className="text-amber-400">МАСТЕР</span>
          </h1>

          <div className="w-20 h-1 bg-amber-400 mb-6 animate-fade-in-up delay-200" />

          <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-md animate-fade-in-up delay-300">
            Профессиональный шиномонтаж любой сложности. Легковые и грузовые автомобили, внедорожники.
          </p>

          <p className="text-slate-400 text-sm mb-8 animate-fade-in-up delay-300">
            Официальная шинная мастерская клуба{" "}
            <span className="text-amber-400 font-semibold">URAL ADVENTURE COMPANY</span>
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <button
              onClick={() => scrollTo("#booking")}
              className="btn-primary flex items-center gap-2"
            >
              <Icon name="CalendarCheck" size={16} />
              Записаться онлайн
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="btn-outline flex items-center gap-2"
            >
              <Icon name="ChevronRight" size={16} />
              Наши услуги
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[rgba(245,158,11,0.15)] animate-fade-in-up delay-500">
            <div>
              <div className="stat-number">10+</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest mt-1">лет опыта</div>
            </div>
            <div>
              <div className="stat-number">5000+</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest mt-1">клиентов</div>
            </div>
            <div>
              <div className="stat-number">24/7</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest mt-1">поддержка</div>
            </div>
          </div>
        </div>

        {/* Right: Logo card */}
        <div className="hidden lg:flex justify-center items-center animate-fade-in-up delay-200">
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-400/5 rounded-full blur-3xl" />
            <img
              src="https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/bucket/15c81c9c-5931-4e0c-b6bf-13c7fb1bee51.jpg"
              alt="Шинмастер"
              className="relative w-80 h-80 object-contain rounded-2xl border border-[rgba(245,158,11,0.2)] shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-slate-400 text-xs tracking-widest uppercase">Листайте</span>
        <Icon name="ChevronDown" size={20} className="text-amber-400 animate-bounce" />
      </div>
    </section>
  );
}
