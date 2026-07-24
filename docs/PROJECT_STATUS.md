# ShiftTech — статус проєкту

> **Дата аудиту:** 24 липня 2026 року  
> **Стан:** перша робоча технічна версія / контентний каркас  
> **Обсяг аудиту:** увесь відстежуваний код, конфігурація та документація репозиторію; каталоги `.git`, `.next` і `node_modules` не розглядаються як вихідний код.

## 1. Загальна оцінка

ShiftTech уже має працездатний фундамент вебсайту на Next.js: глобальний макет, темну дизайн-систему, основну навігацію, каталог автомобілів із клієнтським пошуком, каталог трансмісій, статично генеровані сторінки автомобілів і коробок, базові сервісні сторінки, SEO metadata, `robots.txt` і sitemap. Реалізована головна продуктова ідея **Dual Navigation**: користувач починає з автомобіля, а структура знань центрується навколо трансмісії.

Водночас це ще не повноцінний production-сервіс і не завершена knowledge platform. Дані зберігаються в одному TypeScript-файлі та охоплюють лише початковий набір сутностей. Сторінки симптомів, помилок, кейсів, FAQ, About, Knowledge Base та AI Search є placeholders. Немає справжніх контактів або форми запису, CMS/БД/API, джерел і статусів перевірки на рівні записів, аналітики, тестів, lint/format scripts, accessibility-аудиту та реалізації AI-пошуку.

## 2. Поточна структура папок

Нижче наведено структуру проєкту без generated/vendor-каталогів `.git`, `.next` та `node_modules`.

