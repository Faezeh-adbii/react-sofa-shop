import {
    IoPerson,
    IoCall,
    IoMail,
    IoLocation,
    IoCheckmarkCircle,
} from "react-icons/io5";

const fields = [{
        name: "firstName",
        label: "نام *",
        icon: IoPerson,
        type: "text",
        placeholder: "علی",
    },
    {
        name: "lastName",
        label: "نام خانوادگی *",
        icon: IoPerson,
        type: "text",
        placeholder: "محمدی",
    },
    {
        name: "phone",
        label: "شماره موبایل *",
        icon: IoCall,
        type: "tel",
        inputMode: "numeric",
        dir: "ltr",
    },
    {
        name: "email",
        label: "ایمیل",
        icon: IoMail,
        type: "email",
        dir: "ltr",
        placeholder: "example@email.com",
    },
    {
        name: "address",
        label: "آدرس",
        icon: IoLocation,
        type: "text",
        placeholder: "تهران، خیابان آزادی، پلاک ۱۲۳",
    },
];
export { fields };