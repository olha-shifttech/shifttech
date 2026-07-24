import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { symptoms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Симптоми несправностей трансмісії",
  description: "Каталог симптомів АКПП, CVT і DSG: що зафіксувати перед діагностикою та як перейти до пов’язаної коробки передач.",
};

export default function SymptomsPage() {
  return (
    <>
      <Hero title="Симптоми несправностей трансмісії" subtitle="Почніть із того, що відчуваєте під час руху. Симптом допомагає побудувати маршрут перевірки, але сам по собі не є діагнозом." />
      <Section eyebrow="knowledge base" title="Оберіть симптом">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((symptom) => (
            <Card key={symptom.slug} title={symptom.name} href={`/symptoms/${symptom.slug}`}>
              <p>{symptom.summary}</p>
              <p className="mt-4 text-sm font-semibold text-shift">Перейти до маршруту перевірки →</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
