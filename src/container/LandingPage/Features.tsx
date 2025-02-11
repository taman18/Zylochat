'use client'
import React from 'react';
import { 
  Video, 
  FileText, 
  Wand2, 
  Mic, 
  Film, 
  ImagePlus,
  Clapperboard,
  Library,
  Gamepad2,
  Subtitles,
  Edit
} from 'lucide-react';

const features = [
  { id: 1, name: 'Prompt to Video', icon: Video, description: 'Convert text prompts into stunning videos instantly' },
  { id: 2, name: 'AI Script Generator', icon: FileText, description: 'Generate engaging scripts with AI assistance' },
  { id: 3, name: 'Script to Video', icon: Wand2, description: 'Transform your scripts into professional videos' },
  { id: 4, name: 'AI Voices', icon: Mic, description: 'Natural-sounding AI voices for your content' },
  { id: 5, name: 'Short Videos', icon: Film, description: 'Create trending short-form video content' },
  { id: 6, name: 'AI Image Generator', icon: ImagePlus, description: 'Generate custom images for your videos' },
  { id: 7, name: 'AI Animated Image Generator', icon: Clapperboard, description: 'Create animated visuals with AI' },
  { id: 8, name: 'Built-in Stock Library', icon: Library, description: 'Access premium stock content instantly' },
  { id: 9, name: 'Gameplay Background Videos', icon: Gamepad2, description: 'High-quality gaming backgrounds' },
  { id: 10, name: 'Audio Subtitles', icon: Subtitles, description: 'Automatic subtitle generation' },
  { id: 11, name: 'AI Video Editor', icon: Edit, description: 'Professional video editing with AI' }
];

const FeaturesSection = () => {
  return (
    <section className="relative min-h-fit bg-gradient-to-b from-gray-900 via-gray-950 to-black py-24 px-6 sm:px-12 overflow-hidden">
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] -top-40 -left-40 animate-pulse" />
        <div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] -bottom-40 -right-40 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-lg text-indigo-200/80 max-w-2xl mx-auto mt-4">
            Create stunning content with our comprehensive suite of AI-powered tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative rounded-xl p-6 transition-all duration-500 ease-out hover:scale-105"
              >
                
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 shadow-lg" />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center text-center gap-4">
                  
                  {/* Icon */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-500">
                    <Icon className="w-8 h-8 text-indigo-300 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  {/* Feature Name & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors duration-500">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-indigo-200/70 group-hover:text-indigo-100 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>
                
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;