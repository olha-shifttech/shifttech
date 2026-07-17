"use client";

import { useMemo, useState } from "react";
import { getTransmission, vehicles, vehicleName } from "@/lib/data";
import { Card, Pill } from "@/components/ui";

export function CatalogSearch() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const transmissions = vehicle.transmissionIds.map(getTransmission).filter(Boolean);
      const haystack = [vehicleName(vehicle), vehicle.brand, vehicle.model, vehicle.engine, vehicle.market, ...transmissions.flatMap((item) => [item?.name, item?.alt, item?.type])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-line bg-panel/70 p-5">
        <label className="text-sm font-bold uppercase tracking-[.25em] text-shift" htmlFor="catalog-search">Пошук</label>
        <input
          id="catalog-search"
          className="mt-3 w-full rounded-2xl border border-line bg-graphite px-4 py-4 text-white outline-none ring-shift/30 transition placeholder:text-zinc-600 focus:border-shift focus:ring-4"
          placeholder="Введіть марку, модель або коробку: Passat, Nissan, 09G, JF011E, CVT..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
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
    </div>
  );
}
