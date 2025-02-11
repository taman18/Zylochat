"use client";
import { useEffect, useState } from "react";
import { Sparkles, Home, Users, Infinity, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const ResponsiveAnimatedText = () => {
  const text = "Join Our Family, Choose As You Like !";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 200);

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <h1 className="flex justify-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl italic font-sans py-8 sm:py-12 md:py-16 lg:py-20 px-4 flex-wrap text-center">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="transition-all duration-300 transform hover:scale-110 inline-block"
          style={{
            color: index === currentIndex ? "#3B82F6" : "#1F2937",
            textShadow: index === currentIndex 
              ? "0 0 6px rgba(59, 130, 246, 0.5)" 
              : "none",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};


function OurPlans() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
          <ResponsiveAnimatedText />
    
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-stretch p-6 md:p-10 max-w-7xl mx-auto">
            {/* Silver Plan */}
            <section className="group bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden w-full md:w-1/4">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white dark:from-transparent via-slate-400 dark:via-slate-600 to-white dark:to-transparent"></div>
              <div>
                <div className="flex justify-center mb-4">
                  <Home className="w-12 h-12 text-gray-700 dark:text-gray-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">Silver</h1>
                <div className="w-16 h-1 bg-gray-400 dark:bg-gray-600 mx-auto mb-6 rounded-full"></div>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                 
                  <li className="flex items-center"><span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>Extra: xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>Price: $xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>Perfect for singles/couples</li>
                </ul>
              </div>
              <button className="mt-8 bg-gray-700 dark:bg-slate-600 text-white font-semibold rounded-xl py-4 px-6 hover:bg-gray-600 dark:hover:bg-slate-500 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
                Subscribe Now
              </button>
            </section>
    
            {/* Gold Plan */}
            <section className="group bg-gradient-to-br from-yellow-200 to-yellow-300 dark:from-yellow-700 dark:to-yellow-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden w-full md:w-1/4">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white dark:from-transparent via-yellow-400 dark:via-yellow-600 to-white dark:to-transparent"></div>
              <div>
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-yellow-700 dark:text-yellow-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">Gold</h1>
                <div className="w-16 h-1 bg-yellow-400 dark:bg-yellow-600 mx-auto mb-6 rounded-full"></div>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>Water Credited: xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>Extra: xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>Price: xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>Ideal for families</li>
                </ul>
              </div>
              <button className="mt-8 bg-yellow-600 dark:bg-yellow-700 text-white font-semibold rounded-xl py-4 px-6 hover:bg-yellow-500 dark:hover:bg-yellow-600 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg" >
                Subscribe Now
              </button>
            </section>
    
            {/* Diamond Plan */}
            <section className="group bg-gradient-to-br from-sky-200 to-sky-300 dark:from-sky-700 dark:to-sky-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden w-full md:w-1/4">
              <Sparkles className="absolute top-4 right-4 text-sky-500 dark:text-sky-400 animate-pulse" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white dark:from-transparent via-sky-400 dark:via-sky-600 to-white dark:to-transparent"></div>
              <div>
                <div className="flex justify-center mb-4">
                  <Infinity className="w-12 h-12 text-sky-700 dark:text-sky-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">Diamond</h1>
                <div className="w-16 h-1 bg-sky-400 dark:bg-sky-600 mx-auto mb-6 rounded-full"></div>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                 
                  <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>Water Credited: xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>Extra: $xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>Price: $xyz</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>Best for large families</li>
                </ul>
              </div>
              <button className="mt-8 bg-sky-600 dark:bg-sky-700 text-white font-semibold rounded-xl py-4 px-6 hover:bg-sky-500 dark:hover:bg-sky-600 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg" >
                Subscribe Now
              </button>
            </section>
    
            
          </div>
        </div>
      );
    }
    
export default OurPlans;