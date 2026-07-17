export type TransmissionType = "АКПП" | "CVT" | "DSG";
export type EntityStatus = "draft" | "ready-for-content";

export const navigation = [
  { href: "/services", label: "Послуги" },
  { href: "/akpp", label: "АКПП" },
  { href: "/dsg", label: "DSG" },
  { href: "/cvt", label: "CVT" },
  { href: "/cars", label: "Автомобілі" },
  { href: "/transmissions", label: "Коробки" },
  { href: "/contacts", label: "Контакти" },
];

export const symptoms = [
  "Ривки при перемиканні",
  "Ривки при розгоні",
  "Пробуксовка",
  "Не їде вперед",
  "Не їде назад",
  "Їде тільки після прогріву",
  "Вібрація",
  "Гул",
  "Аварійний режим",
  "Удар при вмиканні D або R",
];

export const transmissions = [
  {
    id: "09g",
    name: "09G",
    alt: "Aisin TF-60SN",
    manufacturer: "Aisin",
    type: "АКПП" as TransmissionType,
    priority: "A",
    summary:
      "Пріоритетна автоматична коробка ShiftTech для Volkswagen / Audi / Skoda / Seat та частини авто ринку USA.",
    relatedVehicleSlugs: ["volkswagen-passat-b7-2-5-usa", "volkswagen-jetta-2-5-usa", "volkswagen-beetle-2-5-usa"],
  },
  {
    id: "09m",
    name: "09M",
    alt: "Aisin TF-61SN",
    manufacturer: "Aisin",
    type: "АКПП" as TransmissionType,
    priority: "A",
    summary: "Частина ядра Aisin 09G / 09M / 09K для майбутніх сторінок авто, симптомів, помилок і кейсів.",
    relatedVehicleSlugs: ["volkswagen-tiguan-2-0"],
  },
  {
    id: "09k",
    name: "09K",
    alt: "Aisin TF-60SN family",
    manufacturer: "Aisin",
    type: "АКПП" as TransmissionType,
    priority: "A",
    summary: "Сутність сімейства Aisin для масштабованої бази знань без дублювання фактів.",
    relatedVehicleSlugs: [],
  },
  {
    id: "jf010e",
    name: "JF010E",
    alt: "RE0F09A / RE0F09B",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "CVT Jatco з першого контентного ядра ShiftTech.",
    relatedVehicleSlugs: ["nissan-murano"],
  },
  {
    id: "jf011e",
    name: "JF011E",
    alt: "RE0F10A",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "Один із ключових варіаторів Jatco для сторінок Nissan, Renault і Mitsubishi.",
    relatedVehicleSlugs: ["nissan-qashqai", "nissan-x-trail", "renault-koleos", "mitsubishi-outlander"],
  },
  {
    id: "jf015e",
    name: "JF015E",
    alt: "RE0F11A",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "Пріоритетна CVT-сутність для майбутніх зв'язків з автомобілями, симптомами і помилками.",
    relatedVehicleSlugs: [],
  },
  {
    id: "jf016e",
    name: "JF016E",
    alt: "RE0F10D",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "CVT Jatco у структурі Knowledge First для технічного наповнення після перевірки.",
    relatedVehicleSlugs: ["nissan-qashqai", "nissan-x-trail"],
  },
  {
    id: "jf017e",
    name: "JF017E",
    alt: "RE0F10E / RE0F10J",
    manufacturer: "Jatco",
    type: "CVT" as TransmissionType,
    priority: "A",
    summary: "Варіатор Jatco з першого пакета, який потребує обережного технічного наповнення.",
    relatedVehicleSlugs: ["nissan-teana", "nissan-murano"],
  },
  {
    id: "dsg",
    name: "DSG",
    alt: "Direct Shift Gearbox",
    manufacturer: "Volkswagen Group",
    type: "DSG" as TransmissionType,
    priority: "Після ядра",
    summary: "Окремий напрямок платформи після побудови основного ядра Aisin і Jatco.",
    relatedVehicleSlugs: [],
  },
];

export const vehicles = [
  { slug: "volkswagen-passat-b7-2-5-usa", brand: "Volkswagen", model: "Passat", generation: "B7", engine: "2.5", market: "USA", transmissionIds: ["09g"] },
  { slug: "volkswagen-jetta-2-5-usa", brand: "Volkswagen", model: "Jetta", generation: "", engine: "2.5", market: "USA", transmissionIds: ["09g"] },
  { slug: "volkswagen-beetle-2-5-usa", brand: "Volkswagen", model: "Beetle", generation: "", engine: "2.5", market: "USA", transmissionIds: ["09g"] },
  { slug: "volkswagen-tiguan-2-0", brand: "Volkswagen", model: "Tiguan", generation: "", engine: "2.0", market: "", transmissionIds: ["09m"] },
  { slug: "nissan-qashqai", brand: "Nissan", model: "Qashqai", generation: "", engine: "", market: "", transmissionIds: ["jf011e", "jf016e"] },
  { slug: "nissan-x-trail", brand: "Nissan", model: "X-Trail", generation: "", engine: "", market: "", transmissionIds: ["jf011e", "jf016e"] },
  { slug: "nissan-teana", brand: "Nissan", model: "Teana", generation: "", engine: "", market: "", transmissionIds: ["jf017e"] },
  { slug: "nissan-murano", brand: "Nissan", model: "Murano", generation: "", engine: "", market: "", transmissionIds: ["jf010e", "jf017e"] },
  { slug: "renault-koleos", brand: "Renault", model: "Koleos", generation: "", engine: "", market: "", transmissionIds: ["jf011e"] },
  { slug: "mitsubishi-outlander", brand: "Mitsubishi", model: "Outlander", generation: "", engine: "", market: "", transmissionIds: ["jf011e"] },
].map((vehicle) => ({ ...vehicle, status: "ready-for-content" as EntityStatus }));

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
