import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { serviceCards } from "@/lib/data";

export const metadata: Metadata = { title: "Послуги ShiftTech — ремонт АКПП, DSG, CVT", description: "Основні напрями ShiftTech: діагностика, ремонт АКПП, CVT та DSG без непідтверджених обіцянок." };

export default function Services() {
  return <><Hero title="Послуги ShiftTech" subtitle="АКПП Aisin 09G / TF-60SN, варіатори Jatco, PowerShift DCT450 і DCT250, Ford 6F35. Рішення щодо ремонту приймаємо тільки після діагностики." /><Section eyebrow="Напрями сервісу" title="Напрями сервісу"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{serviceCards.map((card) => <Card key={card.title} title={card.title} href={card.href}><p>{card.text}</p></Card>)}</div></Section><Section eyebrow="Принципи роботи" title="Професійно без залякування"><div className="grid gap-5 md:grid-cols-3"><Card title="Технічна обережність"><p>Симптом може бути пов'язаний з різними вузлами. Без перевірки точну причину визначити не можна.</p></Card><Card title="Перевірені знання"><p>Факти зберігаються у структурі даних і пов'язуються між авто, коробками, симптомами та кейсами.</p></Card><Card title="Готовність до розвитку"><p>Структура сторінок готова до подальшого наповнення та розвитку без дублювання матеріалів.</p></Card></div></Section></>;
}
