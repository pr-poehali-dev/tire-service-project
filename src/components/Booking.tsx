import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    comment: "",
  });
  const [sent, setSent] = useState(false);

  const services = [
    "Шиномонтаж легкового",
    "Шиномонтаж грузового",
    "Балансировка",
    "Ремонт шины",
    "Хранение шин",
    "Подбор шин/дисков",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="booking" className="py-24 bg-[#1e2329] relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-400/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center mb-12">
          <div className="section-tag mb-3">── Онлайн-запись</div>
          <h2 className="font-oswald text-5xl font-bold text-white uppercase">
            Запись на <span className="text-amber-400">сервис</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-4 mx-auto" />
          <p className="text-slate-400 mt-5">
            Оставьте заявку — мы перезвоним и подтвердим время
          </p>
        </div>

        {sent ? (
          <div className="bg-[#2a3140] border border-amber-400/30 p-12 text-center">
            <Icon name="CheckCircle" size={56} className="text-amber-400 mx-auto mb-4" />
            <h3 className="font-oswald text-2xl text-white uppercase mb-2">Заявка отправлена!</h3>
            <p className="text-slate-400">Мы перезвоним вам в ближайшее время</p>
            <button
              className="btn-outline mt-6"
              onClick={() => { setSent(false); setForm({ name: "", phone: "", service: "", date: "", comment: "" }); }}
            >
              Новая запись
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#2a3140] border border-[rgba(245,158,11,0.15)] p-8 sm:p-10 grid sm:grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="section-tag">Имя</label>
              <input
                required
                type="text"
                placeholder="Иван Иванов"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-[#1e2329] border border-[rgba(148,163,184,0.2)] text-white px-4 py-3 text-sm focus:border-amber-400 outline-none transition-colors placeholder-slate-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="section-tag">Телефон</label>
              <input
                required
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-[#1e2329] border border-[rgba(148,163,184,0.2)] text-white px-4 py-3 text-sm focus:border-amber-400 outline-none transition-colors placeholder-slate-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="section-tag">Услуга</label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="bg-[#1e2329] border border-[rgba(148,163,184,0.2)] text-white px-4 py-3 text-sm focus:border-amber-400 outline-none transition-colors"
              >
                <option value="">Выберите услугу</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="section-tag">Желаемая дата</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="bg-[#1e2329] border border-[rgba(148,163,184,0.2)] text-white px-4 py-3 text-sm focus:border-amber-400 outline-none transition-colors"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="section-tag">Комментарий (необязательно)</label>
              <textarea
                rows={3}
                placeholder="Марка и модель авто, размер шин..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="bg-[#1e2329] border border-[rgba(148,163,184,0.2)] text-white px-4 py-3 text-sm focus:border-amber-400 outline-none transition-colors resize-none placeholder-slate-600"
              />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Icon name="CalendarCheck" size={16} />
                Отправить заявку
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
