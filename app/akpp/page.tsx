import type { Metadata } from "next";
import { Card, ContactBlock, Hero, Section } from "@/components/ui";
import { landings, site } from "@/lib/site";

export const metadata: Metadata = { title: "Ремонт АКПП", description: "Ремонт АКПП Aisin 09G, 09K, 09M і Ford 6F35 у ShiftTech. Готові відновлені 09G з обмінного фонду." };

export default function Akpp() {
  return <><Hero title="Ремонт АКПП" subtitle="Aisin 09G, 09K, 09M і Ford 6F35. Рішення щодо ремонту — тільки після діагностики." /><Section eyebrow="Окремі сторінки" title="Ремонт і готові коробки"><div className="grid gap-5 md:grid-cols-2"><Card title="Ремонт АКПП 09G / 09K / 09M" href={landings.aisinRepair}><p>Діагностика, дефектовка та ремонт. Обсяг робіт і вартість погоджуємо до ремонту.</p></Card><Card title="Купити відновлену АКПП 09G" href={landings.rebuilt09g}><p>Готові коробки з обмінного фонду: продаж або обмін, установка на нашому СТО, відправка по Україні.</p></Card><Card title="АКПП Ford 6F35" href="/repair/ford-6f35"><p>Ремонт автоматичної коробки Ford 6F35.</p></Card></div></Section><Section eyebrow="Як ми працюємо" title="Спершу причина, потім ремонт"><div className="grid gap-5 md:grid-cols-3"><Card title="Діагностика"><p>Визначаємо коробку за VIN і кодом агрегату, фіксуємо симптоми та умови, за яких вони з’являються.</p></Card><Card title="Висновок і погодження робіт"><p>Показуємо, що знайшли. Обсяг робіт і вартість погоджуємо з вами до початку ремонту.</p></Card><Card title="Ремонт і перевірка"><p>Ремонтуємо погоджений обсяг і перевіряємо роботу коробки після ремонту.</p></Card></div><p className="mt-8 max-w-3xl font-semibold leading-7 text-zinc-300">{site.warranty}</p></Section><Section eyebrow="Контакти та маршрут" title="Запис на діагностику"><ContactBlock /></Section></>;
}
