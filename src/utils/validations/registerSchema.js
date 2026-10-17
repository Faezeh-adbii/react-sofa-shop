import { z } from "zod";

const registerSchema = z.object({
    firstName: z
        .string()
        .min(2, "نام باید حداقل ۲ حرف باشد")
        .max(50, "نام حداکثر ۵۰ حرف باشد"),

    lastName: z
        .string()
        .min(2, "نام خانوادگی باید حداقل ۲ حرف باشد")
        .max(50, "نام خانوادگی حداکثر ۵۰ حرف باشد"),

    phone: z
        .string()
        .min(1, "شماره موبایل الزامی است")
        .regex(/^09[0-9]{9}$/, "شماره موبایل معتبر نیست"),

    email: z.string().email("ایمیل معتبر نیست").optional().or(z.literal("")),

    address: z.string().max(500, "آدرس حداکثر ۵۰۰ حرف باشد").optional(),
});
export { registerSchema }