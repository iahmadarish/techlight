"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const AcademicLearningPlatform = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "World-Class Academic Programs",
      description: "Access rigorous degree programs taught by distinguished faculty with expertise across diverse disciplines. Our curriculum combines theoretical knowledge with practical application.",
      image: "/campus/one.jpg" 
    },
    {
      id: 2,
      title: "Cutting-Edge Research Opportunities",
      description: "Engage in groundbreaking research with state-of-the-art facilities and mentorship from leading scholars. Contribute to knowledge creation and innovation in your field.",
      image: "/campus/tow.jpg" 
    },
    {
      id: 3,
      title: "Academic Support Services",
      description: "Benefit from comprehensive academic support including library resources, writing centers, tutoring, and faculty office hours designed to ensure your success.",
      image: "/campus/three.jpg" 
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-start mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Excellence in <span className='text-blue-800'>Higher Education</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-start leading-relaxed">
            Discover our comprehensive academic programs and join a community dedicated to knowledge, research, and innovation.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[600px]">
            {/* Image Section - FIXED */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden bg-gray-100">
              {/* Actual image display */}
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback content if image doesn't load */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-600 text-white p-8 text-center ">
                <div>
                  <h2 className="text-3xl font-bold mb-4">ADUST Virtual Campus</h2>
                  <p className="text-blue-100">Experience higher education reimagined for the digital age</p>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-600 scale-110' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="max-w-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-blue-800" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
                    {slides[currentSlide].title}
                  </h2>
                </div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-blue-200 pl-4 py-2">
                  {slides[currentSlide].description}
                </p>
                
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Programs
                  </button>
                  <button className="border border-blue-300 hover:bg-blue-50 text-blue-800 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Meet Faculty
                  </button>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-blue-600 w-8' 
                            : 'bg-slate-300 w-2'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500 ml-3">
                    {currentSlide + 1} of {slides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Comprehensive Curriculum</h3>
            <p className="text-slate-600">Rigorous academic programs across diverse disciplines with industry-relevant content</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Expert Faculty</h3>
            <p className="text-slate-600">Learn from distinguished professors and industry experts with years of experience</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Accredited Degrees</h3>
            <p className="text-slate-600">Earn recognized qualifications that enhance your career prospects and academic journey</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-800 rounded-2xl p-8 mt-16 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Degree Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Faculty Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="text-blue-200">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Graduation Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicLearningPlatform;