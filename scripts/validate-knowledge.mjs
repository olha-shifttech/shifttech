import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const data = readFileSync(new URL("../lib/knowledge/data.ts", import.meta.url), "utf8");
const legacy = readFileSync(new URL("../lib/data.ts", import.meta.url), "utf8");
const catalog = readFileSync(new URL("../lib/knowledge/catalog.ts", import.meta.url), "utf8");
const caseTypes = readFileSync(new URL("../lib/repair-cases/types.ts", import.meta.url), "utf8");
const caseEngine = readFileSync(new URL("../lib/repair-cases/index.ts", import.meta.url), "utf8");

assert.match(data, /vehicleTransmissions:/, "vehicle/transmission relations are required");
assert.match(data, /transmissionSymptoms:/, "transmission/symptom relations are required");
assert.match(data, /symptomCauses:/, "symptom/cause relations are required");
assert.match(data, /causeProcedures:/, "cause/procedure relations are required");
assert.match(data, /procedureSolutions:/, "procedure/solution relations are required");
assert.match(data, /solutionArticles:/, "solution/article relations are required");
assert.doesNotMatch(legacy, /relatedVehicleSlugs: \[/, "reverse vehicle links must be derived, not duplicated");
assert.doesNotMatch(legacy, /transmissionIds: \[/, "vehicle and symptom links must be derived, not duplicated");
for (const kind of ["vehicle-brands", "vehicle-models", "transmission-families", "transmissions", "symptoms", "causes", "diagnostic-procedures", "repair-procedures", "maintenance", "faq", "repair-cases", "articles"]) assert.match(catalog, new RegExp(`\\"${kind}\\"`), `${kind} catalog is required`);
assert.match(catalog, /knowledgeEdges/, "typed graph edges are required");
for (const field of ["vehicle", "engine", "transmission", "mileage", "symptoms", "customerComplaint", "diagnosticProcess", "foundFaults", "repairProcedure", "installedParts", "photos", "beforeAfter", "finalResult", "relatedArticles", "relatedSymptoms", "relatedRepairProcedures", "faq", "seo"]) assert.match(caseTypes, new RegExp(`\\b${field}\\b`), `repair case ${field} field is required`);
assert.match(caseEngine, /repairCaseGraph/, "repair cases must generate Knowledge Graph nodes and edges");
assert.match(catalog, /repairCases\.map\(repairCaseGraph\)/, "repair cases must be registered with the Knowledge Graph automatically");
console.log("Knowledge graph structure is normalized and complete.");
