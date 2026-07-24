import type { EntityKind } from "@/lib/knowledge/catalog";
import { entitiesByKind, entityUrl, kindLabels } from "@/lib/knowledge/catalog";
import { Card, Hero, Pill, Section } from "@/components/ui";

export function KnowledgeDirectory({ kind }: { kind: EntityKind }) {
  const items = entitiesByKind(kind);
  return <><Hero title={kindLabels[kind]} subtitle={`Структурований каталог містить ${items.length} підготовлених сторінок із пов’язаною навігацією.`} /><Section eyebrow="Каталог бази знань" title="Сторінки, підготовлені до наповнення"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <Card key={item.id} title={item.name} href={entityUrl(item)}><Pill>Очікує наповнення</Pill><p className="mt-4">{item.description}</p></Card>)}</div></Section></>;
}
