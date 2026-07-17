# ShiftTech Technical Site Requirements



## 1. Назва документа



07_Technical_Site_Requirements.md



Статус: Draft



Версія: 1.0



Власник: ShiftTech



Призначення: технічне завдання для створення першої версії сайту ShiftTech 2.0 у Codex / AI coding environment.



---



## 2. Контекст проєкту



ShiftTech 2.0 — це не сайт-візитка.



Це технічна AI Knowledge Platform для ремонту АКПП, CVT, DSG та інших трансмісій.



Платформа повинна поєднувати:



- сайт;

- базу знань;

- SEO-структуру;

- AI-friendly контент;

- майбутній AI-пошук;

- майбутні інтеграції з Make, CRM, Google Drive, Google Sheets та API.



---



## 3. Головне архітектурне правило



Сайт повинен підтримувати Dual Navigation Architecture.



Клієнт заходить через автомобіль.



Система думає через коробку передач.



AI з'єднує ці два світи.



Це означає:



- користувач може шукати по авто;

- користувач може шукати по коробці;

- користувач може шукати по симптому;

- користувач може шукати по помилці;

- усі сторінки мають бути пов'язані між собою.



---



## 4. Ціль першої технічної версії



Перший сайт повинен дати робочий каркас платформи.



Не потрібно одразу створювати повний ідеальний продукт.



Потрібно створити правильну основу, яку можна масштабувати.



Перша версія повинна мати:



- правильну структуру сторінок;

- правильні URL;

- шаблони сторінок;

- базовий дизайн;

- навігацію по авто, коробках, симптомах, помилках і кейсах;

- готовність до наповнення контентом;

- можливість розширення до тисяч сторінок.



---



## 5. Технологічний підхід



Рекомендований стек для першої версії:



- Next.js

- TypeScript

- Tailwind CSS

- Markdown або MDX для контенту

- статична генерація сторінок там, де можливо

- структура даних у JSON / TypeScript objects / MDX frontmatter



Важливо: сайт повинен бути простим для підтримки, масштабування і генерації контенту через AI.



---



## 6. Основні розділи сайту



Потрібно створити такі розділи:



- Home

- Cars

- Transmissions

- Symptoms

- Errors

- Repair Cases

- FAQ

- Blog / Knowledge Base

- About

- Contacts

- AI Search placeholder



---



## 7. URL-структура



URL повинні бути стабільні, зрозумілі і масштабовані.



Обов'язкові шляхи:



/



/cars



/cars/volkswagen/passat-b7-2-5-usa



/transmissions



/transmissions/09g



/transmissions/jf010e



/transmissions/jf011e



/transmissions/jf015e



/transmissions/jf016e



/transmissions/jf017e



/symptoms



/symptoms/jerks



/symptoms/slipping



/symptoms/no-drive



/errors



/errors/p0700



/errors/p0741



/errors/p0965



/errors/p1790



/cases



/cases/st-2026-0001



/faq



/about



/contacts



/ai-search



---



## 8. Типи сторінок



Сайт повинен підтримувати такі типи сторінок:



1. Vehicle Page

2. Transmission Page

3. Symptom Page

4. Error Code Page

5. Repair Case Page

6. FAQ Page

7. Diagnostic Guide Page

8. Knowledge Article Page

9. Static Page



Кожен тип сторінки має мати окремий шаблон.



---



## 9. Дані та сутності



Потрібно підготувати модель даних для таких сутностей:



### Vehicle



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



### Transmission



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



### Symptom



- id

- title

- plainDescription

- relatedVehicles

- relatedTransmissions

- relatedErrors

- relatedCases

- riskLevel

- slug



### ErrorCode



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



### RepairCase



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



## 10. Перший пакет контенту для сайту



Перший технічний запуск повинен підтримувати сторінки з документа 06_First_Content_Plan.



### Авто



- Volkswagen Passat B7 2.5 USA

- Volkswagen Jetta 2.5 USA

- Nissan Qashqai

- Nissan X-Trail

- Renault Koleos



### Коробки



- 09G

- JF010E

- JF011E

- JF015E

- JF016E

- JF017E



### Симптоми



- Ривки

- Пробуксовка

- Не їде вперед

- Не їде назад

- Помилки після прогріву



### Помилки



- P0700

- P0741

- P0965

- P1790

- P17F0

- P17F1



### Кейси



- Passat B7 09G

- Chevrolet Spark JF015E

- JF017E Case



---



## 11. Головна сторінка



Головна сторінка повинна пояснювати, що робить ShiftTech.



Обов'язкові блоки:



1. Hero block

2. Пошук по авто

3. Пошук по коробці

4. Основні напрямки: 09G, Jatco CVT, DSG

5. Типові симптоми

6. Кейси ремонту

7. Чому ShiftTech

8. CTA: запис на діагностику

9. Контакти



Головна сторінка не повинна бути перевантажена.



Її задача — направити користувача в правильний розділ.



---



## 12. Навігація



Основне меню:



- Автомобілі

- Коробки

- Симптоми

- Помилки

- Кейси

- База знань

- Контакти



Додатково:



- кнопка Запис на діагностику

- пошук

- мобільне меню



---



## 13. Внутрішні зв'язки



