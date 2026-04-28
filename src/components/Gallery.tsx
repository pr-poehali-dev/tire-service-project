import { useState } from "react";
import Icon from "@/components/ui/icon";

const items = [
  {
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/221a1b68-43f2-4067-b528-ba1e6ebee7dd.jpg",
    title: "Замена зимних шин",
    category: "Шиномонтаж",
  },
  {
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/5a08f885-7dde-4019-ab00-a77cde35fcb7.jpg",
    title: "Установка колёс",
    category: "Монтаж",
  },
  {
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/89d6af28-8883-4490-b941-487011cef689.jpg",
    title: "Склад шин и дисков",
    category: "Хранение",
  },
  {
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/7fdcf8da-85de-4912-b9fc-94bd61bdbe73.jpg",
    title: "Грузовой шиномонтаж",
    category: "Грузовые",
  },
  {
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/63085e3a-3ba2-4cf9-b3f9-7568485bf5d3.jpg",
    title: "Внедорожные шины",
    category: "Off-Road",
  },
  {
    img: "https://cdn.poehali.dev/projects/8b9ff568-6a9e-4ea9-8599-85caeb1baff3/files/688e9e68-ce35-4221-b32b-1042079bc7cd.jpg",
    title: "Балансировка колёс",
    category: "Балансировка",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#1e2329] relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="section-tag mb-3">── Наши работы</div>
          <h2 className="font-oswald text-5xl font-bold text-white uppercase">
            Галерея <span className="text-amber-400">работ</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-4" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`gallery-item cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="overlay">
                <div>
                  <div className="text-amber-400 text-xs uppercase tracking-widest mb-1">
                    {item.category}
                  </div>
                  <div className="text-white font-oswald text-lg uppercase font-semibold">
                    {item.title}
                  </div>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-r-[32px] border-t-amber-400/0 border-r-amber-400/0 group-hover:border-t-amber-400/60 group-hover:border-r-amber-400/60 transition-all" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + items.length) % items.length);
            }}
          >
            <Icon name="ChevronLeft" size={40} />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % items.length);
            }}
          >
            <Icon name="ChevronRight" size={40} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[lightbox].img}
              alt={items[lightbox].title}
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center">
              <div className="text-amber-400 text-xs uppercase tracking-widest">
                {items[lightbox].category}
              </div>
              <div className="text-white font-oswald text-xl uppercase mt-1">
                {items[lightbox].title}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
