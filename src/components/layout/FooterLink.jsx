import React from "react";
import { Link } from "react-router-dom";

function FooterLink({ khadamat }) {
  return (
    <li>
      <Link
        to={khadamat.path}
        className="
          flex items-center gap-2.5 sm:gap-3
          justify-center md:justify-start
          text-white/70 hover:text-pink-400
          transition-all duration-300
          px-2.5 sm:px-3 py-1.5 sm:py-2
          rounded-lg sm:rounded-xl
          hover:bg-pink-500/5
          group
        "
      >
        {/* آیکن */}
        <span
          className="
            w-7 h-7 sm:w-8 sm:h-8
            rounded-md sm:rounded-lg
            bg-pink-500/10 group-hover:bg-pink-500/20
            flex items-center justify-center
            text-pink-400
            text-base sm:text-base
            transition-all duration-300
            group-hover:scale-110
            shrink-0
          "
        >
          <khadamat.icon />
        </span>

        {/* نام */}
        <span
          className="
            text-sm sm:text-sm md:text-base
            group-hover:translate-x-[-4px]
            transition-transform duration-300
          "
        >
          {khadamat.name}
        </span>
      </Link>
    </li>
  );
}

export default FooterLink;