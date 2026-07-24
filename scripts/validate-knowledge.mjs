import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const data = readFileSync(new URL("../lib/knowledge/data.ts", import.meta.url), "utf8");
const legacy = readFileSync(new URL("../lib/data.ts", import.meta.url), "utf8");
const catalog = readFileSync(new URL("../lib/knowledge/catalog.ts", import.meta.url), "utf8");

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
console.log("Knowledge graph structure is normalized and complete.");
