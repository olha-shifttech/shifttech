import type { EntityKind } from "@/lib/knowledge/catalog";
import { entitiesByKind, entityUrl, kindLabels } from "@/lib/knowledge/catalog";
import { Card, Hero, Pill, Section } from "@/components/ui";

export function KnowledgeDirectory({ kind }: { kind: EntityKind }) {
  const items = entitiesByKind(kind);
  return <><Hero title={kindLabels[kind]} subtitle={`Scalable entity directory with ${items.length} seed placeholders and graph-driven internal links.`} /><Section eyebrow="knowledge graph directory" title="Pages ready for future content"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <Card key={item.id} title={item.name} href={entityUrl(item)}><Pill>Placeholder</Pill><p className="mt-4">{item.description}</p></Card>)}</div></Section></>;
}
