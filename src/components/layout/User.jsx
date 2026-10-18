import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaRegUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
  FaThLarge,
} from "react-icons/fa";

import { useUser } from "../../hooks/useUser";

function User() {
  const { user, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {user ? (
        <>
          {/* دکمه پروفایل */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
                flex items-center justify-center
                w-10 h-10 me-2
                rounded-full
                bg-pink-50 hover:bg-pink-100
                border border-pink-200
                text-black hover:text-pink-700  /* 👈 این تغییر کوچیک */
                transition-all duration-300
                hover:scale-105 hover:shadow-md hover:shadow-pink-200/50
                focus:outline-none focus:ring-2 focus:ring-pink-400
"
            style={{
              boxShadow:
                "rgba(3, 2, 3, 0.084) 0px 54px 55px, rgba(37, 8, 26, 0.023) 0px -12px 30px, rgba(177, 18, 129, 0.122) 0px 4px 6px, rgba(185, 21, 136, 0.138) 0px 12px 13px, rgba(112, 17, 69, 0.204) 0px -3px 5px",
            }}
          >
            <FaRegUser className="text-xl" />
          </button>
          {/* منوی کشویی */}
          <div
            className={`
              absolute left-0 top-full mt-3  md:mt-1
              w-56 sm:w-64
              bg-white rounded-2xl
              shadow-2xl shadow-pink-200/60
              border border-pink-100
              z-20 overflow-hidden
              origin-top-left
              transition-all duration-300 ease-out
              ${
                isMenuOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }
            `}
          >
            <div className="p-4 bg-linear-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/10 rounded-full blur-xl" />

              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center shrink-0 border border-white/10">
                  <FaUserCircle className="text-2xl text-gray-200" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-gray-300">
                    خوش آمدید
                  </p>
                  <p className="text-sm font-bold truncate text-white">
                    {user.firstName} {user.lastName || ""}
                  </p>
                </div>
              </div>
            </div>

            {/* آیتم‌های منو */}
            <div className="p-2">
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="
                  flex items-center gap-3
                  px-3 py-2.5 sm:py-3
                  rounded-xl
                  text-gray-700
                  hover:bg-pink-50 hover:text-pink-700
                  transition-all duration-200
                  group
                "
              >
                <span className="w-8 h-8 rounded-lg bg-pink-100 group-hover:bg-pink-200 flex items-center justify-center text-pink-600 transition-colors">
                  <FaThLarge className="text-sm" />
                </span>
                <span className="text-sm font-medium">داشبورد</span>
              </Link>

              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="
                  w-full flex items-center gap-3
                  px-3 py-2.5 sm:py-3
                  rounded-xl
                  text-red-500
                  hover:bg-red-50
                  transition-all duration-200
                  group
                "
              >
                <span className="w-8 h-8 rounded-lg bg-red-100 group-hover:bg-red-200 flex items-center justify-center text-red-500 transition-colors">
                  <FaSignOutAlt className="text-sm" />
                </span>
                <span className="text-sm font-medium">خروج از حساب</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <Link
          to="/login"
          className="
            flex items-center me-2 justify-center
            w-10 h-10
            rounded-full
            bg-pink-50 hover:bg-pink-100
            text-black
            transition-all duration-300
            hover:scale-105 hover:shadow-md hover:shadow-pink-200/50
          "
          style={{
            boxShadow:
              "rgba(3, 2, 3, 0.084) 0px 54px 55px, rgba(37, 8, 26, 0.023) 0px -12px 30px, rgba(177, 18, 129, 0.122) 0px 4px 6px, rgba(185, 21, 136, 0.138) 0px 12px 13px, rgba(112, 17, 69, 0.204) 0px -3px 5px",
          }}
          title="ورود | ثبت‌نام"
        >
          <FaSignInAlt className="text-xl" />
        </Link>
      )}
    </div>
  );
}

export default User;
