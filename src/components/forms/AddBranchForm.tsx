import useAddBranchForm from "@/hooks/use-add-branch-form";
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

export default function AddBranchForm() {
  const { currentLanguage, form, onSubmit, t } = useAddBranchForm();

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
