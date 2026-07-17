import type { Metadata } from "next";
import Link from "next/link";
import { Card, Hero, Section } from "@/components/ui";
import { transmissions } from "@/lib/data";

export const metadata: Metadata = { title: "Коробки передач", description: "Сторінки коробок передач ShiftTech: 09G, 09M, 09K, Jatco CVT, DSG та пов'язані автомобілі." };

export default function Transmissions() {
  return <><Hero title="Коробки передач" subtitle="Центральний шар знань ShiftTech: кожна коробка має власний стабільний URL і зв'язки з авто, симптомами та майбутніми кейсами." /><Section eyebrow="entities" title="Перший список трансмісій"><div className="grid gap-5 md:grid-cols-3">{transmissions.map((item) => <Card key={item.id} title={item.name}><p>{item.alt}</p><p className="mt-2 text-sm text-zinc-500">Тип: {item.type} · Виробник: {item.manufacturer}</p><Link className="mt-4 inline-block text-shift" href={`/transmissions/${item.id}`}>Відкрити сторінку</Link></Card>)}</div></Section></>;
}
