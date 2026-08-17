import React from "react";
import Logo from "../Logo";
import SearchHeader from "../SearchHeader";

const headerClasses =
  "flex justify-center p-3 items-center bg-gradient-to-r from-pink-700/90 to-pink-950/90 backdrop-blur-sm rounded-b-[45px]";

function Header() {
  return (
    <>
      <header className="bg-gray-300/30">
        <div className={headerClasses}>
          <h4 className="text-xl font-bold text-white "> فروشگاه مبل آرا </h4>
        </div>
        <div className="container flex justify-between pt-8">
          <div className="w-full">
            <Logo />
          </div>
          <div className=" w-full flex justify-center items-center">
            <SearchHeader />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
