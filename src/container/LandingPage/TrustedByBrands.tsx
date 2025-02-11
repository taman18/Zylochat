import Image from 'next/image';

const TrustedByBrands = () => {
  const brands = [
    {
      id: 1,
      image: "/matt-par.jpg",
      name: "Matt Par",
      achievement: "1B+ Social Media Views",
      quote: "Short form content is blowing up and VidAI is the BEST way to generate 100 great shorts per month that actually get views."
    },
    {
      id: 2,
      image: "/priyam-raj.jpg",
      name: "Priyam Raj",
      achievement: "7-Figure Entrepreneur",
      quote: "We've made the easiest way for you to generate amazing shorts instantly."
    }
  ];

  return (
    <section className="relative min-h-fit bg-gradient-to-b from-black via-indigo-950 to-black py-24 overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            Trusted By Leaders
          </h2>
          <p className="text-indigo-200/60 text-center mb-16 max-w-xl mx-auto">
            Join successful creators who trust VidAI for their content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group relative rounded-xl p-8 transition-all duration-500"
            >
            
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl" />
              
            
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                
                <div className="relative flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src={brand.image}
                      alt={`${brand.name}'s testimonial`}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 96px, 128px"
                      priority
                    />
                  </div>
                </div>
          
                <div className="flex flex-col text-center md:text-left">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors duration-500">
                      {brand.name}
                    </h3>
                    <p className="text-indigo-400 text-sm font-medium">
                      {brand.achievement}
                    </p>
                  </div>
                  
                  <p className="text-indigo-200/70 group-hover:text-indigo-100/90 transition-colors duration-500 text-sm leading-relaxed">
                    "{brand.quote}"
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

export default TrustedByBrands;