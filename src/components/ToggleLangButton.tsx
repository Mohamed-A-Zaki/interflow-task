import { languageAtom } from "@/atoms/language-atom";
import { useTranslation } from "react-i18next";
import { MdOutlineLanguage } from "react-icons/md";

export default function ToggleLangButton() {
  const { i18n } = useTranslation();

  const ToggleLanguage = () => {
    const currentLanguage = i18n.language === "ar" ? "en" : "ar";

    i18n.changeLanguage(currentLanguage);

    languageAtom.change("currentLanguage", currentLanguage);
  };

  console.log(i18n.language);

  return <MdOutlineLanguage size={18} onClick={ToggleLanguage} />;
}
