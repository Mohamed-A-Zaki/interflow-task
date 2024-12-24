import { navLinks } from "@/data/nav-links";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { CiShare2 } from "react-icons/ci";
import { FaRegChessQueen } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Badge } from "./ui/badge";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "min-h-screen w-[300px] shrink-0 bg-primary p-5 text-white",
        className,
      )}
    >
      <img
        alt="logo"
        className="m-auto w-[90px]"
        src={"https://cdn.salla.network/images/logo/logo-light-wide.svg"}
      />

      <div className="my-7 flex flex-col items-center gap-2">
        <div>
          <Badge className="relative z-20 -mb-4 flex gap-1 rounded-full !bg-yellow px-3 text-black">
            <FaRegChessQueen />
            سبيشل
          </Badge>
          <img
            src={
              "https://cdn.salla.sa/EZZNYp/UDW9uMwIyNZtYUZvUOKltJpsOnLxZYNZGohuPNEx.jpg"
            }
            className="m-auto h-[65px] w-[65px] rounded-full border-2 border-dashed border-yellow object-cover"
            alt=""
          />
        </div>
        <span className="font-[500]">متجر الهدايا</span>
        <div className="flex cursor-pointer items-center overflow-auto rounded-full border text-sm">
          <div className="flex items-center gap-1 px-2 py-1">
            زيارة المتجر
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div className="bg-[#baf3e6] text-black">
            <CiShare2 size={28} className="p-1" />
          </div>
        </div>
      </div>

      <div>
        {navLinks.map(({ id, links, heading }) => {
          return (
            <div key={id}>
              <div className="my-5 text-secondary">{heading}</div>
              <div className="flex flex-col gap-3">
                {links.map(({ icon: Icon, id, title, isNew }) => {
                  return (
                    <div
                      key={id}
                      className="flex cursor-pointer items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} />
                        {t(title)}
                      </div>
                      {isNew && (
                        <div>
                          <Badge className="rounded-full !bg-secondary text-black">
                            جديد
                          </Badge>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="my-5 text-secondary">تطبيق التاجر</div>
        <div className="flex items-center justify-center gap-3">
          <img
            src={
              "https://cdn.assets.salla.network/prod/admin/cp/assets/images/appstore.png"
            }
            alt=""
            className="w-[110px] cursor-pointer"
          />
          <img
            src={
              "https://cdn.assets.salla.network/prod/admin/cp/assets/images/googleplay.png"
            }
            alt=""
            className="w-[110px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
