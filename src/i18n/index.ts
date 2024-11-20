import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to the Blog",
      image_placeholder: "Image Placeholder",
      post_title: "The Future of Blockchain Technology",
      author: "John Doe",
      date: "May 15, 2023",
      read_time: "5 min read",
      post_excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      popular_tags: "Popular Tags",
      featured_authors: "Featured Authors",
      Blockchain: "Blockchain",
      Technology: "Technology",
      Future: "Future",
      Cryptocurrency: "Cryptocurrency",
      Programming: "Programming",
      AI: "AI",
      "Machine Learning": "Machine Learning",
      "Blockchain Enthusiast": "Blockchain Enthusiast",
      "Crypto Analyst": "Crypto Analyst",
      "Tech Journalist": "Tech Journalist",
    },
  },
  ka: {
    translation: {
      welcome: "კეთილი იყოს თქვენი მობრძანება ბლოგზე",
      image_placeholder: "სურათის პლაცდარმი",
      post_title: "ბლოკჩეინის ტექნოლოგიის მომავალი",
      author: "ჯონ დოუ",
      date: "15 მაისი, 2023",
      read_time: "5 წუთიანი კითხვა",
      post_excerpt: "ლორემ იპსუმ დოლორ სით ამეთ, კონსექუატურ ადიპისცინგ ელით. სედ დო ეიუსმოდ ტემპორ ინციდიდუნტ უტ ლაბორე ეთ დოლორე მაგნა ალიკუა.",
      popular_tags: "პოპულარული თეგები",
      featured_authors: "გამორჩეული ავტორები",
      Blockchain: "ბლოკჩეინი",
      Technology: "ტექნოლოგია",
      Future: "მომავალი",
      Cryptocurrency: "კრიპტოვალუტა",
      Programming: "პროგრამირება",
      AI: "ხელოვნური ინტელექტი",
      "Machine Learning": "მანქანური სწავლა",
      "Blockchain Enthusiast": "ბლოკჩეინის ენთუზიასტი",
      "Crypto Analyst": "კრიპტო ანალიტიკოსი",
      "Tech Journalist": "ტექნოლოგიური ჟურნალისტი",
    },
  },
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
