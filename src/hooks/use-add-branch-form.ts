import { branchesAtom } from "@/atoms/branches-atom";
import { languageAtom } from "@/atoms/language-atom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().nonempty({ message: "ادخل اسم الفرع" }),
  country: z.string().nonempty({ message: "ادخل الدولة" }),
});

export default function useAddBranchForm() {
  const { branches } = branchesAtom.useValue();
  const { currentLanguage } = languageAtom.useValue();
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      country: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    branchesAtom.createBranch({
      id: branches.length + 1,
      ...data,
    });
  }

  return {
    form,
    onSubmit,
    currentLanguage,
    t,
  };
}
