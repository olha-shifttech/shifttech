import type { Metadata } from "next";
import { KnowledgeEntityPage } from "@/components/knowledge-entity-page";
import { entitiesByKind, entityUrl } from "@/lib/knowledge/catalog";
export const dynamicParams = false;
export function generateStaticParams() { return entitiesByKind("symptoms").map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = entitiesByKind("symptoms").find((x) => x.slug === slug); return item ? { title: `${item.name} — симптом трансмісії`, description: item.description, alternates: { canonical: entityUrl(item) } } : {}; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { return <KnowledgeEntityPage kind="symptoms" slug={(await params).slug} />; }
