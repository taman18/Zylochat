'use client'
import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('YouTube Shorts');
  const [isAnimating, setIsAnimating] = useState(false);
  const platforms = [
    'YouTube Shorts',
    'Instagram Reels',
    'TikTok',
    'Short Form Videos',
    'Snapchat Spotlight'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentText(prevText => {
          const currentIndex = platforms.indexOf(prevText);
          return platforms[(currentIndex + 1) % platforms.length];
        });
        setIsAnimating(false);
      }, 500);
    }, 1450);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 
      bg-[linear-gradient(90deg,#1e1e2e,#2a2e55,#1e1e2e,#272a49,#1e1e2e)] 
      bg-[length:600%_600%] animate-gradient overflow-hidden">
      
     
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -top-40 -left-40 animate-pulse" />
        <div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] -bottom-40 -right-40 animate-pulse" />
      </div>

     
      <section className="relative flex flex-col items-center text-center text-white max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          <span className="h-[1.2em] flex justify-center items-center overflow-hidden">
            <span
              className={`transform transition-all duration-500 ease-in-out ${
                isAnimating ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              {currentText}
            </span>
          </span>
          <span className="block bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent mt-2">
            Generated Instantly
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-indigo-200/60 mt-6 max-w-2xl">
          Create viral short-form videos instantly with AI-powered generation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <button className="relative px-8 py-4 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg">
            <span className="flex items-center gap-2">
              Try for Free
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          <button className="group px-8 py-4 rounded-lg border border-indigo-500/20 hover:bg-indigo-500/10 backdrop-blur-md transition-all flex items-center gap-3 text-white shadow-md">
            <span className="p-2 rounded-full bg-gradient-to-br from-white/10 to-white/5">
              <Play className="w-4 h-4" />
            </span>
            Watch Demo
          </button>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 max-w-xl">
          {[
            ['100K+', 'Active Users'],
            ['1M+', 'Videos Generated'],
            ['4.9/5', 'User Rating']
          ].map(([value, label]) => (
            <div 
              key={label}
              className="group relative rounded-lg p-6 text-center backdrop-blur-md bg-white/10 border border-white/15 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                {value}
              </span>
              <span className="block text-indigo-200/70 text-sm mt-1">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HeroSection;