import React from 'react';
import { Star, Users, GraduationCap, ArrowRight, Play } from 'lucide-react';

const LMSHeroSection = () => {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                Learning solution that works for you
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Your all-in-one LMS solution with an admin panel, website, and mobile app.
                                Perfect for mentors to teach effectively and learners to gain knowledge easily.
                                Modern tools for modern education.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                                Join Today
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                View Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Visual Content */}
                    <div className="relative flex items-center justify-center">
                        <img src="/img/lms.jpg" alt="" />

                    </div>
                </div>

                {/* Floating Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">50k+</div>
                        <div className="text-gray-600">Active Users</div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <GraduationCap className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">1000+</div>
                        <div className="text-gray-600">Courses</div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <Star className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">4.9</div>
                        <div className="text-gray-600">Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LMSHeroSection;