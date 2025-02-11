"use client";
import { useEffect, useState } from "react";
import { Sparkles, Home, Users, Infinity, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import CardTravelIcon from '@mui/icons-material/CardTravel';

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
            color: index === currentIndex ? "#3B82F6" : "#c7d2fecc",
            textShadow:
              index === currentIndex
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
    <div className="min-h-screen bg-[#111827]">
      <ResponsiveAnimatedText />

      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-stretch p-6 md:p-10 max-w-7xl mx-auto">
        {/* Free Plan */}
        <section className="group bg-[#F3E5F5] rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden w-full md:w-1/4 min-w-[400px]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white dark:from-transparent via-slate-400 dark:via-slate-600 to-white dark:to-transparent"></div>
          <div>
            <div className="flex justify-center mb-4">
              <Home className="w-12 h-12 text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
              Explorer
            </h1>
            <div className="w-16 h-1 bg-gray-400 dark:bg-gray-600 mx-auto mb-6 rounded-full"></div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>
                7 Days Free
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>
                Unlimited DMs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>
                Unlimited Comments
              </li>
            </ul>
          </div>
          <button className="mt-8 bg-gray-700 dark:bg-slate-600 text-white font-semibold rounded-xl py-4 px-6 hover:bg-gray-600 dark:hover:bg-slate-500 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
            Subscribe Now
          </button>
        </section>
        {/* Silver Plan */}
        <section className="group bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden w-full md:w-1/4 min-w-[400px]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white dark:from-transparent via-slate-400 dark:via-slate-600 to-white dark:to-transparent"></div>
          <div>
            <div className="flex justify-center mb-4">
              <Home className="w-12 h-12 text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
              Booster
            </h1>
            <div className="w-16 h-1 bg-gray-400 dark:bg-gray-600 mx-auto mb-6 rounded-full"></div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>
                15K DMs & Comments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>
                Welcome Message
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>
                Normal Support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>
                Remove Branding
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2"></span>
                Link Unlimited Post
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-5">
            <button className="mt-8 bg-gray-700 dark:bg-slate-600 text-white font-semibold rounded-xl py-4 px-6 hover:bg-gray-600 dark:hover:bg-slate-500 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
              799/month
            </button>
            <button className="mt-8 bg-gray-700 dark:bg-slate-600 text-white font-semibold rounded-xl py-4 px-6 hover:bg-gray-600 dark:hover:bg-slate-500 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
              8,149/year
            </button>
          </div>
        </section>

        {/* Gold Plan */}
        <section className="group bg-gradient-to-br from-yellow-200 to-yellow-300 dark:from-yellow-700 dark:to-yellow-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden w-full md:w-1/4 min-w-[400px]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white dark:from-transparent via-yellow-400 dark:via-yellow-600 to-white dark:to-transparent"></div>
          <div>
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-yellow-700 dark:text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
              Influencer
            </h1>
            <div className="w-16 h-1 bg-yellow-400 dark:bg-yellow-600 mx-auto mb-6 rounded-full"></div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>
                50K DMs & Comments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>
                Welcome Message
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>
                Priority Support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>
                Remove Branding
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>
                Link Unlimited Post & Story
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-600 dark:bg-yellow-400 rounded-full mr-2"></span>
                Follow Asking Button
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-5">
            <button className="mt-8 bg-yellow-600 dark:bg-yellow-700 text-white font-semibold rounded-xl py-4 px-6 hover:bg-yellow-500 dark:hover:bg-yellow-600 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
              1,199/month
            </button>
            <button className="mt-8 bg-yellow-600 dark:bg-yellow-700 text-white font-semibold rounded-xl py-4 px-6 hover:bg-yellow-500 dark:hover:bg-yellow-600 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
              11,499/year
            </button>
          </div>
        </section>

        {/* Diamond Plan */}
        <section className="group bg-gradient-to-br from-sky-200 to-sky-300 dark:from-sky-700 dark:to-sky-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden w-full md:w-1/4 min-w-[400px]">
          <Sparkles className="absolute top-4 right-4 text-sky-500 dark:text-sky-400 animate-pulse" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white dark:from-transparent via-sky-400 dark:via-sky-600 to-white dark:to-transparent"></div>
          <div>
            <div className="flex justify-center mb-4">
              <Infinity className="w-12 h-12 text-sky-700 dark:text-sky-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
              Visionary
            </h1>
            <div className="w-16 h-1 bg-sky-400 dark:bg-sky-600 mx-auto mb-6 rounded-full"></div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>
                Unlimited DMs & Comments
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>
                Welcome Message
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>
                Priority Support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>
                Removing Brand
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>
                Link Unlimited Post & Story
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>
                Follow Asking Button
              </li>
              <li className="flex items-center font-bold">
                <span className="w-2 h-2 bg-sky-600 dark:bg-sky-400 rounded-full mr-2"></span>
                AI generated automation suggestion
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-5">
            <button className="mt-8 bg-sky-600 dark:bg-sky-700 text-white font-semibold rounded-xl py-4 px-6 hover:bg-sky-500 dark:hover:bg-sky-600 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
              1,999/month
            </button>
            <button className="mt-8 bg-sky-600 dark:bg-sky-700 text-white font-semibold rounded-xl py-4 px-6 hover:bg-sky-500 dark:hover:bg-sky-600 transition duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
              17,949/year
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurPlans;