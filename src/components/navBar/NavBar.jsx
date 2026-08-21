import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import CategoryNav from "./CategoryNav";
import navbar from "../../constants/navbar"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full container mt-6 ">
      {/* دکمه همبرگر (فقط در موبایل) */}
      <div className="lg:hidden py-2">
        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-gray-700 hover:text-pink-600 transition-colors focus:outline-none"
        >
          <HiMenu />
        </button>
      </div>

      <ul className="hidden lg:flex lg:items-center lg:gap-x-10 relative">
        {navbar.map((item, index) => (
          <li key={index} className="border-b lg:border-none py-2 lg:py-0">
            {item.isCategory ? (
              <CategoryNav item={item} />
            ) : (
              <Link
                to={item.path}
                className="gap-2 py-1 flex justify-center items-center transition-colors duration-300 px-4 lg:px-0"
              >
                <item.icon className="text-[1.09rem] text-black/75" />
                <span className="pt-1 text-[0.97rem] font-bold hover:text-black text-black/75 hover:scale-105 duration-300 transition-transform">
                  {item.name}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/*  منوی کناری (Drawer) - از راست به چپ */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* هدر منوی کناری */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold text-pink-700">
            فروشگاه مبل آرا
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700 hover:text-pink-600 transition-colors"
          >
            <HiX />
          </button>
        </div>

        {/* آیتم‌های منو */}
        <ul className="p-4 space-y-2">
          {navbar.map((item, index) => (
            <li key={index}>
              {item.isCategory ? (
                <CategoryNav item={item} onClose={() => setIsOpen(false)} />
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="text-lg" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* پرده تاریک (Backdrop) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50  lg:hidden"
          style={{ zIndex: 1 }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
