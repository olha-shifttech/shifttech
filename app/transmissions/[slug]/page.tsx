import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, Hero, Pill, Section } from "@/components/ui";
import { symptoms, transmissions, vehicles, vehicleName } from "@/lib/data";

export function generateStaticParams() { return transmissions.map((item) => ({ slug: item.id })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = transmissions.find((transmission) => transmission.id === slug);
  if (!item) return {};
  return { title: `${item.name} ${item.alt} — сторінка коробки передач ShiftTech`, description: `${item.name}: тип, виробник, пов'язані авто, симптоми та наступний крок діагностики.`, alternates: { canonical: `/transmissions/${item.id}` } };
}

export default async function TransmissionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = transmissions.find((transmission) => transmission.id === slug);
  if (!item) notFound();
  const relatedVehicles = vehicles.filter((vehicle) => item.relatedVehicleSlugs.includes(vehicle.slug));
  const relatedSymptoms = symptoms.filter((symptom) => symptom.transmissionIds.includes(item.id));

  return <><Hero title={`${item.name} — сторінка коробки передач`} subtitle={`${item.alt}. ${item.summary}`} /><Section eyebrow="transmission entity" title="Основні дані коробки"><div className="grid gap-5 md:grid-cols-2"><Card title="Ідентифікація"><div className="space-y-3"><p>Назва: <b className="text-white">{item.name}</b></p><p>Альтернативна назва: {item.alt}</p><p>Виробник: {item.manufacturer}</p><div className="flex gap-2"><Pill>{item.type}</Pill><Pill>Priority {item.priority}</Pill></div></div></Card><Card title="Пов'язані автомобілі">{relatedVehicles.length ? <ul className="space-y-2">{relatedVehicles.map((vehicle) => <li key={vehicle.slug}><Link className="text-shift" href={`/cars/${vehicle.slug}`}>{vehicleName(vehicle)}</Link></li>)}</ul> : <p>Зв'язки з авто будуть додані після перевірки джерел.</p>}</Card></div></Section><Section eyebrow="safe diagnostics" title="Симптоми, які потребують перевірки"><div className="grid gap-5 md:grid-cols-3">{relatedSymptoms.map((symptom) => <Card key={symptom.slug} title={symptom.name} href={`/symptoms/${symptom.slug}`}><p>Може бути пов'язано з {item.name}, але остаточна причина визначається тільки після діагностики.</p></Card>)}</div></Section></>;
}
