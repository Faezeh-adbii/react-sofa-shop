import React from "react";

const headerClasses =
  "flex justify-center p-3 items-center bg-gradient-to-r from-pink-700/90 to-pink-950/90 backdrop-blur-sm rounded-b-[45px]";

function Header() {
  return (
    <div className={headerClasses}>
      <h4 className="text-xl font-bold text-white "> فروشگاه مبل آرا </h4>
    </div>
  );
}

export default Header;
