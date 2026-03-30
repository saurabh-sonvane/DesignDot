"use client";

import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <div className="shrink-0">
            <div>
              <Image src={logo} alt="logo" className=" h-10 w-10" />
            </div>
          </div>
          <div className="flex items-center justify-end sm:gap-4 md:gap-10">
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-6 ">
              <a
                href="#"
                className="text-base font-bold text-gray-900 hover:text-gray-600"
              >
                WHO WE SERVE
              </a>
              <a
                href="#"
                className="text-base font-bold text-gray-900 hover:text-gray-600"
              >
                SOLUTIONS
              </a>
              <a
                href="#"
                className="text-base font-bold text-gray-900 hover:text-gray-600"
              >
                RESOURCES
              </a>
              <a
                href="#"
                className="text-base font-bold text-gray-900 hover:text-gray-600"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="text-base font-bold text-gray-900 hover:text-gray-600"
              >
                CONTACT US
              </a>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-6">
              <button className="p-2 hover:bg-gray-100 rounded-full mr-4 ">
                <IoSearch className="w-6 h-6  text-gray-900" />
              </button>

              <button className="hidden sm:flex items-center space-x-1 text-base font-bold text-gray-900 mr-4">
                <span>IND</span>
                <IoMdArrowDropdown className="w-4 h-4" />
              </button>

              <button className="hidden sm:flex items-center space-x-1 text-base font-bold text-gray-900">
                <span>ENGLISH</span>
                <IoMdArrowDropdown className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu */}

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded transition text-gray-900"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="transition-all duration-200">
                {mobileOpen ? (
                  <IoCloseSharp className="w-6 h-6" />
                ) : (
                  <IoMdMenu className="w-6 h-6" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-bold text-gray-900 py-2">
                WHO WE SERVE
              </a>
              <a href="#" className="text-sm font-bold text-gray-900 py-2">
                SOLUTIONS
              </a>
              <a href="#" className="text-sm font-bold text-gray-900 py-2">
                RESOURCES
              </a>
              <a href="#" className="text-sm font-bold text-gray-900 py-2">
                ABOUT US
              </a>
              <a href="#" className="text-sm font-bold text-gray-900 py-2">
                CONTACT US
              </a>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 sm:hidden">
                <button className="flex items-center space-x-1 text-sm font-bold text-gray-900">
                  <span>IND</span>
                  <IoMdArrowDropdown className="w-4 h-4" />
                </button>
                <button className="flex items-center space-x-1 text-sm font-bold text-gray-900">
                  <span>ENGLISH</span>
                  <IoMdArrowDropdown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
