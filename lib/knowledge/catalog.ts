import { repairCaseGraph, repairCases } from "@/lib/repair-cases";

export const entityKinds = [
  "vehicle-brands", "vehicle-models", "transmission-families", "transmissions", "symptoms", "causes",
  "diagnostic-procedures", "repair-procedures", "maintenance", "faq", "repair-cases", "articles",
] as const;

export type EntityKind = (typeof entityKinds)[number];

export type KnowledgeEntity = {
  id: string;
  kind: EntityKind;
  slug: string;
  name: string;
  description: string;
  aliases?: string[];
};

export type KnowledgeEdge = {
  from: string;
  to: string;
  relation: "contains" | "uses" | "applies-to" | "may-present" | "may-indicate" | "diagnosed-by" | "resolved-by" | "maintained-by" | "documented-in" | "answers" | "related-to";
};

const entity = (kind: EntityKind, slug: string, name: string, description: string, aliases?: string[]): KnowledgeEntity => ({
  id: `${kind}:${slug}`, kind, slug, name, description, aliases,
});

const transmissionSeeds = [
  ["aisin-09g-09m-09k", "Aisin 09G / 09M / 09K", ["09G", "09M", "09K"]],
  ["jatco-jf010e", "Jatco JF010E", ["JF010E", "RE0F09A", "RE0F09B"]],
  ["jatco-jf011e", "Jatco JF011E", ["JF011E", "RE0F10A"]],
  ["jatco-jf015e", "Jatco JF015E", ["JF015E", "RE0F11A"]],
  ["jatco-jf016e", "Jatco JF016E", ["JF016E", "RE0F10D"]],
  ["jatco-jf017e", "Jatco JF017E", ["JF017E", "RE0F10E"]],
  ["toyota-u660", "Toyota U660", ["U660E", "U660F"]],
  ["toyota-k114", "Toyota K114", ["K114", "K114F"]],
  ["dsg-dq200", "DSG DQ200", ["DQ200", "0AM", "0CW"]],
  ["dsg-dq250", "DSG DQ250", ["DQ250", "02E"]],
] as const;

const families = transmissionSeeds.map(([slug, name, aliases]) => entity("transmission-families", slug, name, "Сторінка готується. Тут будуть ідентифікація, застосування, симптоми, діагностика, ремонт і обслуговування.", [...aliases]));
const transmissionModels = transmissionSeeds.flatMap(([familySlug, familyName, aliases]) => aliases.slice(0, familySlug === "aisin-09g-09m-09k" ? 3 : 1).map((code) => entity("transmissions", code.toLowerCase(), `${familyName.split(" ")[0]} ${code}`, "Сторінка готується. Технічні дані публікуємо після перевірки.", [code])));

const registeredRepairCases = repairCases.map(repairCaseGraph);

