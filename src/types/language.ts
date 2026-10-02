export type Language = 'id' | 'en';

export interface TranslationDictionary {
  [key: string]: {
    id: string;
    en: string;
  };
}
