import Image from "next/image";
import hero from "../../public/hero_img.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import user1 from "../../public/user1.png";
import user2 from "../../public/user2.png";
import user3 from "../../public/user3.png";

export default function Hero() {
  return (
    <section className="w-full bg-[#0E3A8A] relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 py-12 lg:py-20">
        <div className="max-w-xl text-white z-10 relative">
          <p className="text-base tracking-wide mb-4 opacity-80">
            ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] border-b-[4.5px] border-b[white] w-fit">
            EMPOWERED <br /> WORKPLACES
          </h1>

          <p className="mt-4 text-base text-gray-200 max-w-md">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          <button className="mt-6 bg-orange-500 text-sm text-black pl-4 pr-8 px-6 py-3 rounded-md flex items-center justify-center font-bold gap-2 btn-path">
            <FaArrowRightLong />
            LET’S CONNECT
          </button>

          <p className="mt-10 text-xs text-white">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND
            THE WORLD
          </p>
        </div>
      </div>

      <div className="md:flex gap-2 absolute bottom-4 right-6  z-10">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4B4B4B]">
            <Image
              src={user1}
              alt="user"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4B4B4B] -ml-5">
            <Image
              src={user2}
              alt="user"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4B4B4B] -ml-5">
            <Image
              src={user3}
              alt="user"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full -ml-5 border-2 border-white text-[10px] font-bold">
            MORE
          </div>
        </div>

        <div className="text-black lg:text-white font-bold ">
          <p className="text-[32px] font-bold">250 +</p>
          <p className=" text-[10px] opacity-80 max-w-[80px]">Enjoy Working with us</p>
        </div>
      </div>

      <div className="hidden lg:block absolute top-0 right-0 h-full  hero-image">
        <Image src={hero} alt="office" fill className="object-cover" />
      </div>

      <div className="lg:hidden">
        <Image src={hero} alt="office" className="w-full h-auto" />
      </div>
    </section>
  );
}
