import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import Logo from "../Logo";
import SearchHeader from "../search/SearchHeader"
import NavBar from "../navBar/NavBar";
import { headerClasses } from "../../constants/HeaderStyle";

function Header() {
  return (
    <>
      <header className="bg-gray-300/30">
        <div className={headerClasses}>
          <h4 className="text-xl font-bold text-white "> فروشگاه مبل آرا </h4>
        </div>
        <div className="container pt-15 lg:pt-20 lg:block flex justify-between items-center">
          <div className="flex order-2 w-full">
            <div className="w-full lg:flex hidden ">
              <Logo />
            </div>
            <div className="w-full flex justify-center lg:mt-2 ">
              <SearchHeader />
            </div>
            <div className="w-full flex justify-end mt-0 lg:mt-3">
              <Link to="/dashboard">
                <FaRegUser className="text-xl mt-3 me-2 hover:scale-105  transition-all duration-300 " />
              </Link>
              <Link
                className=" flex justify-center items-center bg-linear-to-l h-0 py-5 px-4 from-pink-900 to-pink-700 rounded-xl hover:bg-linear-to-l hover:from-pink-700 hover:to-pink-900 shrink-0"
                to="/checkout"
              >
                <MdOutlineShoppingCart className="text-white font-bold " />
                <span className="text-white font-bold text-[15px] ms-2">
                  سبد خرید
                </span>
              </Link>
            </div>
          </div>
          <div className="w-72 lg:w-full order-1">
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
