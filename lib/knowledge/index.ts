import { symptoms, transmissions, vehicles } from "@/lib/data";
import { articles, causes, diagnosticProcedures, relations, repairSolutions } from "./data";

const idsFor = (pairs: ReadonlyArray<readonly [string, string]>, id: string) =>
  pairs.filter(([sourceId]) => sourceId === id).map(([, targetId]) => targetId);
const select = <T extends { id: string }>(items: T[], ids: string[]) => ids.map((id) => items.find((item) => item.id === id)).filter((item): item is T => Boolean(item));

export function getVehicleKnowledge(vehicleSlug: string) {
  const transmissionIds = idsFor(relations.vehicleTransmissions, vehicleSlug);
  return {
    vehicle: vehicles.find((item) => item.slug === vehicleSlug),
    transmissions: transmissions.filter((item) => transmissionIds.includes(item.id)),
  };
}

export function getTransmissionKnowledge(transmissionId: string) {
  const vehicleIds = relations.vehicleTransmissions.filter(([, id]) => id === transmissionId).map(([id]) => id);
  return {
    transmission: transmissions.find((item) => item.id === transmissionId),
    vehicles: vehicles.filter((item) => vehicleIds.includes(item.slug)),
    symptoms: symptoms.filter((item) => idsFor(relations.transmissionSymptoms, transmissionId).includes(item.slug)),
  };
}

export function getSymptomKnowledge(symptomId: string) {
  const causeItems = select(causes, idsFor(relations.symptomCauses, symptomId));
  const procedureItems = select(diagnosticProcedures, [...new Set(causeItems.flatMap((item) => idsFor(relations.causeProcedures, item.id)))]);
  const solutionItems = select(repairSolutions, [...new Set(procedureItems.flatMap((item) => idsFor(relations.procedureSolutions, item.id)))]);
  const articleItems = select(articles, [...new Set(solutionItems.flatMap((item) => idsFor(relations.solutionArticles, item.id)))]);
  return { causes: causeItems, procedures: procedureItems, solutions: solutionItems, articles: articleItems };
}

export { articles, causes, diagnosticProcedures, relations, repairSolutions };
export type * from "./types";
