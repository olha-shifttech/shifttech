import Link from "next/link";
import { Pill, Section } from "@/components/ui";
import { site } from "@/lib/site";
import { jsonLdScript } from "@/lib/seo";

// Лендинг ремонту PowerShift DCT450. Увесь текст, перелік автомобілів і робіт надані власницею 16.11.2026.
// Цін, строків ремонту, років випуску та двигунів тут немає навмисно: їх не додавати без підтвердження.

const symptoms = [
  "Ривки або удари під час перемикання",
  "Вібрація та тремтіння під час старту",
  "Затримка ввімкнення D або R",
  "Пробуксовування чи нестабільна передача тяги",
  "Зникнення окремих передач або руху",
  "Аварійний режим або повідомлення про несправність трансмісії",
  "Повідомлення про перегрів коробки",
  "Сторонній шум, гул або витік мастила",
];

const ford = ["Focus", "C-Max і Grand C-Max", "Kuga", "Mondeo", "S-Max", "Galaxy", "окремі комплектації Edge"];
const volvo = ["C30", "S40", "V50", "C70", "S60", "V60", "V70", "XC60"];

const works = [
  "Комп’ютерна діагностика",
  "Зняття та встановлення коробки",
  "Повний розбір і дефектування",
  "Ремонт механічної частини",
  "Ремонт або заміна пакетів мокрого зчеплення",
  "Ремонт гідравлічного блока",
  "Ремонт електронної частини та мехатроніка",
  "Заміна підшипників, сальників та ущільнень",
  "Заміна мастила й фільтра",
  "Адаптація після ремонту",
  "Тест-драйв і повторна перевірка",
];

const steps = [
  ["Діагностика", "Визначаємо тип коробки за VIN і маркуванням, перевіряємо симптоми та коди помилок."],
  ["Зняття і дефектування", "Розбираємо агрегат, перевіряємо механічну частину, мокре зчеплення, гідравліку та керування."],
  ["Погодження", "Повідомляємо результати перевірки, перелік робіт і вартість до початку ремонту."],
  ["Ремонт і складання", "Виконуємо погоджені роботи, замінюємо необхідні деталі, мастило та фільтр."],
  ["Адаптація і перевірка", "Проводимо адаптацію, тест-драйв і повторну діагностику."],
];

const addressOnPage = "с. Білогородка, вул. Полунична 2А, Київська область";

