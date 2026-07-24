import type { PublicationStatus } from "@/lib/knowledge/types";

export type RepairCaseId = string;

export interface RepairCasePhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface RepairCaseComparison {
  label: string;
  before: string;
  after: string;
  beforePhotoId?: string;
  afterPhotoId?: string;
}

export interface InstalledPart {
  name: string;
  partNumber?: string;
  quantity: number;
  note?: string;
}

export interface RepairCaseFaq {
  question: string;
  answer: string;
}

export interface RepairCaseSeo {
  title: string;
  description: string;
  canonicalPath: `/repair-cases/${string}`;
  image?: string;
  noIndex?: boolean;
}

/**
 * The canonical, reusable record for a ShiftTech repair case.
 * References use Knowledge Graph entity IDs (for example `transmissions:09g`).
 */
export interface RepairCase {
  id: RepairCaseId;
  caseNumber: string;
  slug: string;
  publishedAt?: string;
  vehicle: { entityId: string; label: string; year?: string; vinPublic?: string };
  engine: { entityId?: string; label: string };
  transmission: { entityId: string; label: string };
  mileage: { value: number; unit: "km" | "mi" };
  symptoms: string[];
  customerComplaint: string;
  diagnosticProcess: string[];
  foundFaults: string[];
  repairProcedure: { entityIds: string[]; steps: string[] };
  installedParts: InstalledPart[];
  photos: RepairCasePhoto[];
  beforeAfter: RepairCaseComparison[];
  finalResult: string;
  relatedArticles: string[];
  relatedSymptoms: string[];
  relatedRepairProcedures: string[];
  faq: RepairCaseFaq[];
  relatedFaq: string[];
  seo: RepairCaseSeo;
  status: PublicationStatus;
}

export type RepairCaseInput = Readonly<RepairCase>;
