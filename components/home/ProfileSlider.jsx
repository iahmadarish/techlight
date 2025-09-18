import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProfileSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample profile data - replace with your actual data
  const profiles = [
    {
      id: 1,
      name: "Dr Kathryn Woodward",
      category: "Medicine",
      credentials: "BMedSci MD MSc (Oxon)",
      image: "/api/placeholder/400/600", // Replace with actual image path
      description: "Dr Kathryn Woodward is a Rhodes Scholar and DPhil candidate in Primary Health Care at the University of Oxford. Her research focuses on health service experiences among refugees in Queensland, Australia. She earned her BMedSci and MD (Distinction, University Medal) from Griffith University and an MSc in Applied Digital Health (Distinction) from Oxford. Kathryn also lectures at Griffith University and serves as Deputy Chair of Canteen, a youth cancer charity."
    },
    {
      id: 2,
      name: "Dr Sarah Johnson",
      category: "Research",
      credentials: "PhD MSc BSc",
      image: "/api/placeholder/400/600",
      description: "Dr Sarah Johnson is a leading researcher in computational biology with over 10 years of experience in bioinformatics. She specializes in genomic data analysis and has published numerous papers in high-impact journals. Currently working on breakthrough cancer research at Cambridge University."
    },
    {
      id: 3,
      name: "Prof Michael Chen",
      category: "Engineering",
      credentials: "PhD MEng BEng",
      image: "/api/placeholder/400/600",
      description: "Prof Michael Chen is a renowned expert in artificial intelligence and machine learning. He has contributed significantly to the field of neural networks and deep learning algorithms. His work has applications in autonomous vehicles and medical imaging systems."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % profiles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
      {/* Main slider container */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px]">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-48 md:h-full">
                <div className="absolute inset-0">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Curved overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/20 md:to-slate-900/60"></div>
                </div>
                {/* Curved border - visible on larger screens */}
                <div className="hidden md:block absolute -right-12 top-0 w-24 h-full">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="w-full h-full text-slate-800 fill-current"
                  >
                    <path d="M0,0 Q50,50 0,100 L0,0 Z" />
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center text-white relative z-10">
                <div className="space-y-4">
                  <div className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                    {profile.category}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {profile.name}
                  </h2>
                  
                  <div className="text-purple-200 text-sm md:text-base font-medium">
                    {profile.credentials}
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-6 md:line-clamp-none">
                    {profile.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group z-20"
        aria-label="Previous profile"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group z-20"
        aria-label="Next profile"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {profiles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm z-20">
        {currentSlide + 1} / {profiles.length}
      </div>
    </div>
  );
};

export default ProfileSlider;