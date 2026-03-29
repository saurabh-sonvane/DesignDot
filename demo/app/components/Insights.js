"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 0,
    tag: "Pre-Market",
    title: "Pre-Market Entry",
    subtitle:
      "Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets",
    description:
      "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
    image: "/img1.png",
  },

  {
    id: 1,
    tag: "Operations",
    title: "Operations",
    subtitle: "Planning and Managing Processes for Efficient Production",
    description:
      "Planning, organizing, and managing processes to efficiently produce goods or services.",
    image: "/img3.jpg",
  },
  {
    id: 2,
    tag: "Growth & Expansion",
    title: "Growth & Expansion",
    subtitle: "Increasing business size, market reach, revenue, and resources.",
    description:
      "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
    image: "/hero_img.jpg",
  },
    {
    id: 3,
    tag: "Market Entry",
    title: "Market Entry",
    subtitle:
      "Research Demand, Assess Competition and Localize Strategy for Growth",
    description:
      "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
    image: "/img2.jpg",
  },
];

export default function Insights() {
  const [active, setActive] = useState(0);
  const autoRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active) return;
    setActive(idx);
    restartAuto();
  };

  const restartAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3500);
  };

  useEffect(() => {
    restartAuto();
    return () => clearInterval(autoRef.current);
  }, []);

  return (
    <section className="w-full mt-8 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-12 ">
        <div className="flex flex-col lg:flex-row gap-10">

          <div className=" lg:w-auto lg:flex-shrink-0 content-center justify-center">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-8 shadow-lg inline-block">
              <h2 className="text-2xl font-bold text-gray-800 whitespace-nowrap">
                INSPIRATION
                <br />
                 & INSIGHTS
              </h2>
            </div>
          </div>

          <div className="w-full lg:w-[36%] flex flex-col">
            <div>
              {slides.map((slide) => {
                const isActive = active === slide.id;

                return (
                  <div key={slide.id}>
                    <button
                      onClick={() => goTo(slide.id)}
                      className="w-full text-left py-3"
                    >
                      <p
                        className={`text-base font-bold ${
                          isActive ? "text-[#00338D]" : "text-black"
                        }`}
                      >
                        {slide.title}
                      </p>

                     
                        <p className={`text-sm mt-1 leading-relaxed ${
                          isActive ? "text-[#00338D]" : "text-black"
                        }`}>
                          {slide.description}
                        </p>
                      
                    </button>

                    <div
                      className={`h-[1px] ${
                        isActive ? "bg-[#00338D]" : "bg-gray-300"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" flex w-full lg:w-[400px] xl:w-[450px] h-[300px] sm:h-[400px] lg:h-[460px] gap-1 ">
            {slides.map((slide) => {
              const isActive = active === slide.id;

              return (
                <div
                  key={slide.id}
                  onClick={() => goTo(slide.id)}
                  className={`rounded relative cursor-pointer overflow-hidden transition-all duration-500 min-w-[50px] ${
                    isActive ? "flex-[3]" : "flex-[0.6]"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.tag}
                    fill
                    className={`rounded object-cover transition-all duration-500 ${
                      isActive ? "brightness-75" : "brightness-50"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute inset-0 flex items-end p-4">
                    {isActive ? (
                      <div>
                        <p className="text-[20px] font-bold uppercase tracking-wider text-white mb-1">
                          {slide.tag}
                        </p>
                        <p className="text-base text-white  leading-snug">
                          {slide.subtitle}
                        </p>
                      </div>
                    ) : (
                      <div className="w-full flex justify-center items-end pb-2">
                        <span className="text-[20px] font-bold text-white uppercase tracking-wider rotate-180 [writing-mode:vertical-rl]">
                          {slide.tag}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
