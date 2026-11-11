import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { transmissions } from "@/lib/data";
import { landings } from "@/lib/site";

export const metadata: Metadata = { title: "Ремонт CVT / варіаторів", description: "Ремонт CVT ShiftTech: Jatco JF010E, JF011E, JF015E, JF016E, JF017E." };

export default function Cvt() {
  return <><Hero title="Ремонт CVT / варіаторів" subtitle="Jatco CVT: JF010E, JF011E, JF015E, JF016E, JF017E. Модель варіатора перевіряємо за VIN." /><Section eyebrow="Окрема сторінка" title="Ремонт варіаторів Jatco"><div className="grid gap-5 md:grid-cols-2"><Card title="Ремонт варіаторів Jatco" href={landings.jatcoCvt}><p>Діагностика, дефектовка, ремонт гідроблока й насоса, роботи з ременем і конусами, адаптація після ремонту.</p></Card></div></Section><Section eyebrow="Варіатори CVT" title="База знань: варіатори Jatco"><div className="grid gap-5 md:grid-cols-2">{transmissions.filter((item) => item.type === "CVT").map((item) => <Card key={item.id} title={item.name} href={`/transmissions/${item.id}`}><p>{item.alt}</p><p className="mt-3 text-sm text-zinc-500">{item.summary}</p></Card>)}</div></Section></>;
}
