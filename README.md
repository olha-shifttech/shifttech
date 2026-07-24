# ShiftTech

Перша робоча версія сайту ShiftTech 2.0: Next.js App Router, TypeScript і Tailwind CSS.

## Локальний запуск

```bash
npm install
npm run dev
```

Відкрити: <http://localhost:3000>

## Перевірка production build

```bash
npm run build
npm run start
```

## Архітектурні принципи

- клієнт заходить через автомобіль;
- система знань думає через коробку передач;
- сторінки структуровані як сутності для майбутніх авто, симптомів, помилок, кейсів та AI Search;
- технічні факти, ціни, адреси й гарантійні умови додаються лише після підтвердження в джерелах.

## Repair Case Engine

Reusable repair cases are defined by `RepairCase` and created through `createRepairCase` in
`lib/repair-cases`. Register reviewed records in the exported `repairCases` collection. The
engine validates Knowledge Graph IDs, creates the case node and all relationship edges, while
the shared page template renders vehicle data, diagnosis, repair evidence, outcome, FAQ, and SEO.
The collection intentionally contains no generated case content.
