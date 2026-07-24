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

const families = transmissionSeeds.map(([slug, name, aliases]) => entity("transmission-families", slug, name, "Placeholder hub for identification, applications, symptoms, diagnostics, repairs, and maintenance.", [...aliases]));
const transmissionModels = transmissionSeeds.flatMap(([familySlug, familyName, aliases]) => aliases.slice(0, familySlug === "aisin-09g-09m-09k" ? 3 : 1).map((code) => entity("transmissions", code.toLowerCase(), `${familyName.split(" ")[0]} ${code}`, "Placeholder transmission model page; technical specifications require editorial verification.", [code])));

const registeredRepairCases = repairCases.map(repairCaseGraph);

export const knowledgeEntities: KnowledgeEntity[] = [
  ...["Volkswagen", "Audi", "Škoda", "SEAT", "Nissan", "Renault", "Mitsubishi", "Toyota"].map((name) => entity("vehicle-brands", name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), name, "Placeholder brand hub for supported models and transmissions.")),
  ...[
    ["volkswagen-passat", "Volkswagen Passat"], ["volkswagen-jetta", "Volkswagen Jetta"], ["audi-a3", "Audi A3"], ["skoda-octavia", "Škoda Octavia"], ["seat-leon", "SEAT Leon"],
    ["nissan-qashqai", "Nissan Qashqai"], ["nissan-x-trail", "Nissan X-Trail"], ["nissan-murano", "Nissan Murano"], ["renault-koleos", "Renault Koleos"],
    ["mitsubishi-outlander", "Mitsubishi Outlander"], ["toyota-camry", "Toyota Camry"], ["toyota-rav4", "Toyota RAV4"],
  ].map(([slug, name]) => entity("vehicle-models", slug, name, "Placeholder model hub. Fitment depends on generation, market, engine, and transmission code.")),
  ...families,
  ...transmissionModels,
  ...[
    ["harsh-shifting", "Harsh shifting"], ["shudder", "Shudder or vibration"], ["slipping", "Transmission slipping"], ["delayed-engagement", "Delayed engagement"], ["no-drive", "No drive"], ["warning-mode", "Warning or limp mode"],
  ].map(([slug, name]) => entity("symptoms", slug, name, "Placeholder symptom page; this observation is not a diagnosis.")),
  ...[
    ["fluid-condition", "Fluid condition or level"], ["hydraulic-pressure", "Hydraulic pressure deviation"], ["electrical-control", "Electrical or control fault"], ["mechanical-wear", "Mechanical wear"],
  ].map(([slug, name]) => entity("causes", slug, name, "Placeholder possible-cause page; confirmation requires the linked diagnostic procedure.")),
  ...[
    ["vehicle-transmission-identification", "Vehicle and transmission identification"], ["scan-and-freeze-frame", "Scan and freeze-frame review"], ["fluid-and-leak-inspection", "Fluid and leak inspection"], ["pressure-and-road-test", "Pressure and controlled road test"],
  ].map(([slug, name]) => entity("diagnostic-procedures", slug, name, "Placeholder diagnostic procedure. Steps, tooling, limits, and safety data are not yet published.")),
  ...[
    ["fluid-service", "Transmission fluid service"], ["valve-body-repair", "Valve body repair"], ["control-system-repair", "Control system repair"], ["transmission-overhaul", "Transmission overhaul"],
  ].map(([slug, name]) => entity("repair-procedures", slug, name, "Placeholder repair procedure. No instructions, specifications, or parts guidance are published yet.")),
  ...[
    ["fluid-service-interval", "Fluid service interval"], ["fluid-specification", "Fluid specification and level"], ["adaptation-after-service", "Adaptation after service"],
  ].map(([slug, name]) => entity("maintenance", slug, name, "Placeholder maintenance topic; use vehicle-specific manufacturer information when content is reviewed.")),
  ...[
    ["how-identify-transmission", "How do I identify my transmission?"], ["can-i-drive-with-symptom", "Can I keep driving with a transmission symptom?"], ["is-code-a-diagnosis", "Is a fault code a diagnosis?"],
  ].map(([slug, name]) => entity("faq", slug, name, "Placeholder FAQ answer awaiting technical and editorial review.")),
  ...registeredRepairCases.map(({ entity }) => entity),
  ...[
    ["transmission-identification-guide", "Transmission identification guide"], ["symptom-versus-diagnosis", "Symptom versus diagnosis"], ["pre-diagnostic-checklist", "Pre-diagnostic checklist"],
  ].map(([slug, name]) => entity("articles", slug, name, "Placeholder related article awaiting sourced editorial content.")),
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

export const kindLabels: Record<EntityKind, string> = { "vehicle-brands": "Vehicle brands", "vehicle-models": "Vehicle models", "transmission-families": "Transmission families", transmissions: "Transmission models", symptoms: "Symptoms", causes: "Possible causes", "diagnostic-procedures": "Diagnostic procedures", "repair-procedures": "Repair procedures", maintenance: "Maintenance", faq: "Frequently asked questions", "repair-cases": "ShiftTech repair cases", articles: "Related articles" };
export const entityUrl = (item: KnowledgeEntity) => `/${item.kind}/${item.slug}`;
export const entitiesByKind = (kind: EntityKind) => knowledgeEntities.filter((item) => item.kind === kind);
export const relatedEntities = (entityId: string) => {
  const edges = knowledgeEdges.filter((edge) => edge.from === entityId || edge.to === entityId);
  return edges.map((edge) => ({ edge, entity: knowledgeEntities.find((item) => item.id === (edge.from === entityId ? edge.to : edge.from)) })).filter((item): item is { edge: KnowledgeEdge; entity: KnowledgeEntity } => Boolean(item.entity));
};
