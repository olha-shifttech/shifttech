import type { Metadata } from "next";
import { CatalogSearch } from "@/components/catalog-search";
import { Hero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Каталог автомобілів ShiftTech — пошук по авто і коробці",
  description: "Каталог автомобілів ShiftTech з пошуком за маркою, моделлю, двигуном і коробкою передач.",
  alternates: { canonical: "/cars" },
};

export default function Cars() {
  return (
    <>
      <Hero title="Каталог автомобілів" subtitle="Клієнт починає з автомобіля: марка, модель, двигун або ринок допомагають перейти до можливої коробки передач і безпечної діагностики." />
      <Section eyebrow="vehicle-first UX" title="Пошук за маркою, моделлю або коробкою передач">
        <CatalogSearch />
      </Section>
    </>
  );
}
