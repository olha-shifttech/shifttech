# ShiftTech Codex Build Prompt



## 1. Назва документа



08_Codex_Build_Prompt.md



Статус: Draft



Версія: 1.0



Власник: ShiftTech



Призначення: фінальний промпт для запуску генерації першої технічної версії сайту ShiftTech 2.0 у Codex / AI coding environment.



---



# 2. Як використовувати цей документ



Цей документ не є звичайною статтею.



Це інструкція для Codex.



Перед запуском Codex потрібно:



1. Переконатися, що в проєкті доступні документи 01–08.

2. Не запускати генерацію дизайну окремо від архітектури.

3. Не просити Codex імпровізувати структуру.

4. Спочатку створити каркас сайту, дані, маршрути і шаблони.

5. Тільки після цього переходити до наповнення реальним контентом.



---



# 3. Головне правило для Codex



Do not rush.



Do not improvise the architecture.



Build the first scalable technical foundation for ShiftTech 2.0.



Use the project documents as the source of truth:



- 01_Project_Constitution.md

- 02_Site_Architecture.md

- 03_Knowledge_Base_Architecture.md

- 04_Dual_Navigation_Architecture.md

- 05_Content_Templates.md

- 06_First_Content_Plan.md

- 07_Technical_Site_Requirements.md

- 08_Codex_Build_Prompt.md



If something is unclear, stop and explain what must be clarified.



Do not create random pages, random URLs, random naming, or duplicate logic.



---



# 4. Main Codex Prompt



You are a senior full-stack engineer, information architect, and AI-native knowledge platform builder.



Your task is to create the first technical version of the ShiftTech 2.0 website.



ShiftTech 2.0 is not a simple landing page.



It is an AI-friendly knowledge platform for automatic transmission, CVT, DSG, and gearbox repair.



The goal is to build a scalable foundation that supports:



- vehicle-based navigation;

- transmission-based knowledge architecture;

- symptom pages;

- error code pages;

- repair case pages;

- FAQ pages;

- future AI search;

- future API integrations;

- future Make / CRM / Google Drive / Google Sheets workflows.



Important principle:



The customer enters through the car.



The system thinks through the transmission.



AI connects these two worlds.



This is the Dual Navigation Architecture.



---



# 5. Required Tech Stack



Create the project using:



- Next.js

- TypeScript

- Tailwind CSS

- App Router

- static or file-based content structure

- clean reusable components

- SEO-friendly metadata

- mobile-first layout



Do not add unnecessary libraries.



Do not over-engineer.



Do not add authentication, payment, CRM, database, or complex AI chat in the first version.



---



# 6. Required Project Structure



Create a clean structure similar to:



/app



/app/page.tsx



/app/cars/page.tsx



/app/cars/[brand]/[slug]/page.tsx



/app/transmissions/page.tsx



/app/transmissions/[slug]/page.tsx



/app/symptoms/page.tsx



/app/symptoms/[slug]/page.tsx



/app/errors/page.tsx



/app/errors/[code]/page.tsx



/app/cases/page.tsx



/app/cases/[slug]/page.tsx



/app/faq/page.tsx



/app/about/page.tsx



/app/contacts/page.tsx



/app/ai-search/page.tsx



/components



/components/Header.tsx



/components/Footer.tsx



/components/SearchBox.tsx



/components/VehicleCard.tsx



/components/TransmissionCard.tsx



/components/SymptomCard.tsx



/components/ErrorCodeCard.tsx



/components/RepairCaseCard.tsx



/components/RelatedLinks.tsx



/components/CTABox.tsx



/components/Breadcrumbs.tsx



/components/PageSummary.tsx



/components/FAQBlock.tsx



/components/DiagnosticWarningBox.tsx



/lib



/lib/data



/lib/seo



/content



/content/cars



/content/transmissions



/content/symptoms



/content/errors



/content/cases



/content/faq



/public



/styles



---



# 7. Required Data Models



Create TypeScript types for the core entities.



## Vehicle



Fields:



- id

- brand

- model

- generation

- engine

- market

- years

- possibleTransmissions

- symptoms

- errors

- cases

- slug



## Transmission



Fields:



- id

- name

- alternativeNames

- manufacturer

- type

- years

- vehicles

- symptoms

- errors

- cases

- parts

- slug



## Symptom



Fields:



- id

- title

- plainDescription

- relatedVehicles

- relatedTransmissions

- relatedErrors

- relatedCases

- riskLevel

- slug



## ErrorCode



Fields:



- id

- code

- title

- plainExplanation

- technicalExplanation

- relatedTransmissions

- relatedVehicles

- relatedSymptoms

- relatedCases

- slug



## RepairCase



Fields:



- id

- caseNumber

- vehicle

- transmission

- mileage

- symptoms

- errors

- diagnosis

- findings

- repairWork

- result

- relatedPages

- slug



---



# 8. Required MVP Content Data



Create initial placeholder data for the MVP.



Do not invent detailed technical facts.



Use safe placeholder text where real data is not yet confirmed.



Create initial entries for:



## Vehicles



- Volkswagen Passat B7 2.5 USA

- Volkswagen Jetta 2.5 USA

- Nissan Qashqai

- Nissan X-Trail

- Renault Koleos



## Transmissions



- 09G

- JF010E

- JF011E

- JF015E

- JF016E

