import z from "zod";

// اعتبارسنجی فرم جستجو با Zod
// جستجو در: نام مبل، دسته‌بندی، شهر تولیدکننده

const searchSchema = z.object({
    searchTerm: z
        .string()
        .min(2, "⚠️ حداقل ۲ کاراکتر وارد کنید")
        .max(50, "⚠️ حداکثر ۵۰ کاراکتر")
        .optional()
        .or(z.literal("")),
});
export { searchSchema };