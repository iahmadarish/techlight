import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Subtle background decorative elements with academic theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-cyan-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-indigo-100 rounded-full opacity-20"></div>
        {/* Academic pattern overlay */}

      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* University branding */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div className="text-sm font-medium text-blue-800">
                ASSUMPTA DIGITAL UNIVERSITY OF SCIENCE & TECHNOLOGY
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Advance Your Knowledge with{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  ADUST
                </span>{" "}
                Digital Learning
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Access world-class academic programs, research resources, and expert faculty through our advanced Learning Management System. Join a community of scholars and innovators shaping the future.
              </p>
            </div>

            {/* Academic Search Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="Search courses, programs, or research materials..."
                    className="w-full h-14 pl-6 pr-4 text-base border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 bg-white shadow-sm"
                  />
                </div>
                <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white px-8 h-14 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Popular searches: Computer Science, Business Administration, Engineering, Research Methods
              </p>
            </div>

            {/* Enhanced Support Section */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md flex items-center justify-center bg-blue-100">
                  <span className="text-blue-800 font-semibold">DR</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md flex items-center justify-center bg-blue-100">
                  <span className="text-blue-800 font-semibold">PR</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md flex items-center justify-center bg-blue-100">
                  <span className="text-blue-800 font-semibold">AR</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">
                  Academic Support:{" "}
                  <Link href="/support" className="text-blue-700 hover:text-blue-800 underline decoration-2 underline-offset-2">
                    Connect with faculty advisors
                  </Link>
                </p>
                <p className="text-gray-500">Get guidance on courses and research</p>
              </div>
            </div>

            {/* Quick Links for Academic Resources */}
            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium text-base group transition-colors duration-200 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                <span className="mr-2">🎓</span>
                Degree Programs
              </Link>
              <Link
                href="/library"
                className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium text-base group transition-colors duration-200 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                <span className="mr-2">📚</span>
                Digital Library
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium text-base group transition-colors duration-200 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                <span className="mr-2">🔬</span>
                Research Portal
              </Link>
            </div>
          </div>

          {/* Right Content - Academic Image Layout */}
          <div className="relative lg:block hidden">
            <div className="relative h-[600px] w-full">
              {/* Main academic image */}
              <div className="absolute bg-[url(/img/lms.png)] bg-contain bg-no-repeat left-0 top-0 w-4/5 h-4/5 rounded-lg overflow-hidden ">
    
              </div>

              {/* Stats box - top right */}
              <div className="absolute right-0 top-8 w-48 h-32 bg-white rounded-lg shadow-lg p-4 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-800">200+</div>
                <div className="text-sm text-gray-600 mt-2">Academic Programs</div>
                <div className="w-full bg-blue-100 h-2 mt-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>

              {/* Stats box - middle right */}
              <div className="absolute right-0 top-52 w-48 h-32 bg-white rounded-lg shadow-lg p-4 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-800">95%</div>
                <div className="text-sm text-gray-600 mt-2">Graduation Rate</div>
                <div className="w-full bg-blue-100 h-2 mt-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full w-11/12"></div>
                </div>
              </div>

              {/* Stats box - bottom right */}
              <div className="absolute right-8 bottom-16 w-48 h-32 bg-white rounded-lg shadow-lg p-4 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-800">15:1</div>
                <div className="text-sm text-gray-600 mt-2">Student-Faculty Ratio</div>
                <div className="w-full bg-blue-100 h-2 mt-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}