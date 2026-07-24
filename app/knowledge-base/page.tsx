import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { entitiesByKind, entityKinds, kindLabels } from "@/lib/knowledge/catalog";

export const metadata: Metadata = { title: "Knowledge Engine", description: "The entity-based ShiftTech automatic-transmission knowledge graph." };
export default function Page() {
  return <><Hero title="ShiftTech Knowledge Engine" subtitle="An AI-first, entity-based foundation connecting vehicles, transmission families, symptoms, causes, diagnostics, repairs, maintenance, cases, FAQs, and articles." /><Section eyebrow="knowledge graph" title="Explore the complete hierarchy"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{entityKinds.map((kind) => <Card key={kind} title={kindLabels[kind]} href={`/${kind}`}><p className="mb-3 text-4xl font-black text-shift">{entitiesByKind(kind).length}</p><p>Stable, indexable placeholder entities connected through the central graph.</p></Card>)}</div></Section><Section eyebrow="publishing model" title="Built to scale without duplicate content"><div className="grid gap-5 md:grid-cols-3"><Card title="One canonical entity"><p>Stable IDs and SEO-friendly slugs reserve every topic once.</p></Card><Card title="Graph-driven links"><p>Relationships generate bidirectional discovery paths instead of copied lists.</p></Card><Card title="Placeholder-first"><p>Technical article copy remains unpublished until sourced and reviewed.</p></Card></div></Section></>;
}
