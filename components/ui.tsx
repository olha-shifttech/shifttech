import Link from "next/link";
import { navigation } from "@/lib/data";

const Arrow = () => <span aria-hidden="true" className="ml-auto text-shift transition-transform group-hover:translate-x-1">↗</span>;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#0b0e0d]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center gap-8 px-5 lg:px-10">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="ShiftTech — головна">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-shift/30 bg-shift/10 font-black italic text-shift">S</span>
          <span className="text-xl font-black tracking-[-.04em] text-white">SHIFT<span className="text-shift">TECH</span></span>
        </Link>
        <nav className="ml-auto hidden items-center gap-7 text-[13px] font-semibold text-zinc-300 xl:flex" aria-label="Головна навігація">
          {navigation.map((item) => <Link className="transition hover:text-shift" key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link href="/contacts" className="ml-auto inline-flex min-h-11 items-center rounded-lg bg-shift px-5 text-sm font-extrabold text-[#08110b] transition hover:bg-[#52e087] xl:ml-3">Записатися</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[.07] bg-[#080a09] px-5 py-14 text-sm text-zinc-400 lg:px-10">
      <div className="mx-auto grid max-w-[1360px] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><p className="text-xl font-black tracking-[-.04em] text-white">SHIFT<span className="text-shift">TECH</span></p><p className="mt-4 max-w-sm leading-6">Професійна діагностика та ремонт автоматичних коробок передач, DSG і варіаторів.</p></div>
        <div><p className="mb-4 font-bold uppercase tracking-widest text-white">Навігація</p><div className="grid gap-3">{navigation.slice(0, 5).map((item) => <Link className="hover:text-shift" href={item.href} key={item.href}>{item.label}</Link>)}</div></div>
        <div><p className="mb-4 font-bold uppercase tracking-widest text-white">Зв’язок</p><p className="leading-6">Контактні дані буде опубліковано після підтвердження.</p><Link className="mt-4 inline-flex font-bold text-shift" href="/contacts">Перейти до контактів →</Link></div>
      </div>
      <div className="mx-auto mt-12 max-w-[1360px] border-t border-white/[.07] pt-6 text-xs">© {new Date().getFullYear()} ShiftTech. Усі права захищено.</div>
    </footer>
  );
}

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return <section className="mx-auto max-w-[1360px] px-5 py-20 lg:px-10 lg:py-28">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-[-.04em] text-white md:text-5xl">{title}</h2><div className="mt-10">{children}</div></section>;
}

export function Card({ title, children, href }: { title: string; children: React.ReactNode; href?: string }) {
  const content = <><div className="flex items-start gap-3"><h3 className="mb-4 text-xl font-bold tracking-tight text-white">{title}</h3>{href && <Arrow />}</div><div className="leading-7 text-zinc-400">{children}</div></>;
  const className = "group block rounded-2xl border border-white/[.08] bg-[#151918]/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,.2)] transition duration-300 hover:-translate-y-1 hover:border-shift/40 hover:bg-[#181e1b]";
  return href ? <Link className={className} href={href}>{content}</Link> : <div className={className}>{content}</div>;
}

export function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return <section className="hero-grid relative overflow-hidden border-b border-white/[.07] px-5 py-20 lg:px-10 lg:py-28"><div className="hero-glow" /><div className="relative mx-auto max-w-[1360px]"><p className="eyebrow">Експертний сервіс трансмісій</p><h1 className="max-w-5xl text-5xl font-black leading-[.98] tracking-[-.055em] text-white md:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">{subtitle}</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link className="button-primary" href="/diagnostics">Записатися на діагностику</Link><Link className="button-secondary" href="/cars">Знайти свою коробку</Link></div></div></section>;
}

export function Pill({ children }: { children: React.ReactNode }) { return <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-zinc-300">{children}</span>; }
