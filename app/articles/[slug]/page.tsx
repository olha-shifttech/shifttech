import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, Hero, Section } from "@/components/ui";
import { articles } from "@/lib/knowledge";

export const dynamicParams = false;
export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.excerpt, alternates: { canonical: `/articles/${slug}` } } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <><Hero title={article.title} subtitle={article.excerpt} /><Section eyebrow="перевірений матеріал" title="Практичний контекст"><Card title="Головний принцип"><p>Рішення щодо трансмісії приймають після ідентифікації агрегату, фіксації умов прояву, зчитування даних і контрольних вимірювань. Окремий симптом або код не є готовим діагнозом.</p></Card></Section></>;
}
