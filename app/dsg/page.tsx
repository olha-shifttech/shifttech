import type { Metadata } from "next";
import { Card, Hero, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Ремонт DSG", description: "Сторінка напряму DSG у структурі ShiftTech з майбутніми зв'язками авто, симптомів, помилок і кейсів." };

export default function Dsg() {
  return <><Hero title="Ремонт DSG" subtitle="Окрема сторінка напряму DSG у структурі ShiftTech. Детальний контент додається після побудови ядра знань Aisin і Jatco." /><Section eyebrow="status" title="Готово до наповнення"><div className="grid gap-5 md:grid-cols-2"><Card title="Масштабована сутність"><p>DSG існує як окремий напрямок для пов'язаних авто, симптомів, помилок та кейсів.</p></Card><Card title="Технічна обережність"><p>Сторінка не вигадує типові несправності без підтверджених джерел і зберігає безпечний CTA на діагностику.</p></Card></div></Section></>;
}
