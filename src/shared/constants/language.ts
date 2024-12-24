export enum ShortLanguage {
  EN = "en",
  ES = "es",
  FR = "fr",
  DE = "de",
  RU = "ru",
  IT = "it",
  PT = "pt",
  VN = "vn"
};

export type LanguageKeys = "en" | "es" | "fr" | "de" | "ru" | "it" | "pt" | "vn";

export const LanguageName = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ru: "Русский",
  it: "Italiano",
  pt: "Português",
  vn: "Tiếng Việt"
};

export const languageRomanji: ("en" | "vn")[] = ["en", "vn"];
export const wordsLang: ("en" | "vn")[] = ["en", "vn"];
export const lessonsLang: ("en" | "ru" | "de" | "es" | "fr" | "it" | "pt" | "vn")[] = [
  "en", "ru", "de", "es", "fr", "it", "pt" , "vn"
];

export const enumerationLanguageList = [
  ShortLanguage.EN,
  ShortLanguage.ES,
  ShortLanguage.FR,
  ShortLanguage.DE,
  ShortLanguage.IT,
  ShortLanguage.RU,
  ShortLanguage.PT,
  ShortLanguage.VN,
];

export const languageList = [
  { title: LanguageName.en, key: ShortLanguage.EN },
  { title: LanguageName.es, key: ShortLanguage.ES },
  { title: LanguageName.fr, key: ShortLanguage.FR },
  { title: LanguageName.ru, key: ShortLanguage.RU },
  { title: LanguageName.pt, key: ShortLanguage.PT },
  { title: LanguageName.de, key: ShortLanguage.DE },
  { title: LanguageName.it, key: ShortLanguage.IT },
  { title: LanguageName.vn, key: ShortLanguage.VN }
];