import React, { useState } from "react";
import SendOtpForm from "../../components/auth/SendOtpForm";
import CheckOtpForm from "../../components/auth/CheckOtpForm";
import RegisterForm from "../../components/auth/RegisterForm";

function Login() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");

  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-page px-4 sm:px-6 py-10">
      {/* کارت سفید */}
      <div
        className="
          w-full sm:w-[80%] md:w-[70%] lg:w-[45%]
          rounded-3xl
          bg-white
          border-2 border-pink-100
          p-6 sm:p-8 lg:py-5 lg:px-12
          relative overflow-hidden
          shadow-[0_19px_38px_rgba(0,0,0,0.3),0_15px_12px_rgba(0,0,0,0.22)]
        "
      >
        <div>
          {step === 1 && (
            <SendOtpForm
              setStep={setStep}
              mobile={mobile}
              setMobile={setMobile}
            />
          )}
          {step === 2 && (
            <CheckOtpForm
              setStep={setStep}
              mobile={mobile}
            />
          )}
        </div>
        { step ===3 && <RegisterForm mobile={mobile} /> }
      </div>
    </section>
  );
}

export default Login;
