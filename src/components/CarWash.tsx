import Icon from "@/components/ui/icon";

const washServices = [
  {
    icon: "Droplets",
    title: "Полная мойка кузова",
    desc: "Ручная мойка кузова грузового автомобиля, тягача или автобуса. Удаляем дорожную грязь, соль и мазут.",
  },
  {
    icon: "Wind",
    title: "Мойка двигателя",
    desc: "Очистка моторного отсека паром и специальными средствами. Безопасно для электрики и резиновых элементов.",
  },
  {
    icon: "Truck",
    title: "Мойка рамы и ходовой",
    desc: "Тщательная очистка рамы, мостов, рессор и ходовой части от грязи и коррозии.",
  },
  {
    icon: "Container",
    title: "Мойка полуприцепа",
    desc: "Внешняя мойка полуприцепов, рефрижераторов, бортовых и тентованных прицепов любых размеров.",
  },
  {
    icon: "SprayCan",
    title: "Чернение резины",
    desc: "Обработка шин специальным составом — придаёт насыщенный чёрный цвет и защищает от растрескивания.",
  },
  {
    icon: "Star",
    title: "Комплексная обработка",
    desc: "Полный цикл: мойка кузова, рамы, двигателя и колёс. Выезд для крупнотоннажных авто по договорённости.",
  },
];

export default function CarWash() {
  return (
    <section id="carwash" className="py-24 bg-[#1e2329] relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="section-tag mb-3">── Новое направление</div>
            <h2 className="font-oswald text-5xl font-bold text-white uppercase">
              Грузовая <span className="text-amber-400">мойка</span>
            </h2>
            <div className="w-16 h-1 bg-amber-400 mt-4" />
          </div>
          <div className="bg-amber-400/10 border border-amber-400/30 px-6 py-4 max-w-xs">
            <p className="text-amber-400 font-oswald text-sm uppercase tracking-wider mb-1">Работаем с техникой</p>
            <p className="text-slate-300 text-sm">Грузовики · Тягачи · Прицепы · Автобусы · Спецтехника</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {washServices.map((s, i) => (
            <div key={i} className="service-card p-7 relative group">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-500" />

              <div className="w-12 h-12 bg-amber-400/10 flex items-center justify-center mb-5 border border-amber-400/20">
                <Icon name={s.icon} size={22} className="text-amber-400" />
              </div>

              <h3 className="font-oswald text-xl text-white font-semibold uppercase mb-2 tracking-wide">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>

              <div className="border-t border-[rgba(245,158,11,0.1)] pt-4 flex justify-end">
                <Icon name="ArrowRight" size={16} className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 p-8 bg-[#2a3140] border border-[rgba(245,158,11,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-oswald text-xl text-white uppercase">Стоимость уточняйте по телефону</p>
            <p className="text-slate-400 text-sm mt-1">Цена зависит от типа и габаритов техники</p>
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
