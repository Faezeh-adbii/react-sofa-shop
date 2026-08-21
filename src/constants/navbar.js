import { BiCategory } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const navbar = [{
        name: "دسته بندی ها",
        icon: BiCategory,
        path: "/",
        isCategory: true,
    },
    { name: "خانه", icon: IoHomeOutline, path: "/" },
    {
        name: "سازمان های طرف قرارداد",
        icon: GoOrganization,
        path: "/organization",
    },
    {
        name: "فروش اقساطی",
        icon: PiShoppingBagOpenDuotone,
        path: "/installmentSales",
    },
    { name: "تماس با ما", icon: FiPhone, path: "/contact" },
];

export default navbar;