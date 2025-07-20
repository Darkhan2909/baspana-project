// src/app/config/map.config.ts
export interface YandexMapConfig {
  apiKey: string;
  lang?: string;
  coordorder?: string;
  version?: string;
}

export const YANDEX_MAP_CONFIG: YandexMapConfig = {
  apiKey: 'ТВОЙ_API_КЛЮЧ',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
};
