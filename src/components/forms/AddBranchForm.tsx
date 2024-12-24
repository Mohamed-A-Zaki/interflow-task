import { branchesAtom } from "@/atoms/branches-atom";
import { languageAtom } from "@/atoms/language-atom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormSchema = z.object({
  name: z.string().nonempty({ message: "ادخل اسم الفرع" }),
  country: z.string().nonempty({ message: "ادخل الدولة" }),
});

export default function AddBranchForm() {
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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        dir={currentLanguage === "ar" ? "rtl" : "ltr"}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("name")} *</FormLabel>
              <FormControl>
                <Input placeholder={t("addBranchName")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("country")} *</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                dir={currentLanguage === "ar" ? "rtl" : "ltr"}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("chooseCountry")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["Egypt", "USA", "UAE"].map((country, indx) => (
                    <SelectItem value={country} key={indx}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-secondary/70 text-black hover:bg-secondary"
        >
          {t("save")}
        </Button>
      </form>
    </Form>
  );
}
