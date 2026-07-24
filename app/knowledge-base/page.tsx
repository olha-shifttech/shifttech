import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { entitiesByKind, entityKinds, kindLabels } from "@/lib/knowledge/catalog";

export const metadata: Metadata = { title: "База знань", description: "Структурована база знань ShiftTech про автоматичні трансмісії." };
export default function Page() {
  return <><Hero title="База знань ShiftTech" subtitle="Єдина структурована система, що поєднує автомобілі, коробки передач, симптоми, діагностику, ремонтні процедури, кейси та корисні матеріали." /><Section eyebrow="Структура знань" title="Перегляньте всі розділи"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{entityKinds.map((kind) => <Card key={kind} title={kindLabels[kind]} href={`/${kind}`}><p className="mb-3 text-4xl font-black text-shift">{entitiesByKind(kind).length}</p><p>Підготовлені сторінки, поєднані у зручну систему навігації.</p></Card>)}</div></Section><Section eyebrow="Принцип публікації" title="Тільки перевірені технічні матеріали"><div className="grid gap-5 md:grid-cols-3"><Card title="Одна сторінка для теми"><p>Кожна сутність має постійну адресу та не дублюється в каталозі.</p></Card><Card title="Зручні зв’язки"><p>Пов’язані сторінки допомагають послідовно переходити між темами.</p></Card><Card title="Перевірка перед публікацією"><p>Технічні матеріали публікуються лише після перевірки джерел.</p></Card></div></Section></>;
}
