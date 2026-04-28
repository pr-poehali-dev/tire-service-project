import Icon from "@/components/ui/icon";

const directions = [
  {
    icon: "CircleDot",
    title: "Профессиональный шиномонтаж",
    items: [
      "Сезонная замена резины — быстро и аккуратно",
      "Ремонт проколов и порезов (вулканизация)",
      "Балансировка — устраняем вибрацию руля",
    ],
  },
  {
    icon: "ShoppingCart",
    title: "Продажа шин",
    items: [
      "Легковые шины — широкий выбор брендов",
      "Грузовые шины для дальних перевозок",
      "Шины для спецтехники и погрузчиков",
    ],
    bonus: "При покупке комплекта — скидка на монтаж!",
    phones: ["+79221198823", "+79221848228"],
  },
  {
    icon: "Droplets",
    title: "Грузовая автомойка",
    items: [
      "Мойка кузова — грязь, пыль, следы эксплуатации",
      "Химчистка кабины для комфорта водителя",
      "Мойка двигателя и узлов",
    ],
  },
];

const advantages = [
  { icon: "Layers", text: "Комплексный подход — всё в одном месте" },
  { icon: "Users", text: "Опытные мастера по грузовому и легковому транспорту" },
  { icon: "Clock", text: "Скорость — работаем в строго оговоренные сроки" },
  { icon: "BadgeCheck", text: "Прозрачные цены без скрытых доплат" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#2a3140] relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Header */}
        <div className="mb-14">
          <div className="section-tag mb-3">── Кто мы</div>
          <h2 className="font-oswald text-5xl font-bold text-white uppercase mb-2">
            О <span className="text-amber-400">компании</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mb-7" />
          <p className="text-slate-300 leading-relaxed max-w-3xl mb-3">
            <span className="text-white font-semibold">«ШинМастер»</span> — комплексный уход за вашим транспортом.
            Ваш надежный партнер по обслуживанию колес и автомобилей в Екатеринбурге.
            Мы находимся по адресу: <span className="text-amber-400">2-я Новосибирская, 56</span>.
          </p>
          <p className="text-slate-400 leading-relaxed max-w-3xl mb-3">
            Долгое время мы были известны как качественный шиномонтаж, но теперь выросли в полноценный
            сервисный центр, где можно решить все задачи, связанные с колесами и чистотой транспорта.
          </p>
          <p className="text-slate-400 leading-relaxed max-w-3xl mb-8">
            Мы понимаем, что время — это деньги, особенно для владельцев коммерческого транспорта.
            Поэтому собрали под одной крышей три ключевых направления, чтобы вы могли обслужить
            автомобиль быстро, качественно и без лишней суеты.
          </p>

          {/* Partner badge */}
          <div className="inline-flex items-center gap-5 bg-[#1e2329] border border-amber-400/40 px-6 py-4 max-w-xl">
            <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <Icon name="Award" size={24} className="text-amber-400" />
            </div>
            <div>
              <div className="section-tag mb-1">Официальный партнёр</div>
              <p className="font-oswald text-lg text-white uppercase tracking-wider">
                URAL ADVENTURE COMPANY
              </p>
              <p className="text-slate-500 text-xs mt-1">Официальная шинная мастерская клуба</p>
            </div>
          </div>
        </div>

        {/* 3 directions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {directions.map((d, i) => (
            <div key={i} className="service-card p-7 relative group">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-500" />
              <div className="w-12 h-12 bg-amber-400/10 flex items-center justify-center mb-4 border border-amber-400/20">
                <Icon name={d.icon} size={22} className="text-amber-400" />
              </div>
              <h3 className="font-oswald text-lg text-white font-semibold uppercase mb-4 tracking-wide">
                {d.title}
              </h3>
              <ul className="flex flex-col gap-2 mb-4">
                {d.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-amber-400 mt-1 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              {(d.bonus || d.phones) && (
                <div className="mt-auto pt-4 border-t border-amber-400/10 flex flex-col gap-2">
                  {d.bonus && <span className="text-amber-400 text-xs font-semibold">🎁 {d.bonus}</span>}
                  {d.phones && d.phones.map((phone: string) => (
                    <a key={phone} href={`tel:${phone}`} className="text-white font-oswald text-base hover:text-amber-400 transition-colors flex items-center gap-2">
                      <Icon name="Phone" size={13} className="text-amber-400" />
                      {phone.replace(/(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3-$4-$5')}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why us */}
        <div className="bg-[#1e2329] border border-[rgba(245,158,11,0.15)] p-8 sm:p-10">
          <h3 className="font-oswald text-2xl text-white uppercase mb-6">
            Почему клиенты выбирают <span className="text-amber-400">«ШинМастер»?</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {advantages.map((a, i) => (
              <div key={i} className="flex items-start gap-3 industrial-border-left pl-4 py-2">
                <Icon name={a.icon} size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm">{a.text}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-6 border-t border-[rgba(245,158,11,0.1)]">
            <Icon name="MapPin" size={18} className="text-amber-400 shrink-0" />
            <p className="text-slate-300 text-sm">
              Ждём вас по адресу:{" "}
              <span className="text-white font-semibold">Екатеринбург, ул. 2-я Новосибирская, 56</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}