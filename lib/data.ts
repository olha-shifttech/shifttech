export type EntityStatus = "draft" | "ready-for-content";

export const navigation = [
  { href: "/services", label: "Послуги" },
  { href: "/akpp", label: "АКПП" },
  { href: "/dsg", label: "DSG" },
  { href: "/cvt", label: "CVT" },
  { href: "/diagnostics", label: "Діагностика" },
  { href: "/contacts", label: "Контакти" },
];

export const transmissions = [
  { id: "09g", name: "09G", alt: "Aisin TF-60SN", type: "АКПП", priority: "A" },
  { id: "09m", name: "09M", alt: "Aisin TF-61SN", type: "АКПП", priority: "A" },
  { id: "09k", name: "09K", alt: "Aisin TF-60SN family", type: "АКПП", priority: "A" },
  { id: "jf010e", name: "JF010E", alt: "RE0F09A / RE0F09B", type: "CVT", priority: "A" },
  { id: "jf011e", name: "JF011E", alt: "RE0F10A", type: "CVT", priority: "A" },
  { id: "jf015e", name: "JF015E", alt: "RE0F11A", type: "CVT", priority: "A" },
  { id: "jf016e", name: "JF016E", alt: "RE0F10D", type: "CVT", priority: "A" },
  { id: "jf017e", name: "JF017E", alt: "RE0F10E / RE0F10J", type: "CVT", priority: "A" },
  { id: "dsg", name: "DSG", alt: "Direct Shift Gearbox", type: "DSG", priority: "Після ядра" },
];

export const vehicles = [
  "Volkswagen Passat B7 2.5 USA", "Volkswagen Jetta 2.5 USA", "Volkswagen Beetle 2.5 USA", "Volkswagen Tiguan 2.0", "Nissan Qashqai", "Nissan X-Trail", "Nissan Teana", "Nissan Murano", "Renault Koleos", "Mitsubishi Outlander",
].map((name) => ({ name, status: "ready-for-content" as EntityStatus }));

export const symptoms = ["Ривки при перемиканні", "Ривки при розгоні", "Пробуксовка", "Не їде вперед", "Не їде назад", "Їде тільки після прогріву", "Вібрація", "Гул", "Аварійний режим"];

export const serviceCards = [
  { title: "Діагностика трансмісії", text: "Перший крок перед висновками щодо АКПП, DSG або CVT. Без перевірки точну причину визначити не можна." },
  { title: "Ремонт АКПП", text: "Напрямок для автоматичних коробок передач, зокрема ядра знань 09G / 09M / 09K." },
  { title: "Ремонт CVT", text: "Напрямок для варіаторів Jatco: JF010E, JF011E, JF015E, JF016E, JF017E." },
  { title: "Робота з DSG", text: "Окремий напрямок платформи, який розширюється після побудови основного ядра знань." },
];
