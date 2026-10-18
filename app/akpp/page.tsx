import type { Metadata } from "next";
import Link from "next/link";
import { Card, Hero, Section } from "@/components/ui";
import { transmissions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Продаж і ремонт АКПП Aisin 09G | ShiftTech",
  description:
    "Готові відновлені АКПП Aisin 09G з обмінного фонду ShiftTech: установлення на СТО або відправлення по Україні. Сумісність перевіряємо за кодом коробки та параметрами авто.",
};

export default function Akpp() {
  return (
    <>
      <Hero
        title="Продаж і ремонт АКПП"
        subtitle="Ремонт автоматичних коробок і підбір готової відновленої Aisin 09G з обмінного фонду. Сумісність визначаємо за кодом коробки та параметрами автомобіля."
      />

      <Section eyebrow="Обмінний фонд ShiftTech" title="Потрібна готова АКПП Aisin 09G?">
        <div className="grid gap-5 lg:grid-cols-[1.5fr_.8fr]">
          <Card title="Відновлена коробка — з установленням або відправленням">
            <p>
              Пропонуємо готові відновлені АКПП Aisin 09G. Можна придбати агрегат за повною вартістю або
              обговорити нижчу вартість за умови повернення старої коробки.
            </p>
            <p className="mt-4">
              За потреби встановимо коробку на нашому СТО. Також відправляємо по Україні.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Для Volkswagen Passat B7 2.5 USA та інших автомобілів сумісність перевіряємо окремо за кодом АКПП
              і параметрами авто. Наявність, вартість та умови обміну уточнюйте перед замовленням.
            </p>
          </Card>

          <div className="flex flex-col items-start justify-center rounded-2xl border border-shift/20 bg-shift/[.06] p-6">
            <p className="text-lg font-bold text-white">Перевіримо, чи підійде коробка</p>
            <p className="mt-3 leading-7 text-zinc-400">
              Надішліть дані автомобіля та код старої коробки — уточнимо сумісність і доступні умови.
            </p>
            <Link className="button-primary mt-6" href="/contacts">
              Уточнити наявність і сумісність
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Коробки Aisin" title="Пріоритетні АКПП">
        <div className="grid gap-5 md:grid-cols-3">
          {transmissions
            .filter((item) => item.type === "АКПП")
            .map((item) => (
              <Card key={item.id} title={item.name} href={`/transmissions/${item.id}`}>
                <p>{item.alt}</p>
                <p className="mt-3 text-sm text-zinc-500">{item.summary}</p>
              </Card>
            ))}
        </div>
      </Section>
    </>
  );
}
