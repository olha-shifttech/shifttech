import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { serviceCards } from "@/lib/data";

export const metadata: Metadata = { title: "Послуги ShiftTech — ремонт АКПП, DSG, CVT", description: "Основні напрями ShiftTech: діагностика, ремонт АКПП, CVT та DSG без непідтверджених обіцянок." };

export default function Services() {
  return <><Hero title="Послуги ShiftTech" subtitle="Сервісна карта побудована обережно: рішення щодо ремонту приймається тільки після діагностики, а сайт не вигадує ціни, адреси або гарантійні умови." /><Section eyebrow="service map" title="Напрями сервісу"><div className="grid gap-5 md:grid-cols-2">{serviceCards.map((card) => <Card key={card.title} title={card.title} href={card.href}><p>{card.text}</p></Card>)}</div></Section><Section eyebrow="content rule" title="Професійно без залякування"><div className="grid gap-5 md:grid-cols-3"><Card title="Технічна обережність"><p>Симптом може бути пов'язаний з різними вузлами. Без перевірки точну причину визначити не можна.</p></Card><Card title="Knowledge First"><p>Факти зберігаються у структурі даних і пов'язуються між авто, коробками, симптомами та кейсами.</p></Card><Card title="Готовність до Vercel"><p>Сторінки побудовані на App Router, TypeScript, Tailwind CSS і статичній генерації там, де це можливо.</p></Card></div></Section></>;
}
