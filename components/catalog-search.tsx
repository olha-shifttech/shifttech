"use client";

import { useMemo, useState } from "react";
import { getTransmission, vehicles, vehicleName } from "@/lib/data";
import { Card, Pill } from "@/components/ui";

export function CatalogSearch() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const brands = [...new Set(vehicles.map((vehicle) => vehicle.brand))].sort();
  const models = [...new Set(vehicles.filter((vehicle) => !brand || vehicle.brand === brand).map((vehicle) => vehicle.model))].sort();
  const engines = [...new Set(vehicles.map((vehicle) => vehicle.engine).filter(Boolean))].sort();
  const results = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const transmissions = vehicle.transmissionIds.map(getTransmission).filter(Boolean);
      const haystack = [vehicleName(vehicle), vehicle.brand, vehicle.model, vehicle.engine, vehicle.market, ...transmissions.flatMap((item) => [item?.name, item?.alt, item?.type])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery) && (!brand || vehicle.brand === brand) && (!model || vehicle.model === model) && (!engine || vehicle.engine === engine) && (!year || (year === "unverified" && vehicle.productionYears === null));
    });
  }, [brand, engine, model, normalizedQuery, year]);

  function resetFilters() {
    setQuery(""); setBrand(""); setModel(""); setYear(""); setEngine("");
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-line bg-panel/70 p-5 md:p-6">
        <label className="text-sm font-bold uppercase tracking-[.25em] text-shift" htmlFor="catalog-search">Пошук</label>
        <input
          id="catalog-search"
          className="mt-3 w-full rounded-2xl border border-line bg-graphite px-4 py-4 text-white outline-none ring-shift/30 transition placeholder:text-zinc-600 focus:border-shift focus:ring-4"
          placeholder="Введіть марку, модель або коробку: Passat, Nissan, 09G, JF011E, CVT..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Filter label="Марка" value={brand} onChange={(value) => { setBrand(value); setModel(""); }} options={brands} />
          <Filter label="Модель" value={model} onChange={setModel} options={models} disabled={!brand} />
          <Filter label="Рік" value={year} onChange={setYear} options={[]} includeUnverified />
          <Filter label="Двигун" value={engine} onChange={setEngine} options={engines} />
        </div>
        <div className="mt-5 flex flex-col gap-3 border-t border-line pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-400" aria-live="polite">Знайдено автомобілів: <b className="text-white">{results.length}</b></p>
          <button className="min-h-11 rounded-full border border-line px-5 font-bold text-white transition hover:border-shift/50" onClick={resetFilters} type="button">Скинути фільтри</button>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {results.map((vehicle) => {
          const related = vehicle.transmissionIds.map(getTransmission).filter(Boolean);
          return (
            <Card key={vehicle.slug} title={vehicleName(vehicle)} href={`/cars/${vehicle.slug}`}>
              <div className="mb-4 flex flex-wrap gap-2">
                <Pill>{vehicle.brand}</Pill>
                {vehicle.engine ? <Pill>{vehicle.engine}</Pill> : null}
                {vehicle.market ? <Pill>{vehicle.market}</Pill> : null}
              </div>
              <p className="mb-3 text-sm text-zinc-400">Можливі коробки передач:</p>
              <div className="flex flex-wrap gap-2">
                {related.map((item) => item ? <Pill key={item.id}>{item.name}</Pill> : null)}
              </div>
            </Card>
          );
        })}
      </div>
      {!results.length ? <div className="rounded-3xl border border-dashed border-line bg-panel/40 px-5 py-12 text-center"><h3 className="text-2xl font-bold text-white">Автомобіль не знайдено</h3><p className="mx-auto mt-3 max-w-xl text-zinc-400">Змініть або скиньте фільтри. Якщо потрібної комплектації немає в каталозі, зв’яжіться з ShiftTech — сумісність потребуватиме перевірки.</p><button className="mt-6 min-h-11 rounded-full bg-shift px-6 font-bold text-graphite" onClick={resetFilters} type="button">Показати всі автомобілі</button></div> : null}
    </div>
  );
}

function Filter({ label, value, onChange, options, disabled = false, includeUnverified = false }: { label: string; value: string; onChange: (value: string) => void; options: string[]; disabled?: boolean; includeUnverified?: boolean }) {
  const id = `filter-${label.toLowerCase()}`;
  return <label className="text-sm font-semibold text-zinc-300" htmlFor={id}>{label}<select id={id} className="mt-2 min-h-12 w-full rounded-xl border border-line bg-graphite px-3 text-white outline-none focus:border-shift disabled:cursor-not-allowed disabled:opacity-50" disabled={disabled} value={value} onChange={(event) => onChange(event.target.value)}><option value="">Усі</option>{includeUnverified ? <option value="unverified">Потребує перевірки</option> : null}{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}
