# ShiftTech Knowledge Engine

## Architecture

The engine models the path **Vehicle → Transmission → Symptom → Cause → Diagnostic procedure → Repair solution → Related article**.

Entities are normalized records with stable IDs. Relationships live once in `lib/knowledge/data.ts` as typed junction lists; pages never copy cause, procedure, solution, or article content. Reverse relationships—such as all vehicles supported by a transmission—are resolved from the same junction list.

## Adding content

1. Add the entity once to its collection.
2. Connect IDs in the appropriate relation list.
3. Run `npm run check:data` to catch missing IDs, duplicate IDs, duplicate relations, and inconsistent vehicle/transmission projections.
4. Run `npm run build`. Dynamic knowledge routes use `generateStaticParams` and `dynamicParams = false`, so published records become static pages without hand-written routes.

This structure supports moving collections to JSON, a CMS, or a database later without changing page components: only the repository/resolver layer in `lib/knowledge/index.ts` needs to change.
