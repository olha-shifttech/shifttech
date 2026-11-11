import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { transmissions } from "@/lib/data";
import { landings } from "@/lib/site";

export const metadata: Metadata = { title: "Ремонт АКПП", description: "Ремонт АКПП ShiftTech з фокусом на Aisin 09G, 09M, 09K і діагностику перед висновками." };

export default function Akpp() {
  return <><Hero title="Ремонт АКПП" subtitle="Aisin 09G, 09K, 09M і Ford 6F35. Рішення щодо ремонту — тільки після діагностики." /><Section eyebrow="Окремі сторінки" title="Ремонт і готові коробки"><div className="grid gap-5 md:grid-cols-2"><Card title="Ремонт АКПП 09G / 09K / 09M" href={landings.aisinRepair}><p>Діагностика, дефектовка та ремонт. Обсяг робіт і вартість погоджуємо до ремонту.</p></Card><Card title="Купити відновлену АКПП 09G" href={landings.rebuilt09g}><p>Готові коробки з обмінного фонду: продаж або обмін, установка на нашому СТО, відправка по Україні.</p></Card><Card title="АКПП Ford 6F35" href="/repair/ford-6f35"><p>Ремонт автоматичної коробки Ford 6F35.</p></Card></div></Section><Section eyebrow="Коробки Aisin" title="База знань: АКПП"><div className="grid gap-5 md:grid-cols-3">{transmissions.filter((item) => item.type === "АКПП").map((item) => <Card key={item.id} title={item.name} href={`/transmissions/${item.id}`}><p>{item.alt}</p><p className="mt-3 text-sm text-zinc-500">{item.summary}</p></Card>)}</div></Section></>;
}
