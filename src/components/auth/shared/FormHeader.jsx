import React from "react";

function FormHeader({ icon: Icon, title, subtitle }) {
  return (
    <>
      {/* آیکون */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-linear-to-br from-pink-100 to-pink-200 flex items-center justify-center shadow-lg ring-4 ring-pink-50">
          <Icon className="text-4xl text-pink-600" />
        </div>
      </div>

      {/* عنوان */}
      <div className="text-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-pink-900 mb-2">
          {title}
        </h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </>
  );
}

export default FormHeader;