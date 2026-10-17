import { z } from "zod";
const checkOtpSchema = z.object({
    code: z
        .string({ required_error: "کد تایید الزامی است" })
        .min(1, "لطفاً کد تایید را وارد کنید")
        .length(5, "کد تایید باید ۵ رقم باشد")
        .regex(/^[0-9]{5}$/, "کد تایید فقط باید شامل عدد باشد"),
});
export { checkOtpSchema };