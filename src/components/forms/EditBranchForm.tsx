import { branchesAtom } from "@/atoms/branches-atom";
import { selectedBranchIdAtom } from "@/atoms/selected-branch-id-atom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

export default function EditBranchForm() {
  const { branches } = branchesAtom.useValue();
  const { selectedBranchId } = selectedBranchIdAtom.useValue();
  const branch = branches.find((branch) => branch.id === selectedBranchId);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: branch?.name,
      country: branch?.country,
    },
  });

  function onEdit(data: z.infer<typeof FormSchema>) {
    branchesAtom.editBranch({
      id: selectedBranchId as number,
      ...data,
    });
  }

  function onDelete() {
    branchesAtom.deleteBranch(selectedBranchId as number);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onEdit)}
        className="space-y-6"
        dir="rtl"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الاسم *</FormLabel>
              <FormControl>
                <Input placeholder="اضف اسم الفرع" {...field} />
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
              <FormLabel>الدولة *</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                dir="rtl"
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الدولة" />
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
        <div className="flex items-center gap-2">
          <Button
            type="submit"
            className="bg-secondary/70 text-black hover:bg-secondary"
          >
            حفظ
          </Button>
          <Button type="button" variant={"destructive"} onClick={onDelete}>
            حذف
          </Button>
        </div>
      </form>
    </Form>
  );
}
