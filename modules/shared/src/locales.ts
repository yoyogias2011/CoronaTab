export const LocaleIds = [
  'af',
  'sq',
  'am',
  'ar',
  'hy',
  'az',
  'eu',
  'be',
  'bn',
  'bs',
  'bg',
  'ca',
  'ceb',
  'ny',
  'zh',
  'zh-TW',
  'co',
  'hr',
  'cs',
  'da',
  'nl',
  'en',
  'eo',
  'et',
  'tl',
  'fi',
  'fr',
  'fy',
  'gl',
  'ka',
  'de',
  'el',
  'gu',
  'ht',
  'ha',
  'haw',
  'iw',
  'hi',
  'hmn',
  'hu',
  'is',
  'ig',
  'id',
  'ga',
  'it',
  'ja',
  'jw',
  'kn',
  'kk',
  'km',
  'rw',
  'ko',
  'ku',
  'ky',
  'lo',
  'la',
  'lv',
  'lt',
  'lb',
  'mk',
  'mg',
  'ms',
  'ml',
  'mt',
  'mi',
  'mr',
  'mn',
  'my',
  'ne',
  'no',
  'or',
  'ps',
  'fa',
  'pl',
  'pt',
  'pa',
  'ro',
  'ru',
  'sm',
  'gd',
  'sr',
  'st',
  'sn',
  'sd',
  'si',
  'sk',
  'sl',
  'so',
  'es',
  'su',
  'sw',
  'sv',
  'tg',
  'ta',
  'tt',
  'te',
  'th',
  'tr',
  'tk',
  'uk',
  'ur',
  'ug',
  'uz',
  'vi',
  'cy',
  'xh',
  'yi',
  'yo',
  'zu'
] as const

export type LocaleId = typeof LocaleIds[number]

export type LocaleTranslations = {
  [key in LocaleId]?: string
}

export const Languages: LocaleTranslations = {
  af: 'Afrikaans',
  sq: 'Shqiptar',
  am: 'አማርኛ',
  ar: 'عربى',
  hy: 'Հայերեն',
  az: 'Azərbaycan',
  eu: 'Euskal',
  be: 'Беларус',
  bn: 'বাংলা',
  bs: 'Bosanski',
  bg: 'Български',
  ca: 'Català',
  ceb: 'Cebuano',
  ny: 'Chichewa',
  zh: '简体中文）',
  'zh-TW': '中國傳統的）',
  co: 'Corsu',
  hr: 'Hrvatski',
  cs: 'Čeština',
  da: 'Dansk',
  nl: 'Nederlands',
  en: 'English',
  eo: 'Esperanto',
  et: 'Eestlane',
  tl: 'Pilipino',
  fi: 'Suomalainen',
  fr: 'Français',
  fy: 'Frysk',
  gl: 'Galego',
  ka: 'ქართული',
  de: 'Deutsche',
  el: 'Ελληνικά',
  gu: 'ગુજરાતી',
  ht: 'Kreyòl Ayisyen',
  ha: 'Hausa',
  haw: 'Ōlelo Hawaiʻi',
  iw: 'עברית',
  hi: 'नहीं',
  hmn: 'Hmong',
  hu: 'Magyar',
  is: 'Íslensku',
  ig: 'Ndi Igbo',
  id: 'Bahasa Indonesia',
  ga: 'Gaeilge',
  it: 'Italiano',
  ja: '日本人',
  jw: 'Javanese',
  kn: 'ಕನ್ನಡ',
  kk: 'Қазақ',
  km: 'ខ្មែរ',
  rw: 'Kinyarwanda',
  ko: '한국어',
  ku: 'Kurdî (Kurmancî)',
  ky: 'Кыргызча',
  lo: 'ລາວ',
  la: 'Latine',
  lv: 'Latviski',
  lt: 'Lietuvis',
  lb: 'Lëtzebuergesch',
  mk: 'Македонски',
  mg: 'Malagasy',
  ms: 'Melayu',
  ml: 'മലയാളം',
  mt: 'Malti',
  mi: 'Maori',
  mr: 'मराठी',
  mn: 'Монгол',
  my: 'မြန်မာ (မြန်မာ)',
  ne: 'नेपाली',
  no: 'Norsk',
  or: 'ଓଡିଆ (ଓଡିଆ)',
  ps: 'پښتو',
  fa: 'فارسی',
  pl: 'Polskie',
  pt: 'Português',
  pa: 'ਪੰਜਾਬੀ',
  ro: 'Română',
  ru: 'Русский',
  sm: 'Samoa',
  gd: 'Gàidhlig na h-Alba',
  sr: 'Српски',
  st: 'Sesotho',
  sn: 'Shona',
  sd: 'سنڌي',
  si: 'සිංහල',
  sk: 'Slovenský',
  sl: 'Slovenščina',
  so: 'Soomaali',
  es: 'Español',
  su: 'Urang Sunda',
  sw: 'Swahili',
  sv: 'Svenska',
  tg: 'Точик',
  ta: 'தமிழ்',
  tt: 'Тартар',
  te: 'తెలుగు',
  th: 'ไทย',
  tr: 'Türk',
  tk: 'Türkmenler',
  uk: 'Українська',
  ur: 'اردو',
  ug: 'ئۇيغۇر',
  uz: "O'zbek",
  vi: 'Tiếng Việt',
  cy: 'Cymraeg',
  xh: 'IsiXhosa',
  yi: 'יידיש',
  yo: 'Yoruba',
  zu: 'IsiZulu'
}
