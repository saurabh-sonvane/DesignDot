"use client";

import { FaArrowRightLong } from "react-icons/fa6";

const topics = [
  {
    id: 0,
    text: "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
  },
  {
    id: 1,
    text: "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
  },
  {
    id: 2,
    text: "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
  },
  {
    id: 3,
    text: "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
  },
];

export default function HotTopics() {
  return (
    <section className="w-full bg-white  mx-auto px-6 md:px-10 lg:px-16 py-6 lg:py-8 mb-6">
      
      <div className="flex items-stretch min-h-[110px] flex-col lg:flex-row">
 
        <div className="flex items-center mr-[16px] ml-[16px] lg:ml-0 ">
          <div className="bg-orange-500 px-6 py-2 h-[36px] flex items-center btn-path rounded-md">
            <span className="text-[12px] font-bold text-black tracking-[0.12em] uppercase whitespace-nowrap">
              HOT TOPICS
            </span>
          </div>
        </div>


        <div className="flex flex-1 flex-col lg:flex-row">
          
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="flex-1 py-3 mx-4 mt-6 flex flex-col justify-between relative cursor-pointer border-t-[4px] border-t-[#00338D]"
            >

              <p className="text-[16px] text-black leading-[1.5] mb-4">
                {topic.text}
              </p>

              <span className="text-[16px] text-black w-auto absolute right-[16px] bottom-0">
                <FaArrowRightLong />
              </span>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}