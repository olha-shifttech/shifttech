import { Card, Hero, Pill, Section } from "@/components/ui";
import { entityUrl, knowledgeEntities } from "@/lib/knowledge/catalog";
import type { RepairCase } from "@/lib/repair-cases";

const List = ({ items }: { items: readonly string[] }) => <ol className="space-y-2">{items.map((item, index) => <li key={`${index}-${item}`}><span className="mr-2 font-bold text-shift">{index + 1}.</span>{item}</li>)}</ol>;

export function RepairCaseTemplate({ repairCase }: { repairCase: RepairCase }) {
  const references = [...new Set([...repairCase.relatedArticles, ...repairCase.relatedSymptoms, ...repairCase.relatedRepairProcedures, ...repairCase.relatedFaq])]
    .map((id) => knowledgeEntities.find((entity) => entity.id === id)).filter((entity) => Boolean(entity));
  return <>
    <Hero title={`${repairCase.caseNumber}: ${repairCase.vehicle.label}`} subtitle={repairCase.customerComplaint} />
    <Section eyebrow="Огляд кейсу" title="Дані автомобіля та ремонту"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Автомобіль"><p>{repairCase.vehicle.label}{repairCase.vehicle.year ? ` · ${repairCase.vehicle.year}` : ""}</p></Card>
      <Card title="Силовий агрегат"><p>{repairCase.engine.label}</p><p>{repairCase.transmission.label}</p></Card>
      <Card title="Пробіг"><p>{repairCase.mileage.value.toLocaleString()} {repairCase.mileage.unit}</p></Card>
      <Card title="Симптоми"><div className="flex flex-wrap gap-2">{repairCase.symptoms.map((id) => <Pill key={id}>{id.split(":").at(-1)}</Pill>)}</div></Card>
    </div></Section>
    <Section eyebrow="Діагностика" title="Звернення, процес та виявлені несправності"><div className="grid gap-5 lg:grid-cols-3"><Card title="Звернення клієнта"><p>{repairCase.customerComplaint}</p></Card><Card title="Процес діагностики"><List items={repairCase.diagnosticProcess} /></Card><Card title="Виявлені несправності"><List items={repairCase.foundFaults} /></Card></div></Section>
    <Section eyebrow="Ремонт" title="Процедура та встановлені деталі"><div className="grid gap-5 lg:grid-cols-2"><Card title="Процедура ремонту"><List items={repairCase.repairProcedure.steps} /></Card><Card title="Встановлені деталі"><ul className="space-y-2">{repairCase.installedParts.map((part) => <li key={`${part.partNumber}-${part.name}`}><strong>{part.quantity}× {part.name}</strong>{part.partNumber ? ` · ${part.partNumber}` : ""}{part.note ? ` — ${part.note}` : ""}</li>)}</ul></Card></div></Section>
    <Section eyebrow="Підтвердження" title="Фото та порівняння результату"><div className="grid gap-5 md:grid-cols-2">{repairCase.photos.map((photo) => <figure key={photo.id} className="overflow-hidden rounded-3xl border border-white/10 bg-panel"><img src={photo.src} alt={photo.alt} className="aspect-video w-full object-cover" /><figcaption className="p-4">{photo.caption ?? photo.alt}</figcaption></figure>)}{repairCase.beforeAfter.map((item) => <Card key={item.label} title={item.label}><p><strong>До:</strong> {item.before}</p><p className="mt-2"><strong>Після:</strong> {item.after}</p></Card>)}</div></Section>
    <Section eyebrow="Результат" title="Підсумковий результат"><Card title="Підтверджений результат"><p>{repairCase.finalResult}</p></Card></Section>
    <Section eyebrow="База знань" title="Пов’язані матеріали"><div className="grid gap-5 md:grid-cols-3">{references.map((entity) => entity && <Card key={entity.id} title={entity.name} href={entityUrl(entity)}><Pill>{entity.kind}</Pill></Card>)}</div></Section>
    <Section eyebrow="Запитання" title="Запитання про цей кейс"><div className="space-y-4">{repairCase.faq.map((item) => <Card key={item.question} title={item.question}><p>{item.answer}</p></Card>)}</div></Section>
  </>;
}
