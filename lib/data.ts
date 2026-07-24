import { relations } from "@/lib/knowledge/data";
export type TransmissionType = "АКПП" | "CVT" | "DSG";
export type EntityStatus = "draft" | "ready-for-content";
export const requiresVerification = "Потребує перевірки";

export const navigation = [
  { href: "/services", label: "Послуги" },
  { href: "/akpp", label: "АКПП" },
  { href: "/dsg", label: "DSG" },
  { href: "/cvt", label: "CVT" },
  { href: "/cars", label: "Автомобілі" },
  { href: "/transmissions", label: "Коробки" },
  { href: "/knowledge-base", label: "База знань" },
  { href: "/contacts", label: "Контакти" },
];

export type Symptom = {
  slug: string;
  name: string;
  summary: string;
  observations: string[];
  transmissionIds: string[];
  status: EntityStatus;
  needsVerification: boolean;
};

const symptomRecords: Omit<Symptom, "transmissionIds">[] = [
  { slug: "ryvky-pry-peremykanni", name: "Ривки при перемиканні", summary: "Відчутний поштовх або нерівномірна зміна передач — привід зафіксувати умови прояву та пройти діагностику.", observations: ["На холодній чи прогрітій трансмісії", "Під час яких перемикань", "За якого навантаження"], status: "ready-for-content", needsVerification: true },
  { slug: "ryvky-pry-rozhoni", name: "Ривки при розгоні", summary: "Ривки під час набору швидкості потрібно відрізнити від проблем двигуна, ходової частини та керування трансмісією.", observations: ["Швидкість і оберти", "Плавний чи різкий розгін", "Індикатори на панелі"], status: "ready-for-content", needsVerification: true },
  { slug: "probuksovka", name: "Пробуксовка", summary: "Зростання обертів без очікуваного прискорення потребує перевірки, а не висновку за одним симптомом.", observations: ["Передача або діапазон швидкості", "Температура трансмісії", "Як швидко зростають оберти"], status: "ready-for-content", needsVerification: true },
  { slug: "ne-yide-vpered", name: "Не їде вперед", summary: "Відсутність руху в режимі D є критичним сигналом: подальші спроби руху краще припинити до перевірки.", observations: ["Чи вмикається індикація D", "Чи є сторонні звуки", "Чи рухається авто в режимі R"], status: "ready-for-content", needsVerification: true },
  { slug: "ne-yide-nazad", name: "Не їде назад", summary: "Відсутність руху в режимі R потребує безпечної зупинки та професійної перевірки.", observations: ["Чи вмикається індикація R", "Чи є затримка або удар", "Чи рухається авто вперед"], status: "ready-for-content", needsVerification: true },
  { slug: "yide-pislia-prohrivu", name: "Їде тільки після прогріву", summary: "Залежність поведінки від температури — важлива умова прояву, яку потрібно повідомити під час діагностики.", observations: ["Температура повітря", "Час до появи руху", "Поведінка після повного прогріву"], status: "ready-for-content", needsVerification: true },
  { slug: "vibratsiia", name: "Вібрація", summary: "Вібрація може мати різні джерела, тому спочатку потрібно описати режим руху й локалізувати прояв.", observations: ["На місці чи в русі", "Швидкість і навантаження", "Чи змінюється в повороті"], status: "ready-for-content", needsVerification: true },
  { slug: "hul", name: "Гул", summary: "Гул не варто автоматично пов’язувати з коробкою: важливі швидкість, навантаження та місце виникнення звуку.", observations: ["Швидкість появи", "Розгін або рух накатом", "Звідки чути звук"], status: "ready-for-content", needsVerification: true },
  { slug: "avariinyi-rezhym", name: "Аварійний режим", summary: "Обмежений режим роботи та попередження на панелі потребують зчитування кодів і перевірки умов їх появи.", observations: ["Текст або індикатор помилки", "Поведінка після перезапуску", "Коли режим активувався"], status: "ready-for-content", needsVerification: true },
  { slug: "udar-pry-vmykanni-d-abo-r", name: "Удар при вмиканні D або R", summary: "Поштовх під час вибору режиму варто оцінювати разом із затримкою вмикання, температурою та іншими проявами.", observations: ["Режим D, R або обидва", "Затримка перед поштовхом", "Холодна чи прогріта трансмісія"], status: "ready-for-content", needsVerification: true },
];

export const symptoms: Symptom[] = symptomRecords.map((symptom) => ({ ...symptom, transmissionIds: relations.transmissionSymptoms.filter(([, symptomId]) => symptomId === symptom.slug).map(([transmissionId]) => transmissionId) }));

