import { Card, Hero, Pill, Section } from "@/components/ui";
import { entityUrl, knowledgeEntities } from "@/lib/knowledge/catalog";
import type { RepairCase } from "@/lib/repair-cases";

const List = ({ items }: { items: readonly string[] }) => <ol className="space-y-2">{items.map((item, index) => <li key={`${index}-${item}`}><span className="mr-2 font-bold text-shift">{index + 1}.</span>{item}</li>)}</ol>;

export function RepairCaseTemplate({ repairCase }: { repairCase: RepairCase }) {
  const references = [...new Set([...repairCase.relatedArticles, ...repairCase.relatedSymptoms, ...repairCase.relatedRepairProcedures, ...repairCase.relatedFaq])]
    .map((id) => knowledgeEntities.find((entity) => entity.id === id)).filter((entity) => Boolean(entity));
  return <>
    <Hero title={`${repairCase.caseNumber}: ${repairCase.vehicle.label}`} subtitle={repairCase.customerComplaint} />
    <Section eyebrow="case overview" title="Vehicle and repair data"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Vehicle"><p>{repairCase.vehicle.label}{repairCase.vehicle.year ? ` · ${repairCase.vehicle.year}` : ""}</p></Card>
      <Card title="Powertrain"><p>{repairCase.engine.label}</p><p>{repairCase.transmission.label}</p></Card>
      <Card title="Mileage"><p>{repairCase.mileage.value.toLocaleString()} {repairCase.mileage.unit}</p></Card>
      <Card title="Symptoms"><div className="flex flex-wrap gap-2">{repairCase.symptoms.map((id) => <Pill key={id}>{id.split(":").at(-1)}</Pill>)}</div></Card>
    </div></Section>
    <Section eyebrow="diagnosis" title="Complaint, process, and found faults"><div className="grid gap-5 lg:grid-cols-3"><Card title="Customer complaint"><p>{repairCase.customerComplaint}</p></Card><Card title="Diagnostic process"><List items={repairCase.diagnosticProcess} /></Card><Card title="Found faults"><List items={repairCase.foundFaults} /></Card></div></Section>
    <Section eyebrow="repair" title="Procedure and installed parts"><div className="grid gap-5 lg:grid-cols-2"><Card title="Repair procedure"><List items={repairCase.repairProcedure.steps} /></Card><Card title="Installed parts"><ul className="space-y-2">{repairCase.installedParts.map((part) => <li key={`${part.partNumber}-${part.name}`}><strong>{part.quantity}× {part.name}</strong>{part.partNumber ? ` · ${part.partNumber}` : ""}{part.note ? ` — ${part.note}` : ""}</li>)}</ul></Card></div></Section>
    <Section eyebrow="evidence" title="Photos and before/after comparison"><div className="grid gap-5 md:grid-cols-2">{repairCase.photos.map((photo) => <figure key={photo.id} className="overflow-hidden rounded-3xl border border-white/10 bg-panel"><img src={photo.src} alt={photo.alt} className="aspect-video w-full object-cover" /><figcaption className="p-4">{photo.caption ?? photo.alt}</figcaption></figure>)}{repairCase.beforeAfter.map((item) => <Card key={item.label} title={item.label}><p><strong>Before:</strong> {item.before}</p><p className="mt-2"><strong>After:</strong> {item.after}</p></Card>)}</div></Section>
    <Section eyebrow="outcome" title="Final result"><Card title="Verified outcome"><p>{repairCase.finalResult}</p></Card></Section>
    <Section eyebrow="knowledge graph" title="Related knowledge"><div className="grid gap-5 md:grid-cols-3">{references.map((entity) => entity && <Card key={entity.id} title={entity.name} href={entityUrl(entity)}><Pill>{entity.kind}</Pill></Card>)}</div></Section>
    <Section eyebrow="faq" title="Questions about this case"><div className="space-y-4">{repairCase.faq.map((item) => <Card key={item.question} title={item.question}><p>{item.answer}</p></Card>)}</div></Section>
  </>;
}
