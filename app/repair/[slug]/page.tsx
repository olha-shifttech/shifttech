import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, ContactBlock, Pill, Section } from "@/components/ui";
import { getRepairPage, repairPages, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return repairPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = getRepairPage((await params).slug);
  if (!item) return {};
  return {
    title: `Ремонт ${item.title} — Білогородка, Київ та область`,
    description: `${item.text} ${site.addressShort}. Телефон: ${site.phoneDisplay}.`,
    alternates: { canonical: `/repair/${item.slug}` },
  };
}

export default async function RepairPage({ params }: { params: Promise<{ slug: string }> }) {
  const item = getRepairPage((await params).slug);
  if (!item) notFound();
  return <>
    <section className="hero-grid relative overflow-hidden border-b border-white/[.07] px-5 py-20 lg:px-10 lg:py-28">
      <div className="hero-glow" />
      <div className="relative mx-auto max-w-[1360px]">
        <p className="eyebrow">ShiftTech · {item.code}</p>
        <h1 className="max-w-5xl text-[2.6rem] font-black leading-[1] tracking-[-.04em] text-white md:text-7xl">Ремонт {item.title}</h1>
        <p className="mt-4 text-lg font-semibold text-shift">{item.kind}</p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{item.text}</p>
        <div className="mt-6 flex flex-wrap gap-2">{item.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a className="button-primary" href={site.phoneHref}>Подзвонити: {site.phoneDisplay}</a>
          <a className="button-secondary" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Прокласти маршрут</a>
        </div>
      </div>
    </section>
    <Section eyebrow="Порядок роботи" title="Спершу причина, потім ремонт">
      <div className="grid gap-5 md:grid-cols-3">
        <Card title="Діагностика"><p>Визначаємо агрегат за VIN і кодом, фіксуємо симптоми та умови, за яких вони з’являються.</p></Card>
        <Card title="Погодження"><p>Обсяг робіт і вартість погоджуємо з вами до початку ремонту.</p></Card>
        <Card title="Перевірка"><p>Після ремонту перевіряємо роботу коробки.</p></Card>
      </div>
      <p className="mt-8 max-w-3xl leading-7 text-zinc-400">Перед записом зателефонуйте й опишіть, як поводиться автомобіль. Якщо знаєте VIN — продиктуйте його, це пришвидшить підготовку.</p>
    </Section>
    <Section eyebrow="Контакти та маршрут" title="Запис на діагностику">
      <ContactBlock />
      <p className="mt-8"><Link className="font-bold text-shift" href="/#directions">← Усі напрями ремонту</Link></p>
    </Section>
  </>;
}
