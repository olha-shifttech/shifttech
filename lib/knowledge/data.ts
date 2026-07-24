import type { Article, Cause, DiagnosticProcedure, KnowledgeRelations, RepairSolution } from "./types";

export const causes: Cause[] = [
  { id: "fluid-condition", slug: "stan-transmisiinoi-ridyny", name: "Стан трансмісійної рідини", summary: "Рівень, стан або невідповідна специфікація рідини можуть впливати на тиск і поведінку трансмісії. Причину потрібно підтвердити вимірюваннями.", status: "reviewed" },
  { id: "hydraulic-pressure", slug: "vidkhylennia-hidravlichnoho-tysku", name: "Відхилення гідравлічного тиску", summary: "Фактичний тиск може відрізнятися від заданого через гідравлічні, механічні або керувальні фактори.", status: "reviewed" },
  { id: "control-system", slug: "systema-keruvannia", name: "Система керування", summary: "Помилки датчиків, проводки, адаптацій або блока керування можуть змінювати алгоритм роботи коробки.", status: "reviewed" },
];

export const diagnosticProcedures: DiagnosticProcedure[] = [
  { id: "initial-scan", slug: "pochatkova-diahnostyka", name: "Початкова діагностика трансмісії", steps: ["Підтвердити комплектацію та ідентифікатор трансмісії", "Зафіксувати умови прояву й зчитати коди помилок", "Перевірити рівень і стан рідини за процедурою виробника", "Порівняти задані та фактичні параметри під час контрольного тесту"], safetyNote: "Не продовжуйте рух за втрати тяги, витоку або критичного попередження.", status: "reviewed" },
  { id: "electrical-check", slug: "perevirka-systemy-keruvannia", name: "Перевірка системи керування", steps: ["Зберегти коди та freeze-frame до очищення", "Перевірити живлення, маси й доступну проводку", "Зіставити сигнали датчиків із технічними даними", "Виконати функціональний тест лише за процедурою виробника"], status: "reviewed" },
];

export const repairSolutions: RepairSolution[] = [
  { id: "service-after-diagnosis", slug: "obsluhovuvannia-za-rezultatamy", name: "Обслуговування за результатами перевірки", summary: "Відновлення рівня, усунення витоку або регламентна заміна рідини застосовуються тільки після визначення специфікації та стану агрегату.", disclaimer: "Це не універсальний рецепт ремонту; обсяг робіт визначає діагностика.", status: "reviewed" },
  { id: "targeted-repair", slug: "tsilovyi-remont", name: "Цільовий ремонт підтвердженого вузла", summary: "Ремонтується або замінюється лише вузол, несправність якого підтверджена тестами, з подальшою перевіркою та адаптацією за потреби.", disclaimer: "Рішення залежить від модифікації трансмісії та результатів вимірювань.", status: "reviewed" },
];

export const articles: Article[] = [
  { id: "prepare-diagnostics", slug: "yak-pidhotuvatysia-do-diahnostyky", title: "Як підготуватися до діагностики коробки", excerpt: "Які дані про автомобіль, умови прояву та попередні роботи допомагають швидше локалізувати несправність.", status: "published" },
  { id: "codes-context", slug: "chomu-kod-ne-ie-diahnozom", title: "Чому код помилки — ще не діагноз", excerpt: "Як використовувати коди разом із параметрами, вимірюваннями та контрольним тестом.", status: "published" },
];

const allTransmissionIds = ["09g", "09m", "09k", "jf010e", "jf011e", "jf015e", "jf016e", "jf017e", "dsg"];
const generalSymptoms = ["ne-yide-vpered", "ne-yide-nazad", "vibratsiia", "hul", "avariinyi-rezhym", "udar-pry-vmykanni-d-abo-r"];

export const relations: KnowledgeRelations = {
  vehicleTransmissions: [
    ["volkswagen-passat-b7-2-5-usa", "09g"], ["volkswagen-jetta-2-5-usa", "09g"], ["volkswagen-beetle-2-5-usa", "09g"], ["volkswagen-tiguan-2-0", "09m"],
    ["nissan-qashqai", "jf011e"], ["nissan-qashqai", "jf016e"], ["nissan-x-trail", "jf011e"], ["nissan-x-trail", "jf016e"], ["nissan-teana", "jf017e"], ["nissan-murano", "jf010e"], ["nissan-murano", "jf017e"], ["renault-koleos", "jf011e"], ["mitsubishi-outlander", "jf011e"],
  ],
  transmissionSymptoms: [
    ...["09g", "09m", "09k", "dsg"].map((id) => [id, "ryvky-pry-peremykanni"] as const),
    ...["jf010e", "jf011e", "jf015e", "jf016e", "jf017e"].map((id) => [id, "ryvky-pry-rozhoni"] as const),
    ...["09g", "09m", "09k", "jf010e", "jf011e", "jf015e", "jf016e", "jf017e"].flatMap((id) => [[id, "probuksovka"], [id, "yide-pislia-prohrivu"]] as const),
    ...allTransmissionIds.flatMap((id) => generalSymptoms.map((symptom) => [id, symptom] as const)),
  ],
  symptomCauses: ["ryvky-pry-peremykanni", "ryvky-pry-rozhoni", "probuksovka", "ne-yide-vpered", "ne-yide-nazad", "yide-pislia-prohrivu", "vibratsiia", "hul", "avariinyi-rezhym", "udar-pry-vmykanni-d-abo-r"].flatMap((id) => [[id, "fluid-condition"], [id, "hydraulic-pressure"], [id, "control-system"]] as const),
  causeProcedures: [["fluid-condition", "initial-scan"], ["hydraulic-pressure", "initial-scan"], ["control-system", "electrical-check"]],
  procedureSolutions: [["initial-scan", "service-after-diagnosis"], ["initial-scan", "targeted-repair"], ["electrical-check", "targeted-repair"]],
  solutionArticles: [["service-after-diagnosis", "prepare-diagnostics"], ["targeted-repair", "prepare-diagnostics"], ["targeted-repair", "codes-context"]],
};