Кожна сторінка повинна мати внутрішні посилання.



Vehicle Page повинна вести на:



- transmission page;

- symptoms;

- errors;

- cases;

- contact CTA.



Transmission Page повинна вести на:



- vehicles;

- symptoms;

- errors;

- cases;

- FAQ.



Symptom Page повинна вести на:



- vehicles;

- transmissions;

- errors;

- cases.



Error Page повинна вести на:



- transmissions;

- vehicles;

- symptoms;

- cases.



Repair Case Page повинна вести на:



- vehicle;

- transmission;

- symptom;

- error;

- contact CTA.



---



## 14. SEO-вимоги



Кожна сторінка повинна мати:



- title;

- description;

- H1;

- clean URL;

- canonical URL;

- Open Graph metadata;

- structured content;

- внутрішні посилання;

- FAQ block, якщо доречно.



Не створювати сторінки тільки заради SEO.



Кожна сторінка повинна мати реальну користь для клієнта.



---



## 15. AI-friendly вимоги



Кожна сторінка повинна бути зрозумілою для AI.



Потрібно:



- чітко вказувати головну сутність сторінки;

- явно показувати зв'язки між авто, коробкою, симптомами, помилками і кейсами;

- використовувати структуровані блоки;

- уникати води;

- давати коротке резюме;

- давати висновок;

- не змішувати кілька тем в одну сторінку.



---



## 16. Компоненти інтерфейсу



Потрібно створити базові компоненти:



- Header

- Footer

- SearchBox

- VehicleCard

- TransmissionCard

- SymptomCard

- ErrorCodeCard

- RepairCaseCard

- RelatedLinks

- CTABox

- Breadcrumbs

- PageSummary

- FAQBlock

- DiagnosticWarningBox



---



## 17. Пошук



У першій версії достатньо зробити простий пошук або placeholder.



Мета першого етапу:



- показати поле пошуку;

- підготувати місце для майбутнього AI Search;

- не робити складний AI-пошук до затвердження структури даних.



Майбутній AI Search повинен підтримувати запити типу:



- Passat B7 2.5 смикається

- Nissan Qashqai варіатор не їде

- P0741 09G

- JF011E пробуксовка



---



## 18. Дизайн-вимоги



На першому етапі дизайн має бути простим, технічним і чистим.



Пріоритет:



1. читабельність;

2. структура;

3. швидкість;

4. мобільна версія;

5. довіра;

6. візуальний стиль.



Не витрачати час на складні анімації.



---



## 19. Мобільна версія



Сайт повинен добре працювати на телефоні.



Обов'язково:



- адаптивне меню;

- читабельні картки;

- зручні кнопки;

- швидке завантаження;

- клікабельний телефон;

- кнопка зв'язку / діагностики.



---



## 20. Продуктивність



Базові вимоги:



- швидке завантаження;

- мінімум зайвих бібліотек;

- оптимізовані зображення;

- чиста структура компонентів;

- можливість статичної генерації сторінок.



---



## 21. Заборонено у першій версії



Не робити:



- складний кабінет користувача;

- складний CRM;

- оплату онлайн;

- складний AI-чат;

- зайві анімації;

- складний дизайн до затвердження структури;

- хаотичні сторінки без шаблонів;

- дублікати контенту.



---



## 22. Очікувана структура проєкту



Рекомендована структура:



/app



/components



/content



/content/cars



/content/transmissions



/content/symptoms



/content/errors



/content/cases



/content/faq



/lib



/lib/data



/lib/seo



/styles



/public



---



## 23. Правило для Codex



Codex не повинен імпровізувати архітектуру.



Codex повинен спиратися на документи:



- 01_Project_Constitution.md

- 02_Site_Architecture.md

- 03_Knowledge_Base_Architecture.md

- 04_Dual_Navigation_Architecture.md

- 05_Content_Templates.md

- 06_First_Content_Plan.md

- 07_Technical_Site_Requirements.md



Якщо потрібно прийняти архітектурне рішення, Codex повинен спочатку перевірити ці документи.



---



## 24. Критерій готовності першої версії



Перша версія сайту вважається готовою, якщо:



1. Працює головна сторінка.

2. Працюють розділи Cars, Transmissions, Symptoms, Errors, Cases.

3. Є мінімальний пакет сторінок MVP.

4. Є внутрішні зв'язки між сторінками.

5. Є адаптивна мобільна версія.

6. Є базова SEO-структура.

7. Є CTA для запису на діагностику.

8. Немає хаотичних сторінок.

9. Немає дублювання логіки.

10. Сайт можна масштабувати без переробки основи.



---



## 25. Де зберігається документ



Google Drive:



ShiftTech 2.0 / 00_Project_Management / 07_Technical_Site_Requirements.md



ChatGPT Project Sources:



Додати після перевірки, тому що це основне ТЗ для Codex.



GitHub:



Після старту розробки цей документ може бути продубльований у репозиторій як:



/docs/07_Technical_Site_Requirements.md



---



## 26. Коротка формула



Перший сайт ShiftTech має бути не красивою вітриною, а правильною технічною основою.



Спочатку структура.



Потім контент.



Потім дизайн.



Потім AI-пошук і автоматизації.

