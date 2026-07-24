import type { EntityKind } from "@/lib/knowledge/catalog";
import { entitiesByKind, entityUrl, kindLabels, relatedEntities } from "@/lib/knowledge/catalog";
import { notFound } from "next/navigation";
import { Card, Hero, Pill, Section } from "@/components/ui";

export function KnowledgeEntityPage({ kind, slug }: { kind: EntityKind; slug: string }) {
  const item = entitiesByKind(kind).find((candidate) => candidate.slug === slug);
  if (!item) notFound();
  const related = relatedEntities(item.id);
  return <><Hero title={item.name} subtitle={item.description} /><Section eyebrow={`${kindLabels[kind]} entity`} title="Content placeholder"><Card title="Editorial status"><div className="flex flex-wrap gap-2"><Pill>Placeholder only</Pill><Pill>Technical review required</Pill></div>{item.aliases?.length ? <p className="mt-4">Search aliases: {item.aliases.join(", ")}</p> : null}<p className="mt-4">This URL reserves a stable knowledge-graph node. Final article content has intentionally not been generated.</p></Card></Section><Section eyebrow="internal links" title="Connected knowledge"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map(({ entity, edge }) => <Card key={`${edge.from}-${edge.to}`} title={entity.name} href={entityUrl(entity)}><Pill>{edge.relation}</Pill><p className="mt-4">{kindLabels[entity.kind]}</p></Card>)}</div></Section></>;
}
