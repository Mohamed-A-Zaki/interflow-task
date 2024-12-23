import { Search } from "lucide-react";
import { IoAlertCircleOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Navbar() {
  return (
    <nav className="my-3 flex items-center justify-between">
      <div className="flex items-center overflow-hidden rounded-lg">
        <div className="relative">
          <Input
            placeholder="ابحث برقم الطلب ، اسم العميل ، رقم الشحنة"
            type="search"
            className="w-[400px] max-w-full rounded-none rounded-s-lg focus-visible:ring-0"
          />
          <HoverCard>
            <HoverCardTrigger className="absolute left-2 top-1/2 -translate-y-1/2">
              <IoAlertCircleOutline size={25} className="text-primary" />
            </HoverCardTrigger>
            <HoverCardContent className="bg-secondary/70">
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>
        <Select defaultValue="orders" dir="rtl">
          <SelectTrigger className="w-[150px] rounded-none focus-visible:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="orders">الطلبات</SelectItem>
            <SelectItem value="products">المنتجات</SelectItem>
            <SelectItem value="customers">العملاء</SelectItem>
          </SelectContent>
        </Select>
        <Button className="cursor-pointer rounded-none bg-secondary/70 transition duration-300 hover:bg-secondary">
          <Search />
        </Button>
      </div>
      <div>{/* TODO: Add notifications */}</div>
    </nav>
  );
}
