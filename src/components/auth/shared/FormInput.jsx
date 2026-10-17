import React from "react";

function FormInput({
  label,
  icon: Icon,
  error,
  register,
  disabled,
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-3">
        {label}
      </label>
      <div className="relative">
        <input
          {...register}
          disabled={disabled}
          {...props}
          className={`
            w-full px-4 py-3.5 pr-12
            border-2 rounded-xl text-left
            focus:outline-none focus:ring-4
            transition-all duration-300
            disabled:opacity-50 text-gray-800 font-medium
            ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                : "border-pink-200 focus:border-pink-500 focus:ring-pink-100"
            }
          `}
        />
        {Icon && (
          <Icon className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-400 text-xl" />
        )}
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-500 font-medium">{error.message}</p>
      )}
    </div>
  );
}

export default FormInput;