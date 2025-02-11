import { Video, Film, Play } from 'lucide-react';

const features = [
  { id: 1, name: 'Youtube Shorts', icon: Video },
  { id: 2, name: 'Instagram Reels', icon: Film },
  { id: 3, name: 'Tiktok Videos', icon: Play },
  { id: 4, name: 'Faceless Shorts', icon: Video },
  { id: 5, name: 'Story Shorts', icon: Film },
  { id: 6, name: 'Facts Videos', icon: Play },
  { id: 7, name: 'Gameplay Shorts', icon: Video },
  { id: 8, name: 'Stock Content Clips', icon: Film },
  { id: 9, name: 'Subtitles Shorts', icon: Play },
];

const TypesOfContent = () => {
  return (
    <section className="relative min-h-fit bg-gradient-to-b from-black via-indigo-950 to-black py-24 overflow-hidden">
      {/* Grid background matching other sections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            Types of Content
          </h2>
          <p className="text-indigo-200/60 text-lg max-w-xl mx-auto">
            Create diverse content for different platforms with our AI-powered tools
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative rounded-xl p-6 transition-all duration-500 hover:scale-105"
              >
                {/* Glass background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10" />
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col items-center gap-3">
                  {/* Icon container */}
                  <div className="p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  
                  <span className="text-indigo-100 group-hover:text-white transition-colors duration-300 text-center font-medium">
                    {feature.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TypesOfContent;