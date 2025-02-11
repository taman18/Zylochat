"use client";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

const POPULAR_QUESTIONS = [
  {
    id: "1",
    heading: "How does VidAI generate videos?",
    description: "VidAI uses advanced artificial intelligence to analyze your input and generate high-quality short-form videos. Our AI understands context, style, and trending patterns to create engaging content optimized for each platform."
  },
  {
    id: "2",
    heading: "What platforms are supported?",
    description: "We support all major short-form video platforms including YouTube Shorts, Instagram Reels, TikTok, and more. Each video is optimized for the specific platform's requirements and best practices."
  },
  {
    id: "3",
    heading: "How long does it take to generate a video?",
    description: "Most videos are generated within minutes. The exact time depends on the complexity of your request and the length of the final video. Our AI works quickly to ensure you can create and publish content efficiently."
  },
  {
    id: "4",
    heading: "Can I edit the generated videos?",
    description: "Yes! All generated videos can be customized using our built-in editor. You can modify text, adjust timing, change music, add effects, and make other adjustments to perfect your content."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAnswer = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative min-h-fit bg-gradient-to-b from-black via-indigo-950 to-black py-24 overflow-hidden">
      {/* Grid background matching other sections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-indigo-200/60 text-lg max-w-xl mx-auto">
            Everything you need to know about VidAI
          </p>
        </div>

        <div className="space-y-4">
          {POPULAR_QUESTIONS.map((faq) => (
            <div
              key={faq.id}
              className="group relative rounded-xl overflow-hidden transition-all duration-500"
            >
              {/* Glass background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10" />
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <button
                  onClick={() => toggleAnswer(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <span className="text-lg font-medium text-white group-hover:text-indigo-200 transition-colors duration-300 pr-4">
                    {faq.heading}
                  </span>
                  <div className={`p-2 rounded-lg bg-indigo-500/10 transition-all duration-300 ${
                    openId === faq.id ? 'bg-indigo-500/20' : ''
                  }`}>
                    <ChevronUp 
                      className={`w-5 h-5 text-indigo-400 transition-transform duration-300 ${
                        openId === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <div className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openId === faq.id ? 'max-h-96' : 'max-h-0'}
                `}>
                  <div className="px-6 py-5 text-indigo-200/70 border-t border-white/10">
                    {faq.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}