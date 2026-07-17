import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { transmissions } from "@/lib/data";

export const metadata: Metadata = { title: "Ремонт АКПП", description: "Ремонт АКПП ShiftTech з фокусом на Aisin 09G, 09M, 09K і діагностику перед висновками." };

export default function Akpp() {
  return <><Hero title="Ремонт АКПП" subtitle="Напрямок автоматичних коробок передач із пріоритетом ядра знань 09G / 09M / 09K. Остаточне рішення — тільки після діагностики." /><Section eyebrow="aisin core" title="Пріоритетні АКПП"><div className="grid gap-5 md:grid-cols-3">{transmissions.filter((item) => item.type === "АКПП").map((item) => <Card key={item.id} title={item.name} href={`/transmissions/${item.id}`}><p>{item.alt}</p><p className="mt-3 text-sm text-zinc-500">{item.summary}</p></Card>)}</div></Section></>;
}
