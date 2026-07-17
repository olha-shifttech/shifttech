# ShiftTech Data Model



## 1. Назва документа



09_Data_Model.md



Статус: Draft



Версія: 1.0



Власник: ShiftTech



Призначення: зафіксувати модель даних ShiftTech Platform — як між собою пов'язані автомобілі, коробки передач, двигуни, симптоми, помилки, кейси, деталі, FAQ, джерела знань і майбутній AI-пошук.



---



## 2. Контекст



ShiftTech будується не як звичайний сайт, а як довгострокова цифрова платформа.



У документах 01–08 вже зафіксовано:



- правила проєкту;

- архітектуру сайту;

- архітектуру бази знань;

- подвійную навігацію;

- шаблони сторінок;

- перший контент-план;

- технічне ТЗ;

- промпт для Codex.



Цей документ визначає основу для даних.



---



## 3. Головний принцип моделі даних



Центром моделі даних є коробка передач.



Центром користувацького досвіду є автомобіль.



AI з'єднує ці два шари.



Це означає:



- клієнт шукає по автомобілю, двигуну або симптому;

- система пов'язує запит із коробкою передач;

- AI використовує зв'язки між сутностями, щоб давати правильні відповіді;

- дані не дублюються, а зв'язуються між собою.



---



## 4. Основні сутності



Базові сутності ShiftTech Platform:



1. Vehicle — автомобіль

2. Engine — двигун

3. Transmission — коробка передач

4. Symptom — симптом

5. ErrorCode — код помилки

6. RepairCase — кейс ремонту

7. Part — деталь

8. RepairOperation — ремонтна операція

9. FAQ — питання-відповідь

10. DiagnosticGuide — діагностичний алгоритм

11. Source — джерело знань

12. Media — фото / відео / документи

13. Service — послуга

14. ContactCTA — дія для клієнта



---



## 5. Entity: Vehicle



Vehicle — це точка входу для клієнта.



### Поля



- id

- brand

- model

- generation

- yearFrom

- yearTo

- engineIds

- market

- bodyType

- possibleTransmissionIds

- commonSymptomIds

- commonErrorCodeIds

- repairCaseIds

- faqIds

- slug

- status

- needsVerification



### Приклад



Volkswagen Passat B7 2.5 USA



### Зв'язки



Vehicle пов'язаний з:



- Engine

- Transmission

- Symptom

- ErrorCode

- RepairCase

- FAQ

- DiagnosticGuide



---



## 6. Entity: Engine



Engine потрібен, тому що одна модель авто може мати різні коробки залежно від двигуна і ринку.



### Поля



- id

- code

- name

- displacement

- fuelType

- vehicleIds

- possibleTransmissionIds

- market

- notes

- slug

- status

- needsVerification



### Зв'язки



Engine пов'язаний з:



- Vehicle

- Transmission

- Symptom

- RepairCase



---



## 7. Entity: Transmission



Transmission — центральна сутність моделі даних.



### Поля



- id

- name

- alternativeNames

- manufacturer

- family

- type

- gearCount

- yearFrom

- yearTo

- vehicleIds

- engineIds

- commonSymptomIds

- commonErrorCodeIds

- commonPartIds

- repairOperationIds

- repairCaseIds

- faqIds

- diagnosticGuideIds

- slug

- status

- needsVerification



### Приклади



- 09G

- 09M

- 09K

- JF010E

- JF011E

- JF015E

- JF016E

- JF017E



### Зв'язки



Transmission пов'язана з:



- Vehicle

- Engine

- Symptom

- ErrorCode

- Part

- RepairOperation

- RepairCase

- FAQ

- DiagnosticGuide



---



## 8. Entity: Symptom



Symptom описує те, що клієнт відчуває під час руху.



### Поля



- id

- title

- plainDescription

- technicalDescription

- whenOccurs

- riskLevel

- canDrive

- relatedVehicleIds

- relatedTransmissionIds

- relatedErrorCodeIds

- relatedRepairCaseIds

- diagnosticGuideIds

- slug

- status

- needsVerification



### Приклади



- ривки при перемиканні

- пробуксовка

- не їде вперед

- не їде назад

- помилки після прогріву

- аварійний режим



### Зв'язки



Symptom пов'язаний з:



- Vehicle

- Transmission

- ErrorCode

- RepairCase

- DiagnosticGuide

- FAQ



---



## 9. Entity: ErrorCode



ErrorCode описує діагностичний код помилки.



### Поля



- id

- code

- title

- plainExplanation

- technicalExplanation

- severity

- relatedVehicleIds

- relatedTransmissionIds

- relatedSymptomIds

- relatedRepairCaseIds

- diagnosticGuideIds

- slug

