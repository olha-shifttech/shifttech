import Link from "next/link";
import { ContactBlock, DirectionAnchor, DirectionCard, Photo, Section } from "@/components/ui";
import { directions, landings, photos, site } from "@/lib/site";
import { autoRepairJsonLd, indexableMetadata, jsonLdScript } from "@/lib/seo";

export const metadata = indexableMetadata({
  path: "/",
  absoluteTitle: true,
  title: "ShiftTech — ремонт АКПП, варіаторів і PowerShift | Білогородка, Київ",
  description: "Ремонт АКПП Aisin 09G / TF-60SN, варіаторів Jatco, PowerShift DCT450 і DCT250, Ford 6F35. Сервіс у Білогородці: Київ і Київська область. Телефон: 067 591 10 05.",
});

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(autoRepairJsonLd) }} />
    <section className="hero-grid relative overflow-hidden border-b border-white/[.07] px-5 pb-20 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
      <div className="hero-glow" />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="eyebrow">ShiftTech · Білогородка · Київська область</p>
          <h1 className="text-[2.6rem] font-black leading-[1] tracking-[-.04em] text-white sm:text-6xl lg:text-[72px]">Ремонт АКПП, варіаторів і <span className="text-shift">PowerShift</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">Діагностика, дефектовка та ремонт трансмісій для автомобілів із Києва й Київської області. Агрегати на ремонт приймаємо з усієї України.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="button-primary">Подзвонити: {site.phoneDisplay}</a>
            <Link href="#directions" className="button-secondary">Напрями ремонту</Link>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-sm font-semibold text-zinc-300">Обсяг робіт і вартість погоджуємо до початку ремонту.</p>
        </div>
        <nav aria-label="Коробки, які ремонтуємо" className="rounded-2xl border border-white/10 bg-[#171c1b] p-3 shadow-[0_40px_100px_rgba(0,0,0,.45)]">
          <p className="px-4 pb-2 pt-3 text-xs font-extrabold uppercase tracking-[.18em] text-zinc-400">Що ремонтуємо</p>
          {directions.map((item) => (
            <DirectionAnchor key={item.slug} link={item.primary} className="group flex items-center gap-4 rounded-xl border-t border-white/[.07] px-4 py-4 transition first-of-type:border-t-0 hover:bg-white/[.04]">
              <span className="w-28 shrink-0 text-sm font-black text-shift sm:w-36 sm:text-base">{item.code}</span>
              <span className="min-w-0 text-sm leading-5 text-zinc-300">{item.kind}</span>
              <span aria-hidden="true" className="ml-auto text-shift transition-transform group-hover:translate-x-1">{item.primary.external ? "↗" : "→"}</span>
            </DirectionAnchor>
          ))}
        </nav>
      </div>
    </section>

    <div id="directions" className="scroll-mt-24">
      <Section eyebrow="Напрями ремонту" title="Основні напрями ремонту">
        <p className="-mt-6 mb-10 max-w-3xl text-lg leading-8 text-zinc-300">Це ключові напрями ShiftTech. Якщо вашої трансмісії немає у списку, зателефонуйте — перевіримо можливість ремонту за VIN.</p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {directions.map((item, index) => <div key={item.slug} className={`flex ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}><div className="flex w-full"><DirectionCard item={item} /></div></div>)}
        </div>
      </Section>
    </div>

    <section className="border-y border-white/[.07] bg-[#0d1010]">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-20">
        <div>
          <p className="eyebrow">Обмінний фонд ShiftTech</p>
          <h2 className="max-w-3xl text-3xl font-black leading-[1.05] tracking-[-.03em] text-white md:text-5xl">Готові відновлені АКПП 09G для Volkswagen 2.5</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">АКПП можна придбати без обміну або дешевше — в обмін на сумісну стару коробку. Установка на нашому СТО за 1 день — за наявності сумісної АКПП і за попереднім погодженням. Відправка по Україні.</p>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">Сумісність конкретного агрегату перевіряємо за VIN і кодом коробки.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href={landings.rebuilt09g}>Перевірити наявність і ціну ↗</a>
            <a className="button-secondary" href={landings.aisinRepair}>Ремонт вашої 09G / 09K / 09M ↗</a>
          </div>
        </div>
        <div className="grid grid-cols-[1.5fr_1fr] items-stretch gap-4">
          <Photo photo={photos.exchangeFund} />
          <Photo photo={photos.workshop} />
        </div>
      </div>
    </section>

    <Section eyebrow="Як ми працюємо" title="Спершу причина, потім ремонт">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Photo photo={photos.cvtBelt} className="aspect-[3/2]" />
        <div className="grid gap-8">
          <div className="process-step"><span>01</span><h3>Ідентифікація та діагностика</h3><p>Визначаємо коробку за VIN і кодом агрегату, фіксуємо симптоми та умови, за яких вони з’являються.</p></div>
          <div className="process-step"><span>02</span><h3>Висновок і погодження робіт</h3><p>Показуємо, що знайшли. Обсяг робіт і вартість погоджуємо з вами до початку ремонту.</p></div>
          <div className="process-step"><span>03</span><h3>Ремонт і перевірка</h3><p>Ремонтуємо погоджений обсяг і перевіряємо роботу коробки після ремонту.</p></div>
        </div>
      </div>
      <p className="mt-10 max-w-3xl border-t border-white/10 pt-6 font-semibold leading-7 text-zinc-300">{site.warranty}</p>
    </Section>

    <section id="vin" className="scroll-mt-24 border-y border-white/[.07] bg-[#0d1010] px-5 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1360px] gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
        <div>
          <p className="eyebrow">Перевірка за VIN</p>
          <h2 className="max-w-3xl text-3xl font-black leading-[1.05] tracking-[-.03em] text-white md:text-5xl">Не знаєте, яка коробка встановлена у вашому авто?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">Зателефонуйте та продиктуйте VIN — перевіримо тип трансмісії й можливість ремонту.</p>
        </div>
        <div className="flex flex-col gap-3">
          <a className="button-primary" href={site.phoneHref}>Подзвонити: {site.phoneDisplay}</a>
        </div>
      </div>
    </section>

    <div id="contacts" className="scroll-mt-24">
      <Section eyebrow="Контакти та маршрут" title="Сервіс у Білогородці. Запис за телефоном">
        <ContactBlock />
      </Section>
    </div>
  </>;
}
