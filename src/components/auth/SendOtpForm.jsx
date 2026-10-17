import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoCall, IoPhonePortraitOutline } from "react-icons/io5";
import toast from "react-hot-toast";

import { sendOtpSchema } from "../../utils/validations/sendOtpSchema";
import FormHeader from "./shared/FormHeader";
import FormInput from "./shared/FormInput";
import FormButton from "./shared/FormButton";
import InfoBox from "./shared/InfoBox";

const generateOtpCode = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

function SendOtpForm({ setStep, mobile, setMobile }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(sendOtpSchema),
    defaultValues: { phone: mobile || "" },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const code = generateOtpCode();

      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("🔐 کد ورود شما به مبل آرا:");
      console.log(`     ${code}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━");

      sessionStorage.setItem("otpCode", code);
      sessionStorage.setItem("phone", data.phone);
      sessionStorage.setItem("otpExpires", Date.now() + 2 * 60 * 1000);

      setMobile(data.phone);
      toast.success("کد تایید ارسال شد (در Console ببینید)", {
        duration: 5000,
      });
      setStep(2);
    } catch (error) {
      toast.error("خطا در ارسال کد");
      console.error(error);
    }
  };

  return (
    <div>
      {/* هدر */}
      <FormHeader
        icon={IoPhonePortraitOutline}
        title="ورود"
        subtitle="شماره موبایل خود را وارد کنید"
      />

      {/* فرم */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FormInput
          label="شماره موبایل"
          icon={IoPhonePortraitOutline}
          type="tel"
          inputMode="numeric"
          placeholder="09123456789"
          dir="ltr"
          disabled={isSubmitting}
          register={register("phone")}
          error={errors.phone}
        />

        <FormButton type="submit" isLoading={isSubmitting} icon={IoCall}>
          دریافت کد تایید
        </FormButton>
      </form>

      {/* راهنما */}
      <InfoBox>
        <p className="text-xs text-yellow-800 leading-6">
          این پروژه در حالت <strong>دمو</strong> است. پس از کلیک روی دکمه،
          کد ۵ رقمی در <strong>Console مرورگر</strong> نمایش داده می‌شود.
        </p>
        <p className="text-xs text-yellow-700 mt-2 leading-6">
          📌 برای دیدن Console: <strong>F12</strong> بزنید
        </p>
      </InfoBox>
    </div>
  );
}

export default SendOtpForm;