"use client";
import { Gilda_Display, Merriweather_Sans } from 'next/font/google';
import Link from 'next/link';

import { motion } from "framer-motion";

export default function Header127() {
  return (
    <section className="px-5 md:px-10 py-16 md:py-24 lg:py-28 bg-[#1D3038] text-white ">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/logo.png" alt="" className=" my-10 w-80 h-24" />
          <h1 className={` mb-5 text-2xl md:text-3xl lg:text-6xl font-bold`}>
            Your Home for Compassionate Senior Care
          </h1>
          <p className="mb-6 text-lg font-extralight">
            Experience a nurturing environment where seniors are cherished
            and supported. Our dedicated team is here to ensure every
            moment is filled with compassion and joy.
          </p>
          <div className="flex flex-wrap gap-4">
          <Link href="/nursing/about-us"> <button className="bg-[#80A1AE] text-white shadow-md shadow-[#ECF1F3] px-6 py-2 rounded-full">
              Learn More
            </button></Link>
            <Link href="/nursing/contact-us"> <button className="bg-[#80A1AE] text-white px-10 shadow-md shadow-[#ECF1F3] py-2 rounded-full">
              Sign Up
            </button></Link>
          </div>
        </motion.div>

        {/* Images */}
        <div className="flex-1 relative w-full">
          <motion.img
            src="/marin-patio.png"
            alt="Landscape 1"
            className="hidden lg:absolute bottom-10 left-0 w-2/5 rounded-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="/marin-outside.jpeg"
            alt="Main"
            className="lg:mx-[4%] w-full h-[700px] object-cover overflow-hidden rounded-md "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.img
            src="/5.jpg"
            alt="Portrait 2"
            className=" hidden lg:absolute top-80 right-0 w-2/5 lg:h-80 object-cover rounded-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
