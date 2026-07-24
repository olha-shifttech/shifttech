export type EntityId = string;
export type PublicationStatus = "draft" | "reviewed" | "published";

export interface Vehicle {
  id: EntityId;
  slug: string;
  brand: string;
  model: string;
  generation?: string;
  engine?: string;
  market?: string;
  productionYears?: string;
  status: PublicationStatus;
}

export interface Transmission {
  id: EntityId;
  slug: string;
  name: string;
  alternativeName: string;
  manufacturer: string;
  type: "АКПП" | "CVT" | "DSG";
  family?: string;
  summary: string;
  status: PublicationStatus;
}

export interface Symptom {
  id: EntityId;
  slug: string;
  name: string;
  summary: string;
  observations: string[];
  status: PublicationStatus;
}

export interface Cause {
  id: EntityId;
  slug: string;
  name: string;
  summary: string;
  status: PublicationStatus;
}

export interface DiagnosticProcedure {
  id: EntityId;
  slug: string;
  name: string;
  steps: string[];
  safetyNote?: string;
  status: PublicationStatus;
}

export interface RepairSolution {
  id: EntityId;
  slug: string;
  name: string;
  summary: string;
  disclaimer: string;
  status: PublicationStatus;
}

export interface Article {
  id: EntityId;
  slug: string;
  title: string;
  excerpt: string;
  status: PublicationStatus;
}

/** Relations are stored once. Entity pages resolve both directions from this graph. */
export interface KnowledgeRelations {
  vehicleTransmissions: ReadonlyArray<readonly [vehicleId: EntityId, transmissionId: EntityId]>;
  transmissionSymptoms: ReadonlyArray<readonly [transmissionId: EntityId, symptomId: EntityId]>;
  symptomCauses: ReadonlyArray<readonly [symptomId: EntityId, causeId: EntityId]>;
  causeProcedures: ReadonlyArray<readonly [causeId: EntityId, procedureId: EntityId]>;
  procedureSolutions: ReadonlyArray<readonly [procedureId: EntityId, solutionId: EntityId]>;
  solutionArticles: ReadonlyArray<readonly [solutionId: EntityId, articleId: EntityId]>;
}
