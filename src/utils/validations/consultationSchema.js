import z from "zod";

const consultationSchema = z.object({
    phone: z
        .string({ required_error: "لطفاً شماره تماس خود را وارد کنید" })
        .min(1, "لطفاً شماره تماس خود را وارد کنید")
        .regex(/^09[0-9]{9}$/, "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد"),
});
export { consultationSchema };