const transmissionRecords = [
  {
    id: "09g",
    name: "09G",
    alt: "Aisin TF-60SN",
    manufacturer: "Aisin",
    type: "АКПП" as TransmissionType,
    priority: "A",
    summary:
      "Пріоритетна автоматична коробка ShiftTech для Volkswagen / Audi / Skoda / Seat та частини авто ринку USA.",
    family: "Aisin 09G / 09M / 09K",
  },
  {
    id: "09m",
    name: "09M",
    alt: "Aisin TF-61SN",
    manufacturer: "Aisin",
    type: "АКПП" as TransmissionType,
    priority: "A",
    summary: "Частина ядра Aisin 09G / 09M / 09K для майбутніх сторінок авто, симптомів, помилок і кейсів.",
    family: "Aisin 09G / 09M / 09K",
  },
  {
    id: "09k",
    name: "09K",
    alt: "Aisin TF-60SN family",
    manufacturer: "Aisin",
    type: "АКПП" as TransmissionType,
    priority: "A",
    summary: "Сутність сімейства Aisin для масштабованої бази знань без дублювання фактів.",
    family: "Aisin 09G / 09M / 09K",
  },
  {
    id: "jf010e",
    name: "JF010E",
    alt: "RE0F09A / RE0F09B",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "CVT Jatco з першого контентного ядра ShiftTech.",
  },
  {
    id: "jf011e",
    name: "JF011E",
    alt: "RE0F10A",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "Один із ключових варіаторів Jatco для сторінок Nissan, Renault і Mitsubishi.",
  },
  {
    id: "jf015e",
    name: "JF015E",
    alt: "RE0F11A",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "Пріоритетна CVT-сутність для майбутніх зв'язків з автомобілями, симптомами і помилками.",
  },
  {
    id: "jf016e",
    name: "JF016E",
    alt: "RE0F10D",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "CVT Jatco у структурі Knowledge First для технічного наповнення після перевірки.",
  },
  {
    id: "jf017e",
    name: "JF017E",
    alt: "RE0F10E / RE0F10J",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "Варіатор Jatco з першого пакета, який потребує обережного технічного наповнення.",
  },
  {
    id: "dsg",
    name: "DSG",
    alt: "Direct Shift Gearbox",
    manufacturer: "Volkswagen Group",
    type: "DSG" as TransmissionType,
    priority: "Після ядра",
    summary: "Окремий напрямок платформи після побудови основного ядра Aisin і Jatco.",
  },
];

export const transmissions = transmissionRecords.map((transmission) => ({ ...transmission, relatedVehicleSlugs: relations.vehicleTransmissions.filter(([, transmissionId]) => transmissionId === transmission.id).map(([vehicleId]) => vehicleId) }));

const vehicleRecords = [
  { slug: "volkswagen-passat-b7-2-5-usa", brand: "Volkswagen", model: "Passat", generation: "B7", engine: "2.5", market: "USA", productionYears: null },
  { slug: "volkswagen-jetta-2-5-usa", brand: "Volkswagen", model: "Jetta", generation: "", engine: "2.5", market: "USA", productionYears: null },
  { slug: "volkswagen-beetle-2-5-usa", brand: "Volkswagen", model: "Beetle", generation: "", engine: "2.5", market: "USA", productionYears: null },
  { slug: "volkswagen-tiguan-2-0", brand: "Volkswagen", model: "Tiguan", generation: "", engine: "2.0", market: "", productionYears: null },
  { slug: "nissan-qashqai", brand: "Nissan", model: "Qashqai", generation: "", engine: "", market: "", productionYears: null },
  { slug: "nissan-x-trail", brand: "Nissan", model: "X-Trail", generation: "", engine: "", market: "", productionYears: null },
  { slug: "nissan-teana", brand: "Nissan", model: "Teana", generation: "", engine: "", market: "", productionYears: null },
  { slug: "nissan-murano", brand: "Nissan", model: "Murano", generation: "", engine: "", market: "", productionYears: null },
  { slug: "renault-koleos", brand: "Renault", model: "Koleos", generation: "", engine: "", market: "", productionYears: null },
  { slug: "mitsubishi-outlander", brand: "Mitsubishi", model: "Outlander", generation: "", engine: "", market: "", productionYears: null },
].map((vehicle) => ({ ...vehicle, status: "ready-for-content" as EntityStatus }));

export const vehicles = vehicleRecords.map((vehicle) => ({ ...vehicle, transmissionIds: relations.vehicleTransmissions.filter(([vehicleId]) => vehicleId === vehicle.slug).map(([, transmissionId]) => transmissionId) }));

export const serviceCards = [
  { title: "Діагностика трансмісії", href: "/diagnostics", text: "Перший крок перед висновками щодо АКПП, DSG або CVT. Без перевірки точну причину визначити не можна." },
  { title: "Ремонт АКПП", href: "/akpp", text: "Напрямок для автоматичних коробок передач, зокрема ядра знань 09G / 09M / 09K." },
  { title: "Ремонт CVT", href: "/cvt", text: "Напрямок для варіаторів Jatco: JF010E, JF011E, JF015E, JF016E, JF017E." },
  { title: "Робота з DSG", href: "/dsg", text: "Окремий напрямок платформи, який розширюється після побудови основного ядра знань." },
];

export function vehicleName(vehicle: (typeof vehicles)[number]) {
  return [vehicle.brand, vehicle.model, vehicle.generation, vehicle.engine, vehicle.market].filter(Boolean).join(" ");
}

export function getTransmission(id: string) {
  return transmissions.find((transmission) => transmission.id === id);
}
