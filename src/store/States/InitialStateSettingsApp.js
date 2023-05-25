export const initialState = {
  language: "russian-language",
  languageData: [
    {id: 0, label: "Русский", value: "russian-language"},
    {id: 1, label: "English", value: "english-language"},
  ],
  theme: "default-theme",
  themeData: [
    {id: 0, label: "Тема приложения", value: "default-theme"},
    {id: 1, label: "Светлая тема", value: "light-theme"},
    {id: 2, label: "Темная тема", value: "dark-theme"},
  ],
  country: "default-country",
  countryData: [
    {id: 0, label: "Не выбрано", value: "default-country"},
    {id: 1, label: "Россия", value: "russia-country"},
    {id: 2, label: "Белорусия", value: "belorusia-country"},
  ],
}