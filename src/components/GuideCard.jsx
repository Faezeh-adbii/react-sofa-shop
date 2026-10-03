import React from "react";

function GuideCard({tip}) {
  const IconComponent = tip.icon;
  return (
    <div
      className="
          grid
          grid-cols-[auto_1fr]
          items-start
          gap-3
          rounded-2xl
          border
          border-pink-100
          bg-white/70
          p-4
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-md
          sm:gap-4
          sm:p-3
        "
    >
      {/* شماره */}
      <div
        className="
            grid
            h-8
            w-8
            shrink-0
            place-items-center
            rounded-full
            bg-pink-900
            text-sm
            font-bold
            text-white
            shadow-md
            shadow-pink-900/20
            sm:w-10
            sm:h-10
            sm:text-base
          "
      >
        {tip.number}
      </div>

      {/* محتوا */}
      <div className="min-w-0">
        {/* عنوان + آیکون */}
        <div className="mb-1.5 grid grid-cols-[auto_1fr] items-center gap-2">
          <IconComponent
            className="
                text-lg
                text-pink-900
                sm:text-xl
              "
          />

          <h3
            className="
                text-sm
                font-bold
                text-gray-800
                sm:text-[1.05rem]
              "
          >
            {tip.title}
          </h3>
        </div>

        {/* توضیحات */}
        <p
          className="
              text-xs
              leading-6
              text-gray-500
              sm:text-sm
              sm:leading-7
            "
        >
          {tip.description}
        </p>
      </div>
    </div>
  );
}

export default GuideCard;
