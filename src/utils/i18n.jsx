import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ["en", "ar"],
    resources: {
      en: {
        translation: {
          title: "movies library from Alpa-X",
          search: "Search...",
          ar: "Arabic",
          en: "English",
          language: "Language",
          selectLanguage: "Select Language",
          searchForMovies: "Search for movies and shows You like...",
          noMoviesFound: "No movies found please search for other",
          errorFetchingData: "Error fetching data:",
        },
      },
      ar: {
        translation: {
          title: "مكتبة الأفلام من ألفا-إكس",
          search: "ابحث...",
          ar: "عربي",
          en: "إنجليزي",
          language: "اللغة",
          selectLanguage: "اختر اللغة",
          searchForMovies: "ابحث عن الأفلام والبرامج التي تحبها...",
          noMoviesFound: "لم يتم العثور على أفلام يرجى البحث عن غيرها",
          errorFetchingData: "خطأ في جلب البيانات:",
        },
      },
    },
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
    },
    fallbackLng: "en",
  });

export default i18n;
