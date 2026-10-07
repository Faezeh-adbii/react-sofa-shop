import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5";

import { consultationSchema } from "../utils/validations/consultationSchema";
import { useCreateConsultation } from "../hooks/useConsultation";
import ConsultationForm from "./ConsulationForm";

function Consultation() {
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(consultationSchema),
    defaultValues: { phone: "" },
    mode: "onTouched",
  });

  // ✅ این خط رو بذار **قبل** از onSubmit
  const { mutate: submitConsultation, isPending } = useCreateConsultation();

  const onSubmit = (data) => {
    setSuccessMessage("");
    setServerError("");

    submitConsultation(data.phone, {
      onSuccess: () => {
        reset();
        setSuccessMessage("شماره شما با موفقیت ثبت شد");
      },
      onError: (err) => {
        const msg = err?.message || "";
        if (msg.includes("not unique")) {
          setServerError("این شماره قبلاً ثبت شده است");
        } else {
          setServerError("مشکلی پیش آمد، دوباره تلاش کنید");
        }
      },
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16">
      <div
        className="
          relative wavy
          px-5 py-15 sm:p-8 lg:p-12
          bg-linear-to-br from-pink-950 via-pink-900 to-pink-950
          min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]
          flex flex-col items-center justify-center
        "
      >
        <div className="relative z-10 w-full max-w-sm sm:max-w-lg lg:max-w-2xl">
          {/* عنوان */}
          <h2 className="text-white text-[1.05rem] sm:text-xl lg:text-2xl font-bold text-center mb-2 sm:mb-3 leading-relaxed">
            با ما در ارتباط باش و هر سوالی داری از مشاورین ما بپرس
          </h2>

          {/* خط زیر عنوان */}
          <div className="w-16 sm:w-20 lg:w-24 h-0.5 bg-white/40 mx-auto mb-4 sm:mb-6" />

          {/* فرم */}
          <ConsultationForm
            handleSubmit={handleSubmit}
            register={register}
            isSubmitting={isSubmitting}
            isPending={isPending}
            onSubmit={onSubmit}
          />

          {/* پیام‌ها */}
          <div className="mt-3 sm:mt-4 space-y-2">
            {successMessage && (
              <div className="flex items-center justify-center gap-2 bg-green-500/50 border border-green-400/40 text-green-100 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm backdrop-blur-sm">
                <IoCheckmarkCircle className="text-base sm:text-lg text-green-300 shrink-0" />
                <span className="font-medium">{successMessage}</span>
              </div>
            )}

            {serverError && (
              <div className="flex items-center justify-center gap-2 bg-red-500/50 border border-red-400/40 text-red-100 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm backdrop-blur-sm">
                <IoAlertCircle className="text-base sm:text-lg text-red-300 shrink-0" />
                <span className="font-medium">{serverError}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation;