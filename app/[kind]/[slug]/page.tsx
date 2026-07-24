import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeEntityPage } from "@/components/knowledge-entity-page";
import { entitiesByKind, entityKinds, entityUrl, kindLabels, type EntityKind } from "@/lib/knowledge/catalog";

const genericKinds: EntityKind[] = ["vehicle-brands", "vehicle-models", "transmission-families", "causes", "diagnostic-procedures", "repair-procedures", "maintenance", "faq", "repair-cases"];
export const dynamicParams = false;
export function generateStaticParams() { return genericKinds.flatMap((kind) => entitiesByKind(kind).map((item) => ({ kind, slug: item.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ kind: string; slug: string }> }): Promise<Metadata> { const { kind, slug } = await params; if (!entityKinds.includes(kind as EntityKind)) return {}; const item = entitiesByKind(kind as EntityKind).find((candidate) => candidate.slug === slug); return item ? { title: `${item.name} — ${kindLabels[item.kind]}`, description: item.description, alternates: { canonical: entityUrl(item) } } : {}; }
export default async function EntityPage({ params }: { params: Promise<{ kind: string; slug: string }> }) { const { kind, slug } = await params; if (!genericKinds.includes(kind as EntityKind)) notFound(); return <KnowledgeEntityPage kind={kind as EntityKind} slug={slug} />; }
