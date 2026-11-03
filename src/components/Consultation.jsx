import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5";

import { consultationSchema } from "../utils/validations/consultationSchema";
import { useCreateConsultation } from "../hooks/useConsultation";
import ConsultationForm from "./ConsultionForm";
import toast from "react-hot-toast";

function Consultation() {
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

  const { mutate: submitConsultation, isPending } = useCreateConsultation();

  const onSubmit = (data) => {
    toast.dismiss()
    submitConsultation(data.phone, {
      onSuccess: () => {
        reset();
        toast.success("شماره شما با موفقیت ثبت شد")
      },
      onError: (err) => {
        const serverMessage = err?.response?.data?.errors?.[0]?.message || "";
        if (serverMessage.includes("not unique") || serverMessage.includes("is not unique")) {
          toast.error("این شماره قبلاً ثبت شده است");
        } else {
          toast.error("مشکلی پیش آمد، دوباره تلاش کنید");
        }
      }
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-17 sm:py-12 lg:py-17">
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
          <h2 className="text-white text-[1.05rem] sm:text-xl lg:text-2xl font-bold text-center mb-2 sm:mb-3 leading-relaxed">
            با ما در ارتباط باش و هر سوالی داری از مشاورین ما بپرس
          </h2>

          <div className="w-16 sm:w-20 lg:w-24 h-0.5 bg-white/40 mx-auto mb-4 sm:mb-6" />
          {/* فرم */}
          <ConsultationForm
            handleSubmit={handleSubmit}
            register={register}
            isSubmitting={isSubmitting}
            isPending={isPending}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
}

export default Consultation;