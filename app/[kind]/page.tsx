import { notFound } from "next/navigation";
import { KnowledgeDirectory } from "@/components/knowledge-directory";
import { entityKinds, type EntityKind } from "@/lib/knowledge/catalog";

const genericKinds: EntityKind[] = ["vehicle-brands", "vehicle-models", "transmission-families", "causes", "diagnostic-procedures", "repair-procedures", "maintenance"];
export const dynamicParams = false;
export function generateStaticParams() { return genericKinds.map((kind) => ({ kind })); }
export default async function DirectoryPage({ params }: { params: Promise<{ kind: string }> }) { const { kind } = await params; if (!entityKinds.includes(kind as EntityKind) || !genericKinds.includes(kind as EntityKind)) notFound(); return <KnowledgeDirectory kind={kind as EntityKind} />; }
