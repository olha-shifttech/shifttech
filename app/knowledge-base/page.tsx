import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";
import { symptoms, transmissions, vehicles } from "@/lib/data";
import { articles, causes, diagnosticProcedures, repairSolutions } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "База знань",
  description: "Навігаційний центр ShiftTech для автомобілів, коробок передач, симптомів, помилок і кейсів ремонту.",
};

const sections = [
  { title: "Автомобілі", href: "/cars", count: vehicles.length, text: "Знайдіть автомобіль і перейдіть до можливих коробок передач." },
  { title: "Коробки передач", href: "/transmissions", count: transmissions.length, text: "Перегляньте сутності АКПП, CVT і DSG та пов’язані авто." },
  { title: "Симптоми", href: "/symptoms", count: symptoms.length, text: "Опишіть прояв і підготуйте дані для діагностики." },
];

export default function KnowledgeBasePage() {
  return (
    <>
      <Hero title="База знань ShiftTech" subtitle="Єдина точка входу до структурованих матеріалів. Клієнт може почати з автомобіля або симптому, а система з’єднає запит із коробкою передач." />
      <Section eyebrow="dual navigation" title="Оберіть точку входу">
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((item) => (
            <Card key={item.href} title={item.title} href={item.href}>
              <p className="mb-4 text-4xl font-black text-shift">{item.count}</p><p>{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="knowledge engine" title="Один зв’язаний діагностичний маршрут">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Можливі причини"><p className="mb-3 text-4xl font-black text-shift">{causes.length}</p><p>Повторно використовуються для різних симптомів.</p></Card>
          <Card title="Процедури"><p className="mb-3 text-4xl font-black text-shift">{diagnosticProcedures.length}</p><p>Послідовності перевірок без передчасного діагнозу.</p></Card>
          <Card title="Рішення"><p className="mb-3 text-4xl font-black text-shift">{repairSolutions.length}</p><p>Застосовуються лише після підтвердження причини.</p></Card>
          <Card title="Статті"><p className="mb-3 text-4xl font-black text-shift">{articles.length}</p><p>Пов’язані матеріали, згенеровані як статичні сторінки.</p></Card>
        </div>
      </Section>
      <Section eyebrow="наступні сутності" title="Готується до наповнення">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Коди помилок" href="/errors"><p>Стабільний розділ для майбутніх перевірених сторінок кодів.</p></Card>
          <Card title="Кейси ремонту" href="/repair-cases"><p>Реальні кейси будуть опубліковані після перевірки матеріалів.</p></Card>
          <Card title="FAQ" href="/faq"><p>Відповіді додаватимуться разом із джерелами та статусом перевірки.</p></Card>
        </div>
      </Section>
    </>
  );
}