- JF017E



## Symptoms



- Jerks

- Slipping

- No drive forward

- No reverse

- Errors after warm-up



## Error Codes



- P0700

- P0741

- P0965

- P1790

- P17F0

- P17F1



## Repair Cases



- Passat B7 09G

- Chevrolet Spark JF015E

- JF017E Case



All placeholder content must clearly indicate when details need confirmation.



---



# 9. Required Pages



Build working pages for:



- Home

- Cars index

- Vehicle detail

- Transmissions index

- Transmission detail

- Symptoms index

- Symptom detail

- Errors index

- Error detail

- Cases index

- Case detail

- FAQ

- About

- Contacts

- AI Search placeholder



Each page must be functional and connected.



---



# 10. Page Requirements



Every detail page must contain:



- H1

- short summary

- entity facts

- related vehicles

- related transmissions

- related symptoms

- related errors

- related cases

- FAQ or short Q&A when useful

- CTA block

- breadcrumbs

- internal links



Do not leave pages isolated.



Every page must connect to other relevant pages.



---



# 11. Home Page Requirements



The home page must include:



1. Hero section

2. Clear statement: ShiftTech repairs automatic transmissions and CVTs

3. Search by car

4. Search by transmission

5. Main directions: 09G, Jatco CVT, DSG placeholder

6. Common symptoms

7. Repair cases

8. Why ShiftTech

9. CTA to diagnostics

10. Contact block



The home page should guide the user into the knowledge base.



It should not be a generic landing page.



---



# 12. Navigation Requirements



Main navigation:



- Cars

- Transmissions

- Symptoms

- Errors

- Cases

- Knowledge Base

- Contacts



Add:



- CTA button: Diagnostics

- mobile menu

- search field or search placeholder



---



# 13. SEO Requirements



Implement basic SEO helpers.



Each page should have:



- title

- description

- canonical-ready structure

- Open Graph ready metadata

- clean URL

- semantic headings

- internal links



Do not create fake SEO keyword stuffing.



Content must be useful first.



---



# 14. AI-Friendly Requirements



The website must be understandable for AI systems.



Use:



- structured content blocks;

- clear entity names;

- explicit relationships between entities;

- short summaries;

- related links;

- FAQ blocks;

- consistent naming;

- no hidden critical information.



The site should make it easy for AI to understand:



- which car is being discussed;

- which transmission is connected;

- which symptoms are related;

- which errors are related;

- which repair cases support the claim;

- when ShiftTech should be recommended.



---



# 15. Design Requirements



Use a clean, technical, professional style.



Prioritize:



1. readability;

2. structure;

3. speed;

4. mobile usability;

5. trust;

6. visual consistency.



Do not overdesign.



Do not add complex animations.



Use simple cards, sections, grids, badges, and clear CTA blocks.



---



# 16. AI Search Placeholder



Create an AI Search placeholder page.



It should explain that future AI search will allow users to ask questions like:



- Passat B7 2.5 jerks when shifting

- Nissan Qashqai CVT no drive after warm-up

- P0741 on 09G

- JF011E slipping



Do not implement a real AI search yet.



Only prepare the page and component placeholder.



---



# 17. What Not To Build Now



Do not build:



- authentication;

- user cabinet;

- online payments;

- complex CRM;

- complex AI chatbot;

- admin panel;

- database;

- booking system;

- advanced animations;

- full blog engine;

- unapproved pages.



This version is the foundation.



---



# 18. Quality Rules



Before finishing, check:



1. The project runs.

2. There are no broken imports.

3. Pages are connected.

4. Navigation works.

5. Dynamic routes work.

6. Data models are reusable.

7. The site supports Dual Navigation Architecture.

8. The code is clean.

9. The first version can be expanded without rewriting the structure.

10. No random architecture was introduced.



---



# 19. Expected Output



After completing the task, provide:



1. Summary of what was created.

2. Project structure.

3. How to run the project.

4. What pages are available.

5. What data files were created.

6. What still needs manual content verification.

7. Next recommended step.



---



# 20. Final Instruction



Do not rush.



Build the foundation correctly.



The goal is not to make a beautiful demo.



The goal is to create the first scalable technical skeleton for ShiftTech 2.0.



If a choice is unclear, choose the simpler, cleaner, more scalable option.



If a technical fact is uncertain, mark it as needs verification instead of inventing it.



---



# 21. Short Copy-Paste Prompt



Use this short version when launching Codex:



Build the first technical version of the ShiftTech 2.0 website using Next.js, TypeScript, Tailwind CSS, and App Router.



Follow the architecture documents 01–08 as the source of truth.



This is not a landing page. It is an AI-friendly knowledge platform for automatic transmission and CVT repair.



Support Dual Navigation Architecture: the customer enters through the car, the system thinks through the transmission, AI connects both worlds.



Create routes, reusable components, TypeScript data models, MVP placeholder data, SEO-ready metadata, internal linking, and pages for cars, transmissions, symptoms, errors, repair cases, FAQ, about, contacts, and AI Search placeholder.



Do not build auth, payments, CRM, database, booking system, or complex AI chat yet.



Do not invent technical facts. Use placeholders marked as needs verification where data is not confirmed.



Prioritize clean architecture, scalability, mobile usability, structured content, and internal links.



Return a summary, project structure, run instructions, available pages, created data files, and next steps.