// Фото власниці, 1280×853 (3:2). Рамка має ту саму пропорцію, тому кадр ніде не обрізається.
function LandingPhoto({ name, alt, priority = false, sizes }: { name: string; alt: string; priority?: boolean; sizes: string }) {
  const base = `/images/dct450/${name}`;
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-white/[.09] bg-[#171c1b]">
      <picture>
        <source type="image/avif" srcSet={`${base}-800.avif 800w, ${base}-1280.avif 1280w`} sizes={sizes} />
        <source type="image/webp" srcSet={`${base}-800.webp 800w, ${base}-1280.webp 1280w`} sizes={sizes} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${base}-1280.webp`} alt={alt} width={1280} height={853} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className="block aspect-[3/2] h-auto w-full object-cover" />
      </picture>
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a className="button-primary" href={site.phoneHref}>Подзвонити: {site.phoneDisplay}</a>
      <a className="button-secondary" href={site.viberHref}>Надіслати VIN у Viber</a>
      <a className="button-secondary" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Прокласти маршрут</a>
    </div>
  );
}

// Структуровані дані послуги: лише назва, опис, виконавець і зона. Без цін, рейтингів, відгуків і строків.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ремонт PowerShift DCT450 / 6DCT450 / MPS6",
  serviceType: "Діагностика та ремонт преселективної коробки передач PowerShift DCT450",
  url: `${site.url}/repair/powershift-dct450`,
  image: `${site.url}/images/dct450/og-mechanical.jpg`,
  provider: { "@id": `${site.url}/#autorepair` },
  areaServed: ["Київ", "Київська область"],
};

export function Dct450Landing() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(serviceJsonLd) }} />

    <section className="hero-grid relative overflow-hidden border-b border-white/[.07] px-5 py-16 lg:px-10 lg:py-24">
      <div className="hero-glow" />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="min-w-0">
          <p className="eyebrow">ShiftTech / PowerShift · DCT450 · 6DCT450 · MPS6</p>
          <h1 className="text-[2.2rem] font-black leading-[1.03] tracking-[-.035em] text-white sm:text-5xl lg:text-6xl">Ремонт PowerShift DCT450 / 6DCT450 / MPS6</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">Преселективна 6-ступенева коробка з мокрим зчепленням. Діагностика, дефектування та повний ремонт у Білогородці.</p>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">Перевіряємо причину несправності, погоджуємо обсяг робіт і вартість до початку ремонту.</p>
          <div className="mt-9"><CtaButtons /></div>
        </div>
        <LandingPhoto name="mechanical" alt="Механічна частина PowerShift DCT450 у процесі ремонту ShiftTech" priority sizes="(min-width: 1024px) 46vw, 100vw" />
      </div>
    </section>

    <Section eyebrow="Симптоми" title="Коли варто перевірити PowerShift DCT450">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {symptoms.map((item) => <li key={item} className="rounded-2xl border border-white/[.09] bg-[#171c1b] p-6 font-semibold leading-7 text-zinc-100">{item}</li>)}
      </ul>
      <p className="mt-8 max-w-3xl leading-7 text-zinc-300">Однакові симптоми можуть мати різні причини. Не визначаємо ремонт лише за повідомленням або кодом помилки — спочатку проводимо діагностику та перевірку агрегату.</p>
    </Section>

    <section className="border-y border-white/[.07] bg-[#0d1010]">
      <Section eyebrow="Автомобілі" title="На яких автомобілях зустрічається DCT450">
        <p className="-mt-4 mb-10 max-w-3xl text-lg leading-8 text-zinc-300">PowerShift DCT450 також позначається як 6DCT450 або MPS6. Коробка зустрічається на окремих комплектаціях автомобілів Ford і Volvo.</p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/[.09] bg-[#171c1b] p-7">
            <h3 className="text-2xl font-black text-white">Ford</h3>
            <ul className="mt-5 flex flex-wrap gap-2">{ford.map((item) => <li key={item}><Pill>{item}</Pill></li>)}</ul>
          </div>
          <div className="rounded-2xl border border-white/[.09] bg-[#171c1b] p-7">
            <h3 className="text-2xl font-black text-white">Volvo</h3>
            <ul className="mt-5 flex flex-wrap gap-2">{volvo.map((item) => <li key={item}><Pill>{item}</Pill></li>)}</ul>
          </div>
        </div>
        <p className="mt-8 max-w-3xl border-l-2 border-shift pl-5 font-semibold leading-7 text-zinc-200">Наявність DCT450 залежить від року випуску, двигуна, ринку та комплектації автомобіля. Перед ремонтом перевіряємо тип коробки за VIN і маркуванням.</p>
      </Section>
    </section>

    <Section eyebrow="Що ремонтуємо" title="Повний цикл ремонту PowerShift DCT450">
      <ul className="grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((item) => <li key={item} className="flex gap-3 border-t border-white/10 py-4 leading-7 text-zinc-200"><span aria-hidden="true" className="mt-[.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-shift" />{item}</li>)}
      </ul>

      <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        <LandingPhoto name="wet-clutch" alt="Мокре зчеплення PowerShift DCT450" sizes="(min-width: 1024px) 46vw, 100vw" />
        <div className="min-w-0">
          <p className="eyebrow">Мокре зчеплення</p>
          <h3 className="text-3xl font-black leading-tight tracking-[-.02em] text-white md:text-4xl">Пакети зчеплення та фрикціони</h3>
          <p className="mt-5 text-lg leading-8 text-zinc-300">Ремонт або заміна пакетів мокрого зчеплення. Стан зчеплення перевіряємо під час дефектування, після повного розбору коробки.</p>
        </div>
      </div>

      <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 lg:order-2"><LandingPhoto name="hydraulic-unit" alt="Гідравлічний блок PowerShift DCT450" sizes="(min-width: 1024px) 46vw, 100vw" /></div>
        <div className="min-w-0 lg:order-1">
          <p className="eyebrow">Гідравліка і керування</p>
          <h3 className="text-3xl font-black leading-tight tracking-[-.02em] text-white md:text-4xl">Гідравлічний блок і мехатронік</h3>
          <p className="mt-5 text-lg leading-8 text-zinc-300">Ремонт гідравлічного блока, електронної частини та мехатроніка. Після ремонту проводимо адаптацію.</p>
        </div>
      </div>
    </Section>

    <section className="border-y border-white/[.07] bg-[#0d1010]">
      <Section eyebrow="Порядок роботи" title="Спочатку причина, потім ремонт">
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map(([title, text], index) => <li key={title} className="process-step"><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
      </Section>
    </section>

    <Section eyebrow="Гарантія" title="Гарантія фіксується в документах">
      <p className="max-w-3xl text-lg leading-8 text-zinc-300">Гарантійні умови залежать від виду виконаних робіт і встановлених деталей. Перелік робіт, умови та строк гарантії фіксуємо в документах під час видачі автомобіля.</p>
    </Section>

    <section className="border-t border-white/[.07] bg-[#0d1010] px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div className="min-w-0">
          <p className="eyebrow">Контакти</p>
          <h2 className="max-w-3xl text-3xl font-black leading-[1.05] tracking-[-.03em] text-white md:text-5xl">Потрібна діагностика PowerShift DCT450?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">Зателефонуйте або надішліть VIN у Viber. Перевіримо тип трансмісії та уточнимо можливість діагностики й ремонту.</p>
          <div className="mt-9"><CtaButtons /></div>
        </div>
        <dl className="rounded-2xl border border-white/[.09] bg-[#171c1b] p-7 md:p-9">
          <div className="contact-row !border-t-0 !pt-0"><dt>Телефон</dt><dd><a className="text-2xl font-black text-white hover:text-shift" href={site.phoneHref}>{site.phoneDisplay}</a></dd></div>
          <div className="contact-row"><dt>Viber</dt><dd>На цьому ж номері</dd></div>
          <div className="contact-row"><dt>Адреса</dt><dd>{addressOnPage}</dd></div>
        </dl>
      </div>
      <p className="mx-auto mt-12 max-w-[1360px]"><Link className="font-bold text-shift" href="/#directions">← Усі напрями ремонту</Link></p>
    </section>
  </>;
}
