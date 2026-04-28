import Icon from "@/components/ui/icon";

const info = [
  {
    icon: "Phone",
    label: "Шиномонтаж",
    value: "+7 912 037-55-07",
    href: "tel:+79120375507",
  },
  {
    icon: "Droplets",
    label: "Грузовая мойка",
    value: "+7 993 509-88-23",
    href: "tel:+79935098823",
  },
  {
    icon: "Clock",
    label: "Режим работы",
    value: "Пн–Сб: 9:00 – 21:00\nВс: выходной",
    href: null,
  },
  {
    icon: "MapPin",
    label: "Адрес",
    value: "Екатеринбург\nул. 2-я Новосибирская, 56",
    href: null,
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-[#2a3140] relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="section-tag mb-3">── Где мы находимся</div>
          <h2 className="font-oswald text-5xl font-bold text-white uppercase">
            Контакты <span className="text-amber-400">&</span> адрес
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="flex flex-col gap-5">
            {info.map((item, i) => (
              <div
                key={i}
                className="service-card p-6 flex items-start gap-5"
              >
                <div className="w-11 h-11 bg-amber-400/10 flex items-center justify-center border border-amber-400/20 shrink-0">
                  <Icon name={item.icon} size={20} className="text-amber-400" />
                </div>
                <div>
                  <div className="section-tag mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="font-oswald text-xl text-white hover:text-amber-400 transition-colors whitespace-pre-line">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-oswald text-xl text-white whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="service-card p-6">
              <div className="section-tag mb-4">Мы в соцсетях</div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-11 h-11 border border-[rgba(148,163,184,0.2)] flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-all"
                >
                  <Icon name="MessageCircle" size={18} />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 border border-[rgba(148,163,184,0.2)] flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-all"
                >
                  <Icon name="Instagram" size={18} />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 border border-[rgba(148,163,184,0.2)] flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-all"
                >
                  <Icon name="Youtube" size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-3">
            <div className="border border-[rgba(245,158,11,0.15)] overflow-hidden" style={{ height: 380 }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=60.578157%2C56.751895&z=17&pt=60.578157%2C56.751895,pm2rdm&org=126560605313"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Карта — ШинМастер"
                style={{ filter: "grayscale(30%) contrast(1.05)" }}
              />
            </div>
            <a
              href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.578723%2C56.751910&mode=poi&poi%5Bpoint%5D=60.578157%2C56.751895&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D126560605313&z=19.07"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm flex items-center justify-center gap-2"
            >
              <Icon name="ExternalLink" size={14} />
              Открыть в Яндекс.Картах
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 border-t border-[rgba(245,158,11,0.1)] pt-8 max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/bucket/15c81c9c-5931-4e0c-b6bf-13c7fb1bee51.jpg"
            alt="Шинмастер"
            className="w-8 h-8 object-contain rounded"
          />
          <span className="font-oswald text-white uppercase tracking-widest text-sm">Шинмастер</span>
        </div>
        <p className="text-slate-600 text-xs">© 2024 Шинмастер. Все права защищены.</p>
      </div>
    </section>
  );
}