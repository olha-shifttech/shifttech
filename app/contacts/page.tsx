import { ContactBlock, DirectionAnchor, Hero, Section } from "@/components/ui";
import { directions, site } from "@/lib/site";
import { autoRepairJsonLd, indexableMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = indexableMetadata({
  path: "/contacts",
  title: "Контакти та маршрут — Білогородка, вул. Полунична, 2А",
  description: `Адреса ShiftTech: ${site.address}. Телефон для запису на діагностику: ${site.phoneDisplay}. Маршрут у Google Maps.`,
});

export default function Contacts() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(autoRepairJsonLd) }} />
    <Hero title="Контакти ShiftTech" subtitle={`${site.address}. Запис на діагностику — за телефоном ${site.phoneDisplay}.`} />
    <Section eyebrow="Зв’язок і маршрут" title="Як нас знайти">
      <ContactBlock />
    </Section>
    <Section eyebrow="Напрями ремонту" title="З чим до нас звертаються">
      <div className="grid gap-3 md:grid-cols-2">
        {directions.map((item) => <DirectionAnchor key={item.slug} link={item.primary} className="group flex items-center gap-4 rounded-xl border border-white/[.09] bg-[#171c1b] px-5 py-4 transition hover:border-shift/40"><span className="font-black text-shift">{item.code}</span><span className="text-sm text-zinc-300">{item.kind}</span><span aria-hidden="true" className="ml-auto text-shift">{item.primary.external ? "↗" : "→"}</span></DirectionAnchor>)}
      </div>
    </Section>
  </>;
}
