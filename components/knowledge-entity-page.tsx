import type { EntityKind } from "@/lib/knowledge/catalog";
import { entitiesByKind, entityUrl, kindLabels, relatedEntities } from "@/lib/knowledge/catalog";
import { notFound } from "next/navigation";
import { Card, Hero, Pill, Section } from "@/components/ui";

export function KnowledgeEntityPage({ kind, slug }: { kind: EntityKind; slug: string }) {
  const item = entitiesByKind(kind).find((candidate) => candidate.slug === slug);
  if (!item) notFound();
  const related = relatedEntities(item.id);
  return <><Hero title={item.name} subtitle={item.description} /><Section eyebrow={kindLabels[kind]} title="Матеріал готується"><Card title="Статус публікації"><div className="flex flex-wrap gap-2"><Pill>Очікує наповнення</Pill><Pill>Потрібна технічна перевірка</Pill></div>{item.aliases?.length ? <p className="mt-4">Варіанти пошуку: {item.aliases.join(", ")}</p> : null}<p className="mt-4">Сторінку зарезервовано в базі знань. Підтверджений технічний матеріал буде опубліковано після редакційної перевірки.</p></Card></Section><Section eyebrow="Пов’язані матеріали" title="Дізнайтеся більше"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map(({ entity, edge }) => <Card key={`${edge.from}-${edge.to}`} title={entity.name} href={entityUrl(entity)}><Pill>{edge.relation}</Pill><p className="mt-4">{kindLabels[entity.kind]}</p></Card>)}</div></Section></>;
}
