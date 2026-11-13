import type { Metadata } from "next";
import { Card, ContactBlock, Hero, Section } from "@/components/ui";
import { landings, site } from "@/lib/site";

export const metadata: Metadata = { title: "Ремонт CVT / варіаторів", description: "Ремонт варіаторів Jatco у ShiftTech: JF010E, JF011E, JF015E, JF016E, JF017E. Модель варіатора перевіряємо за VIN." };

export default function Cvt() {
  return <><Hero title="Ремонт CVT / варіаторів" subtitle="Jatco CVT: JF010E, JF011E, JF015E, JF016E, JF017E. Модель варіатора перевіряємо за VIN." /><Section eyebrow="Окрема сторінка" title="Ремонт варіаторів Jatco"><div className="grid gap-5 md:grid-cols-2"><Card title="Ремонт варіаторів Jatco" href={landings.jatcoCvt}><p>Діагностика, дефектовка, ремонт гідроблока й насоса, роботи з ременем і конусами, адаптація після ремонту.</p></Card></div></Section><Section eyebrow="Як ми працюємо" title="Спершу причина, потім ремонт"><div className="grid gap-5 md:grid-cols-3"><Card title="Діагностика"><p>Визначаємо коробку за VIN і кодом агрегату, фіксуємо симптоми та умови, за яких вони з’являються.</p></Card><Card title="Висновок і погодження робіт"><p>Показуємо, що знайшли. Обсяг робіт і вартість погоджуємо з вами до початку ремонту.</p></Card><Card title="Ремонт і перевірка"><p>Ремонтуємо погоджений обсяг і перевіряємо роботу коробки після ремонту.</p></Card></div><p className="mt-8 max-w-3xl font-semibold leading-7 text-zinc-300">{site.warranty}</p></Section><Section eyebrow="Контакти та маршрут" title="Запис на діагностику"><ContactBlock /></Section></>;
}
