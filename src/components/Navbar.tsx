import { AlertCircle, LogOut, Search, User } from "lucide-react";
import { FaGift } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";
import {
  MdKeyboardArrowDown,
  MdOutlineLanguage,
  MdOutlineSettingsSuggest,
  MdUpdate,
} from "react-icons/md";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
      <div className="flex items-center gap-2">
        <div className="cursor-pointer rounded-full border border-secondary p-[10px] text-primary">
          <FaGift size={18} />
        </div>
        <div className="cursor-pointer rounded-full border border-secondary p-[10px] text-primary">
          <MdOutlineLanguage size={18} />
        </div>
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-500">
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div>متجر الهدايا</div>
            <MdKeyboardArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              <User />
              الملف الشخصي
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <AlertCircle />
              التنبيهات
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <MdUpdate />
              تحديثات المنصة
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <MdOutlineSettingsSuggest />
              الاقتراحات
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer !text-red-500">
              <LogOut />
              تسجيل الخروج
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