- status

- needsVerification



### Приклади



- P0700

- P0741

- P0776

- P0868

- P0841

- P0965

- P17F0

- P17F1

- P1790



### Зв'язки



ErrorCode пов'язаний з:



- Vehicle

- Transmission

- Symptom

- RepairCase

- DiagnosticGuide

- FAQ



---



## 10. Entity: RepairCase



RepairCase — це доказ експертності ShiftTech і джерело практичних знань.



### Поля



- id

- caseNumber

- date

- vehicleId

- engineId

- transmissionId

- mileage

- vinPublicAllowed

- symptoms

- errorCodes

- initialComplaint

- diagnosis

- findings

- repairWork

- replacedPartIds

- result

- customerSummary

- knowledgeSummary

- mediaIds

- relatedPageIds

- slug

- status

- needsVerification



### Приклади



- ST-2026-0001

- ST-2026-0002

- Passat B7 09G

- Chevrolet Spark JF015E

- JF017E Case



### Зв'язки



RepairCase пов'язаний з:



- Vehicle

- Engine

- Transmission

- Symptom

- ErrorCode

- Part

- RepairOperation

- Media

- FAQ



---



## 11. Entity: Part



Part описує деталь або вузол коробки.



### Поля



- id

- name

- alternativeNames

- category

- transmissionIds

- symptomIds

- errorCodeIds

- repairCaseIds

- notes

- slug

- status

- needsVerification



### Приклади



- гідроблок

- соленоїд

- насос

- ГДТ

- ремінь CVT

- конуси CVT

- TCM

- проводка



### Зв'язки



Part пов'язана з:



- Transmission

- Symptom

- ErrorCode

- RepairCase

- RepairOperation



---



## 12. Entity: RepairOperation



RepairOperation описує тип роботи, яку виконує ShiftTech.



### Поля



- id

- title

- description

- transmissionIds

- partIds

- symptomIds

- errorCodeIds

- repairCaseIds

- estimatedComplexity

- requiresDiagnostics

- slug

- status

- needsVerification



### Приклади



- діагностика АКПП

- дефектовка коробки

- ремонт гідроблока

- ремонт варіатора

- заміна масла

- адаптація

- ремонт ГДТ



---



## 13. Entity: FAQ



FAQ потрібен для швидких відповідей клієнтам і AI-системам.



### Поля



- id

- question

- shortAnswer

- detailedAnswer

- relatedVehicleIds

- relatedTransmissionIds

- relatedSymptomIds

- relatedErrorCodeIds

- relatedRepairCaseIds

- sourceIds

- slug

- status

- needsVerification



### Зв'язки



FAQ пов'язаний з:



- Vehicle

- Transmission

- Symptom

- ErrorCode

- RepairCase

- DiagnosticGuide



---



## 14. Entity: DiagnosticGuide



DiagnosticGuide — це алгоритм діагностики, а не стаття.



### Поля



- id

- title

- triggerSymptomIds

- vehicleIds

- transmissionIds

- errorCodeIds

- steps

- whatToCheckFirst

- whatNotToReplaceWithoutDiagnostics

- whenToRemoveTransmission

- whenToDoDefectInspection

- relatedRepairCaseIds

- slug

- status

- needsVerification



### Приклад логіки



Симптом → Авто → Ймовірна коробка → Помилки → Перша перевірка → Друга перевірка → Висновок.



---



## 15. Entity: Source



Source фіксує джерело знань.



### Поля



- id

- sourceType

- title

- url

- fileId

- relatedEntityIds

- reliabilityLevel

- notes

- dateAdded

- addedBy

- status



### Типи джерел



- власний кейс ShiftTech

- технічний мануал

- фото / відео ремонту

- досвід майстра

- офіційна документація

- перевірене зовнішнє джерело

- нотатка з діагностики



---



## 16. Entity: Media



Media описує фото, відео, PDF, схеми та документи.



### Поля



- id

- mediaType

- title

- description

- fileUrl

- googleDriveFileId

- relatedVehicleIds

- relatedTransmissionIds

- relatedRepairCaseIds

- relatedPartIds

- publicAllowed

- status



### Правило



Не всі внутрішні фото та документи можна публікувати.



Для кожного Media потрібно мати поле publicAllowed.



---



## 17. Entity: Service



Service описує послугу ShiftTech.



### Поля



- id

- title

- description

- relatedTransmissionIds

- relatedVehicleIds

- relatedSymptomIds

- relatedRepairCaseIds

- pricePolicy

- requiresDiagnostics

- slug

- status



### Приклади



- ремонт АКПП

- ремонт CVT

- ремонт 09G

- ремонт Jatco CVT

- діагностика АКПП

- заміна масла



