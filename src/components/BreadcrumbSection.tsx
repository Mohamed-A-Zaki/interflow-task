import { HomeIcon } from "lucide-react";
import { HiMiniSlash } from "react-icons/hi2";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function BreadcrumbSection() {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="flex items-center gap-2 text-primary"
          >
            <HomeIcon size={18} />
            الرئيسية
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <HiMiniSlash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-primary">
            اعدادات المتجر
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <HiMiniSlash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-gray-400">الفروع</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
