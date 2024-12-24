import { HomeIcon } from "lucide-react";
import { FaTshirt, FaUsers } from "react-icons/fa";
import { FaBox, FaChartPie } from "react-icons/fa6";
import { IoMegaphoneSharp, IoNewspaperOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

export const navLinks = [
  {
    id: 1,
    heading: "",
    links: [
      {
        id: 2,
        title: "home",
        url: "/",
        icon: HomeIcon,
        isNew: true,
      },
      {
        id: 3,
        title: "products",
        url: "/",
        icon: FaTshirt,
        isNew: true,
      },
      {
        id: 4,
        title: "orders",
        url: "/",
        icon: FaBox,
        isNew: false,
      },
      {
        id: 5,
        title: "clients",
        url: "/",
        icon: FaUsers,
        isNew: false,
      },
      {
        id: 6,
        title: "reports",
        url: "/",
        icon: FaChartPie,
        isNew: false,
      },
      {
        id: 7,
        title: "questions",
        url: "/",
        icon: MdMessage,
        isNew: false,
      },
      {
        id: 8,
        title: "الصفحات التعريفية",
        url: "/",
        icon: IoNewspaperOutline,
        isNew: false,
      },
      {
        id: 9,
        title: "الادوات التسويقية",
        url: "/",
        icon: IoMegaphoneSharp,
        isNew: false,
      },
    ],
  },
  {
    id: 2,
    heading: "قنوات البيع",
    links: [
      {
        id: 1,
        title: "محلي",
        url: "/",
        icon: HomeIcon,
        isNew: false,
      },
      {
        id: 2,
        title: "سلة بوينت",
        url: "/",
        icon: HomeIcon,
        isNew: true,
      },
    ],
  },
  {
    id: 3,
    heading: "أدوات مساندة",
    links: [
      {
        id: 1,
        title: "خدمات التاجر",
        url: "/",
        icon: HomeIcon,
        isNew: false,
      },
      {
        id: 2,
        title: "المؤثرين",
        url: "/",
        icon: HomeIcon,
        isNew: true,
      },
      {
        id: 3,
        title: "اعلانات سويبلي",
        url: "/",
        icon: HomeIcon,
        isNew: false,
      },
    ],
  },
];
