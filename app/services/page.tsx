import type { Metadata } from "next";
import { Card, ContactBlock, Hero, Section } from "@/components/ui";
import { site } from "@/lib/site";
import { serviceCards } from "@/lib/data";

export const metadata: Metadata = { title: "Послуги — ремонт АКПП, варіаторів і PowerShift", description: "Напрями ShiftTech: діагностика, АКПП Aisin 09G / TF-60SN, варіатори Jatco, PowerShift DCT450 і DCT250, Ford 6F35." };

export default function Services() {
  return <><Hero title="Послуги ShiftTech" subtitle="АКПП Aisin 09G / TF-60SN, варіатори Jatco, PowerShift DCT450 і DCT250, Ford 6F35. Рішення щодо ремонту приймаємо тільки після діагностики." /><Section eyebrow="Напрями сервісу" title="Що ремонтуємо"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{serviceCards.map((card) => <Card key={card.title} title={card.title} href={card.href}><p>{card.text}</p></Card>)}</div></Section><Section eyebrow="Як ми працюємо" title="Спершу причина, потім ремонт"><div className="grid gap-5 md:grid-cols-3"><Card title="Діагностика"><p>Визначаємо коробку за VIN і кодом агрегату, фіксуємо симптоми та умови, за яких вони з’являються.</p></Card><Card title="Висновок і погодження робіт"><p>Показуємо, що знайшли. Обсяг робіт і вартість погоджуємо з вами до початку ремонту.</p></Card><Card title="Ремонт і перевірка"><p>Ремонтуємо погоджений обсяг і перевіряємо роботу коробки після ремонту.</p></Card></div><p className="mt-8 max-w-3xl font-semibold leading-7 text-zinc-300">{site.warranty}</p></Section><Section eyebrow="Контакти та маршрут" title="Запис на діагностику"><ContactBlock /></Section></>;
}
