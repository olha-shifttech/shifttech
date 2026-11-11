// Єдине джерело контактів і напрямів ShiftTech для головного сайту.
// Контакти та адреси лендингів узяті з опублікованих лендингів
// (aisin / 09g / cvt .shifttech.com.ua). Нові факти сюди додаються лише після підтвердження.

export const site = {
  url: "https://shifttech.com.ua",
  name: "ShiftTech",
  phoneDisplay: "067 591 10 05",
  phoneHref: "tel:+380675911005",
  address: "смт Білогородка, вул. Полунична 2А, Київська область",
  addressShort: "Білогородка · Київська область",
  mapUrl: "https://maps.app.goo.gl/yevUEie2dnCZjJBJA",
  serviceArea: "Київ, Київська область. Агрегати на ремонт приймаємо з усієї України.",
} as const;

export const landings = {
  aisinRepair: "https://aisin.shifttech.com.ua/",
  rebuilt09g: "https://09g.shifttech.com.ua/",
  jatcoCvt: "https://cvt.shifttech.com.ua/",
} as const;

export type DirectionLink = { label: string; href: string; external?: boolean };

export type Direction = {
  slug: string;
  code: string;
  title: string;
  kind: string;
  text: string;
  tags: string[];
  primary: DirectionLink;
  secondary?: DirectionLink;
};

export const directions: Direction[] = [
  {
    slug: "aisin-09g",
    code: "09G / TF-60SN",
    title: "АКПП Aisin 09G / TF-60SN",
    kind: "Автоматична коробка",
    text: "Діагностика, дефектовка та ремонт АКПП 09G, 09K, 09M. Окремо — готові відновлені 09G з обмінного фонду з установкою на нашому СТО.",
    tags: ["09G", "09K", "09M"],
    primary: { label: "Ремонт 09G / 09K / 09M", href: landings.aisinRepair, external: true },
    secondary: { label: "Купити відновлену 09G", href: landings.rebuilt09g, external: true },
  },
  {
    slug: "jatco-cvt",
    code: "Jatco CVT",
    title: "Варіатори Jatco",
    kind: "Варіатор",
    text: "Діагностика, дефектовка та ремонт варіаторів Jatco: гідроблок, насос, ремінь і конуси, адаптація після ремонту. Модель варіатора перевіряємо за VIN.",
    tags: ["JF010E", "JF011E", "JF015E", "JF016E", "JF017E"],
    primary: { label: "Ремонт варіаторів Jatco", href: landings.jatcoCvt, external: true },
  },
  {
    slug: "powershift-dct450",
    code: "DCT450",
    title: "PowerShift DCT450",
    kind: "Преселективна коробка · мокре зчеплення",
    text: "Ремонт PowerShift DCT450 з мокрим зчепленням. Починаємо з діагностики, обсяг робіт і вартість погоджуємо до ремонту.",
    tags: ["PowerShift", "Мокре зчеплення"],
    primary: { label: "Докладніше про DCT450", href: "/repair/powershift-dct450" },
  },
  {
    slug: "powershift-dct250",
    code: "DCT250",
    title: "PowerShift DCT250",
    kind: "Преселективна коробка · сухе зчеплення",
    text: "Ремонт PowerShift DCT250 із сухим зчепленням. Починаємо з діагностики, обсяг робіт і вартість погоджуємо до ремонту.",
    tags: ["PowerShift", "Сухе зчеплення"],
    primary: { label: "Докладніше про DCT250", href: "/repair/powershift-dct250" },
  },
  {
    slug: "ford-6f35",
    code: "6F35",
    title: "АКПП Ford 6F35",
    kind: "Автоматична коробка",
    text: "Ремонт автоматичної коробки Ford 6F35. Починаємо з діагностики, обсяг робіт і вартість погоджуємо до ремонту.",
    tags: ["Ford", "6F35"],
    primary: { label: "Докладніше про 6F35", href: "/repair/ford-6f35" },
  },
];

// Напрями, для яких ще немає окремого лендингу: коротка сторінка на головному сайті.
export const repairPages = directions.filter((item) => item.primary.href.startsWith("/repair/"));

export const getRepairPage = (slug: string) => repairPages.find((item) => item.slug === slug);
