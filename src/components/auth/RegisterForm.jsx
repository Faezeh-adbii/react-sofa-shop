import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoPerson, IoCheckmarkCircle } from "react-icons/io5";

import { registerSchema } from "../../utils/validations/registerSchema";
import { useUser } from "../../hooks/useUser";
import FormHeader from "./shared/FormHeader";
import FormInput from "./shared/FormInput";
import FormButton from "./shared/FormButton";
import InfoBox from "./shared/InfoBox";
import { fields } from "../../constants/registerFields";

function RegisterForm({ mobile }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: mobile  || "",
      email: "",
      address: "",
    },
    mode: "onTouched",
  });

  const { login } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(`خوش آمدید ${data.firstName} عزیز! 🎉`);

      login({
        id: Date.now(),
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        address: data.address,
        token: "mock-token-" + Date.now(),
      });

      navigate("/");
    } catch (error) {
      toast.error("خطا در ثبت اطلاعات");
      console.error(error);
    }
  };

  return (
    <div>
      <FormHeader
        icon={IoPerson}
        title="تکمیل اطلاعات"
        subtitle="برای ادامه، اطلاعات خود را کامل کنید"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* ✅ نام + نام خانوادگی در یک ردیف */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.slice(0, 2).map((field) => (
            <FormInput
              key={field.name}
              {...field}
              disabled={isSubmitting}
              register={register(field.name)}
              error={errors[field.name]}
            />
          ))}
        </div>

        {/* ✅ بقیه‌ی فیلدها */}
        {fields.slice(2).map((field) => (
          <FormInput
            key={field.name}
            {...field}
            disabled={isSubmitting}
            register={register(field.name)}
            error={errors[field.name]}
          />
        ))}

        <FormButton
          type="submit"
          isLoading={isSubmitting}
          icon={IoCheckmarkCircle}
        >
          ثبت و ورود
        </FormButton>
      </form>

      <InfoBox color="blue" title="توجه:">
        <p className="text-xs text-blue-800 leading-6">
          اطلاعات شما به‌صورت امن ذخیره می‌شود و برای ارسال سفارشات استفاده
          خواهد شد.
        </p>
      </InfoBox>
    </div>
  );
}

export default RegisterForm;
