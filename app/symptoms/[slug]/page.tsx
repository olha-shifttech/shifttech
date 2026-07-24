import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, Hero, Pill, Section } from "@/components/ui";
import { symptoms, transmissions } from "@/lib/data";
import { KnowledgeFlow } from "@/components/knowledge-flow";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((symptom) => ({ slug: symptom.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const symptom = symptoms.find((item) => item.slug === slug);
  if (!symptom) return {};
  return {
    title: `${symptom.name} — що перевірити`,
    description: `${symptom.name}: що зафіксувати перед діагностикою та які типи трансмісій можуть бути пов’язані з проявом.`,
    alternates: { canonical: `/symptoms/${symptom.slug}` },
  };
}

export default async function SymptomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const symptom = symptoms.find((item) => item.slug === slug);
  if (!symptom) notFound();
  const relatedTransmissions = transmissions.filter((item) => symptom.transmissionIds.includes(item.id));

  return (
    <>
      <Hero title={symptom.name} subtitle={symptom.summary} />
      <Section eyebrow="перед діагностикою" title="Що важливо зафіксувати">
        <div className="grid gap-5 md:grid-cols-3">
          {symptom.observations.map((observation, index) => (
            <Card key={observation} title={`0${index + 1}`}><p>{observation}</p></Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="dual navigation" title="Пов’язані коробки передач">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {relatedTransmissions.map((transmission) => (
            <Card key={transmission.id} title={transmission.name} href={`/transmissions/${transmission.id}`}>
              <div className="flex flex-wrap gap-2"><Pill>{transmission.type}</Pill><Pill>{transmission.alt}</Pill></div>
              <p className="mt-4">Перевірте ідентифікацію коробки за комплектацією конкретного автомобіля.</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-shift/30 bg-shift/5 p-6 text-zinc-300">
          <p><b className="text-white">Важливо:</b> перелік показує напрямки бази знань, а не встановлює причину несправності. Остаточний висновок можливий лише після діагностики.</p>
          <Link className="mt-4 inline-block font-bold text-shift" href="/diagnostics">Як проходить діагностика →</Link>
        </div>
      </Section>
      <KnowledgeFlow symptomId={symptom.slug} />
    </>
  );
}
