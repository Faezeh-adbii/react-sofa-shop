import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoCheckmarkCircle, IoArrowBack, IoRefresh } from "react-icons/io5";
import toast from "react-hot-toast";

import { checkOtpSchema } from "../../utils/validations/checkOtpSchema";
import FormHeader from "./shared/FormHeader";
import FormInput from "./shared/FormInput";
import FormButton from "./shared/FormButton";
import InfoBox from "./shared/InfoBox";

function CheckOtpForm({ setStep, mobile }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(checkOtpSchema),
    defaultValues: { code: "" },
    mode: "onTouched",
  });
  const onSubmit = async (data) => {
    try {
      const enteredCode = data.code;
      const savedCode = sessionStorage.getItem("otpCode");
      const expires = sessionStorage.getItem("otpExpires");

      if (!savedCode) {
        toast.error("کدی یافت نشد. دوباره درخواست دهید.");
        setStep(1);
        return;
      }

      if (Date.now() > Number(expires)) {
        toast.error("کد منقضی شده است. دوباره درخواست دهید.");
        setStep(1);
        return;
      }

      if (enteredCode !== savedCode) {
        toast.error("کد وارد شده اشتباه است");
        return;
      }

      toast.success("کد تایید شد ");

      sessionStorage.removeItem("otpCode");
      sessionStorage.removeItem("otpExpires");

      setStep(3);
    } catch (error) {
      toast.error("خطا در بررسی کد");
      console.error(error);
    }
  };
  const handleResend = () => {
    const newCode = Math.floor(10000 + Math.random() * 90000).toString();

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🔐 کد جدید شما:");
    console.log(`     ${newCode}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    sessionStorage.setItem("otpCode", newCode);
    sessionStorage.setItem("otpExpires", Date.now() + 2 * 60 * 1000);

    toast.success("کد جدید ارسال شد (در Console ببینید)");
  };

  return (
    <div>
      {/* هدر */}
      <FormHeader
        icon={IoCheckmarkCircle}
        title="تایید شماره"
        subtitle={
          <>
            کد ۵ رقمی ارسال شده به{" "}
            <span className="font-bold text-pink-800" dir="ltr">
              {mobile}
            </span>{" "}
            را وارد کنید
          </>
        }
      />

      {/* فرم */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FormInput
          label="کد تایید"
          icon={IoCheckmarkCircle}
          type="text"
          inputMode="numeric"
          placeholder="47289"
          dir="ltr"
          maxLength={5}
          disabled={isSubmitting}
          register={register("code")}
          error={errors.code}
          className="font-bold text-lg tracking-widest"
        />

        <FormButton
          type="submit"
          isLoading={isSubmitting}
          icon={IoCheckmarkCircle}
        >
          تایید و ورود
        </FormButton>

        {/* دکمه‌های پایین */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="flex items-center font-bold gap-1 text-sm text-gray-500 hover:text-pink-600 transition-colors"
          >
            <IoArrowBack />
            تغییر شماره
          </button>

          <button
            type="button"
            onClick={handleResend}
            className="flex items-center font-bold gap-1 text-sm text-pink-600 hover:text-pink-700 transition-colors"
          >
            <IoRefresh />
            ارسال مجدد
          </button>
        </div>
      </form>

      {/* راهنما */}
      <InfoBox>
        <p className="text-xs text-yellow-800 leading-6">
          کد ۵ رقمی در <strong>Console مرورگر</strong> نمایش داده می‌شود.
        </p>
        <p className="text-xs text-yellow-700 mt-2 leading-6">
          📌 برای دیدن Console: <strong>F12</strong> بزنید
        </p>
      </InfoBox>
    </div>
  );
}

export default CheckOtpForm;
