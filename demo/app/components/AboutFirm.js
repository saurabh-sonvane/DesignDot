"use client";

import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import office from "../../public/office.png";
import CountUp from "react-countup";

export default function AboutFirm() {

  return (
  
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-12 items-start lg:items-center bg-[url('/map.jpg')] bg-no-repeat bg-cover bg-center lg:bg-left lg:bg-[length:60%_100%]">
          <div className=" lg:w-auto lg:flex-shrink-0">
            <div className="bg-gradient-to-br flex flex-wrap items-end content-end h-[200px] w-[200px] pb-[20px] pl-[20px] from-gray-200 to-gray-300 rounded-2xl shadow-lg inline-block">
              <h2 className="text-2xl font-bold text-gray-800 whitespace-nowrap">
                ABOUT
                <br />
                FIRM
              </h2>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-12">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">
                    HLS Global Group
                  </h1>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  Is an international accounting and business advisory firm with
                  a focus on providing superior services in the areas of
                  accounting, tax, audit, advisory, and consulting. Founded in
                  1988, we pride ourselves in delivering the highest levels of
                  quality and customer service while rendering unbiased
                  objective input and advice to a broad range of professionals
                  serving clients in the United States, Japan, Mexico, India,
                  Germany, and UAE. While catering to the business requirements
                  of Japanese subsidiaries operating in the United States,
                  Mexico, India, Germany, and UAE, we also provide comprehensive
                  solutions to non-Japanese multinational companies operating in
                  Japan.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <div className="pt-2">
                    <h3 className="text-4xl  font-bold text-gray-900 mb-2">
                      <CountUp end={250} duration={3} />+
                    </h3>
                    <p className="text-gray-700 text-sm font-medium leading-tight">
                      Professional Staff
                      <br />
                      Members Globally
                    </p>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      <CountUp end={1000} duration={3} />+
                    </h3>
                    <p className="text-gray-700 text-sm font-medium leading-tight">
                      Clients in the HLS
                      <br />
                      Global Network
                    </p>
                  </div>

                  <div className=" pt-2">
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      <CountUp end={35} duration={3} />+
                    </h3>
                    <p className="text-gray-700 text-sm font-medium leading-tight">
                      Years of Experience
                      <br />
                      Connecting Japan
                      <br />
                      and the World
                    </p>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      <CountUp end={15} duration={3} />+
                    </h3>
                    <p className="text-gray-700 text-sm font-medium leading-tight">
                      Countries Covered
                      <br />
                      With Our Alliance
                      <br />
                      Network
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto lg:shrink-0 mt-6 lg:mt-0 ">
                <div className="flex justify-end lg:justify-end mb-6">
                  <button
                    className=" cursor-pointer bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-2 sm:pl-4 py-2 rounded-[20px] font-semibold shadow-lg transition-all duration-300 flex items-center gap-12 w-full sm:w-auto justify-between sm:justify-center "
                  >
                    <div className=" text-xs flex items-center gap-2 font-bold">
                      <span>WE ARE LOCATED</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[15px] font-bold">INDIA</span>
                      <IoMdArrowDropdown />
                    </div>
                  </button>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full lg:w-[350px] xl:w-[450px] h-[300px] sm:h-[400px] lg:h-[500px]">
                  <Image
                    src={office}
                    alt="Modern Office Building"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
