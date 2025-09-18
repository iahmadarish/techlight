import Image from "next/image";
import { Facebook, Youtube, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 container gap-10">
                {/* //? Contact Info */}
                <div>
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                            A
                        </div>
                        <span className="text-blue-800 font-semibold text-sm">ADUST</span>
                    </div>
                    <p className="text-sm leading-6 mt-4 flex items-start">
                        <MapPin className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-blue-700" />
                        Sector# 15 (Near Uttara Passport Office)
                        Uttara, Dhaka-1230
                    </p>
                    <p className="mt-4 mb-1 text-sm flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-700" /> info@adust.edu.bd
                    </p>
                    <p className="text-sm mb-6 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-700" /> +880 1787666578
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                            <Facebook size={22} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                            <Youtube size={22} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                            <Linkedin size={22} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                            <Twitter size={22} />
                        </a>
                    </div>
                </div>

                {/* //? Quick Links */}
                <div className="md:mx-auto">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                About University
                            </Link>
                        </li>
                        <li>
                            <Link href="#programs" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Academic Programs
                            </Link>
                        </li>
                        <li>
                            <Link href="/admission" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Admissions
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* //? Academic Resources */}
                <div className="md:ml-auto">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Academic Resources</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/library" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Digital Library
                            </Link>
                        </li>
                        <li>
                            <Link href="/research" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Research Portal
                            </Link>
                        </li>
                        <li>
                            <Link href="/lms" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Learning Management System
                            </Link>
                        </li>
                        <li>
                            <Link href="/faculty" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Faculty Directory
                            </Link>
                        </li>
                        <li>
                            <Link href="/calendar" className="hover:text-blue-700 transition-colors flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></span>
                                Academic Calendar
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* //? University Info */}
                <div className="md:ml-auto">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">University Information</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-600 mb-2">
                            Accredited by the University Grants Commission of Bangladesh
                        </p>
                        <p className="text-xs text-gray-600">
                            e-TIN: <span className="text-gray-800 font-medium">572113303278</span>
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                            TRAD/DSCC/132971/2022
                        </p>
                    </div>
                    <div className="mt-4 p-3 bg-gray-100 rounded-lg text-center">
                        <p className="text-xs font-medium text-gray-700">Emergency Contact</p>
                        <p className="text-sm font-semibold text-blue-800 mt-1">+880 1787666576,</p>
                    </div>
                </div>
            </div>

            <hr className="border-t border-gray-300 my-8" />
            <div className="text-center text-sm text-gray-600">
                © {new Date().getFullYear()}  Atish Dipankar University of Science & Technology (ADUST). All rights reserved.
            </div>
        </footer>
    );
}