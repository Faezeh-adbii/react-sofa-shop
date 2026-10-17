import z from "zod";

const sendOtpSchema = z.object({
    phone: z
        .string()
        .min(1, "لطفاً شماره موبایل را وارد کنید")
        .regex(/^09[0-9]{9}$/, "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد"),
});
export { sendOtpSchema }