import { atom } from "@mongez/react-atom";

type LanguageAtom = {
  currentLanguage: "ar" | "en";
};

export const languageAtom = atom<LanguageAtom>({
  key: "language",
  default: {
    currentLanguage: "ar",
  },
});
