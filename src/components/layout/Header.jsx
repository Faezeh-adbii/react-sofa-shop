import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import Logo from "../Logo";
import SearchHeader from "../SearchHeader";
import NavBar from "../navBar/NavBar";
import { headerClasses } from "../../constants/HeaderStyle";



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
          <div className="w-full flex justify-end ">
            <Link to="/dashboard">
              <FaRegUser className="text-xl mt-3 me-2 hover:scale-105  transition-all duration-300 " />
            </Link>
            <Link className=" flex justify-center items-center bg-linear-to-l h-0 py-5 px-4 from-pink-900 to-pink-700 rounded-xl hover:bg-linear-to-l hover:from-pink-700 hover:to-pink-900" to='/checkout'>
              <MdOutlineShoppingCart className="text-white font-bold " />
              <span className="text-white font-bold text-[15px] ms-2">
                سبد خرید
              </span>
            </Link>
          </div>
        </div>
        <div>
          <NavBar/>
        </div>
      </header>
    </>
  );
}

export default Header;
