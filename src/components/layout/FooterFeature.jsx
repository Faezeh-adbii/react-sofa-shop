import React from "react";

function FooterFeature({feature}) {
  return (
    <li
      className="
                    flex items-center gap-2.5
                    justify-center md:justify-start
                    group
                  "
    >
      <span
        className="
                      w-5 h-5 rounded-full
                      bg-pink-500/10 group-hover:bg-pink-500/20
                      flex items-center justify-center
                      text-pink-400 text-xs
                      transition-colors duration-300
                      shrink-0
                    "
      >
        ✓
      </span>
      <span className="group-hover:text-white transition-colors duration-300">
        {feature}
      </span>
    </li>
  );
}

export default FooterFeature;
