import type { KnowledgeEdge, KnowledgeEntity } from "@/lib/knowledge/catalog";
import type { RepairCase, RepairCaseInput } from "./types";

const ENTITY_ID = /^[a-z-]+:[a-z0-9-]+$/;

function requireText(value: string, field: string) {
  if (!value.trim()) throw new Error(`Repair case ${field} is required.`);
}

/** Validates and freezes a case at its publishing boundary. */
export function createRepairCase(input: RepairCaseInput): Readonly<RepairCase> {
  requireText(input.id, "id");
  requireText(input.caseNumber, "caseNumber");
  requireText(input.slug, "slug");
  requireText(input.vehicle.label, "vehicle");
  requireText(input.engine.label, "engine");
  requireText(input.transmission.label, "transmission");
  requireText(input.customerComplaint, "customerComplaint");
  requireText(input.finalResult, "finalResult");
  if (input.mileage.value < 0) throw new Error("Repair case mileage cannot be negative.");
  if (input.seo.canonicalPath !== `/repair-cases/${input.slug}`) throw new Error("Repair case canonicalPath must match its slug.");

  const references = [
    input.vehicle.entityId,
    input.transmission.entityId,
    ...(input.engine.entityId ? [input.engine.entityId] : []),
    ...input.symptoms,
    ...input.repairProcedure.entityIds,
    ...input.relatedArticles,
    ...input.relatedSymptoms,
    ...input.relatedRepairProcedures,
    ...input.relatedFaq,
  ];
  for (const reference of references) {
    if (!ENTITY_ID.test(reference)) throw new Error(`Invalid Knowledge Graph entity ID: ${reference}`);
  }

  return Object.freeze({ ...input });
}

/** Empty by design: real, reviewed case records can be registered without changing the template. */
export const repairCases: ReadonlyArray<Readonly<RepairCase>> = [];

export const getRepairCase = (slug: string) => repairCases.find((repairCase) => repairCase.slug === slug);

/** Converts every case reference into an edge, so links are never maintained twice. */
export function repairCaseGraph(repairCase: RepairCase): { entity: KnowledgeEntity; edges: KnowledgeEdge[] } {
  const caseId = `repair-cases:${repairCase.slug}`;
  const targets = new Set([
    repairCase.vehicle.entityId,
    repairCase.transmission.entityId,
    ...(repairCase.engine.entityId ? [repairCase.engine.entityId] : []),
    ...repairCase.symptoms,
    ...repairCase.repairProcedure.entityIds,
    ...repairCase.relatedArticles,
    ...repairCase.relatedSymptoms,
    ...repairCase.relatedRepairProcedures,
    ...repairCase.relatedFaq,
  ]);
  return {
    entity: { id: caseId, kind: "repair-cases", slug: repairCase.slug, name: `${repairCase.caseNumber}: ${repairCase.vehicle.label}`, description: repairCase.seo.description },
    edges: [...targets].map((to) => ({ from: caseId, to, relation: "documented-in" })),
  };
}

export type * from "./types";
