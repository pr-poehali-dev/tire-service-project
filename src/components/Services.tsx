import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Car",
    title: "Шиномонтаж легковых",
    desc: "Замена, монтаж и демонтаж шин для легковых автомобилей. Работаем с любыми типоразмерами.",
    price: "от 300 ₽",
  },
  {
    icon: "Truck",
    title: "Шиномонтаж грузовых",
    desc: "Полный цикл работ с грузовыми шинами: грузовики, автобусы, спецтехника любых типов.",
    price: "от 800 ₽",
  },
  {
    icon: "RotateCw",
    title: "Балансировка колёс",
    desc: "Компьютерная балансировка на профессиональном стенде. Устраняем биение и вибрацию.",
    price: "от 250 ₽",
  },
  {
    icon: "Settings",
    title: "Ремонт шин",
    desc: "Жгуты, грибки, вулканизация. Восстанавливаем шины с боковыми порезами и проколами.",
    price: "от 400 ₽",
  },
  {
    icon: "Disc",
    title: "Хранение шин",
    desc: "Сезонное хранение колёс на специализированных стеллажах в тёплом отапливаемом помещении.",
    price: "от 2 000 ₽/сезон",
  },
  {
    icon: "Wrench",
    title: "Подбор шин и дисков",
    desc: "Помогаем подобрать оптимальные шины и диски под ваш автомобиль, бюджет и стиль езды.",
    price: "Бесплатно",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#1e2329] relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="section-tag mb-3">── Шины и резина</div>
          <h2 className="font-oswald text-5xl font-bold text-white uppercase">
            Шино<span className="text-amber-400">монтаж</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-4" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card p-7 relative group">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-500" />

              <div className="w-12 h-12 bg-amber-400/10 flex items-center justify-center mb-5 border border-amber-400/20">
                <Icon name={s.icon} size={22} className="text-amber-400" />
              </div>

              <h3 className="font-oswald text-xl text-white font-semibold uppercase mb-2 tracking-wide">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>

              <div className="flex items-center justify-between border-t border-[rgba(245,158,11,0.1)] pt-4">
                <span className="text-amber-400 font-oswald font-bold text-lg">{s.price}</span>
                <Icon name="ArrowRight" size={16} className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-[#2a3140] border border-[rgba(245,158,11,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-oswald text-xl text-white uppercase">Не нашли нужную услугу?</p>
            <p className="text-slate-400 text-sm mt-1">Звоните — решим любую задачу по шинам</p>
          </div>
          <a href="tel:+79120375507" className="btn-primary flex items-center gap-2 whitespace-nowrap">
            <Icon name="Phone" size={16} />
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}