"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { symptoms, transmissions, vehicles, vehicleName } from "@/lib/data";

const modes = [
  { id: "brand", label: "Марка" }, { id: "model", label: "Модель" },
  { id: "transmission", label: "Коробка передач" }, { id: "symptom", label: "Симптом" },
] as const;
type Mode = typeof modes[number]["id"];

export function HomeSearch() {
  const [mode, setMode] = useState<Mode>("brand");
  const [query, setQuery] = useState("");
  const records = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    if (mode === "brand") return [...new Set(vehicles.map(v => v.brand))].filter(x => x.toLowerCase().includes(q)).map(x => ({ label: x, href: `/cars?brand=${encodeURIComponent(x)}` }));
    if (mode === "model") return vehicles.filter(v => vehicleName(v).toLowerCase().includes(q)).map(v => ({ label: vehicleName(v), href: `/cars/${v.slug}` }));
    if (mode === "transmission") return transmissions.filter(t => `${t.name} ${t.alt} ${t.type}`.toLowerCase().includes(q)).map(t => ({ label: `${t.name} · ${t.alt}`, href: `/transmissions/${t.id}` }));
    return symptoms.filter(s => s.name.toLowerCase().includes(q)).map(s => ({ label: s.name, href: `/symptoms/${s.slug}` }));
  }, [mode, query]);
  const current = modes.find(item => item.id === mode)!;
  return <div className="search-shell">
    <div className="flex flex-wrap gap-2 border-b border-white/[.08] p-3 md:p-4" role="tablist" aria-label="Спосіб пошуку">
      {modes.map(item => <button key={item.id} onClick={() => { setMode(item.id); setQuery(""); }} className={`search-tab ${mode === item.id ? "search-tab-active" : ""}`} type="button">{item.label}</button>)}
    </div>
    <div className="relative p-4 md:p-6"><label className="sr-only" htmlFor="home-search">Пошук: {current.label}</label><div className="flex gap-3"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-black/20 text-xl text-shift">⌕</span><input id="home-search" className="min-w-0 flex-1 bg-transparent text-lg text-white outline-none placeholder:text-zinc-600" value={query} onChange={e => setQuery(e.target.value)} placeholder={`Введіть ${current.label.toLowerCase()}...`} /></div>
      {query && <div className="mt-5 grid gap-2 border-t border-white/[.08] pt-5">{records.slice(0, 8).map(item => <Link key={item.href} href={item.href} className="flex items-center rounded-xl px-4 py-3 text-zinc-200 transition hover:bg-white/5 hover:text-shift">{item.label}<span className="ml-auto">→</span></Link>)}{records.length === 0 && <p className="px-4 py-3 text-zinc-500">У каталозі поки немає відповідних даних.</p>}</div>}
    </div>
  </div>;
}
