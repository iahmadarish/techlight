"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import "./contact.css";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-black py-16 px-4 sm:px-8">

            <div className="mb-16 max-w-7xl mx-auto">
                <img
                    fill
                    sizes=""
                    src="/img/adust.jpg"
                    alt="adust image"
                    className="object-cover "
                />
            </div>


            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start lg:items-center">
                {/* //? Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-10"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold mb-2">Let&apos;s Connect</h2>
                        <p className="text-lg text-gray-900 max-w-md">
                            Have a question, partnership idea or just want to say hi? Reach out —
                            we’re here to help.
                        </p>

                        <div className="space-y-5 text-base">
                            <div className="flex items-center gap-4">
                                <Mail className="text-black" />
                                <span>info@adust.com.bd</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-black" />
                                <span>+880 1787666578</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="text-black mt-1" />
                                <span>
                                    Sector# 15 (Near Uttara Passport Office) Uttara, Dhaka-1230
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden border-2 border-white/10 hover:border-teal-500 transition duration-300 shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.991334967957!2d90.37666149612848!3d23.866683973046182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e89026c611%3A0x43cd9f7f323b58dd!2sAtish%20Dipankar%20University%20of%20Science%20%26%20Technology!5e0!3m2!1sen!2sbd!4v1757755010784!5m2!1sen!2sbd"
                            width="100%"
                            height="300"
                            allowFullScreen
                            loading="lazy"
                            className="border-0 w-full grayscale-[15%] contrast-125"
                        ></iframe>
                    </div>
                </motion.div>

                {/* //? Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="self-center space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-red-500 hover:border-teal-500  transition-all duration-500"
                >
                    <h3 className="text-3xl font-semibold text-black mb-2">Send a Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="sexy-input "
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="sexy-input"
                        />
                    </div>

                    <input type="text" placeholder="Subject" required className="sexy-input outline-1" />

                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        required
                        className="sexy-input resize-none"
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-semibold py-3 rounded-xl shadow-md hover:shadow-cyan-400/40 transition-all duration-300"
                    >
                        🚀 Send Message
                    </motion.button>
                </motion.form>
            </div>


            <div className="mb-16 max-w-7xl mx-auto flex py-20 gap-x-5 rounded ">
                <div>
                    <p className="py-6">
Our programmes will help you push your limits, evolve and emerge with a stronger mindset. This growth comes not only from what you learn in the classroom, but also from the experiences you gain outside of it – exploring historic sites, immersing yourself in new cultures and forming lasting friendships.
                    </p>
                <img
                    fill
                    sizes=""
                    src="/img/adust.jpg"
                    alt="adust image"
                    className="object-cover "
                /> 
                </div>
                <div>
                    <p className="py-6">
                       Explore your subject in detail with an engaging mix of theory and practice, in small-group classes led by inspiring tutors. Begin to build expertise and confidence in your field, and earn a graduation certificate and a personalised Letter of Recommendation from your tutor, a valuable enhancement for your university applications.

                    </p>
                <img
                    fill
                    sizes=""
                    src="/img/adust.jpg"
                    alt="adust image"
                    className="object-cover "
                />
                <p className="py-2 px-4 my-4 text-white w-fit rounded bg-zinc-800 ">Visit Campus</p>
                </div>
            </div>
        </main>
    );
}
