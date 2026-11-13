import { Card, ContactBlock, Hero, Section } from "@/components/ui";
import { site } from "@/lib/site";
import { indexableMetadata } from "@/lib/seo";

export const metadata = indexableMetadata({
  path: "/diagnostics",
  title: "Діагностика трансмісії: АКПП, варіатор, PowerShift",
  description: "Діагностика АКПП, варіатора або PowerShift у ShiftTech: визначаємо коробку за VIN, фіксуємо симптоми, погоджуємо роботи й вартість до ремонту.",
});

export default function Diagnostics() {
  return <>
    <Hero title="Діагностика трансмісії" subtitle="Перший крок перед рішенням щодо ремонту АКПП, варіатора або PowerShift. Без перевірки точну причину несправності визначити не можна." />
    <Section eyebrow="Як це відбувається" title="Від симптому до погодженого плану">
      <div className="grid gap-5 md:grid-cols-3">
        <Card title="Ідентифікація"><p>Визначаємо коробку за VIN і кодом агрегату.</p></Card>
        <Card title="Перевірка"><p>Фіксуємо симптоми та умови, за яких вони з’являються.</p></Card>
        <Card title="Висновок і погодження робіт"><p>Показуємо, що знайшли. Обсяг робіт і вартість погоджуємо з вами до початку ремонту.</p></Card>
      </div>
    </Section>
    <Section eyebrow="Перед дзвінком" title="Що підготувати">
      <div className="grid gap-5 md:grid-cols-2">
        <Card title="VIN автомобіля"><p>Продиктуйте VIN — перевіримо тип трансмісії й можливість ремонту.</p></Card>
        <Card title="Опис симптомів"><p>Розкажіть, як поводиться автомобіль і за яких умов це проявляється.</p></Card>
      </div>
      <p className="mt-8 max-w-3xl font-semibold leading-7 text-zinc-300">{site.warranty}</p>
    </Section>
    <Section eyebrow="Контакти та маршрут" title="Запис на діагностику">
      <ContactBlock />
    </Section>
  </>;
}
