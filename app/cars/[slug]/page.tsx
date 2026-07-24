import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, Hero, Pill, Section } from "@/components/ui";
import { getTransmission, requiresVerification, symptoms, vehicles, vehicleName } from "@/lib/data";

const baseUrl = "https://shifttech.vercel.app";
export const dynamicParams = false;

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);
  if (!vehicle) return {};
  const name = vehicleName(vehicle);
  return {
    title: `${name} — трансмісія та симптоми`,
    description: `${name}: встановлена трансмісія, сімейство коробки, пов’язані симптоми та рекомендації перед діагностикою ShiftTech.`,
    alternates: { canonical: `/cars/${vehicle.slug}` },
    openGraph: { title: `${name} — трансмісія та симптоми`, description: `Перевірені зв’язки каталогу ShiftTech для ${name}.`, url: `/cars/${vehicle.slug}`, type: "article" },
  };
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);
  if (!vehicle) notFound();
  const relatedTransmissions = vehicle.transmissionIds.map(getTransmission).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedSymptoms = symptoms.filter((symptom) => symptom.transmissionIds.some((id) => vehicle.transmissionIds.includes(id)));
  const name = vehicleName(vehicle);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name,
    url: `${baseUrl}/cars/${vehicle.slug}`,
    vehicleConfiguration: [vehicle.generation, vehicle.engine && `${vehicle.engine}L`, vehicle.market].filter(Boolean).join(" · "),
    brand: { "@type": "Brand", name: vehicle.brand },
    model: vehicle.model,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <Hero title={name} subtitle="Підбір за автомобілем веде до наявних у базі зв’язків із трансмісією та симптомами. Остаточна ідентифікація комплектації виконується під час перевірки." />
    <Section eyebrow="автомобіль" title="Основні дані">
      <div className="grid gap-5 md:grid-cols-2">
        <Card title="Комплектація"><dl className="space-y-3"><DataRow label="Автомобіль" value={`${vehicle.brand} ${vehicle.model}`} /><DataRow label="Покоління" value={vehicle.generation || requiresVerification} /><DataRow label="Роки виробництва" value={vehicle.productionYears || requiresVerification} verify={!vehicle.productionYears} /><DataRow label="Двигун" value={vehicle.engine ? `${vehicle.engine}L` : requiresVerification} verify={!vehicle.engine} /><DataRow label="Ринок" value={vehicle.market || requiresVerification} verify={!vehicle.market} /></dl></Card>
        <Card title="Встановлена трансмісія"><div className="space-y-5">{relatedTransmissions.length ? relatedTransmissions.map((item) => <div key={item.id}><div className="flex flex-wrap gap-2"><Pill>{item.manufacturer}</Pill><Pill>{item.type}</Pill></div><p className="mt-3 text-xl font-bold text-white">{item.name} <span className="text-base font-normal text-zinc-400">{item.alt}</span></p><p className="mt-2">Сімейство: <b className="text-white">{"family" in item ? item.family : requiresVerification}</b></p><Link className="mt-4 inline-block font-bold text-shift" href={`/transmissions/${item.id}`}>Перейти до сторінки {item.name} →</Link></div>) : <p>{requiresVerification}</p>}</div></Card>
      </div>
    </Section>
    <Section eyebrow="пов’язані симптоми" title="Сигнали, з якими варто пройти перевірку">
      <p className="max-w-3xl leading-7 text-zinc-400">Ці симптоми пов’язані в базі з указаною трансмісією, але не визначають причину несправності.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{relatedSymptoms.map((symptom) => <Card key={symptom.slug} title={symptom.name} href={`/symptoms/${symptom.slug}`}><p>{symptom.summary}</p><span className="mt-4 inline-block font-bold text-shift">Що зафіксувати →</span></Card>)}</div>
    </Section>
    <Section eyebrow="безпечна діагностика" title="Що підготувати перед зверненням">
      <div className="grid gap-5 md:grid-cols-3"><Card title="01. Умови прояву"><p>Зафіксуйте, чи трансмісія холодна або прогріта, швидкість та навантаження.</p></Card><Card title="02. Поведінка авто"><p>Запишіть передачу, затримку перемикання та індикатори на панелі.</p></Card><Card title="03. Ідентифікація"><p>Підтвердьте конкретну комплектацію автомобіля до технічного висновку.</p></Card></div>
      <div className="mt-8 rounded-3xl border border-shift/30 bg-shift/5 p-6 md:flex md:items-center md:justify-between md:gap-8"><div><h3 className="text-2xl font-bold text-white">Потрібна діагностика?</h3><p className="mt-2 max-w-2xl text-zinc-300">Опишіть автомобіль і симптом команді ShiftTech. Дані, яких немає в каталозі, будуть позначені для перевірки.</p></div><Link className="mt-5 inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-shift px-6 font-bold text-graphite md:mt-0" href="/contacts">Зв’язатися з ShiftTech</Link></div>
    </Section>
  </>;
}

function DataRow({ label, value, verify = false }: { label: string; value: string; verify?: boolean }) {
  return <div className="flex flex-col gap-1 border-b border-line pb-3 last:border-0 sm:flex-row sm:justify-between"><dt className="text-zinc-400">{label}</dt><dd className="font-bold text-white">{value}{verify ? <span className="sr-only">: дані відсутні</span> : null}</dd></div>;
}
