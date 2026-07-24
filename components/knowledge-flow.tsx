import Link from "next/link";
import { Card, Pill, Section } from "@/components/ui";
import { getSymptomKnowledge } from "@/lib/knowledge";

export function KnowledgeFlow({ symptomId }: { symptomId: string }) {
  const graph = getSymptomKnowledge(symptomId);
  return (
    <Section eyebrow="База знань" title="Від можливої причини до рішення">
      <p className="max-w-3xl leading-7 text-zinc-400">Кожен блок є окремою повторно використовуваною сутністю. Зв’язок показує діагностичний маршрут, а не автоматичний висновок.</p>
      <FlowGroup number="01" title="Можливі причини">
        {graph.causes.map((item) => <Card key={item.id} title={item.name}><p>{item.summary}</p><Pill>Потребує підтвердження</Pill></Card>)}
      </FlowGroup>
      <FlowGroup number="02" title="Діагностичні процедури">
        {graph.procedures.map((item) => <Card key={item.id} title={item.name}><ol className="list-decimal space-y-2 pl-5">{item.steps.map((step) => <li key={step}>{step}</li>)}</ol>{item.safetyNote && <p className="mt-4 font-semibold text-shift">{item.safetyNote}</p>}</Card>)}
      </FlowGroup>
      <FlowGroup number="03" title="Рішення після перевірки">
        {graph.solutions.map((item) => <Card key={item.id} title={item.name}><p>{item.summary}</p><p className="mt-3 text-sm text-zinc-500">{item.disclaimer}</p></Card>)}
      </FlowGroup>
      <FlowGroup number="04" title="Пов’язані статті">
        {graph.articles.map((item) => <Card key={item.id} title={item.title} href={`/articles/${item.slug}`}><p>{item.excerpt}</p><span className="mt-4 inline-block font-bold text-shift">Читати матеріал →</span></Card>)}
      </FlowGroup>
      <Link className="mt-8 inline-flex rounded-full bg-shift px-6 py-3 font-bold text-graphite" href="/contacts">Записатися на діагностику</Link>
    </Section>
  );
}

function FlowGroup({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <div className="mt-10"><div className="mb-5 flex items-center gap-3"><Pill>{number}</Pill><h3 className="text-2xl font-black text-white">{title}</h3></div><div className="grid gap-5 md:grid-cols-2">{children}</div></div>;
}