---



## 18. Entity: ContactCTA



ContactCTA описує наступну дію для клієнта.



### Поля



- id

- title

- description

- actionType

- phone

- messenger

- formId

- relatedPageTypes

- priority

- status



### Приклади actionType



- call

- message

- diagnostics_request

- send_vin

- send_error_codes

- send_video



---



## 19. Статуси сутностей



Кожна сутність повинна мати статус.



Дозволені статуси:



- draft

- needs_info

- needs_verification

- verified

- published

- archived

- deprecated



---



## 20. Правило needsVerification



Якщо технічний факт не підтверджений, він не повинен виглядати як істина.



Для цього використовується поле:



needsVerification: true



Приклади непідтверджених даних:



- точна коробка на конкретному авто без VIN;

- причина помилки без діагностики;

- типова несправність без кейсу або джерела;

- деталь, яку нібито потрібно міняти без перевірки.



---



## 21. Правило зв'язків



Кожна сутність повинна мати зв'язки.



Заборонено створювати ізольовані сторінки.



Мінімальні зв'язки:



Vehicle → Transmission



Transmission → Vehicle



Symptom → Transmission або Vehicle



ErrorCode → Transmission або Vehicle



RepairCase → Vehicle + Transmission + Symptom



FAQ → мінімум одна основна сутність



---



## 22. Knowledge Graph



Модель даних повинна формувати граф знань.



Базова структура:



Vehicle



↓



Engine



↓



Transmission



↓



Symptom



↓



ErrorCode



↓



RepairCase



↓



Part



↓



RepairOperation



↓



FAQ



Це не означає, що всі дані мають іти тільки в один бік.



Кожна сутність повинна мати зворотні зв'язки.



---



## 23. URL і slug правила



Кожна публічна сутність повинна мати slug.



Приклади:



- /cars/volkswagen/passat-b7-2-5-usa

- /transmissions/09g

- /transmissions/jf010e

- /transmissions/jf011e

- /symptoms/jerks

- /errors/p0741

- /cases/st-2026-0001



Правила:



- тільки lowercase;

- латиниця;

- без пробілів;

- дефіси замість пробілів;

- без хаотичних скорочень;

- slug не змінюється без вагомої причини.



---



## 24. Source of Truth



Один факт — одне основне місце.



Приклади:



- інформація про коробку зберігається в Transmission;

- інформація про авто зберігається в Vehicle;

- опис симптому зберігається в Symptom;

- код помилки зберігається в ErrorCode;

- ремонтна історія зберігається в RepairCase.



Інші сторінки не дублюють факт, а посилаються на нього.



---



## 25. Data Storage на першому етапі



Для першої версії сайту дані можна зберігати як:



- TypeScript objects;

- JSON files;

- Markdown / MDX frontmatter;

- structured content files.



База даних поки не потрібна.



На першому етапі важливіше правильна структура даних, ніж складна інфраструктура.



---



## 26. Майбутнє розширення



Модель даних повинна підтримувати:



- AI Search;

- RAG;

- API;

- Make automation;

- CRM;

- Google Drive case folders;

- Google Sheets tracking;

- контент українською та іншими мовами;

- публічні та внутрішні дані;

- кабінет майстра;

- кабінет клієнта.



---



## 27. Заборонено



Заборонено:



- дублювати один факт у кількох сутностях;

- створювати сутність без id;

- створювати сторінку без slug;

- створювати сторінку без зв'язків;

- публікувати технічні припущення як факт;

- змішувати внутрішні дані та публічний контент без позначення publicAllowed;

- змінювати slug без причини;

- будувати AI Search без стабільної моделі даних.



---



## 28. Мінімальна модель для MVP



Для першої версії достатньо реалізувати:



- Vehicle

- Transmission

- Symptom

- ErrorCode

- RepairCase

- FAQ



Пізніше додати:



- Engine

- Part

- RepairOperation

- DiagnosticGuide

- Source

- Media

- Service

- ContactCTA



---



## 29. Критерій готовності моделі даних



Модель даних готова для першого запуску, якщо:



1. Є Vehicle.

2. Є Transmission.

3. Є Symptom.

4. Є ErrorCode.

5. Є RepairCase.

6. Є FAQ.

7. Є зв'язки між основними сутностями.

8. Є slug для публічних сторінок.

9. Є status.

10. Є needsVerification.

11. Є правило Source of Truth.

12. Немає дублювання логіки.



---



## 30. Коротка формула



Автомобіль — точка входу для людини.



Коробка передач — центр моделі даних.



Симптом і помилка — міст між клієнтом і діагностикою.



Кейс ремонту — доказ експертності.



AI Search — майбутній шар поверх правильної моделі даних.

