import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, Hero, Pill, Section } from "@/components/ui";
import { getTransmission, symptoms, vehicles, vehicleName } from "@/lib/data";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);
  if (!vehicle) return {};
  return { title: `${vehicleName(vehicle)} — проблеми з АКПП / варіатором`, description: `Сторінка авто ${vehicleName(vehicle)} у каталозі ShiftTech: можливі коробки, симптоми і наступний крок діагностики.` };
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);
  if (!vehicle) notFound();
  const transmissions = vehicle.transmissionIds.map(getTransmission).filter(Boolean);

  return <><Hero title={`${vehicleName(vehicle)} — проблеми з АКПП / варіатором`} subtitle="Сторінка автомобіля є точкою входу для клієнта. Вона показує можливі коробки передач і переводить до діагностики без непідтверджених висновків." /><Section eyebrow="vehicle template" title="Основні дані авто"><div className="grid gap-5 md:grid-cols-2"><Card title="Автомобіль"><div className="flex flex-wrap gap-2"><Pill>{vehicle.brand}</Pill><Pill>{vehicle.model}</Pill>{vehicle.generation ? <Pill>{vehicle.generation}</Pill> : null}{vehicle.engine ? <Pill>{vehicle.engine}</Pill> : null}{vehicle.market ? <Pill>{vehicle.market}</Pill> : null}</div></Card><Card title="Ймовірна коробка"><div className="space-y-2">{transmissions.map((item) => item ? <p key={item.id}><Link className="text-shift" href={`/transmissions/${item.id}`}>{item.name}</Link> <span className="text-zinc-500">{item.alt}</span></p> : null)}</div></Card></div></Section><Section eyebrow="symptoms" title="Типові сигнали для перевірки"><div className="grid gap-5 md:grid-cols-3">{symptoms.slice(0, 6).map((symptom) => <Card key={symptom} title={symptom}><p>Це не є діагнозом. Симптом потрібно зв'язати з коробкою, помилками та результатами перевірки.</p></Card>)}</div></Section></>;
}
