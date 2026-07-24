import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeEntityPage } from "@/components/knowledge-entity-page";
import { RepairCaseTemplate } from "@/components/repair-case-template";
import { entitiesByKind, entityKinds, entityUrl, kindLabels, type EntityKind } from "@/lib/knowledge/catalog";
import { getRepairCase } from "@/lib/repair-cases";

const genericKinds: EntityKind[] = ["vehicle-brands", "vehicle-models", "transmission-families", "causes", "diagnostic-procedures", "repair-procedures", "maintenance", "faq", "repair-cases"];
export const dynamicParams = false;
export function generateStaticParams() { return genericKinds.flatMap((kind) => entitiesByKind(kind).map((item) => ({ kind, slug: item.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ kind: string; slug: string }> }): Promise<Metadata> { const { kind, slug } = await params; if (!entityKinds.includes(kind as EntityKind)) return {}; const repairCase = kind === "repair-cases" ? getRepairCase(slug) : undefined; if (repairCase) return { title: repairCase.seo.title, description: repairCase.seo.description, alternates: { canonical: repairCase.seo.canonicalPath }, robots: repairCase.seo.noIndex ? { index: false, follow: false } : undefined, openGraph: repairCase.seo.image ? { images: [repairCase.seo.image] } : undefined }; const item = entitiesByKind(kind as EntityKind).find((candidate) => candidate.slug === slug); return item ? { title: `${item.name} — ${kindLabels[item.kind]}`, description: item.description, alternates: { canonical: entityUrl(item) } } : {}; }
export default async function EntityPage({ params }: { params: Promise<{ kind: string; slug: string }> }) { const { kind, slug } = await params; if (!genericKinds.includes(kind as EntityKind)) notFound(); if (kind === "repair-cases") { const repairCase = getRepairCase(slug); if (!repairCase) notFound(); return <RepairCaseTemplate repairCase={repairCase} />; } return <KnowledgeEntityPage kind={kind as EntityKind} slug={slug} />; }