export const knowledgeEntities: KnowledgeEntity[] = [
  ...["Volkswagen", "Audi", "Škoda", "SEAT", "Nissan", "Renault", "Mitsubishi", "Toyota"].map((name) => entity("vehicle-brands", name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), name, "Сторінка готується. Тут будуть моделі та трансмісії цієї марки.")),
  ...[
    ["volkswagen-passat", "Volkswagen Passat"], ["volkswagen-jetta", "Volkswagen Jetta"], ["audi-a3", "Audi A3"], ["skoda-octavia", "Škoda Octavia"], ["seat-leon", "SEAT Leon"],
    ["nissan-qashqai", "Nissan Qashqai"], ["nissan-x-trail", "Nissan X-Trail"], ["nissan-murano", "Nissan Murano"], ["renault-koleos", "Renault Koleos"],
    ["mitsubishi-outlander", "Mitsubishi Outlander"], ["toyota-camry", "Toyota Camry"], ["toyota-rav4", "Toyota RAV4"],
  ].map(([slug, name]) => entity("vehicle-models", slug, name, "Сторінка готується. Тип коробки залежить від покоління, ринку, двигуна та коду трансмісії.")),
  ...families,
  ...transmissionModels,
  ...[
    ["harsh-shifting", "Жорсткі перемикання"], ["shudder", "Ривки або вібрація"], ["slipping", "Пробуксовка"], ["delayed-engagement", "Затримка ввімкнення передачі"], ["no-drive", "Автомобіль не їде"], ["warning-mode", "Попередження або аварійний режим"],
  ].map(([slug, name]) => entity("symptoms", slug, name, "Сторінка готується. Симптом — це спостереження, а не діагноз.")),
  ...[
    ["fluid-condition", "Стан або рівень рідини"], ["hydraulic-pressure", "Відхилення гідравлічного тиску"], ["electrical-control", "Несправність електрики або керування"], ["mechanical-wear", "Механічний знос"],
  ].map(([slug, name]) => entity("causes", slug, name, "Сторінка готується. Причину підтверджує лише діагностика.")),
  ...[
    ["vehicle-transmission-identification", "Ідентифікація автомобіля та трансмісії"], ["scan-and-freeze-frame", "Зчитування кодів і збережених параметрів"], ["fluid-and-leak-inspection", "Перевірка рідини та витоків"], ["pressure-and-road-test", "Перевірка тиску й контрольна поїздка"],
  ].map(([slug, name]) => entity("diagnostic-procedures", slug, name, "Сторінка готується. Порядок перевірки ще не опубліковано.")),
  ...[
    ["fluid-service", "Обслуговування з заміною рідини"], ["valve-body-repair", "Ремонт гідроблока"], ["control-system-repair", "Ремонт системи керування"], ["transmission-overhaul", "Капітальний ремонт трансмісії"],
  ].map(([slug, name]) => entity("repair-procedures", slug, name, "Сторінка готується. Інструкції та технічні дані ще не опубліковано.")),
  ...[
    ["fluid-service-interval", "Інтервал заміни рідини"], ["fluid-specification", "Специфікація та рівень рідини"], ["adaptation-after-service", "Адаптація після обслуговування"],
  ].map(([slug, name]) => entity("maintenance", slug, name, "Сторінка готується. Матеріал публікуємо після перевірки за даними виробника.")),
  ...[
    ["how-identify-transmission", "Як визначити, яка в мене коробка?"], ["can-i-drive-with-symptom", "Чи можна їздити з симптомами несправності коробки?"], ["is-code-a-diagnosis", "Чи є код помилки діагнозом?"],
  ].map(([slug, name]) => entity("faq", slug, name, "Відповідь готується й проходить технічну перевірку.")),
  ...registeredRepairCases.map(({ entity }) => entity),
  ...[
    ["transmission-identification-guide", "Як визначити тип трансмісії"], ["symptom-versus-diagnosis", "Симптом і діагноз: у чому різниця"], ["pre-diagnostic-checklist", "Що підготувати перед діагностикою"],
  ].map(([slug, name]) => entity("articles", slug, name, "Стаття готується.")),
];

const id = (kind: EntityKind, slug: string) => `${kind}:${slug}`;
const modelsByBrand: Record<string, string[]> = { volkswagen: ["volkswagen-passat", "volkswagen-jetta"], audi: ["audi-a3"], skoda: ["skoda-octavia"], seat: ["seat-leon"], nissan: ["nissan-qashqai", "nissan-x-trail", "nissan-murano"], renault: ["renault-koleos"], mitsubishi: ["mitsubishi-outlander"], toyota: ["toyota-camry", "toyota-rav4"] };
const modelFamily: Record<string, string> = { "volkswagen-passat": "aisin-09g-09m-09k", "volkswagen-jetta": "aisin-09g-09m-09k", "audi-a3": "dsg-dq250", "skoda-octavia": "dsg-dq200", "seat-leon": "dsg-dq200", "nissan-qashqai": "jatco-jf016e", "nissan-x-trail": "jatco-jf011e", "nissan-murano": "jatco-jf010e", "renault-koleos": "jatco-jf011e", "mitsubishi-outlander": "jatco-jf011e", "toyota-camry": "toyota-u660", "toyota-rav4": "toyota-k114" };

