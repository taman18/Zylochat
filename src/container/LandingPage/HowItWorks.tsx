import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: "/step1.jpg",
      step: "Step 1",
      title: "Create a project",
      description: "Start with a new project in just one click",
      screenshot: "/create-project-screenshot.jpg"
    },
    {
      id: 2,
      image: "/step2.jpg",
      step: "Step 2",
      title: "Enter Inputs",
      description: "Provide your content details and preferences",
      screenshot: "/enter-inputs-screenshot.jpg"
    },
    {
      id: 3,
      image: "/step3.jpg",
      step: "Step 3",
      title: "Make Changes",
      description: "Customize and refine your content",
      screenshot: "/make-changes-screenshot.jpg"
    },
    {
      id: 4,
      image: "/step4.jpg",
      step: "Step 4",
      title: "Export",
      description: "Download your video in preferred format",
      screenshot: "/export-screenshot.jpg"
    }
  ];

  return (
    <section className="relative min-h-fit bg-gradient-to-b from-black via-indigo-950 to-black py-24 overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            How Does It Work?
          </h2>
          <p className="text-indigo-200/60 text-lg max-w-xl mx-auto">
            Generate short-form content in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="group relative">
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 w-8 z-10">
                  <ArrowRight className="w-8 h-8 text-indigo-500/30" />
                </div>
              )}
              
              <div className="relative rounded-xl p-6 transition-all duration-500 hover:scale-105">
                
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10" />
                
                
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col items-center">
                  
                  <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative">
                      <Image
                        src={step.screenshot}
                        alt={step.title}
                        width={400}
                        height={300}
                        className="object-cover rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                  
                  
                  <span className="px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-3">
                    {step.step}
                  </span>
                  
                  
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors duration-500 mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-indigo-200/70 text-sm text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;