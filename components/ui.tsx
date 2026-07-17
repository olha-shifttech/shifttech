import Link from "next/link";
import { navigation } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-graphite/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="text-xl font-black tracking-tight text-white">
          Shift<span className="text-shift">Tech</span>
        </Link>
        <nav className="hidden gap-5 text-sm text-zinc-300 xl:flex">
          {navigation.map((item) => (
            <Link className="transition hover:text-shift" key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacts" className="rounded-full border border-shift/50 px-4 py-2 text-sm font-semibold text-shift shadow-glow">
          Діагностика
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#0d0f10] px-5 py-10 text-sm text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        <p><b className="text-white">ShiftTech 2.0</b><br />AI-friendly knowledge platform для ремонту АКПП, CVT, DSG та інших трансмісій.</p>
        <p>Принцип: клієнт заходить через автомобіль, система думає через коробку передач.</p>
        <p>GitHub — технічне сховище для коду, документації, структур даних і компонентів сайту.</p>
      </div>
    </footer>
  );
}

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return <section className="mx-auto max-w-7xl px-5 py-16"><p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-shift">{eyebrow}</p><h2 className="max-w-3xl text-3xl font-black text-white md:text-5xl">{title}</h2><div className="mt-8">{children}</div></section>;
}

export function Card({ title, children, href }: { title: string; children: React.ReactNode; href?: string }) {
  const content = <><h3 className="mb-3 text-xl font-bold text-white">{title}</h3><div className="text-zinc-300">{children}</div></>;
  const className = "rounded-3xl border border-line bg-panel/70 p-6 shadow-2xl shadow-black/20 transition hover:border-shift/40 hover:bg-panel";
  return href ? <Link className={className} href={href}>{content}</Link> : <div className={className}>{content}</div>;
}

export function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(53,208,111,.22),transparent_34%),linear-gradient(135deg,#111315,#202427_55%,#111315)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-shift/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[.3em] text-shift">ShiftTech transmission platform</p>
        <h1 className="max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{subtitle}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link className="rounded-full bg-shift px-6 py-3 font-bold text-graphite" href="/diagnostics">Почати з діагностики</Link>
          <Link className="rounded-full border border-line px-6 py-3 font-bold text-white" href="/cars">Знайти авто</Link>
        </div>
      </div>
    </section>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-line bg-black/20 px-3 py-1 text-sm text-zinc-300">{children}</span>;
}