export const knowledgeEdges: KnowledgeEdge[] = [
  ...Object.entries(modelsByBrand).flatMap(([brand, models]) => models.map((model) => ({ from: id("vehicle-brands", brand), to: id("vehicle-models", model), relation: "contains" as const }))),
  ...Object.entries(modelFamily).map(([model, family]) => ({ from: id("vehicle-models", model), to: id("transmission-families", family), relation: "uses" as const })),
  ...transmissionSeeds.flatMap(([familySlug, , aliases]) => aliases.slice(0, familySlug === "aisin-09g-09m-09k" ? 3 : 1).map((code) => ({ from: id("transmission-families", familySlug), to: id("transmissions", code.toLowerCase()), relation: "contains" as const }))),
  ...transmissionModels.flatMap((transmission, index) => ["harsh-shifting", "shudder", "slipping", index % 2 ? "warning-mode" : "delayed-engagement"].map((symptom) => ({ from: transmission.id, to: id("symptoms", symptom), relation: "may-present" as const }))),
  ...["harsh-shifting", "shudder", "slipping", "delayed-engagement", "no-drive", "warning-mode"].flatMap((symptom) => ["fluid-condition", "hydraulic-pressure", "electrical-control", "mechanical-wear"].map((cause) => ({ from: id("symptoms", symptom), to: id("causes", cause), relation: "may-indicate" as const }))),
  ...[["fluid-condition", "fluid-and-leak-inspection"], ["hydraulic-pressure", "pressure-and-road-test"], ["electrical-control", "scan-and-freeze-frame"], ["mechanical-wear", "vehicle-transmission-identification"]].map(([cause, procedure]) => ({ from: id("causes", cause), to: id("diagnostic-procedures", procedure), relation: "diagnosed-by" as const })),
  ...[["fluid-and-leak-inspection", "fluid-service"], ["pressure-and-road-test", "valve-body-repair"], ["scan-and-freeze-frame", "control-system-repair"], ["vehicle-transmission-identification", "transmission-overhaul"]].map(([procedure, repair]) => ({ from: id("diagnostic-procedures", procedure), to: id("repair-procedures", repair), relation: "resolved-by" as const })),
  ...transmissionModels.flatMap((transmission) => ["fluid-service-interval", "fluid-specification", "adaptation-after-service"].map((topic) => ({ from: transmission.id, to: id("maintenance", topic), relation: "maintained-by" as const }))),
  { from: id("faq", "how-identify-transmission"), to: id("diagnostic-procedures", "vehicle-transmission-identification"), relation: "answers" },
  { from: id("faq", "can-i-drive-with-symptom"), to: id("symptoms", "warning-mode"), relation: "answers" },
  { from: id("faq", "is-code-a-diagnosis"), to: id("diagnostic-procedures", "scan-and-freeze-frame"), relation: "answers" },
  ...registeredRepairCases.flatMap(({ edges }) => edges),
  { from: id("articles", "transmission-identification-guide"), to: id("diagnostic-procedures", "vehicle-transmission-identification"), relation: "related-to" },
  { from: id("articles", "symptom-versus-diagnosis"), to: id("symptoms", "harsh-shifting"), relation: "related-to" },
  { from: id("articles", "pre-diagnostic-checklist"), to: id("diagnostic-procedures", "scan-and-freeze-frame"), relation: "related-to" },
];

export const kindLabels: Record<EntityKind, string> = { "vehicle-brands": "Марки авто", "vehicle-models": "Моделі авто", "transmission-families": "Сімейства трансмісій", transmissions: "Моделі трансмісій", symptoms: "Симптоми", causes: "Можливі причини", "diagnostic-procedures": "Діагностика", "repair-procedures": "Ремонт", maintenance: "Обслуговування", faq: "Часті запитання", "repair-cases": "Кейси ремонту ShiftTech", articles: "Статті" };
export const relationLabels: Record<KnowledgeEdge["relation"], string> = { contains: "Містить", uses: "Використовує", "applies-to": "Стосується", "may-present": "Можливий симптом", "may-indicate": "Можлива причина", "diagnosed-by": "Перевіряється", "resolved-by": "Усувається", "maintained-by": "Обслуговування", "documented-in": "Описано в кейсі", answers: "Відповідь", "related-to": "Пов’язано" };
export const entityUrl = (item: KnowledgeEntity) => `/${item.kind}/${item.slug}`;
export const entitiesByKind = (kind: EntityKind) => knowledgeEntities.filter((item) => item.kind === kind);
export const relatedEntities = (entityId: string) => {
  const edges = knowledgeEdges.filter((edge) => edge.from === entityId || edge.to === entityId);
  return edges.map((edge) => ({ edge, entity: knowledgeEntities.find((item) => item.id === (edge.from === entityId ? edge.to : edge.from)) })).filter((item): item is { edge: KnowledgeEdge; entity: KnowledgeEntity } => Boolean(item.entity));
};
