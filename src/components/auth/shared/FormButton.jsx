import React from "react";
import Loader from "../../loader/Loader";

function FormButton({ isLoading, children, icon: Icon, ...props }) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className="
        w-full py-3.5
        bg-linear-to-tr from-pink-700 to-pink-950
        hover:from-pink-700 hover:to-pink-900
        text-white font-bold rounded-xl
        transition-all duration-300
        disabled:opacity-60 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        hover:shadow-lg hover:shadow-pink-500/40
      "
    >
      {isLoading ? (
        <>
          <Loader size={25} color="#ffff "/>
          <span>در حال پردازش...</span>
        </>
      ) : (
        <>
          {children}
          {Icon && <Icon />}
        </>
      )}
    </button>
  );
}

export default FormButton;