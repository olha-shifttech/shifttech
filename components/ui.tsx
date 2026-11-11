import Link from "next/link";
import { navigation } from "@/lib/data";
import { directions, site, type Direction, type SitePhoto } from "@/lib/site";

const Arrow = () => <span aria-hidden="true" className="ml-auto text-shift transition-transform group-hover:translate-x-1">↗</span>;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#0d1010]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center gap-4 px-5 lg:gap-8 lg:px-10">
        <Link href="/" className="group flex shrink-0 flex-col leading-none" aria-label="ShiftTech — головна">
          <span className="text-xl font-black tracking-[-.02em] text-white">SHIFT<span className="text-shift">TECH</span></span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-[.22em] text-zinc-400">Ремонт трансмісій</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-7 text-[13px] font-semibold text-zinc-300 xl:flex" aria-label="Головна навігація">
          {navigation.map((item) => <Link className="transition hover:text-shift" key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a href={site.phoneHref} className="ml-auto hidden whitespace-nowrap text-sm font-extrabold text-white transition hover:text-shift sm:inline-flex xl:ml-3">{site.phoneDisplay}</a>
        <a href={site.phoneHref} className="ml-auto inline-flex min-h-11 items-center whitespace-nowrap rounded-lg bg-[#66763f] px-4 text-sm font-extrabold text-[#f3f2ec] transition hover:bg-[#7d8f59] sm:ml-0 sm:px-5"><span className="sm:hidden">Подзвонити</span><span className="hidden sm:inline">Записатися</span></a>
        <details className="relative xl:hidden">
          <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-lg border border-white/15 text-lg text-white [&::-webkit-details-marker]:hidden" aria-label="Меню">☰</summary>
          <nav className="absolute right-0 top-14 grid w-64 gap-1 rounded-xl border border-white/10 bg-[#171c1b] p-3 text-sm font-semibold text-zinc-200 shadow-[0_30px_80px_rgba(0,0,0,.5)]" aria-label="Мобільна навігація">
            {navigation.map((item) => <Link className="rounded-lg px-3 py-3 hover:bg-white/5 hover:text-shift" key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[.07] bg-[#0a0c0c] px-5 py-14 text-sm text-zinc-400 lg:px-10">
      <div className="mx-auto grid max-w-[1360px] gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div><p className="text-xl font-black tracking-[-.02em] text-white">SHIFT<span className="text-shift">TECH</span></p><p className="mt-4 max-w-sm leading-6">Професійний сервіс трансмісій. {site.addressShort}.</p></div>
        <div><p className="mb-4 font-bold uppercase tracking-widest text-white">Напрями</p><div className="grid gap-3">{directions.map((item) => <DirectionAnchor className="hover:text-shift" key={item.slug} link={item.primary}>{item.title}</DirectionAnchor>)}</div></div>
        <div><p className="mb-4 font-bold uppercase tracking-widest text-white">Навігація</p><div className="grid gap-3">{navigation.map((item) => <Link className="hover:text-shift" href={item.href} key={item.href}>{item.label}</Link>)}</div></div>
        <div><p className="mb-4 font-bold uppercase tracking-widest text-white">Зв’язок</p><a className="text-lg font-black text-white hover:text-shift" href={site.phoneHref}>{site.phoneDisplay}</a><p className="mt-3 leading-6">{site.address}</p><a className="mt-4 inline-flex font-bold text-shift" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Прокласти маршрут →</a></div>
      </div>
      <div className="mx-auto mt-12 max-w-[1360px] border-t border-white/[.07] pt-6 text-xs">© {new Date().getFullYear()} ShiftTech. Усі права захищено.</div>
    </footer>
  );
}

export function DirectionAnchor({ link, className, children }: { link: Direction["primary"]; className?: string; children: React.ReactNode }) {
  return link.external
    ? <a className={className} href={link.href}>{children}</a>
    : <Link className={className} href={link.href}>{children}</Link>;
}

export function DirectionCard({ item }: { item: Direction }) {
  return (
    <article className="direction-card">
      {item.photo && <Photo photo={item.photo} className="-mx-7 -mt-7 mb-7 aspect-[16/9] rounded-b-none rounded-t-2xl" />}
      <p className="direction-code">{item.code}</p>
      <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-.02em] text-white">{item.title}</h3>
      <p className="mt-2 text-sm font-semibold text-zinc-400">{item.kind}</p>
      <p className="mt-5 leading-7 text-zinc-300">{item.text}</p>
      <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div>
      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <DirectionAnchor className="direction-link direction-link-primary" link={item.primary}>{item.primary.label}<span aria-hidden="true">{item.primary.external ? "↗" : "→"}</span></DirectionAnchor>
        {item.secondary && <DirectionAnchor className="direction-link direction-link-secondary" link={item.secondary}>{item.secondary.label}<span aria-hidden="true">↗</span></DirectionAnchor>}
      </div>
    </article>
  );
}

export function Photo({ photo, className = "" }: { photo: SitePhoto; className?: string }) {
  return (
    <div className={`min-w-0 overflow-hidden rounded-2xl border border-white/[.09] bg-[#171c1b] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="h-full w-full object-cover" />
    </div>
  );
}

export function ContactBlock() {
  return (
    <div className="grid gap-8 rounded-2xl border border-white/[.09] bg-[#171c1b] p-7 md:p-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
      <dl>
        <div className="contact-row !border-t-0 !pt-0"><dt>Телефон</dt><dd><a className="text-2xl font-black text-white hover:text-shift" href={site.phoneHref}>{site.phoneDisplay}</a></dd></div>
        <div className="contact-row"><dt>Адреса</dt><dd>{site.address}</dd></div>
        <div className="contact-row"><dt>Працюємо</dt><dd>{site.serviceArea}</dd></div>
        <div className="contact-row"><dt>Гарантія</dt><dd>{site.warranty}</dd></div>
      </dl>
      <div className="flex flex-col gap-3">
        <a className="button-primary" href={site.phoneHref}>Зателефонувати</a>
        <a className="button-secondary" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Прокласти маршрут до сервісу</a>
        <p className="mt-2 text-sm leading-6 text-zinc-400">Маршрут відкриється в Google Maps. Перед візитом зателефонуйте: уточнимо симптоми, VIN і доступний час.</p>
      </div>
    </div>
  );
}

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return <section className="mx-auto max-w-[1360px] px-5 py-20 lg:px-10 lg:py-28">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-[-.04em] text-white md:text-5xl">{title}</h2><div className="mt-10">{children}</div></section>;
}

export function Card({ title, children, href }: { title: string; children: React.ReactNode; href?: string }) {
  const content = <><div className="flex items-start gap-3"><h3 className="mb-4 text-xl font-bold tracking-tight text-white">{title}</h3>{href && <Arrow />}</div><div className="leading-7 text-zinc-400">{children}</div></>;
  const className = "group block rounded-2xl border border-white/[.08] bg-[#171c1b] p-6 shadow-[0_24px_70px_rgba(0,0,0,.2)] transition duration-300 hover:-translate-y-1 hover:border-shift/40 hover:bg-[#1b2120]";
  return href ? <Link className={className} href={href}>{content}</Link> : <div className={className}>{content}</div>;
}

export function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return <section className="hero-grid relative overflow-hidden border-b border-white/[.07] px-5 py-20 lg:px-10 lg:py-28"><div className="hero-glow" /><div className="relative mx-auto max-w-[1360px]"><p className="eyebrow">Професійний сервіс трансмісій</p><h1 className="max-w-5xl text-5xl font-black leading-[.98] tracking-[-.055em] text-white md:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">{subtitle}</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><a className="button-primary" href={site.phoneHref}>Записатися на діагностику</a><Link className="button-secondary" href="/contacts">Контакти та маршрут</Link></div></div></section>;
}

export function Pill({ children }: { children: React.ReactNode }) { return <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-zinc-300">{children}</span>; }