```text
shifttech/
├── app/                              # Next.js App Router
│   ├── about/page.tsx                # placeholder
│   ├── ai-search/page.tsx            # placeholder AI Search
│   ├── akpp/page.tsx                 # напрям АКПП
│   ├── cars/
│   │   ├── [slug]/page.tsx           # динамічна Vehicle Page
│   │   ├── volkswagen/
│   │   │   └── passat-b7-2-5-usa/
│   │   │       └── page.tsx          # окремий ранній шаблон Vehicle Page
│   │   └── page.tsx                  # каталог і пошук автомобілів
│   ├── contacts/page.tsx             # контактний placeholder
│   ├── cvt/page.tsx                  # напрям CVT
│   ├── diagnostics/page.tsx          # опис процесу діагностики
│   ├── dsg/page.tsx                  # напрям DSG, частково placeholder
│   ├── errors/page.tsx               # placeholder
│   ├── faq/page.tsx                  # placeholder
│   ├── knowledge-base/page.tsx       # placeholder
│   ├── repair-cases/page.tsx         # placeholder
│   ├── services/page.tsx             # карта послуг
│   ├── symptoms/page.tsx             # placeholder
│   ├── transmissions/
│   │   ├── [slug]/page.tsx           # динамічна Transmission Page
│   │   └── page.tsx                  # каталог коробок
│   ├── globals.css                   # глобальні стилі та Tailwind directives
│   ├── layout.tsx                    # root layout, metadata, Header/Footer
│   ├── page.tsx                      # головна сторінка
│   ├── robots.ts                     # robots.txt
│   └── sitemap.ts                    # sitemap.xml
├── components/
│   ├── catalog-search.tsx            # інтерактивний пошук авто
│   └── ui.tsx                        # спільні UI-компоненти
├── docs/
│   ├── 01_Project_Constitution.md
│   ├── 02_Site_Architecture.md
│   ├── 03_Knowledge_Base_Architecture.md
│   ├── 04_Dual_Navigation_Architecture.md
│   ├── 05_Content_Templates.md
│   ├── 06_First_Content_Plan.md
│   ├── 07_Technical_Site_Requirements.md
│   ├── 08_Codex_Build_Prompt.md
│   ├── 09_Data_Model.md
│   ├── 10_Content_Rules.md
│   ├── 11_Docs_Storage_And_Sync_Rules.md
│   ├── 12_Data_Bridge_Architecture.md
│   └── PROJECT_STATUS.md              # цей аудит
├── lib/
│   └── data.ts                        # типи, навігація та in-code дані
├── .gitignore
├── README.md
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 3. Реалізовані сторінки та маршрути

### 3.1. Змістовно реалізовані

| Маршрут | Реалізація | Поточний стан |
|---|---|---|
| `/` | Головна з Hero, поясненням Dual Navigation, послугами та зрізом каталогу | Робоча MVP-сторінка |
| `/services` | Напрями послуг і правила безпечної комунікації | Робочий огляд, без цін і детальних service pages |
| `/akpp` | Каталог ядра Aisin 09G/09M/09K | Робочий огляд |
| `/cvt` | Каталог Jatco JF010E/JF011E/JF015E/JF016E/JF017E | Робочий огляд |
| `/dsg` | Опис напряму DSG | Структурно готова, але контент мінімальний |
| `/diagnostics` | Триетапне пояснення: симптом → коробка → дія | Інформаційна MVP-сторінка |
| `/cars` | Каталог із пошуком за авто, двигуном, ринком і коробкою | Робочий інтерактивний каталог |
| `/cars/[slug]` | Динамічні сторінки всіх 10 авто з metadata, зв'язками з коробками та симптомами | Статична генерація працює; контент переважно шаблонний |
| `/transmissions` | Каталог усіх 9 записів трансмісій | Робочий каталог |
| `/transmissions/[slug]` | Динамічні сторінки 9 коробок з metadata, авто та симптомами | Статична генерація працює; технічна глибина обмежена |

### 3.2. Частково реалізовані або placeholders

| Маршрут | Поточний стан |
|---|---|
| `/contacts` | Без адреси, телефону, графіка, форми або функціонального запису; навмисний безпечний placeholder |
| `/about` | Універсальний placeholder без інформації про компанію |
| `/ai-search` | Тільки стабільний URL і placeholder; пошукової/AI-логіки немає |
| `/errors` | Тільки placeholder; немає error-code entities або detail pages |
| `/faq` | Тільки placeholder; немає FAQ-даних |
| `/knowledge-base` | Тільки placeholder; немає навігаційного хабу бази знань |
| `/repair-cases` | Тільки placeholder; немає кейсів або detail pages |
| `/symptoms` | Тільки placeholder; масив симптомів існує, але сторінки сутностей відсутні |
| `/cars/volkswagen/passat-b7-2-5-usa` | Ранній окремий шаблон, що дублює тему динамічного `/cars/volkswagen-passat-b7-2-5-usa` та не використовує спільні дані |

У репозиторії є **19 файлів `page.tsx`**. Динамічні генератори додають 10 Vehicle Pages і 9 Transmission Pages до набору фактично доступних URL.

## 4. Реалізовані компоненти

У `components/ui.tsx` зібрано шість повторно використовуваних компонентів:

- **`Header`** — sticky header, логотип, desktop-навігація та CTA на діагностику;
- **`Footer`** — три інформаційні колонки;
- **`Section`** — стандартна секція з eyebrow, заголовком і content slot;
- **`Card`** — картка або link-card зі спільним оформленням;
- **`Hero`** — hero-блок із заголовком, підзаголовком і двома CTA;
- **`Pill`** — компактний badge для атрибутів сутності.

Окремо реалізовано **`CatalogSearch`** у `components/catalog-search.tsx`. Це client component з `useState`/`useMemo`, який:

- фільтрує 10 автомобілів у браузері;
- шукає за повною назвою авто, маркою, моделлю, двигуном і ринком;
- включає у пошук назву, альтернативну назву та тип пов'язаних коробок;
- показує пов'язані трансмісії та переходи на Vehicle Pages;
- для порожнього запиту закономірно показує весь каталог.

Компонентів форми, mobile menu, breadcrumbs, error/empty states, pagination, filters, modal, notification, analytics або structured-data helpers наразі немає.

## 5. Дані та контент, які вже реалізовано

`lib/data.ts` є поточним source of truth для опублікованого структурованого контенту:

- **9 трансмісій:** 09G, 09M, 09K, JF010E, JF011E, JF015E, JF016E, JF017E і загальна сутність DSG;
- **10 автомобілів:** чотири Volkswagen, чотири Nissan, Renault Koleos і Mitsubishi Outlander;
- **10 назв симптомів;**
- **4 service cards;**
- **7 пунктів основної навігації;**
- зв'язки `vehicle.transmissionIds` і `transmission.relatedVehicleSlugs`;
- helper-функції `vehicleName()` і `getTransmission()`;
- базові типи `TransmissionType` та `EntityStatus`.

Це seed/MVP dataset, а не реалізація повної моделі з `09_Data_Model.md`. Немає окремих сутностей Engine, ErrorCode, RepairCase, Part, RepairOperation, FAQ, DiagnosticGuide, Source, Media, Service та ContactCTA. Статус усіх авто примусово встановлюється як `ready-for-content`, тоді як трансмісії не мають формального status/verification/source metadata.

## 6. Наявна документація

| Документ | Призначення |
|---|---|
| `README.md` | Короткий опис першої версії, локальний запуск, production build та базові архітектурні принципи |
| `01_Project_Constitution.md` | Цілі, роль AI, пріоритети, правила рішень, збереження та якості |
| `02_Site_Architecture.md` | Архітектура сайту, розділи, сутності, типи сторінок, зв'язки та розвиток |
| `03_Knowledge_Base_Architecture.md` | Архітектура knowledge base, пріоритети, типи записів, source of truth і AI-friendly структура |
| `04_Dual_Navigation_Architecture.md` | Поділ user navigation через авто та system navigation через коробку |
| `05_Content_Templates.md` | Шаблони Vehicle, Transmission, Symptom, Error Code, Repair Case, FAQ і Diagnostic Guide pages |
| `06_First_Content_Plan.md` | Priority A/B/C, перший пакет сторінок, user journeys та content statuses |
| `07_Technical_Site_Requirements.md` | Stack, URL, сутності, SEO, AI, UI, пошук, responsive/performance вимоги та readiness criteria |
| `08_Codex_Build_Prompt.md` | Інструкція/специфікація для початкової генерації застосунку |
| `09_Data_Model.md` | Розширена канонічна модель сутностей, зв'язків, статусів і source-of-truth rules |
| `10_Content_Rules.md` | Tone of voice, технічна обережність, evidence/source, SEO, CTA та publishing checklist |
| `11_Docs_Storage_And_Sync_Rules.md` | Ролі Google Drive/GitHub/ChatGPT/Codex, структура сховищ, синхронізація і версіонування |
| `12_Data_Bridge_Architecture.md` | Потік raw material → reviewed knowledge → structured content → website → AI index |
| `PROJECT_STATUS.md` | Фактичний стан реалізації, розриви та рекомендований порядок наступних робіт |

Документальна архітектура значно випереджає реалізацію. Це корисна база вимог, але немає автоматичного зв'язку між цими документами та `lib/data.ts`, а також немає журналу рішень, changelog, contribution guide, deployment/runbook або опису тестової стратегії.

## 7. Технології

### Runtime та framework

- **Node.js:** `>=20.9.0`;
- **Next.js 15.5.9** з App Router;
- **React 19.1.5** і React DOM 19.1.5;
- **TypeScript 5.8.3**, `strict: true`, `noEmit: true`;
- server components за замовчуванням та один явний client component для каталогу.

### UI та styling

- **Tailwind CSS 3.4.17**;
- **PostCSS 8.5.6**;
- **Autoprefixer 10.4.21**;
- власні theme tokens: graphite, panel, line, shift green і glow shadow;
- мінімальний global CSS, responsive utility-класи та dark color scheme.

### Rendering, routing та SEO

- filesystem routing через App Router;
- static params для Vehicle/Transmission detail pages;
- route-level Metadata на частині сторінок;
- global Open Graph metadata;
- metadata routes для `robots.txt` і `sitemap.xml`;
- alias `@/*` через `tsconfig.json`;
- орієнтація на Vercel (`https://shifttech.vercel.app` зашито як production base URL).

### Чого у stack немає

Немає бази даних, CMS, ORM, authentication, API, server actions, form/email provider, AI SDK/vector store, search backend, state-management library, component library, icon library, image pipeline/assets, тестового framework, ESLint/Prettier configuration, CI workflow, analytics/monitoring або error tracking.

## 8. Завершені можливості

На рівні першого технічного каркаса завершено:

1. **Запуск Next.js-застосунку** з App Router, TypeScript і Tailwind.
2. **Єдиний root layout** зі спільними Header/Footer та українською мовою документа.
3. **Візуальний фундамент**: послідовна темна палітра, зелений акцент, responsive grids, cards, pills і hero blocks.
4. **Dual Navigation у коді**: переходи від авто до коробки та з коробки до пов'язаних авто.
5. **Vehicle catalog search** у браузері без зовнішнього сервісу.
6. **Статичні detail routes** для всіх поточних автомобілів і трансмісій з `notFound()` для невідомих slug.
7. **Базова SEO-інфраструктура**: global/route metadata, Open Graph, robots та sitemap.
8. **Безпечна контентна політика в UI**: сайт не вигадує ціни, контакти, гарантії або точні діагнози та регулярно направляє до діагностики.
9. **Архітектурна документація** для майбутніх сутностей, контенту, джерел, синхронізації й AI layer.
10. **Production build configuration** без нестандартних Next.js plugins або runtime services.

## 9. Незавершені можливості

### Критичні для реального запуску

- підтверджені телефон, адреса, графік та інші business details;
- робочий CTA/форма запису, валідація, згода на обробку даних і delivery mechanism;
- реальний контент About і довіра до сервісу;
- перевірені технічні матеріали зі source attribution;
- юридичні сторінки, якщо збираються персональні дані;
- аналітика, error monitoring та operational ownership.

### Knowledge platform

- окремі сутності та detail pages для симптомів;
- error-code каталог і сторінки помилок;
- repair cases зі структурованими даними;
- FAQ та diagnostic guides;
- parts, operations, sources і media;
- повноцінний knowledge-base hub;
- статуси draft/review/verified/published та `needsVerification`;
- контроль двосторонньої цілісності зв'язків;
- імпорт/синхронізація reviewed content із запроєктованого data bridge.

### Пошук та AI

- AI Search наразі не реалізовано;
- немає навіть загального пошуку по всіх типах сутностей;
- немає API, index, embeddings/vector store, retrieval, citations, guardrails або feedback loop;
- vehicle search не має filters, typo tolerance, query parameters чи server-side indexing.

### UX, SEO та platform completeness

- mobile navigation прихована і не має mobile-menu replacement;
- немає breadcrumbs, активного стану меню, empty-state для пошуку і доступної навігації до placeholder-розділів;
- непослідовне route metadata: низка сторінок покладається лише на global defaults;
- немає JSON-LD/Schema.org, canonical strategy, manifest/icons або social images;
- sitemap не містить `/about`, `/dsg`, `/errors`, `/faq`, `/repair-cases`, `/symptoms` і окремого вкладеного Passat route;
- `lastModified: new Date()` змінює дату кожної sitemap entry під час кожної генерації, а не відображає фактичне оновлення контенту;
- немає custom loading, error або not-found UI;
- не проведено формального accessibility, responsive, browser або performance аудиту.

## 10. Технічний борг і ризики

### Високий пріоритет

1. **Розрив між канонічною моделлю та кодом.** Розгорнута модель у документації не відтворена в типах і даних; додавання контенту до одного `lib/data.ts` швидко стане некерованим.
2. **Немає provenance/verification layer.** Контентні правила вимагають джерел і перевірки, але записи не зберігають `sources`, `needsVerification`, reviewer чи dates.
3. **Немає автоматичних quality gates.** У `package.json` немає `test`, `lint`, `typecheck` або `format` scripts і немає CI.
4. **Немає functional conversion path.** CTA ведуть на сторінку, яка не дозволяє зв'язатися або записатися.
5. **Дублювання Passat route.** Є data-driven `/cars/volkswagen-passat-b7-2-5-usa` і окремий `/cars/volkswagen/passat-b7-2-5-usa`, які можуть розходитися за контентом та створювати SEO-плутанину.

### Середній пріоритет

6. **Двосторонні зв'язки дублюються вручну.** `transmissionIds` і `relatedVehicleSlugs` можуть втратити синхронність; краще мати один канонічний relation source або validation.
7. **Типізація даних часткова.** Масиви покладаються на inference та `as TransmissionType`; `EntityStatus` фактично застосовано лише до авто.
8. **Компоненти надто централізовані.** Увесь UI primitive layer міститься в одному `ui.tsx`; зі зростанням системи це ускладнить ownership, testing і tree-level зміни.
9. **Repeated placeholder implementations.** Сім сторінок майже дослівно дублюють JSX замість shared placeholder component/template.
10. **Hard-coded deployment URL.** `metadataBase`, robots і sitemap напряму залежать від `shifttech.vercel.app`; немає environment-based canonical URL.
11. **SEO coverage неповне.** Metadata та sitemap не узгоджені з усім route tree; немає structured data і canonical policy.
12. **Catalog search масштабується лише до малого dataset.** Повний client-side filter прийнятний для 10 авто, але не для великої knowledge base.

### Нижчий пріоритет, але варто планувати

13. **Немає UI regression coverage.** Зміни Tailwind/компонентів можуть непомітно ламати всі сторінки.
14. **Немає mobile menu.** На ширині нижче `xl` основна навігація повністю зникає, залишається лише CTA.
15. **Немає empty query/result messaging.** Пошук показує grid, але не пояснює нуль результатів і не пропонує відновлення.
16. **Формат сторінок нерівномірний.** Частина файлів стиснута в один рядок; це не ламає build, але погіршує review та підтримку.
17. **Немає image/media strategy.** Сайт не використовує реальні фото, `next/image`, alt-policy або media entity, хоча модель їх передбачає.
18. **Документація велика, але без enforceable checks.** Правила можуть застарівати незалежно від реалізації.

## 11. Рекомендовані наступні пріоритети

### P0 — зробити MVP операційно корисним

1. **Підтвердити business data** і додати контакти, графік, географію обслуговування та відповідального власника даних.
2. **Реалізувати conversion flow:** доступна форма запису/дзвінок/месенджер, validation, privacy consent, spam protection і надійна доставка заявки.
3. **Запровадити quality baseline:** scripts для typecheck, lint, unit/component tests і production build; CI на pull requests.
4. **Усунути дубльований Passat URL** через одну канонічну data-driven route strategy і redirect/canonical за потреби.
5. **Зробити mobile navigation** та перевірити keyboard/focus/accessibility basics.

### P1 — побудувати справжнє knowledge core

6. Розкласти дані за typed entity modules або підключити відповідний CMS/structured store, не втрачаючи Git review workflow.
7. Реалізувати повну мінімальну модель для `Vehicle`, `Transmission`, `Symptom`, `ErrorCode`, `RepairCase` і `Source`.
8. Додати statuses, `needsVerification`, source references, reviewed dates та automated relation/slug validation.
9. Наповнити й опублікувати Priority A сторінки симптомів, помилок і реальних кейсів лише з перевіреними фактами.
10. Перетворити `/knowledge-base` на hub із маршрутами між усіма сутностями, breadcrumbs і related-content blocks.

### P2 — покращити discoverability та довіру

11. Уніфікувати metadata для всіх route types; завершити sitemap, canonical URLs і factual `lastModified`.
12. Додати доречний Schema.org/JSON-LD (Organization/LocalBusiness лише після підтвердження business data; Service, FAQ, Breadcrumb де контент це дозволяє).
13. Додати реальні media assets із правами використання, alt text і оптимізацією через Next Image.
14. Створити About, FAQ, trust/evidence blocks і зрозумілу policy щодо діагностичних обмежень.
15. Додати privacy-friendly analytics, search analytics, Web Vitals та error monitoring.

### P3 — пошук та AI після стабілізації даних

16. Спочатку реалізувати єдиний детермінований пошук по авто, коробках, симптомах і кодах помилок з filters та zero-result UX.
17. Визначити оцінювані AI use cases, safety boundaries, citation requirements і golden test set.
18. Лише після provenance-ready content додати retrieval/index/API та AI answers із посиланнями на перевірені записи.
19. Збирати feedback і вимірювати search success; не використовувати AI для непідтвердженого діагнозу або обіцянки ремонту.

## 12. Критерії готовності наступної версії

Наступну версію доцільно вважати готовою, коли:

- усі опубліковані технічні твердження мають source і review status;
- користувач може пройти маршрут авто/симптом → релевантна коробка → корисна інформація → реальний контакт;
- mobile navigation, forms, keyboard flow і основні screen sizes перевірені;
- кожна сутність має єдиний canonical URL, валідні внутрішні зв'язки та metadata;
- typecheck, lint, tests і production build автоматично проходять у CI;
- sitemap відповідає індексованим маршрутам;
- monitoring дозволяє виявити runtime помилки та проблеми conversion flow;
- AI Search, якщо ввімкнений, відповідає лише на основі перевіреного індексу, показує джерела та явно відмежовує інформацію від діагнозу.

## 13. Підсумок

Поточний ShiftTech — це акуратно спроєктований і працездатний **frontend/content-architecture MVP**. Його найсильніші сторони — чітка продуктова модель Dual Navigation, обережна технічна комунікація, data-driven Vehicle/Transmission pages, базова SEO-інфраструктура та детальна стратегічна документація. Головний розрив — між багатою запроєктованою knowledge architecture і дуже малим in-code dataset без джерел, workflow перевірки та повних сутностей. Найкращий наступний крок — не починати з AI, а спочатку завершити контактний user journey, quality gates, canonical data model і перевірений Priority A content layer.

## 14. Milestone update — 24 липня 2026

Розпочато P1 milestone **«Symptom knowledge core»** без зміни наявного дизайну або головної сторінки:

- масив назв симптомів перетворено на типізовані сутності зі slug, коротким безпечним поясненням, списком спостережень, зв'язками з коробками та статусом перевірки;
- `/symptoms` перетворено з placeholder на каталог із 10 записів;
- додано 10 статично генерованих `/symptoms/[slug]` сторінок із metadata, маршрутом підготовки до діагностики та переходами до коробок;
- symptom cards на Vehicle і Transmission pages тепер ведуть до відповідних сутностей;
- `/knowledge-base` перетворено на навігаційний hub для авто, коробок і симптомів, а наступні типи контенту позначено як такі, що готуються;
- нові маршрути включено до sitemap.

Наступний milestone за roadmap: додати quality gates та перевірку зв'язків, після чого реалізувати типізовані ErrorCode/Source entities. Публікація технічних причин, контактної форми або бізнес-даних залишається заблокованою до отримання підтверджених джерел і реквізитів від власника продукту.
